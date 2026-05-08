import { SCHOOL_DATA } from "@/constants";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ihsan-light py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-ihsan-green mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate space-y-8">
          <section>
            <h3 className="font-bold text-ihsan-dark text-lg mb-2">1. Acceptance of Terms</h3>
            <p className="text-gray-600">By accessing this website and the Al-Ihsan Student Portal, you agree to comply with our institutional guidelines and local educational regulations.</p>
          </section>

          <section>
            <h3 className="font-bold text-ihsan-dark text-lg mb-2">2. Portal Usage</h3>
            <p className="text-gray-600">Login credentials for the student portal are for authorized use only. Users are responsible for maintaining the confidentiality of their passwords.</p>
          </section>

          <section>
            <h3 className="font-bold text-ihsan-dark text-lg mb-2">3. Admission Disclaimer</h3>
            <p className="text-gray-600">Submitting an enrollment form does not guarantee admission. All applications are subject to review and availability by the admissions board.</p>
          </section>

          <div className="pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 italic text-center">
              For questions regarding these terms, contact us at {SCHOOL_DATA.email}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}