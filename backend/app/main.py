from fastapi import (
    FastAPI,
    HTTPException,
    UploadFile,
    File,
    Form,
    Request,
)
from fastapi.middleware.cors import CORSMiddleware

from typing import Optional
from datetime import datetime, timedelta
from collections import defaultdict, deque

from pydantic import ValidationError

import re
import time
import os

from app.email_service import (
    send_career_application,
    send_contact_enquiry,
)

from app.schemas import ContactEnquiry


# ============================================================
# FASTAPI APPLICATION
# ============================================================

app = FastAPI(
    title="KESS Website API",
    description=(
        "Career Application and Contact Us API "
        "for Knight Eyes Security Services"
    ),
    version="1.0.0",
)


# ============================================================
# CORS
# ============================================================

FRONTEND_URL = os.getenv("FRONTEND_URL", "").strip().rstrip("/")

ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
]

# Add production frontend URL from Render Environment Variables
if FRONTEND_URL:
    ALLOWED_ORIGINS.append(FRONTEND_URL)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_origin_regex=r"https://.*\.vercel\.app$",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ============================================================
# GLOBAL API RATE LIMIT
#
# Maximum 5 API requests per second per IP.
#
# This applies to BOTH:
#
#   /api/contact
#   /api/careers/apply
# ============================================================

GLOBAL_REQUESTS_PER_SECOND = 5

ip_request_times = defaultdict(deque)


def get_client_ip(request: Request) -> str:
    """
    Get the IP address of the client.

    During local development this will normally be:
        127.0.0.1
    """

    if request.client:
        return request.client.host

    return "unknown"


@app.middleware("http")
async def api_rate_limit(
    request: Request,
    call_next,
):
    """
    Protect all /api/ endpoints from excessive requests.

    Maximum:
        5 requests / second / IP

    This protects both Contact and Careers APIs.
    """

    # --------------------------------------------------------
    # Only rate-limit API routes
    # --------------------------------------------------------

    if not request.url.path.startswith("/api/"):
        return await call_next(request)

    client_ip = get_client_ip(request)

    now = time.monotonic()

    requests = ip_request_times[client_ip]

    # --------------------------------------------------------
    # Remove requests older than one second
    # --------------------------------------------------------

    while (
        requests
        and now - requests[0] >= 1
    ):
        requests.popleft()

    # --------------------------------------------------------
    # Check limit
    # --------------------------------------------------------

    if len(requests) >= GLOBAL_REQUESTS_PER_SECOND:

        raise HTTPException(
            status_code=429,
            detail=(
                "Too many requests. "
                "Please wait a moment and try again."
            ),
        )

    # --------------------------------------------------------
    # Record request
    # --------------------------------------------------------

    requests.append(now)

    return await call_next(request)


# ============================================================
# CAREERS EMAIL RATE LIMIT
#
# Maximum 4 successful career applications
# from the same email within 24 hours.
# ============================================================

career_attempts = defaultdict(list)

MAX_CAREER_APPLICATIONS = 4

CAREER_RATE_LIMIT_WINDOW = timedelta(
    hours=24
)


def check_career_rate_limit(
    email: str,
):
    """
    Check whether the email has reached the
    4 applications / 24 hours limit.

    This does NOT record the application.

    Recording happens only after the email
    is successfully sent.
    """

    email = email.lower().strip()

    now = datetime.utcnow()

    # --------------------------------------------------------
    # Remove expired entries
    # --------------------------------------------------------

    career_attempts[email] = [
        timestamp
        for timestamp in career_attempts[email]
        if now - timestamp
        < CAREER_RATE_LIMIT_WINDOW
    ]

    # --------------------------------------------------------
    # Check limit
    # --------------------------------------------------------

    if (
        len(career_attempts[email])
        >= MAX_CAREER_APPLICATIONS
    ):

        raise HTTPException(
            status_code=429,
            detail=(
                "You have reached the maximum of "
                "4 applications within 24 hours. "
                "Please try again later."
            ),
        )


def record_career_submission(
    email: str,
):
    """
    Record a successful career submission.
    """

    email = email.lower().strip()

    career_attempts[email].append(
        datetime.utcnow()
    )


# ============================================================
# CONTACT EMAIL RATE LIMIT
#
# Maximum 4 successful contact enquiries
# from the same email within 24 hours.
# ============================================================

contact_attempts = defaultdict(list)

MAX_CONTACT_ENQUIRIES = 4

CONTACT_RATE_LIMIT_WINDOW = timedelta(
    hours=24
)


def check_contact_rate_limit(
    email: str,
):
    """
    Check whether the email has reached the
    4 enquiries / 24 hours limit.

    This does NOT record the enquiry.

    Recording happens only after the email
    is successfully sent.
    """

    email = email.lower().strip()

    now = datetime.utcnow()

    # --------------------------------------------------------
    # Remove expired entries
    # --------------------------------------------------------

    contact_attempts[email] = [
        timestamp
        for timestamp in contact_attempts[email]
        if now - timestamp
        < CONTACT_RATE_LIMIT_WINDOW
    ]

    # --------------------------------------------------------
    # Check limit
    # --------------------------------------------------------

    if (
        len(contact_attempts[email])
        >= MAX_CONTACT_ENQUIRIES
    ):

        raise HTTPException(
            status_code=429,
            detail=(
                "You have reached the maximum of "
                "4 enquiries within 24 hours "
                "for this email address. "
                "Please try again later."
            ),
        )


def record_contact_submission(
    email: str,
):
    """
    Record a successful contact enquiry.
    """

    email = email.lower().strip()

    contact_attempts[email].append(
        datetime.utcnow()
    )


# ============================================================
# ROOT
# ============================================================

@app.get("/")
def root():

    return {
        "message": "KESS Website API is running",
        "status": "online",
    }


# ============================================================
# HEALTH CHECK
# ============================================================

@app.get("/health")
def health_check():

    return {
        "status": "healthy",
    }


# ============================================================
# CONTACT US
# ============================================================

@app.post("/api/contact")
async def submit_contact_enquiry(

    name: str = Form(...),

    email: str = Form(...),

    phone: str = Form(...),

    service_required: str = Form(...),
):
    """
    Submit a Contact Us enquiry.

    Fields:

        name
        email
        phone
        service_required

    CAPTCHA is intentionally disabled for now.
    """

    # ========================================================
    # CLEAN INPUT
    # ========================================================

    name = name.strip()

    email = email.strip().lower()

    phone = phone.strip()

    service_required = (
        service_required.strip()
    )


    # ========================================================
    # BASIC VALIDATION
    # ========================================================

    if not name:

        raise HTTPException(
            status_code=400,
            detail="Name is required.",
        )


    if not email:

        raise HTTPException(
            status_code=400,
            detail="Email is required.",
        )


    if not phone:

        raise HTTPException(
            status_code=400,
            detail="Phone number is required.",
        )


    if not service_required:

        raise HTTPException(
            status_code=400,
            detail="Service required is required.",
        )


    # ========================================================
    # EMAIL FORMAT VALIDATION
    # ========================================================

    email_pattern = (
        r"^[^@\s]+@[^@\s]+\.[^@\s]+$"
    )

    if not re.match(
        email_pattern,
        email,
    ):

        raise HTTPException(
            status_code=400,
            detail=(
                "Please enter a valid "
                "email address."
            ),
        )


    # ========================================================
    # PYDANTIC VALIDATION
    # ========================================================

    try:

        enquiry = ContactEnquiry(
            name=name,
            email=email,
            phone=phone,
            service_required=service_required,
        )

    except ValidationError:

        raise HTTPException(
            status_code=400,
            detail=(
                "Please check the information "
                "you entered."
            ),
        )


    # ========================================================
    # CHECK EMAIL RATE LIMIT
    #
    # 4 successful enquiries / 24 hours
    # ========================================================

    check_contact_rate_limit(
        str(enquiry.email)
    )


    # ========================================================
    # PREPARE EMAIL DATA
    # ========================================================

    enquiry_data = {

        "name": enquiry.name,

        "email": str(enquiry.email),

        "phone": enquiry.phone,

        "service_required":
            enquiry.service_required,
    }


    # ========================================================
    # SEND EMAIL
    # ========================================================

    try:

        await send_contact_enquiry(
            enquiry_data=enquiry_data,
        )

    except Exception as e:

        print(
            "CONTACT EMAIL ERROR:",
            str(e),
        )

        raise HTTPException(
            status_code=500,
            detail=(
                "Unable to send your enquiry "
                "right now. Please try again later."
            ),
        )


    # ========================================================
    # RECORD ONLY SUCCESSFUL SUBMISSION
    # ========================================================

    record_contact_submission(
        str(enquiry.email)
    )


    # ========================================================
    # SUCCESS
    # ========================================================

    return {

        "success": True,

        "message": (
            "Your enquiry has been submitted "
            "successfully. Our team will contact "
            "you shortly."
        ),

    }


# ============================================================
# CAREERS
# ============================================================

@app.post("/api/careers/apply")
async def submit_career_application(

    name: str = Form(...),

    email: str = Form(...),

    phone: str = Form(...),

    position: str = Form(...),

    age: Optional[str] = Form(None),

    education: Optional[str] = Form(None),

    experience: Optional[str] = Form(None),

    city: Optional[str] = Form(None),

    address: Optional[str] = Form(None),

    message: Optional[str] = Form(None),

    recaptcha_token: Optional[str] = Form(None),

    resume: Optional[UploadFile] = File(None),
):
    """
    Submit a career application.

    CAPTCHA is intentionally disabled for now.
    """

    # ========================================================
    # CLEAN INPUT
    # ========================================================

    name = name.strip()

    email = email.strip().lower()

    phone = phone.strip()

    position = position.strip()


    # ========================================================
    # BASIC VALIDATION
    # ========================================================

    if not name:

        raise HTTPException(
            status_code=400,
            detail="Name is required.",
        )


    if not email:

        raise HTTPException(
            status_code=400,
            detail="Email is required.",
        )


    if not phone:

        raise HTTPException(
            status_code=400,
            detail="Phone number is required.",
        )


    if not position:

        raise HTTPException(
            status_code=400,
            detail="Position is required.",
        )


    # ========================================================
    # EMAIL VALIDATION
    # ========================================================

    email_pattern = (
        r"^[^@\s]+@[^@\s]+\.[^@\s]+$"
    )

    if not re.match(
        email_pattern,
        email,
    ):

        raise HTTPException(
            status_code=400,
            detail=(
                "Please enter a valid "
                "email address."
            ),
        )


    # ========================================================
    # CAREER EMAIL RATE LIMIT
    #
    # 4 successful applications / 24 hours
    # ========================================================

    check_career_rate_limit(
        email
    )


    # ========================================================
    # RESUME
    # ========================================================

    resume_content = None

    resume_filename = None


    if resume:

        resume_filename = (
            resume.filename
        )


        # ----------------------------------------------------
        # Maximum size: 5 MB
        # ----------------------------------------------------

        MAX_FILE_SIZE = (
            5 * 1024 * 1024
        )


        resume_content = (
            await resume.read()
        )


        if len(resume_content) > MAX_FILE_SIZE:

            raise HTTPException(
                status_code=400,
                detail=(
                    "Resume must be smaller "
                    "than 5 MB."
                ),
            )


        # ----------------------------------------------------
        # Allowed file types
        # ----------------------------------------------------

        allowed_extensions = {

            ".pdf",

            ".doc",

            ".docx",

        }


        if resume.filename:

            extension = (
                "."
                + resume.filename
                .split(".")[-1]
                .lower()
            )


            if extension not in allowed_extensions:

                raise HTTPException(
                    status_code=400,
                    detail=(
                        "Resume must be "
                        "PDF, DOC, or DOCX."
                    ),
                )


    # ========================================================
    # APPLICATION DATA
    # ========================================================

    application_data = {

        "name": name,

        "email": email,

        "phone": phone,

        "position": position,

        "age": age,

        "education": education,

        "experience": experience,

        "city": city,

        "address": address,

        "message": message,

    }


    # ========================================================
    # SEND EMAIL
    # ========================================================

    try:

        await send_career_application(

            application_data=application_data,

            resume_content=resume_content,

            resume_filename=resume_filename,

        )

    except Exception as e:

        print(
            "EMAIL ERROR:",
            str(e),
        )

        raise HTTPException(
            status_code=500,
            detail=(
                "Unable to send your application "
                "right now. Please try again later."
            ),
        )


    # ========================================================
    # RECORD ONLY SUCCESSFUL APPLICATION
    # ========================================================

    record_career_submission(
        email
    )


    # ========================================================
    # SUCCESS
    # ========================================================

    return {

        "success": True,

        "message": (
            "Your application has been submitted "
            "successfully. Our team will review it "
            "and contact you if your profile matches."
        ),

    }
