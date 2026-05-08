import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or school's SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: body.parentEmail,
      to: 'info@ihsanscholars.com',
      subject: `NEW ENROLLMENT: ${body.firstName} ${body.lastName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #006837;">New Student Application</h2>
          <p><strong>Student:</strong> ${body.firstName} ${body.lastName}</p>
          <p><strong>Parent:</strong> ${body.parentName}</p>
          <p><strong>Phone:</strong> ${body.parentPhone}</p>
          <p><strong>Address:</strong> ${body.address}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Sent' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}