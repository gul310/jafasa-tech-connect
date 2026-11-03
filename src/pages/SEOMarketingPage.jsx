import { useState } from 'react';
import { Search, ShieldAlert, Sparkles, CheckCircle2, MessageSquare, Bot, Globe, BarChart3 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ServiceCard from '../components/ServiceCard';
import SEOAuditModal from '../components/SEOAuditModal';
import { SERVICES_DATA } from '../data/servicesData';
import { getWhatsAppUrl } from '../data/companyData';

export default function SEOMarketingPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const data = SERVICES_DATA.seoMarketing;

  const [inlineAuditUrl, setInlineAuditUrl] = useState("");
  const [inlineAuditPhone, setInlineAuditPhone] = useState("");

  const handleInlineAudit = (e) => {
    e.preventDefault();
    const url = getWhatsAppUrl('seo_audit', { websiteUrl: inlineAuditUrl, phone: inlineAuditPhone });
    window.open(url, '_blank');
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO & Digital Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Jafasa Tech Solutions"
    },
    "serviceType": "Technical SEO, Local SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO)"
  };

  return (
    <div className="pt-28 pb-20">
      <SEOHead 
        title="SEO & Digital Marketing — Get Found. Get Discovered. Grow Digitally."
        description="Data-driven Technical SEO, Local SEO for KPK, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) by Jafasa Tech Solutions."
        schema={schema}
      />

      <SEOAuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#102A43] via-[#071B35] to-[#102A43] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Search className="w-3.5 h-3.5" />
            <span>Search & Visibility Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            {data.headline}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            {data.shortDesc}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF7900] to-[#E56D00] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:from-[#E56D00] transition-all flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Request Free SEO Audit</span>
            </button>
          </div>
        </div>
      </section>

      {/* Mandatory Ethical Compliance Callout */}
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <div className="max-w-5xl mx-auto px-4 text-center text-xs sm:text-sm text-amber-900 flex flex-col sm:flex-row items-center justify-center gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
          <span>
            <strong>Search Transparency Policy:</strong> Jafasa Tech Solutions adheres to white-hat engineering. We do not make deceptive promises of guaranteed rankings, traffic, or instant search placement. True visibility is earned through structural health and authoritative content.
          </span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900] bg-[#FF7900]/10 px-3 py-1 rounded-full">
              Holistic Search Strategy
            </span>
            <h2 className="text-3xl font-black text-[#102A43] mt-3">
              Modern Search Beyond Traditional Keywords
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From Google Map pack rankings in Peshawar to citations inside modern AI engines (ChatGPT, Gemini, Perplexity).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((svc, i) => (
              <ServiceCard
                key={i}
                name={svc.name}
                desc={svc.desc}
                features={svc.features}
                icon={Search}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modern AEO & GEO Highlight Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="p-8 rounded-3xl bg-[#071B35] text-white space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0284C7] text-white flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black">What is GEO (Generative Engine Optimization)?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                As millions of users turn to AI search tools (Perplexity, ChatGPT Search, Gemini), standard keyword stuffing no longer works. GEO structures your company data, technical papers, and digital entity profiles so that LLMs cite your business as a trusted authority.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#102A43] text-white space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF7900] text-white flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black">Local SEO for Regional KPK Domination</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dominate the local map pack in Peshawar, Mardan, Swat, Abbottabad, and surrounding districts. We optimize your Google Business Profile (GBP), coordinate localized citations, and align geo-targeted landing pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inline SEO Audit Request Box */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 text-center">
            <h3 className="text-2xl font-black text-[#102A43]">
              Request a Free Initial SEO Health Check
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-6 max-w-lg mx-auto">
              Enter your website URL below. Our technical SEO team will inspect your site speed, mobile readiness, and metadata:
            </p>

            <form onSubmit={handleInlineAudit} className="space-y-4 text-sm max-w-lg mx-auto">
              <input
                type="url"
                required
                placeholder="https://yourwebsite.com"
                value={inlineAuditUrl}
                onChange={(e) => setInlineAuditUrl(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF7900]"
              />
              <input
                type="tel"
                required
                placeholder="WhatsApp Number (e.g. 0323 1234567)"
                value={inlineAuditPhone}
                onChange={(e) => setInlineAuditPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF7900]"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#102A43] hover:bg-[#071B35] text-white font-bold uppercase tracking-wider text-xs transition-colors shadow-md"
              >
                Send Domain for Free Audit via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
