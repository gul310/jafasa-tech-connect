import { Code2, CheckCircle2, ArrowRight, Layers, Sparkles, MessageSquare } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../data/servicesData';
import { getWhatsAppUrl } from '../data/companyData';

export default function WebDevelopmentPage() {
  const data = SERVICES_DATA.webDevelopment;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Jafasa Tech Solutions"
    },
    "serviceType": "Full-Stack Web Development, React Applications, Laravel Systems"
  };

  return (
    <div className="pt-28 pb-20">
      <SEOHead 
        title="Web Development Services — Custom React & Laravel Solutions"
        description="Corporate websites, high-speed React applications, PHP Laravel backend systems, and eCommerce portals by Jafasa Tech Solutions."
        schema={schema}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#102A43] via-[#071B35] to-[#102A43] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7900]/20 border border-[#FF7900]/30 text-[#FF7900] text-xs font-bold uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Full-Stack Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            {data.headline}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            {data.shortDesc}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-[#102A43]">
              Specialized Web Solutions
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every website is engineered for lightning-quick loading, airtight security, and seamless mobile responsiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((svc, i) => (
              <ServiceCard
                key={i}
                name={svc.name}
                desc={svc.desc}
                features={svc.features}
                icon={Code2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Technologies & Frameworks We Excel At:
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm font-bold text-slate-700">
            {["React.js", "Vite", "Tailwind CSS", "PHP & Laravel", "Node.js", "WordPress", "MySQL", "REST APIs", "AWS & Cloud Hosting"].map((t) => (
              <span key={t} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#071B35] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-3xl font-black">
            Have a Web Project to Build or Modernize?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Discuss your design wireframes, database requirements, or legacy migration with our senior developers on WhatsApp.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl('service', { serviceName: 'Web Development Consultation' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF7900] hover:bg-[#E56D00] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Web Project on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
