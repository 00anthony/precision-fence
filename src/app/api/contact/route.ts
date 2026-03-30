import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

// --- Simple in-memory rate limiter ---
const rateLimitMap = new Map<string, number>();

// --- Basic HTML sanitizer ---
const sanitize = (str: string) =>
  str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

// --- Email validator ---
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    // -------------------------
    // 🔒 Rate Limiting (fixed IP parsing)
    // -------------------------
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();
    const lastSubmission = rateLimitMap.get(ip);

    if (lastSubmission && now - lastSubmission < 60_000) {
      return Response.json(
        { error: "Too many requests. Please wait a minute." },
        { status: 429 }
      );
    }

    rateLimitMap.set(ip, now);

    // -------------------------
    // ✅ Validation
    // -------------------------
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // -------------------------
    // 🧼 Sanitize inputs
    // -------------------------
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safePhone = phone ? sanitize(phone) : "Not provided";
    const safeService = service ? sanitize(service) : "Not selected";
    const safeMessage = sanitize(message);

    // -------------------------
    // 📩 Send Email to YOU
    // -------------------------
    const { error: notifyError } = await resend.emails.send({
      from: "Fence Quotes <newclient@precisionstainseal.com>",
      to: "brittanybrammer@outlook.com",
      subject: `New Quote Request — ${safeService} | ${safeName}`,
      replyTo: `${safeName} <${safeEmail}>`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Service:</strong> ${safeService}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (notifyError) {
      console.error("Notify error:", notifyError);
      return Response.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    // -------------------------
    // 💌 Auto-reply to customer
    // -------------------------
    const { error: autoReplyError } = await resend.emails.send({
      from: "Precision Stain & Seal <noreply@precisionstainseal.com>",
      to: safeEmail,
      subject: "We got your quote request!",
      html: `
        <h2>Hey ${safeName.split(" ")[0]},</h2>
        <p>Thanks for reaching out! We've received your request and will get back to you within 24 hours.</p>
        <p>If it's urgent, feel free to call or text us.</p>
        <br/>
        <p><strong>— Precision Stain & Seal</strong></p>
      `,
    });

    if (autoReplyError) {
      console.error("Auto-reply error:", autoReplyError);
      // Do NOT fail the request if auto-reply fails
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}