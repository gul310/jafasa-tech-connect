import { useState } from 'react';
import { GraduationCap, ShieldCheck, CheckCircle2, MessageSquare, Sparkles, BookOpen, Layers, Award } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SERVICES_DATA } from '../data/servicesData';
import { getWhatsAppUrl } from '../data/companyData';

export default function FYPProjectsPage() {
  const data = SERVICES_DATA.fypSolutions;

  const [formData, setFormData] = useState({
    name: "",
    university: "",
    domain: "AI & Machine Learning",
    idea: "",
    phone: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = getWhatsAppUrl('fyp', formData);
    window.open(url, '_blank');
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Final Year Project (FYP) Guidance & Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Jafasa Tech Solutions"
    },
    "serviceType": "Academic Guidance, Architecture Coaching, Capstone Project Mentorship"
  };

  return (
    <div className="pt-28 pb-20">
      <SEOHead 
        title="FYP & Project Solutions — From Ideas to Working Solutions"
        description="Comprehensive Final Year Project (FYP) technical guidance, architecture coaching, UI/UX prototyping, and viva preparation for CS and SE students."
        schema={schema}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#102A43] via-[#071B35] to-[#102A43] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7900]/20 border border-[#FF7900]/30 text-[#FF7900] text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Undergraduate & Master's Capstone Mentorship</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            {data.headline}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            {data.shortDesc}
          </p>
        </div>
      </section>

      {/* Academic Integrity & Distinction Notice */}
      <section className="py-6 bg-sky-50 border-y border-sky-200">
        <div className="max-w-5xl mx-auto px-4 text-center text-xs sm:text-sm text-sky-950 flex flex-col sm:flex-row items-center justify-center gap-3">
          <ShieldCheck className="w-5 h-5 text-sky-700 shrink-0" />
          <span>
            <strong>Academic Integrity Commitment:</strong> {data.notice}
          </span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900] bg-[#FF7900]/10 px-3 py-1 rounded-full">
              Structured Capstone Roadmap
            </span>
            <h2 className="text-3xl font-black text-[#102A43] mt-3">
              Six Pillars of FYP Success
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From proposal defense and IEEE SRS formatting to backend deployment and final viva defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((svc, i) => (
              <div 
                key={i}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#102A43] transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#102A43] text-white flex items-center justify-center font-bold text-sm mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#102A43] mb-2">{svc.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{svc.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Coaching & Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FYP Mentorship Request Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#102A43] rounded-3xl p-8 sm:p-10 text-white shadow-xl">
            <div className="text-center max-w-md mx-auto mb-8">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FF7900] text-white">
                Free Initial Project Review
              </span>
              <h3 className="text-2xl font-black mt-2">
                Discuss Your FYP Topic with Engineers
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Share your degree, university, and initial concept. We will review its technical scope and viva viability.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF7900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0323 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF7900]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                    University / College & Degree *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. UET Peshawar / BSCS"
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF7900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                    Preferred Tech Domain *
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#071B35] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FF7900]"
                  >
                    <option value="AI & Machine Learning">AI & Machine Learning (Computer Vision / NLP)</option>
                    <option value="Full-Stack Web Application">Full-Stack Web Application (React & Laravel/Node)</option>
                    <option value="Mobile Application">Mobile Application (Flutter / React Native)</option>
                    <option value="IoT & Hardware Integration">IoT & Embedded Systems</option>
                    <option value="Cybersecurity System">Cybersecurity & Network Security</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                  Brief Project Idea or Current Progress
                </label>
                <textarea
                  rows={2}
                  placeholder="Outline your problem statement or where you are currently stuck..."
                  value={formData.idea}
                  onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF7900] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#FF7900] hover:bg-[#E56D00] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Project Details on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
