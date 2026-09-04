'use client';

import { useState } from 'react';
import { SCHOOL_DATA } from '@/constants';

type SchoolRow = { school: string; from: string; to: string };

type FormState = {
  surname: string;
  otherNames: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  sex: string;
  nationality: string;
  stateOfOrigin: string;
  religion: string;
  classOnAdmission: string;
  nokSurname: string;
  nokOtherNames: string;
  relationship: string;
  nokAddress: string;
  nokTel: string;
  livesWith: string;
  bloodGroup: string;
  genotype: string;
  specialHealthProblem: string;
  healthDetails: string;
  studentSignature: string;
  studentSignatureDate: string;
  parentSignature: string;
  parentSignatureDate: string;
};

const INITIAL_FORM: FormState = {
  surname: '', otherNames: '',
  dobDay: '', dobMonth: '', dobYear: '',
  sex: '', nationality: 'Nigerian',
  stateOfOrigin: '', religion: '',
  classOnAdmission: '',
  nokSurname: '', nokOtherNames: '',
  relationship: '', nokAddress: '', nokTel: '',
  livesWith: '',
  bloodGroup: '', genotype: '',
  specialHealthProblem: '', healthDetails: '',
  studentSignature: '', studentSignatureDate: '',
  parentSignature: '', parentSignatureDate: '',
};

const EMPTY_SCHOOL_ROW: SchoolRow = { school: '', from: '', to: '' };

export default function ApplyPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [schools, setSchools] = useState<SchoolRow[]>([
    { ...EMPTY_SCHOOL_ROW }, { ...EMPTY_SCHOOL_ROW }, { ...EMPTY_SCHOOL_ROW }, { ...EMPTY_SCHOOL_ROW },
  ]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function updateSchool(idx: number, field: keyof SchoolRow, value: string) {
    setSchools((rows) => rows.map((r, i) => (i === idx ? { ...r, [field]: value } : r)));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const payload = {
      ...form,
      schoolsAttended: schools.filter((r) => r.school.trim()),
    };

    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
      } else {
        const result = await res.json().catch(() => ({}));
        setErrorMessage(result.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Could not reach the server. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <div className="w-20 h-20 bg-ihsan-green text-white rounded-full flex items-center justify-center text-4xl mb-6">✓</div>
        <h1 className="text-3xl font-bold text-ihsan-green mb-4">Application Received!</h1>
        <p className="text-gray-600 max-w-md">
          We have received your application. Our admissions team will contact you at {SCHOOL_DATA.phones[0]} shortly.
          Please also print a copy and bring it along with the required documents on your visit.
        </p>
        <button
          onClick={() => { setForm(INITIAL_FORM); setStatus('idle'); }}
          className="mt-8 text-ihsan-gold font-bold"
        >
          Submit another form
        </button>
      </div>
    );
  }

  return (
    <div className="admission-form-page">
      <style>{`
        .admission-form-page {
          --primary-green: #0b8445;
          --light-green: #dcedd9;
          --border-green: #0b8445;
          background-color: #f4f4f4;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 0 60px;
          color: #111;
        }
        .admission-form-page * {
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }
        .admission-form-page .toolbar {
          width: 210mm;
          max-width: 100%;
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-bottom: 12px;
          padding: 0 4px;
        }
        .admission-form-page .toolbar button {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: bold;
          font-size: 13px;
          padding: 10px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }
        .admission-form-page .btn-print {
          background: #fff;
          color: var(--primary-green);
          border: 1.5px solid var(--primary-green) !important;
        }
        .admission-form-page .btn-submit {
          background: var(--primary-green);
          color: #fff;
        }
        .admission-form-page .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .admission-form-page .form-container {
          background: #fff;
          width: 210mm;
          max-width: 100%;
          min-height: 297mm;
          padding: 18mm 16mm;
          box-shadow: 0 0 10px rgba(0,0,0,0.15);
          font-size: 11px;
        }
        .admission-form-page .header {
          text-align: center;
          margin-bottom: 12px;
        }
        .admission-form-page .header img {
          max-width: 140px;
          height: auto;
          display: block;
          margin: 0 auto 6px;
        }
        .admission-form-page .header .contact-info {
          font-size: 9.5px;
          color: var(--primary-green);
          line-height: 1.35;
          font-weight: 600;
        }
        .admission-form-page .form-title {
          background-color: var(--primary-green);
          color: #fff;
          text-align: center;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 0.8px;
          padding: 4px 0;
          margin-bottom: 8px;
        }
        .admission-form-page .instruction-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          gap: 15px;
        }
        .admission-form-page .instruction-text {
          flex: 1;
          font-size: 10px;
          line-height: 1.4;
          font-weight: bold;
          color: var(--primary-green);
        }
        .admission-form-page .passport-box {
          width: 100px;
          height: 115px;
          border: 1.5px solid var(--border-green);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 9px;
          font-weight: bold;
          color: var(--primary-green);
          line-height: 1.3;
          padding: 4px;
          flex-shrink: 0;
        }
        .admission-form-page .section-bar {
          background-color: var(--light-green);
          color: var(--primary-green);
          font-weight: bold;
          font-size: 10.5px;
          padding: 3px 8px;
          margin: 10px 0 8px 0;
        }
        .admission-form-page .field-row {
          display: flex;
          align-items: flex-end;
          margin-bottom: 8px;
          width: 100%;
          gap: 8px;
        }
        .admission-form-page .field-label {
          color: var(--primary-green);
          font-weight: bold;
          white-space: nowrap;
        }
        .admission-form-page .field-line {
          border-bottom: 1px solid var(--border-green);
          flex: 1;
          position: relative;
          min-height: 15px;
        }
        .admission-form-page .field-line input,
        .admission-form-page .field-line select {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          font: inherit;
          color: inherit;
          padding: 0 2px 2px;
        }
        .admission-form-page .sub-label {
          position: absolute;
          width: 100%;
          text-align: center;
          top: 17px;
          font-size: 8px;
          color: #444;
          font-weight: normal;
          pointer-events: none;
        }
        .admission-form-page table {
          width: 100%;
          border-collapse: collapse;
          margin: 6px 0;
        }
        .admission-form-page table, .admission-form-page th, .admission-form-page td {
          border: 1px solid var(--border-green);
        }
        .admission-form-page th {
          color: var(--primary-green);
          font-size: 9.5px;
          font-weight: bold;
          padding: 4px 6px;
          text-align: center;
        }
        .admission-form-page td {
          height: 24px;
          padding: 2px 4px;
        }
        .admission-form-page td input, .admission-form-page td select {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          height: 100%;
          font: inherit;
          color: inherit;
        }
        .admission-form-page .schools-table th:first-child {
          width: 70%;
          text-align: center;
        }
        .admission-form-page .add-row-btn {
          background: none;
          border: 1px dashed var(--border-green);
          color: var(--primary-green);
          font-size: 9.5px;
          font-weight: bold;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          margin-bottom: 6px;
        }
        .admission-form-page .dual-box-container {
          display: flex;
          gap: 12px;
          margin-top: 6px;
        }
        .admission-form-page .box-bordered {
          border: 1px solid var(--border-green);
          padding: 8px;
          flex: 1;
        }
        .admission-form-page .box-title {
          color: var(--primary-green);
          font-weight: bold;
          font-size: 9.5px;
          margin-bottom: 8px;
        }
        @media print {
          nav, footer, .admission-form-page .toolbar {
            display: none !important;
          }
          .admission-form-page {
            background: transparent;
            padding: 0;
          }
          .admission-form-page .form-container {
            box-shadow: none;
            width: 100%;
            min-height: auto;
            padding: 0;
          }
          .admission-form-page .field-line input,
          .admission-form-page td input {
            color: #111;
          }
        }
      `}</style>

      <div className="toolbar no-print">
        <button type="button" className="btn-print" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="header">
          <img src="/logo.jpg" alt="Al-Ihsan Nobel Scholars Logo" />
          <div className="contact-info">
            Address: {SCHOOL_DATA.address}.<br />
            Tel: {SCHOOL_DATA.phones.join(', ')}<br />
            Email: {SCHOOL_DATA.email} | Website: {SCHOOL_DATA.website}
          </div>
        </div>

        <div className="form-title">APPLICATION FORM</div>

        <div className="instruction-row">
          <div style={{ flex: 1 }}>
            <div className="instruction-text">
              INSTRUCTION:<br />
              Attach 2 recent passport-size photographs.<br />
              Complete form in block letters.
            </div>

            <div className="section-bar" style={{ marginTop: 10 }}>INFORMATION ON STUDENT</div>

            <div className="field-row" style={{ marginBottom: 18 }}>
              <span className="field-label">Name</span>
              <div className="field-line" style={{ flex: 1.2 }}>
                <input required value={form.surname} onChange={(e) => update('surname', e.target.value)} />
                <span className="sub-label">Surname</span>
              </div>
              <div className="field-line" style={{ flex: 2 }}>
                <input required value={form.otherNames} onChange={(e) => update('otherNames', e.target.value)} />
                <span className="sub-label">Other Names</span>
              </div>
            </div>

            <div className="field-row" style={{ marginBottom: 18 }}>
              <span className="field-label">Date of Birth</span>
              <div className="field-line" style={{ flex: 1 }}>
                <input required inputMode="numeric" placeholder="DD" maxLength={2} value={form.dobDay} onChange={(e) => update('dobDay', e.target.value)} />
                <span className="sub-label">Day</span>
              </div>
              <div className="field-line" style={{ flex: 1 }}>
                <input required inputMode="numeric" placeholder="MM" maxLength={2} value={form.dobMonth} onChange={(e) => update('dobMonth', e.target.value)} />
                <span className="sub-label">Month</span>
              </div>
              <div className="field-line" style={{ flex: 1 }}>
                <input required inputMode="numeric" placeholder="YYYY" maxLength={4} value={form.dobYear} onChange={(e) => update('dobYear', e.target.value)} />
                <span className="sub-label">Year</span>
              </div>
            </div>

            <div className="field-row">
              <span className="field-label">Sex</span>
              <div className="field-line" style={{ flex: 1.5 }}>
                <select required value={form.sex} onChange={(e) => update('sex', e.target.value)}>
                  <option value="" disabled></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <span className="field-label">Nationality</span>
              <div className="field-line" style={{ flex: 2 }}>
                <input value={form.nationality} onChange={(e) => update('nationality', e.target.value)} />
              </div>
            </div>
          </div>

          <div className="passport-box">
            AFFIX<br />PASSPORT<br />PHOTOGRAPH
          </div>
        </div>

        <div className="field-row">
          <span className="field-label">State of Origin</span>
          <div className="field-line" style={{ flex: 1.2 }}>
            <input value={form.stateOfOrigin} onChange={(e) => update('stateOfOrigin', e.target.value)} />
          </div>
          <span className="field-label">Religion</span>
          <div className="field-line" style={{ flex: 1.8 }}>
            <input value={form.religion} onChange={(e) => update('religion', e.target.value)} />
          </div>
        </div>

        <div className="field-row">
          <span className="field-label">Class on Admission</span>
          <div className="field-line">
            <input required value={form.classOnAdmission} onChange={(e) => update('classOnAdmission', e.target.value)} />
          </div>
        </div>

        <table className="schools-table">
          <thead>
            <tr>
              <th>SCHOOLS ATTENDED</th>
              <th>FROM</th>
              <th>TO</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((row, i) => (
              <tr key={i}>
                <td><input value={row.school} onChange={(e) => updateSchool(i, 'school', e.target.value)} /></td>
                <td><input value={row.from} onChange={(e) => updateSchool(i, 'from', e.target.value)} /></td>
                <td><input value={row.to} onChange={(e) => updateSchool(i, 'to', e.target.value)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          className="add-row-btn no-print"
          onClick={() => setSchools((rows) => [...rows, { ...EMPTY_SCHOOL_ROW }])}
        >
          + Add another school
        </button>

        <div className="section-bar">NEXT OF KIN</div>

        <div className="field-row" style={{ marginBottom: 18 }}>
          <span className="field-label">Name</span>
          <div className="field-line" style={{ flex: 1.2 }}>
            <input required value={form.nokSurname} onChange={(e) => update('nokSurname', e.target.value)} />
            <span className="sub-label">Surname</span>
          </div>
          <div className="field-line" style={{ flex: 2 }}>
            <input required value={form.nokOtherNames} onChange={(e) => update('nokOtherNames', e.target.value)} />
            <span className="sub-label">Other Names</span>
          </div>
        </div>

        <div className="field-row">
          <span className="field-label">Relationship with child</span>
          <div className="field-line">
            <input required value={form.relationship} onChange={(e) => update('relationship', e.target.value)} />
          </div>
        </div>

        <div className="field-row">
          <span className="field-label">Address</span>
          <div className="field-line">
            <input value={form.nokAddress} onChange={(e) => update('nokAddress', e.target.value)} />
          </div>
        </div>

        <div className="field-row">
          <div className="field-line" style={{ flex: 1.8 }} />
          <span className="field-label">Tel</span>
          <div className="field-line" style={{ flex: 1.2 }}>
            <input required type="tel" value={form.nokTel} onChange={(e) => update('nokTel', e.target.value)} />
          </div>
        </div>

        <div className="section-bar">WHOM DOES THE CHILD LIVE WITH?</div>
        <div className="field-row">
          <span className="field-label" style={{ fontWeight: 'normal' }}>(Father, Mother, Guardian, Father and Mother)</span>
          <div className="field-line">
            <select value={form.livesWith} onChange={(e) => update('livesWith', e.target.value)}>
              <option value="" disabled></option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Guardian">Guardian</option>
              <option value="Father and Mother">Father and Mother</option>
            </select>
          </div>
        </div>

        <div className="section-bar">PLEDGE</div>
        <div style={{ fontSize: 10, marginBottom: 14, color: 'var(--primary-green)' }}>
          I pledge to abide by all rules and regulations of Al-Ihsan
        </div>

        <div className="field-row" style={{ marginBottom: 16 }}>
          <div className="field-line" style={{ marginRight: 30 }}>
            <input value={form.studentSignature} onChange={(e) => update('studentSignature', e.target.value)} />
            <span className="sub-label">Student&apos;s Signature</span>
          </div>
          <div className="field-line">
            <input type="date" value={form.studentSignatureDate} onChange={(e) => update('studentSignatureDate', e.target.value)} />
            <span className="sub-label">Date</span>
          </div>
        </div>

        <div className="field-row" style={{ marginBottom: 16 }}>
          <div className="field-line" style={{ marginRight: 30 }}>
            <input required value={form.parentSignature} onChange={(e) => update('parentSignature', e.target.value)} />
            <span className="sub-label">Parent/Guardian&apos;s Signature</span>
          </div>
          <div className="field-line">
            <input required type="date" value={form.parentSignatureDate} onChange={(e) => update('parentSignatureDate', e.target.value)} />
            <span className="sub-label">Date</span>
          </div>
        </div>

        <div className="section-bar">HEAD OF SCHOOL&apos;S RECOMMENDATION</div>
        <div className="field-row" style={{ marginBottom: 16 }}>
          <span className="field-label" style={{ fontWeight: 'normal' }}>After assessing the applicant, I find him/her fit for admission to class</span>
          <div className="field-line" />
        </div>

        <div className="field-row" style={{ marginBottom: 16 }}>
          <div className="field-line" style={{ marginRight: 30 }}>
            <span className="sub-label" style={{ top: 4 }}>Head of School&apos;s Signature/Official Stamp</span>
          </div>
          <div className="field-line">
            <span className="sub-label" style={{ top: 4 }}>Date</span>
          </div>
        </div>

        <div className="section-bar">MEDICAL REPORT</div>
        <div className="field-row">
          <span className="field-label">Blood Group</span>
          <div className="field-line" style={{ flex: 1.2 }}>
            <input value={form.bloodGroup} onChange={(e) => update('bloodGroup', e.target.value)} />
          </div>
          <span className="field-label">Genotype</span>
          <div className="field-line" style={{ flex: 1.8 }}>
            <input value={form.genotype} onChange={(e) => update('genotype', e.target.value)} />
          </div>
        </div>

        <div className="field-row">
          <span className="field-label" style={{ fontWeight: 'normal' }}>Do you have any special health problem? (Yes/No)</span>
          <div className="field-line">
            <select value={form.specialHealthProblem} onChange={(e) => update('specialHealthProblem', e.target.value)}>
              <option value="" disabled></option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
        </div>

        {form.specialHealthProblem === 'Yes' && (
          <>
            <div className="field-row">
              <span className="field-label" style={{ fontWeight: 'normal' }}>If Yes, give details</span>
              <div className="field-line">
                <input value={form.healthDetails} onChange={(e) => update('healthDetails', e.target.value)} />
              </div>
            </div>
            <div className="field-row">
              <div className="field-line" />
            </div>
          </>
        )}

        <div className="section-bar">OFFICIAL USE ONLY</div>
        <div className="field-row">
          <span className="field-label">Date application was received</span>
          <div className="field-line" />
        </div>

        <div className="dual-box-container">
          <div className="box-bordered">
            <div className="box-title">ITEMS INCLUDED: YES or NO</div>
            <div className="field-row">
              <span className="field-label" style={{ fontWeight: 'normal' }}>Birth Certificate</span>
              <div className="field-line" />
            </div>
            <div className="field-row">
              <span className="field-label" style={{ fontWeight: 'normal' }}>Passport Photograph</span>
              <div className="field-line" />
            </div>
            <div className="field-row">
              <span className="field-label" style={{ fontWeight: 'normal' }}>Copy of last report</span>
              <div className="field-line" />
            </div>
          </div>

          <div className="box-bordered">
            <div className="box-title">RECEIVING OFFICER</div>
            <div className="field-row">
              <span className="field-label" style={{ fontWeight: 'normal' }}>Name</span>
              <div className="field-line" />
            </div>
            <div className="field-row">
              <span className="field-label" style={{ fontWeight: 'normal' }}>Signature</span>
              <div className="field-line" />
            </div>
            <div className="field-row">
              <span className="field-label" style={{ fontWeight: 'normal' }}>Date</span>
              <div className="field-line" />
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th rowSpan={2} style={{ width: '22%' }}>FEES PAID</th>
              <th rowSpan={2} style={{ width: '26%' }}>RECEIPT NO</th>
              <th rowSpan={2} style={{ width: '16%' }}>DATE</th>
              <th colSpan={2}>RECEIVING OFFICER</th>
            </tr>
            <tr>
              <th style={{ width: '18%' }}>Name</th>
              <th style={{ width: '18%' }}>Signature</th>
            </tr>
          </thead>
          <tbody>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>

        <div className="no-print" style={{ marginTop: 20 }}>
          <button type="submit" className="btn-submit" disabled={status === 'loading'} style={{ width: '100%', padding: '14px 0', fontSize: 14 }}>
            {status === 'loading' ? 'Submitting...' : 'Submit Application'}
          </button>
          {status === 'error' && (
            <p style={{ color: '#c0392b', textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>{errorMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
}
