import { NextResponse } from "next/server";
import { Resend } from "resend";

type InquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryPayload;
    const name = body.name?.trim() || "N/A";
    const email = body.email?.trim() || "N/A";
    const phone = body.phone?.trim() || "N/A";
    const organization = body.organization?.trim() || "N/A";
    const message = body.message?.trim() || "N/A";

    // Keep submission successful even if email delivery fails.
    console.log("Form saved successfully");

    try {
      const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "aeroedgetechnologies@gmail.com",
        subject: "New Website Inquiry",
        html: `
    <h2>New Website Inquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Organization:</strong> ${organization}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
      });
      console.log("Email sent successfully");
    } catch (err) {
      console.error("Email sending error:", err);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
