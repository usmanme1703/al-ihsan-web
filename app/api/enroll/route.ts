import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type SchoolRow = { school?: string; from?: string; to?: string };

function row(label: string, value: unknown) {
  if (value === undefined || value === null || value === '') return '';
  return `<tr><td style="padding:6px 12px;font-weight:bold;color:#0b8445;white-space:nowrap;">${label}</td><td style="padding:6px 12px;">${value}</td></tr>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      surname, otherNames, dobDay, dobMonth, dobYear, sex, nationality,
      stateOfOrigin, religion, classOnAdmission,
      schoolsAttended,
      nokSurname, nokOtherNames, relationship, nokAddress, nokTel,
      livesWith, bloodGroup, genotype, specialHealthProblem, healthDetails,
      studentSignature, studentSignatureDate, parentSignature, parentSignatureDate,
    } = body;

    if (!surname || !otherNames) {
      return NextResponse.json({ error: 'Student name is required.' }, { status: 400 });
    }

    const dob = [dobDay, dobMonth, dobYear].filter(Boolean).join('/');

    const schoolsRows = Array.isArray(schoolsAttended) && schoolsAttended.length
      ? (schoolsAttended as SchoolRow[])
          .filter((r) => r.school)
          .map((r) => `<tr><td style="padding:4px 12px;">${r.school || ''}</td><td style="padding:4px 12px;">${r.from || ''}</td><td style="padding:4px 12px;">${r.to || ''}</td></tr>`)
          .join('')
      : '';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@ihsanscholars.com',
      subject: `NEW ADMISSION APPLICATION: ${surname} ${otherNames}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 640px;">
          <h2 style="color: #0b8445;">New Admission Application</h2>

          <h3 style="color: #0b8445; border-bottom: 1px solid #dcedd9; padding-bottom: 4px;">Student</h3>
          <table style="border-collapse: collapse; width: 100%;">
            ${row('Name', `${surname} ${otherNames}`)}
            ${row('Date of Birth', dob)}
            ${row('Sex', sex)}
            ${row('Nationality', nationality)}
            ${row('State of Origin', stateOfOrigin)}
            ${row('Religion', religion)}
            ${row('Class on Admission', classOnAdmission)}
          </table>

          ${schoolsRows ? `
          <h3 style="color: #0b8445; border-bottom: 1px solid #dcedd9; padding-bottom: 4px; margin-top: 16px;">Schools Attended</h3>
          <table style="border-collapse: collapse; width: 100%; border: 1px solid #dcedd9;">
            <tr style="background:#dcedd9;color:#0b8445;">
              <th style="padding:4px 12px;text-align:left;">School</th><th style="padding:4px 12px;text-align:left;">From</th><th style="padding:4px 12px;text-align:left;">To</th>
            </tr>
            ${schoolsRows}
          </table>` : ''}

          <h3 style="color: #0b8445; border-bottom: 1px solid #dcedd9; padding-bottom: 4px; margin-top: 16px;">Next of Kin</h3>
          <table style="border-collapse: collapse; width: 100%;">
            ${row('Name', `${nokSurname || ''} ${nokOtherNames || ''}`)}
            ${row('Relationship with Child', relationship)}
            ${row('Address', nokAddress)}
            ${row('Phone', nokTel)}
            ${row('Child Lives With', livesWith)}
          </table>

          <h3 style="color: #0b8445; border-bottom: 1px solid #dcedd9; padding-bottom: 4px; margin-top: 16px;">Medical</h3>
          <table style="border-collapse: collapse; width: 100%;">
            ${row('Blood Group', bloodGroup)}
            ${row('Genotype', genotype)}
            ${row('Special Health Problem', specialHealthProblem)}
            ${row('Details', healthDetails)}
          </table>

          <h3 style="color: #0b8445; border-bottom: 1px solid #dcedd9; padding-bottom: 4px; margin-top: 16px;">Pledge</h3>
          <table style="border-collapse: collapse; width: 100%;">
            ${row("Student's Signature", studentSignature)}
            ${row('Date', studentSignatureDate)}
            ${row("Parent/Guardian's Signature", parentSignature)}
            ${row('Date', parentSignatureDate)}
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Sent' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
