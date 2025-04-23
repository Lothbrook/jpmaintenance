import { writeFile, appendFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Save to file
    const filePath = path.join(process.cwd(), 'newsletter-subscribers.txt');
    await appendFile(filePath, `${email},${new Date().toISOString()}\n`, 'utf8');

    // Send immediate notification email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "o.benzouina@sofimedmaroc.com",  // Changed from hardcoded email to environment variable
      subject: 'New Newsletter Subscription',
      text: `New subscriber: ${email}\nDate: ${new Date().toLocaleString()}`
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}