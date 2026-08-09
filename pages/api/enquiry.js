export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const { title, firstName, lastName, email, phone, message, notRobot } = req.body || {};

  if (!title || !firstName || !lastName || !email || !phone || !message || !notRobot) {
    return res.status(400).json({ success: false, message: "Please fill in all required fields." });
  }

  if (String(message).trim().length < 40) {
    return res.status(400).json({ success: false, message: "Message must be at least 40 characters long." });
  }

  const digits = String(phone).replace(/\D/g, "");

  if (digits.length !== 10) {
    return res.status(400).json({ success: false, message: "Please enter a valid 10-digit phone number." });
  }

  console.log("New enquiry received:", {
    title,
    firstName,
    lastName,
    email,
    phone: digits,
    message: String(message).trim(),
    receivedAt: new Date().toISOString(),
  });

  return res.status(200).json({
    success: true,
    message: "Your enquiry has been submitted successfully. We will get back to you shortly.",
  });
}
