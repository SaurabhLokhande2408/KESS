import os
import smtplib

from email.message import EmailMessage

from dotenv import load_dotenv


# ============================================================
# LOAD ENVIRONMENT
# ============================================================

load_dotenv()


# ============================================================
# SMTP CONFIGURATION
# ============================================================

SMTP_HOST = os.getenv(
    "SMTP_HOST",
    "smtp.gmail.com",
)

SMTP_PORT = int(
    os.getenv(
        "SMTP_PORT",
        "465",
    )
)

SMTP_USERNAME = os.getenv(
    "SMTP_USERNAME"
)

SMTP_PASSWORD = os.getenv(
    "SMTP_PASSWORD"
)


# ============================================================
# RECEIVER EMAILS
# ============================================================

# Careers receiver
EMAIL_TO = os.getenv(
    "EMAIL_TO"
)


# Contact receiver
#
# CONTACT_RECEIVER_EMAIL is preferred.
#
# If it is not configured, EMAIL_TO will be used.
# ============================================================

CONTACT_RECEIVER_EMAIL = os.getenv(
    "CONTACT_RECEIVER_EMAIL",
    EMAIL_TO,
)


# ============================================================
# SMTP VALIDATION
# ============================================================

def validate_smtp_config():

    if not SMTP_USERNAME:

        raise ValueError(
            "SMTP_USERNAME is not configured."
        )

    if not SMTP_PASSWORD:

        raise ValueError(
            "SMTP_PASSWORD is not configured."
        )


# ============================================================
# SMTP CONNECTION
# ============================================================

def create_smtp_connection():

    """
    Creates a secure Gmail SMTP connection.

    Port 465:
        SMTP over SSL

    Port 587:
        SMTP + STARTTLS

    Using port 465 in production is recommended.
    """

    if SMTP_PORT == 465:

        server = smtplib.SMTP_SSL(
            SMTP_HOST,
            SMTP_PORT,
            timeout=30,
        )

    else:

        server = smtplib.SMTP(
            SMTP_HOST,
            SMTP_PORT,
            timeout=30,
        )

        server.ehlo()

        server.starttls()

        server.ehlo()

    server.login(
        SMTP_USERNAME,
        SMTP_PASSWORD,
    )

    return server


# ============================================================
# SEND CAREER APPLICATION
# ============================================================

async def send_career_application(

    application_data: dict,

    resume_content: bytes | None = None,

    resume_filename: str | None = None,

):

    """
    Sends a career application email.
    """

    validate_smtp_config()


    if not EMAIL_TO:

        raise ValueError(
            "EMAIL_TO is not configured."
        )


    # ========================================================
    # DATA
    # ========================================================

    name = application_data.get(
        "name",
        "",
    )

    email = application_data.get(
        "email",
        "",
    )

    phone = application_data.get(
        "phone",
        "",
    )

    position = application_data.get(
        "position",
        "",
    )

    age = application_data.get(
        "age",
        "",
    )

    education = application_data.get(
        "education",
        "",
    )

    experience = application_data.get(
        "experience",
        "",
    )

    city = application_data.get(
        "city",
        "",
    )

    address = application_data.get(
        "address",
        "",
    )

    message = application_data.get(
        "message",
        "",
    )


    # ========================================================
    # EMAIL
    # ========================================================

    msg = EmailMessage()


    msg["Subject"] = (
        f"New Career Application - {position}"
    )

    msg["From"] = SMTP_USERNAME

    msg["To"] = EMAIL_TO

    msg["Reply-To"] = email


    # ========================================================
    # EMAIL BODY
    # ========================================================

    email_body = f"""
NEW CAREER APPLICATION
======================

Applicant Details
-----------------

Name:
{name}

Email:
{email}

Phone:
{phone}

Position Applied For:
{position}

Age:
{age}

Education:
{education}

Experience:
{experience}

City:
{city}

Address:
{address}


Message
-------

{message}


-------------------------------
This application was submitted
through the KESS website.
"""


    msg.set_content(
        email_body
    )


    # ========================================================
    # RESUME
    # ========================================================

    if (
        resume_content
        and resume_filename
    ):

        extension = (
            resume_filename
            .lower()
            .split(".")[-1]
        )


        if extension == "pdf":

            maintype = "application"

            subtype = "pdf"


        elif extension == "doc":

            maintype = "application"

            subtype = "msword"


        elif extension == "docx":

            maintype = "application"

            subtype = (
                "vnd.openxmlformats-officedocument"
                ".wordprocessingml.document"
            )


        else:

            maintype = "application"

            subtype = "octet-stream"


        msg.add_attachment(

            resume_content,

            maintype=maintype,

            subtype=subtype,

            filename=resume_filename,

        )


    # ========================================================
    # SEND EMAIL
    # ========================================================

    server = None

    try:

        server = create_smtp_connection()

        server.send_message(
            msg
        )


        print(
            "Career application email "
            f"sent successfully for {name} ({email})"
        )


    except smtplib.SMTPAuthenticationError:

        print(
            "SMTP AUTHENTICATION ERROR"
        )

        raise ValueError(
            "Gmail authentication failed. "
            "Check the Gmail App Password."
        )


    except smtplib.SMTPException as e:

        print(
            f"SMTP ERROR: {e}"
        )

        raise ValueError(
            "Unable to send email through Gmail."
        )


    except OSError as e:

        print(
            f"SMTP NETWORK ERROR: {e}"
        )

        raise ValueError(
            "Unable to connect to the email server."
        )


    except Exception as e:

        print(
            f"EMAIL ERROR: {e}"
        )

        raise


    finally:

        if server:

            try:

                server.quit()

            except Exception:

                pass


# ============================================================
# SEND CONTACT ENQUIRY
# ============================================================

async def send_contact_enquiry(
    enquiry_data: dict,
):

    """
    Sends a Contact Us enquiry email.
    """

    validate_smtp_config()


    if not CONTACT_RECEIVER_EMAIL:

        raise ValueError(
            "CONTACT_RECEIVER_EMAIL is not configured."
        )


    # ========================================================
    # DATA
    # ========================================================

    name = enquiry_data.get(
        "name",
        "",
    )

    email = enquiry_data.get(
        "email",
        "",
    )

    phone = enquiry_data.get(
        "phone",
        "",
    )

    service_required = enquiry_data.get(
        "service_required",
        "",
    )


    # ========================================================
    # EMAIL
    # ========================================================

    msg = EmailMessage()


    msg["Subject"] = (
        f"New Contact Enquiry - {name}"
    )

    msg["From"] = SMTP_USERNAME

    msg["To"] = CONTACT_RECEIVER_EMAIL

    # Reply directly to the customer.
    msg["Reply-To"] = email


    # ========================================================
    # EMAIL BODY
    # ========================================================

    email_body = f"""
NEW CONTACT ENQUIRY
===================

Customer Details
----------------

Name:
{name}

Email:
{email}

Phone:
{phone}

Service Required:
{service_required}


-------------------------------
This enquiry was submitted
through the KESS website.
"""


    msg.set_content(
        email_body
    )


    # ========================================================
    # SEND EMAIL
    # ========================================================

    server = None

    try:

        server = create_smtp_connection()

        server.send_message(
            msg
        )


        print(
            "Contact enquiry email "
            f"sent successfully for {name} ({email})"
        )


    except smtplib.SMTPAuthenticationError:

        print(
            "SMTP AUTHENTICATION ERROR"
        )

        raise ValueError(
            "Gmail authentication failed. "
            "Check the Gmail App Password."
        )


    except smtplib.SMTPException as e:

        print(
            f"SMTP ERROR: {e}"
        )

        raise ValueError(
            "Unable to send contact email "
            "through Gmail."
        )


    except OSError as e:

        print(
            f"CONTACT EMAIL NETWORK ERROR: {e}"
        )

        raise ValueError(
            "Unable to connect to the email server."
        )


    except Exception as e:

        print(
            f"CONTACT EMAIL ERROR: {e}"
        )

        raise


    finally:

        if server:

            try:

                server.quit()

            except Exception:

                pass
