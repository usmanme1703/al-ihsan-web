import { SCHOOL_DATA } from "@/constants";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Data Collection",
      content: "We collect information provided via our enrollment forms, including student names, birth dates, and parent contact details, solely for admission purposes."
    },
    {
      title: "How We Use Data",
      content: "Collected data is used to process applications, communicate with parents, and manage student records within our secure portal."
    },
    {
      title: "Third-Party Sharing",
      content: "Al-Ihsan Noble Scholars does not sell or lease student data to third parties. Data is only shared with educational regulatory bodies when required by law."
    }
  ];

  return (
    <main className="min-h-screen bg-ihsan-light py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-sm">
        <h1 className="text-3xl font-bold text-ihsan-green mb-4">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">Last Updated: May 2026</p>
        
        <div className="space-y-10">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-ihsan-dark mb-3">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}