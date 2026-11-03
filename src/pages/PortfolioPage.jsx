import { useState } from 'react';
import { 
  FolderGit2, Filter, ShieldCheck, Sparkles, 
  MessageSquare, ArrowRight, ExternalLink, Code2, 
  Layers, Lock 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../data/portfolioData';
import { getWhatsAppUrl } from '../data/companyData';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredItems = PORTFOLIO_ITEMS.filter(item => {
    if (activeCategory === "All Projects") return true;
    return item.category === activeCategory;
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Jafasa Tech Solutions Portfolio & Engineering Works",
    "description": "Verified software engineering, mobile apps, web development, and digital solutions delivered by Jafasa Tech Solutions.",
    "publisher": {
      "@type": "Organization",
      "name": "Jafasa Tech Solutions"
    }
  };

  return (
    <div className="pt-28 pb-20">
      <SEOHead 
        title="Our Portfolio — Verified Technology & Software Engineering"
        description="Authentic software development, web applications, AI systems, and mobile applications developed by Jafasa Tech Solutions."
        schema={schema}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#102A43] via-[#071B35] to-[#102A43] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7900]/20 border border-[#FF7900]/30 text-[#FF7900] text-xs font-bold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Verified Work & Deliverables</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Our Engineering Portfolio
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Real software systems, web applications, and institutional solutions built with modern technology stacks.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none justify-start sm:justify-center">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-[#102A43] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Content or Attractive Authentic Empty-State */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="aspect-video bg-slate-100 rounded-2xl mb-4 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#102A43] mt-2 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 mb-4">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            /* Attractive Empty-State adhering strictly to prompt instructions */
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-14 text-center border border-slate-200/90 shadow-card space-y-6">
              
              <div className="w-20 h-20 rounded-3xl bg-[#102A43]/5 text-[#102A43] flex items-center justify-center mx-auto border border-[#102A43]/10">
                <Lock className="w-10 h-10 text-[#FF7900]" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full">
                  Client Confidentiality & Authenticity Policy
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#102A43] mt-3">
                  {activeCategory === "All Projects" 
                    ? "Production Projects Protected Under Client NDA" 
                    : `Active ${activeCategory} Works in Release Pipeline`}
                </h3>
                <p className="text-sm text-slate-600 max-w-xl mx-auto mt-3 leading-relaxed">
                  Per corporate policy, Jafasa Tech Solutions <strong>never manufactures fictitious case studies, fake logos, or simulated metrics</strong>. Client deliverables are indexed here only upon formal authorization and public release.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-lg mx-auto text-left space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Verified live demonstrations available during private technical discovery sessions.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Source code repositories and architecture documentation reviewed under mutual NDAs.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppUrl('service', { serviceName: `Portfolio Demo for ${activeCategory}` })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF7900] to-[#E56D00] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 hover:from-[#E56D00] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Live Portfolio Walkthrough</span>
                </a>
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}
