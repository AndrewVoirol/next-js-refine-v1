import { Resend } from "resend";
import { NextResponse } from "next/server";
import { WelcomeEmail } from "@/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name = 'User' } = body;

    console.log('Sending email to:', email);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Welcome to Our Platform',
      react: WelcomeEmail({ name })
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Failed to send email', details: String(error) }, { status: 500 });
  }
}