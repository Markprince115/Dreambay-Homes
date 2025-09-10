// 1. Create API route: app/api/contact/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified domain
      to: ['markprince29.mp@gmail.com'], // Replace with your email
      subject: `New Contact Form Message from ${name}`,
      react: <EmailTemplate name={name} email={email} message={message} />,
    });

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}