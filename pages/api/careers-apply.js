export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  try {
    const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

    console.log("Career application payload:", payload);

    return res.status(200).json({
      success: true,
      message:
        "Application submitted successfully. This endpoint currently logs the payload and will need a real backend/email integration before going live.",
    });
  } catch (error) {
    console.error("Career application error:", error);
    return res.status(500).json({
      message: "Unable to process application. Please try again later.",
    });
  }
}
