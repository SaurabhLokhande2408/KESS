const API_BASE_URL =
  process.env.NEXT_PUBLIC_KESS_API_URL ||
  "http://127.0.0.1:8000";

export async function submitContactEnquiry(formData) {
  const data = new FormData();

  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append(
    "service_required",
    formData.service_required
  );

  let response;

  try {
    response = await fetch(
      `${API_BASE_URL}/api/contact`,
      {
        method: "POST",
        body: data,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    throw new Error(
      "Unable to connect to the server. Please try again."
    );
  }

  let result;

  try {
    result = await response.json();
  } catch {
    result = {
      detail: "Something went wrong. Please try again.",
    };
  }

  if (!response.ok) {
    throw new Error(
      result.detail ||
        "Unable to submit your enquiry."
    );
  }

  return result;
}