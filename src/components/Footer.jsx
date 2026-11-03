import { Link } from 'react-router-dom';
import { 
  MessageSquare, Mail, Phone, MapPin, 
  ExternalLink, ArrowUpRight, ShieldCheck, Heart 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071B35] text-slate-300 border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-[#FF7900]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-[#0284C7]/5 blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Positioning (2 spans) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/assets/logo/jafasa-logo-white.svg" 
                alt="Jafasa Tech Solutions Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              From professional technology training to high-performance software engineering, 
              Jafasa Tech Solutions builds future-ready talent and digital capabilities across Pakistan.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              {COMPANY_INFO.positioning.map((item) => (
                <span 
                  key={item} 
                  className="px-2.5 py-1 rounded-md bg-[#102A43] text-slate-300 border border-white/5"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-[#071B35] font-bold text-xs hover:bg-[#20bd5a] transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Digital Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/services/web-development" className="text-slate-400 hover:text-[#FF7900] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/seo-digital-marketing" className="text-slate-400 hover:text-[#FF7900] transition-colors">
                  SEO & Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/ai-solutions" className="text-slate-400 hover:text-[#FF7900] transition-colors">
                  AI Solutions & Chatbots
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-apps" className="text-slate-400 hover:text-[#FF7900] transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/software-development" className="text-slate-400 hover:text-[#FF7900] transition-colors">
                  Custom Software Systems
                </Link>
              </li>
              <li>
                <Link to="/services/fyp-projects" className="text-slate-400 hover:text-[#FF7900] transition-colors">
                  FYP & Capstone Guidance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Courses & Training */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Technology Training
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-[#FF7900] transition-colors font-medium">
                  All Courses (From 10k/mo)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-[#FF7900] transition-colors">
                  Full-Stack Web Bootcamp
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-[#FF7900] transition-colors">
                  AI & Prompt Engineering
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-[#FF7900] transition-colors">
                  Mobile Apps (Flutter/React Native)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-[#FF7900] transition-colors">
                  Technical SEO & AEO/GEO
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-[#FF7900] transition-colors">
                  Graphic Designing & UI/UX
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="text-[#FF7900] hover:underline font-semibold flex items-center gap-1">
                  <span>Free KPK Campus Sessions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Regional KPK Focus */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Regional Outreach
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF7900] shrink-0 mt-0.5" />
                <span>Khyber Pakhtunkhwa (KPK), Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF7900] shrink-0" />
                <span>0323 584 8356</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF7900] shrink-0" />
                <span>info@jafasatech.com</span>
              </div>
              <p className="text-xs text-slate-400 pt-2 border-t border-white/5">
                Visiting schools, colleges, universities, and student tech societies across KPK for customized workshops.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <strong>Jafasa Tech Solutions</strong>. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">About Jafasa</Link>
            <Link to="/portfolio" className="hover:text-white transition-colors">Our Portfolio</Link>
            <Link to="/workshops" className="hover:text-white transition-colors">Institutional Workshops</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
