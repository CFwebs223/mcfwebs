import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, business, email, phone, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Build email content
    const lines = [
      `Name: ${name}`,
      `Business: ${business || "—"}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Service: ${service || "—"}`,
      `Budget: ${budget || "—"}`,
      "",
      `Message:`,
      message,
    ];

    const transporter = getTransporter();
    const contactEmail = process.env.CONTACT_EMAIL || "feletchristopher@gmail.com";

    if (transporter) {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: contactEmail,
        subject: `New enquiry from ${name} — mcf.webs`,
        text: lines.join("\n"),
        replyTo: email,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry received. We'll be in touch within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}
