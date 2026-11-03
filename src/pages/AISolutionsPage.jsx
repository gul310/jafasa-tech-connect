import { Cpu, Bot, Zap, FileText, CheckCircle2, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../data/servicesData';
import { getWhatsAppUrl } from '../data/companyData';

export default function AISolutionsPage() {
  const data = SERVICES_DATA.aiSolutions;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Artificial Intelligence Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Jafasa Tech Solutions"
    },
    "serviceType": "AI Chatbot Development, RAG Architecture, Workflow Automation, Document AI"
  };

  return (
    <div className="pt-28 pb-20">
      <SEOHead 
        title="AI Solutions & Custom Chatbots — Jafasa Tech Solutions"
        description="Applied AI engineering: custom RAG chatbots, business process automation, document intelligence, and AI-powered web applications in Pakistan."
        schema={schema}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#102A43] via-[#071B35] to-[#102A43] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Applied Intelligence & Automation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            {data.headline}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            {data.shortDesc}
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={getWhatsAppUrl('service', { serviceName: 'AI Solutions & Chatbots' })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF7900] to-[#E56D00] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2 hover:from-[#E56D00] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Custom AI Project</span>
            </a>
          </div>
        </div>
      </section>

      {/* Practical Business Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900] bg-[#FF7900]/10 px-3 py-1 rounded-full">
              Real Commercial ROI
            </span>
            <h2 className="text-3xl font-black text-[#102A43] mt-3">
              Practical Business Use Cases
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We focus on solving tangible operational bottlenecks rather than theoretical AI hype.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.useCases.map((useCase, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#F5F7FA] border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#102A43] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#102A43] text-white flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5 text-[#FF7900]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43] mb-2">{useCase.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{useCase.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Business Impact: {useCase.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Matrix */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-[#102A43]">
              Core AI & Machine Learning Services
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From standalone intelligent APIs to fully embedded customer support agents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.services.map((svc, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center mb-4">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#102A43] mb-2">{svc.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{svc.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl('service', { serviceName: svc.name })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#FF7900] hover:underline flex items-center gap-1"
                  >
                    <span>Request AI Consultation</span>
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
            Automate Your Operations with Jafasa AI
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Book a confidential discovery session to identify high-impact automation potential in your organization.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/923235848356"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF7900] hover:bg-[#E56D00] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp: 0323 584 8356</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
