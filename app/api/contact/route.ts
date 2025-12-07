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

    // Using Resend API
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
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
              .content { background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #495057; margin-bottom: 5px; display: block; }
              .value { background-color: #f8f9fa; padding: 10px; border-radius: 4px; border-left: 4px solid #007bff; }
              .message-content { white-space: pre-wrap; word-wrap: break-word; }
              .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #e9ecef; font-size: 12px; color: #6c757d; }
            </style>
          </head>
          <body>
            <div class="header">
              <h2 style="margin: 0; color: #007bff;">📧 New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 Name:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">✉️ Email:</span>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <span class="label">💬 Message:</span>
                <div class="value message-content">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from your website contact form on ${new Date().toLocaleString()}.</p>
            </div>
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
