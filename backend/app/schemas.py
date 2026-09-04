from pydantic import (
    BaseModel,
    EmailStr,
    Field,
)

from typing import Optional


# ============================================================
# CAREER APPLICATION
# ============================================================

class CareerApplication(BaseModel):

    name: str = Field(
        ...,
        min_length=2,
        max_length=100,
    )

    email: EmailStr

    phone: str = Field(
        ...,
        min_length=7,
        max_length=20,
    )

    position: str = Field(
        ...,
        min_length=2,
        max_length=100,
    )

    age: int = Field(
        ...,
        ge=18,
        le=70,
    )

    ex_serviceman: str = Field(
        ...,
        max_length=20,
    )

    education: str = Field(
        ...,
        min_length=2,
        max_length=200,
    )

    experience: str = Field(
        ...,
        min_length=1,
        max_length=100,
    )

    city: str = Field(
        ...,
        min_length=2,
        max_length=100,
    )

    address: str = Field(
        ...,
        min_length=5,
        max_length=500,
    )

    message: str = Field(
        ...,
        min_length=5,
        max_length=2000,
    )


# ============================================================
# CONTACT ENQUIRY
# ============================================================

class ContactEnquiry(BaseModel):

    name: str = Field(
        ...,
        min_length=2,
        max_length=100,
    )

    email: EmailStr

    phone: str = Field(
        ...,
        min_length=7,
        max_length=20,
    )

    service_required: str = Field(
        ...,
        min_length=2,
        max_length=200,
    )