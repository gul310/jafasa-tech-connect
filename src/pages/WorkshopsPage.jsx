import { useState } from 'react';
import { 
  Building2, MapPin, Sparkles, CheckCircle2, 
  Calendar, Users, BookOpen, Clock, ShieldCheck, 
  HelpCircle, ArrowRight 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import InstitutionalBookingForm from '../components/InstitutionalBookingForm';
import { WORKSHOPS_DATA } from '../data/workshopsData';

export default function WorkshopsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": "Free Institutional Technology Workshops across KPK",
    "description": "Free customized technology sessions for schools, colleges, universities, and student societies across Khyber Pakhtunkhwa (KPK), Pakistan.",
    "provider": {
      "@type": "Organization",
      "name": "Jafasa Tech Solutions"
    }
  };

  return (
    <div className="pt-28 pb-20">
      <SEOHead 
        title="Free Institutional Workshops — Your Campus. Your Choice. Our Expertise."
        description="Jafasa Tech Solutions offers FREE customized technology sessions across schools, colleges, and universities in Khyber Pakhtunkhwa (KPK), Pakistan."
        schema={schema}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#102A43] via-[#071B35] to-[#102A43] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7900]/20 border border-[#FF7900]/30 text-[#FF7900] text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>{WORKSHOPS_DATA.badgeTop}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            {WORKSHOPS_DATA.headline}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            {WORKSHOPS_DATA.description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-sky-300">
            <MapPin className="w-4 h-4 text-[#FF7900]" />
            <span>{WORKSHOPS_DATA.coverageArea}</span>
          </div>

        </div>
      </section>

      {/* Customization Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900] bg-[#FF7900]/10 px-3 py-1 rounded-full">
              Full Institutional Flexibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A43] mt-3">
              We Tailor Every Session To Your Academic Needs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Institutions are never forced into a pre-packaged talk. We listen to your department chairs and student leaders to configure the ideal workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKSHOPS_DATA.customizationPillars.map((pillar, i) => (
              <div 
                key={i}
                className="p-6 rounded-3xl bg-[#F5F7FA] border border-slate-200 hover:border-[#102A43] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#102A43] text-white flex items-center justify-center font-black text-sm mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-[#102A43] mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Topics Breakdown */}
          <div className="mt-20 pt-16 border-t border-slate-100">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-black text-[#102A43]">
                Available Session Topics
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Choose any combination or propose an on-demand emerging technology subject:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {WORKSHOPS_DATA.topics.map((t, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3 hover:border-[#FF7900] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FF7900]/10 text-[#FF7900] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102A43]">{t}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Hands-on practical demonstration included</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligible Institutions */}
          <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#071B35] text-white">
            <h3 className="text-2xl font-black text-center mb-8">
              Who Can Request A Free Jafasa Campus Session?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WORKSHOPS_DATA.targetInstitutions.slice(0, 3).map((inst, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-base font-bold text-[#FF7900] mb-2">{inst.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{inst.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Main Booking Form Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900] bg-[#FF7900]/10 px-3 py-1 rounded-full">
              Seamless Campus Coordination
            </span>
            <h2 className="text-3xl font-black text-[#102A43] mt-2">
              Book a Workshop for Your Campus
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Faculty members, university department heads, and student society leaders can submit the campus invitation form below:
            </p>
          </div>

          <InstitutionalBookingForm />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-black text-center text-[#102A43] mb-10">
            Campus Workshops — FAQ
          </h3>
          <div className="space-y-4">
            {WORKSHOPS_DATA.faq.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-[#102A43] flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-[#FF7900] shrink-0" />
                  <span>{item.q}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
