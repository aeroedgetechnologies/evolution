import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Hardcoded Gmail SMTP for testing
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'govindayadav2478@gmail.com',
        pass: 'viar oqll myby jrgx', // <-- REPLACE with your real app password
      },
    });

    await transporter.sendMail({
      from: `Energy World Contact Form <${process.env.SMTP_USER}>`,
      to: 'energyworld.uae@gmail.com',
      // to: 'govindayadav2478@gmail.com',
      subject: `New Contact Form Submission - Energy World`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const err = error as any;
    console.error('Contact form email error:', err && (err.message || err));
    if (err && err.stack) console.error(err.stack);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
} 