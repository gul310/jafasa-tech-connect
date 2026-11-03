import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Sparkles, GraduationCap,
  Code2, Smartphone, Cpu, Search, Briefcase,
  Phone, MessageSquare, ArrowRight, ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar({ onOpenDemoModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
    setCoursesDropdown(false);
    setMobileServicesOpen(false);
    setMobileCoursesOpen(false);
  }, [location.pathname]);

  const servicesList = [
    { title: "Web Development", path: "/services/web-development", desc: "Corporate sites, React apps & Laravel systems", icon: Code2 },
    { title: "SEO & Digital Marketing", path: "/services/seo-digital-marketing", desc: "Technical SEO, AEO, GEO & Social Media", icon: Search },
    { title: "AI Solutions", path: "/services/ai-solutions", desc: "Custom chatbots, automation & LLM workflows", icon: Cpu },
    { title: "Mobile App Development", path: "/services/mobile-apps", desc: "Flutter, React Native & Android solutions", icon: Smartphone },
    { title: "Software Development", path: "/services/software-development", desc: "Custom business software & API architecture", icon: Briefcase },
    { title: "FYP & Project Solutions", path: "/services/fyp-projects", desc: "Capstone guidance, architecture & viva coaching", icon: GraduationCap }
  ];

  const coursesList = [
    { title: "All Courses & Programs", path: "/courses", desc: "Starting PKR 10,000/mo with student concessions" },
    { title: "Full-Stack Web Development", path: "/courses#web-development-bootcamp", desc: "HTML, CSS, JS, React, PHP, Laravel" },
    { title: "Mobile App Development", path: "/courses#mobile-app-development", desc: "Android, Flutter & React Native" },
    { title: "Artificial Intelligence & GenAI", path: "/courses#artificial-intelligence-generative-ai", desc: "Prompt Engineering, LLMs & AI Tools" },
    { title: "SEO, AEO & Digital Marketing", path: "/courses#seo-digital-marketing-aeo-geo", desc: "Technical SEO, Local SEO & GEO" },
    { title: "Graphic Design & Branding", path: "/courses#graphic-design-branding", desc: "Photoshop, Illustrator, Canva, Brand Identity" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#102A43]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3 border-b border-white/10' 
        : 'bg-[#102A43] py-4'
    }`}>
      {/* Top Banner for Institutional Workshops & Student Perks */}
      <div className="hidden lg:block bg-[#071B35] border-b border-white/5 py-1.5 px-4 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <span className="h-2 w-2 rounded-full bg-[#FF7900] animate-pulse"></span>
              Free Technology Sessions Across KPK Campuses
            </span>
            <span className="text-white/20">|</span>
            <span className="text-slate-300">
              Courses from <strong className="text-white">PKR 10,000/mo</strong> • Student Concessions Available
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/923235848356" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#FF7900] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp: 0323 584 8356</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="text-slate-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
              Industry Standard Training
            </span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="h-10 sm:h-12 w-auto flex items-center">
              <img 
                src={`${import.meta.env.BASE_URL}assets/logo/jafasa-logo-white.svg`} 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `${import.meta.env.BASE_URL}assets/jafasa-logo.png`;
                }}
                alt="Jafasa Tech Solutions Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-[#FF7900] bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                  location.pathname.startsWith('/services') ? 'text-[#FF7900] bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={servicesDropdown}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#FF7900]' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#071B35] rounded-xl shadow-2xl border border-white/10 p-2 overflow-hidden backdrop-blur-xl">
                    <div className="px-3 py-2 border-b border-white/10 mb-1">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Enterprise & Digital Solutions</p>
                    </div>
                    {servicesList.map((svc) => {
                      const Icon = svc.icon;
                      return (
                        <Link
                          key={svc.path}
                          to={svc.path}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                        >
                          <div className="p-2 rounded-md bg-[#102A43] text-[#38BDF8] group-hover:bg-[#FF7900] group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white group-hover:text-[#FF7900] transition-colors">
                              {svc.title}
                            </div>
                            <div className="text-xs text-slate-400 line-clamp-1">{svc.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Courses & Training Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesDropdown(true)}
              onMouseLeave={() => setCoursesDropdown(false)}
            >
              <button 
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                  location.pathname === '/courses' ? 'text-[#FF7900] bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={coursesDropdown}
              >
                Courses & Training
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesDropdown ? 'rotate-180 text-[#FF7900]' : ''}`} />
              </button>

              {coursesDropdown && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#071B35] rounded-xl shadow-2xl border border-white/10 p-2 overflow-hidden backdrop-blur-xl">
                    <div className="px-3 py-2 border-b border-white/10 mb-1 flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Professional Tracks</p>
                      <span className="text-[10px] bg-[#FF7900]/20 text-[#FF7900] px-1.5 py-0.5 rounded font-bold">From 10k/mo</span>
                    </div>
                    {coursesList.map((c) => (
                      <Link
                        key={c.title}
                        to={c.path}
                        className="block p-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        <div className="text-sm font-medium text-white group-hover:text-[#FF7900] transition-colors">
                          {c.title}
                        </div>
                        <div className="text-xs text-slate-400">{c.desc}</div>
                      </Link>
                    ))}
                    <div className="mt-2 p-2 bg-[#102A43] rounded-lg text-center">
                      <button
                        onClick={onOpenDemoModal}
                        className="text-xs text-[#38BDF8] hover:text-[#FF7900] font-semibold flex items-center justify-center gap-1 w-full"
                      >
                        Request Free Demo Class <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Free Institutional Workshops (Major Business Offering) */}
            <Link 
              to="/workshops" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
                location.pathname === '/workshops' ? 'text-[#FF7900] bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Free Workshops</span>
              <span className="text-[10px] bg-[#FF7900] text-white font-bold px-1.5 py-0.5 rounded-full shadow-sm animate-pulse">
                KPK
              </span>
            </Link>

            <Link 
              to="/portfolio" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/portfolio' ? 'text-[#FF7900] bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Our Portfolio
            </Link>

            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/about' ? 'text-[#FF7900] bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              About Us
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/contact' ? 'text-[#FF7900] bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </Link>

          </div>

          {/* Desktop Right CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenDemoModal}
              className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF7900] to-[#E56D00] hover:from-[#E56D00] hover:to-[#CC5E00] shadow-md shadow-[#FF7900]/25 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Book FREE Demo</span>
            </button>

            <a
              href="https://wa.me/923235848356"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDemoModal}
              className="px-2.5 py-1.5 rounded text-xs font-bold bg-[#FF7900] text-white"
            >
              Demo
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#071B35] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <Link
            to="/"
            className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10"
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#FF7900]' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-[#102A43]/50 rounded-lg my-1">
                {servicesList.map((svc) => (
                  <Link
                    key={svc.path}
                    to={svc.path}
                    className="block px-3 py-2 text-sm text-slate-300 hover:text-[#FF7900]"
                  >
                    {svc.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Courses Accordion */}
          <div>
            <button
              onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10"
            >
              <span className="flex items-center gap-2">
                <span>Courses & Training</span>
                <span className="text-[10px] bg-[#FF7900]/20 text-[#FF7900] px-1.5 py-0.2 rounded font-bold">10k/mo</span>
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCoursesOpen ? 'rotate-180 text-[#FF7900]' : ''}`} />
            </button>
            {mobileCoursesOpen && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-[#102A43]/50 rounded-lg my-1">
                <Link to="/courses" className="block px-3 py-2 text-sm font-semibold text-[#FF7900]">
                  View All Courses
                </Link>
                {coursesList.slice(1).map((c) => (
                  <Link
                    key={c.title}
                    to={c.path}
                    className="block px-3 py-1.5 text-sm text-slate-300 hover:text-white"
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/workshops"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10"
          >
            <span>Free Campus Workshops</span>
            <span className="text-xs bg-[#FF7900] text-white px-2 py-0.5 rounded-full font-bold">KPK</span>
          </Link>

          <Link
            to="/portfolio"
            className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10"
          >
            Our Portfolio
          </Link>

          <Link
            to="/about"
            className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={onOpenDemoModal}
              className="w-full py-2.5 rounded-lg text-center font-bold text-white bg-[#FF7900] hover:bg-[#E56D00]"
            >
              Book FREE Demo Class
            </button>
            <a
              href="https://wa.me/923235848356"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg text-center font-bold text-[#25D366] bg-[#25D366]/10 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp: 0323 584 8356
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
