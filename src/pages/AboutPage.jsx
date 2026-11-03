import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, MapPin, Users, 
  Sparkles, CheckCircle2, MessageSquare, ArrowRight 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FounderSection from '../components/FounderSection';
import { COMPANY_INFO } from '../data/companyData';

export default function AboutPage({ onOpenDemoModal }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Jafasa Tech Solutions",
    "description": "Information about Jafasa Tech Solutions, leadership, technical capabilities, and community empowerment across Khyber Pakhtunkhwa (KPK), Pakistan.",
    "publisher": {
      "@type": "Organization",
      "name": "Jafasa Tech Solutions",
      "url": "https://jafasa.com"
    }
  };

  return (
    <div className="pt-28 pb-20">
      <SEOHead 
        title="About Us — Corporate Profile & Leadership"
        description="Learn about Jafasa Tech Solutions: leadership team, technical training, digital solutions, and regional technology empowerment across Khyber Pakhtunkhwa (KPK), Pakistan."
        schema={schema}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#102A43] via-[#071B35] to-[#102A43] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7900] bg-[#FF7900]/10 border border-[#FF7900]/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Corporate Profile & Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Building Technology & Future-Ready Talent
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Jafasa Tech Solutions is not just a training institute. We are a software development agency, digital solutions provider, and professional technology training platform committed to industrial excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F5F7FA] border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900]">Our Purpose</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#102A43] mt-2 mb-4">
                Our Mission
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To bridge the critical divide between conventional academic theory and high-growth industry engineering. We equip ambitious students, working professionals, and commercial enterprises across Pakistan with production-grade coding skills, modern AI tooling, and authentic digital products.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#F5F7FA] border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">Our Aspiration</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#102A43] mt-2 mb-4">
                Our Vision
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To establish Khyber Pakhtunkhwa and Pakistan as a world-class technology innovation and remote software development hub, where every student has access to top-tier mentorship, ethical industry practices, and scalable opportunities.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16 pt-16 border-t border-slate-100">
            <h3 className="text-2xl font-black text-center text-[#102A43] mb-12">
              Our Core Operating Principles
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-[#FF7900] mb-3" />
                <h4 className="font-bold text-[#102A43] mb-1">Authentic Rigor</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No shortcuts or superficial certifications. We train on genuine git repos, production databases, and real architectural standards.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Users className="w-8 h-8 text-[#0284C7] mb-3" />
                <h4 className="font-bold text-[#102A43] mb-1">Regional Outreach</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We don't isolate ourselves in an ivory tower. We travel directly to campuses across KPK with 100% free hands-on workshops.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Award className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-[#102A43] mb-1">Accessible Pricing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-end technical education starting from PKR 10,000/month, accompanied by dedicated student concessions and merit discounts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Sparkles className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-bold text-[#102A43] mb-1">Transparent Integrity</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We state facts plainly: zero fabricated metrics, zero fake reviews, and no deceptive promises of effortless #1 rankings.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Real Founder & Leadership Section */}
      <FounderSection />

      {/* CTA Section */}
      <section className="py-16 bg-[#071B35] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-3xl font-black">
            Have Questions About Our Programs or Solutions?
          </h2>
          <p className="text-slate-300 text-sm">
            Our founders and academic team are always accessible. Reach out for a consultation, syllabus inquiry, or campus booking.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDemoModal}
              className="px-6 py-3 rounded-xl bg-[#FF7900] hover:bg-[#E56D00] text-white font-bold text-xs uppercase tracking-wider"
            >
              Book Free Demo Class
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20"
            >
              Contact Our Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
