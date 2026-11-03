import { Briefcase, Database, ShieldCheck, Layers, Server, MessageSquare, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SERVICES_DATA } from '../data/servicesData';
import { getWhatsAppUrl } from '../data/companyData';

export default function SoftwareDevelopmentPage() {
  const data = SERVICES_DATA.softwareDevelopment;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Software Engineering Services",
    "provider": {
      "@type": "Organization",
      "name": "Jafasa Tech Solutions"
    },
    "serviceType": "Enterprise ERP Systems, Custom Cloud Software, Scalable Database Engineering"
  };

  return (
    <div className="pt-28 pb-20">
      <SEOHead 
        title="Custom Software Engineering & Enterprise Systems — Jafasa Tech Solutions"
        description="Bespoke software systems, management platforms, database architecture, and secure enterprise software engineering by Jafasa Tech Solutions."
        schema={schema}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#102A43] via-[#071B35] to-[#102A43] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7900]/20 border border-[#FF7900]/30 text-[#FF7900] text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Enterprise System Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            {data.headline}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            {data.shortDesc}
          </p>
        </div>
      </section>

      {/* Core Engineering Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900] bg-[#FF7900]/10 px-3 py-1 rounded-full">
              Full Lifecycle Engineering
            </span>
            <h2 className="text-3xl font-black text-[#102A43] mt-3">
              Scalable Systems Designed for High Concurrency
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From enterprise resource planning (ERP) platforms to lightweight microservice networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.capabilities.map((cap, i) => (
              <div 
                key={i}
                className="p-8 rounded-3xl bg-[#F5F7FA] border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#102A43] transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#102A43] text-white flex items-center justify-center mb-5">
                    <Server className="w-6 h-6 text-[#38BDF8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43] mb-2">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{cap.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <a
                    href={getWhatsAppUrl('service', { serviceName: cap.title })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7900] hover:underline"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#071B35] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-3xl font-black">
            Have a Specific Business Software Challenge?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Schedule a confidential technical discovery call with our lead software architects.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl('service', { serviceName: 'Enterprise Software Architecture' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF7900] hover:bg-[#E56D00] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Software Architects</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
