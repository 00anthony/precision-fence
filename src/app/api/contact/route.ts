import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

// --- Simple in-memory rate limiter ---
const rateLimitMap = new Map<string, number>();

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    // -------------------------
    // 🔒 Basic Rate Limiting
    // -------------------------
    const ip =
      req.headers.get("x-forwarded-for") ||
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

    // -------------------------
    // 📩 Send Email to YOU
    // -------------------------
    const { error: notifyError } = await resend.emails.send({
      from: "Fence Quotes <onboarding@resend.dev>", // safe test sender
      to: "anthonytij3@gmail.com", // your email
      subject: `New Quote Request — ${service || "General"} | ${name}`,
      replyTo: `${name} <${email}>`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not selected"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
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
    await resend.emails.send({
      from: "Precision Stain & Seal <onboarding@resend.dev>",
      to: email,
      subject: "We got your quote request",
      html: `
        <h2>Hey ${name.split(" ")[0]},</h2>
        <p>Thanks for reaching out! We've received your request and will get back to you within 24 hours.</p>
        <p>If it's urgent, feel free to call or text us.</p>
        <br/>
        <p><strong>— Precision Stain & Seal</strong></p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}