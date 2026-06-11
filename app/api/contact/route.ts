import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: process.env.CONTACT_EMAIL || "your-email@example.com",
        subject: `New Contact Form Message from ${name}`,
        html: `
          <!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#0B2D72;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0B2D72;">
    <tr>
      <td align="center" style="background-color:#0B2D72;padding:20px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;font-family:Arial,sans-serif;line-height:1.6;color:#ffffff;background-color:#0B2D72;">

          <tr>
            <td style="padding:24px 20px 16px;border-bottom:1px solid rgba(255,255,255,0.15);margin-bottom:24px;">
              <h2 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:0.01em;">New Message from Portfolio</h2>
            </td>
          </tr>

          <tr>
            <td style="padding-top:24px;">

              <div style="margin-bottom:20px;">
                <span style="font-weight:600;color:rgba(255,255,255,0.5);font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px;display:block;">Name</span>
                <div style="color:#ffffff;padding:12px 16px;border:1px solid rgba(255,255,255,0.15);border-radius:8px;background-color:rgba(255,255,255,0.06);">${name}</div>
              </div>

              <div style="margin-bottom:20px;">
                <span style="font-weight:600;color:rgba(255,255,255,0.5);font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px;display:block;">Email</span>
                <div style="color:#ffffff;padding:12px 16px;border:1px solid rgba(255,255,255,0.15);border-radius:8px;background-color:rgba(255,255,255,0.06);">${email}</div>
              </div>

              <div style="margin-bottom:20px;">
                <span style="font-weight:600;color:rgba(255,255,255,0.5);font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px;display:block;">Message</span>
                <div style="color:#ffffff;padding:12px 16px;border:1px solid rgba(255,255,255,0.15);border-radius:8px;background-color:rgba(255,255,255,0.06);white-space:pre-wrap;word-wrap:break-word;line-height:1.7;">${message}</div>
              </div>

              <div style="margin-top:28px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.12);font-size:12px;color:rgba(255,255,255,0.35);">
                <p style="margin:0;">Submitted via contact form · ${new Date().toLocaleString()}</p>
              </div>

            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
