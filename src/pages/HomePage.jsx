import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, GraduationCap, Code2, 
  Search, ShieldCheck, CheckCircle2, MessageSquare, 
  Cpu, Building2, MapPin, Users, Award, Zap, BookOpen 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FounderSection from '../components/FounderSection';
import InstitutionalBookingForm from '../components/InstitutionalBookingForm';
import { COURSES_DATA } from '../data/coursesData';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';
import { WORKSHOPS_DATA } from '../data/workshopsData';

export default function HomePage({ onOpenDemoModal }) {
  const [selectedWorkshopTopic, setSelectedWorkshopTopic] = useState(WORKSHOPS_DATA.topics[0]);

  const featuredCourses = COURSES_DATA.filter(c => c.featured).slice(0, 4);

  return (
    <div>
      <SEOHead 
        title="Jafasa Tech Solutions — Technology That Builds Your Future"
        description="From professional technology training to powerful digital solutions, Jafasa Tech Solutions helps individuals, businesses and institutions grow through innovation across KPK, Pakistan."
      />

      {/* ==================================================== */}
      {/* HERO SECTION                                         */}
      {/* ==================================================== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-[#102A43] via-[#071B35] to-[#04101E] text-white overflow-hidden">
        {/* Subtle dynamic grid and lighting overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#FF7900]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#0284C7]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Regional & Mission Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-slate-200">
                <span className="flex h-2 w-2 rounded-full bg-[#FF7900] animate-ping" />
                <span className="text-[#38BDF8] font-bold">KPK's Premier Tech Agency</span>
                <span className="text-white/30">•</span>
                <span>Training & Software Engineering</span>
              </div>

              {/* Exact Client Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                Technology That <br />
                <span className="bg-gradient-to-r from-white via-slate-100 to-[#38BDF8] bg-clip-text text-transparent">
                  Builds Your Future
                </span>
                <span className="text-[#FF7900]">.</span>
              </h1>

              {/* Exact Client Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                From professional technology training to powerful digital solutions, 
                Jafasa Tech Solutions helps individuals, businesses and institutions grow through innovation.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/services/web-development"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF7900] to-[#E56D00] hover:from-[#E56D00] hover:to-[#CC5E00] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#FF7900]/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/courses"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wide border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 text-[#38BDF8]" />
                  <span>Explore Courses (From 10k/mo)</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-xs text-slate-400">Practical Projects</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#FF7900]">FREE</div>
                  <div className="text-xs text-slate-400">Campus Workshops</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#38BDF8]">KPK</div>
                  <div className="text-xs text-slate-400">Regional Outreach</div>
                </div>
              </div>

            </div>

            {/* Right Hero Graphic: Interactive 3-Category Ecosystem (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#102A43]/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Jafasa Core Ecosystem
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Category A: Technology Training */}
                  <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white group-hover:text-[#FF7900] transition-colors">
                            A. Technology Training
                          </h4>
                          <span className="text-[10px] bg-[#FF7900]/20 text-[#FF7900] px-2 py-0.5 rounded font-bold">10k/mo</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          Full-Stack Web, AI, Mobile Apps, Graphic Design & Python.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Category B: Software & Web Development */}
                  <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FF7900] text-white flex items-center justify-center shrink-0">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white group-hover:text-[#FF7900] transition-colors">
                            B. Software & Web Development
                          </h4>
                          <span className="text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded font-bold">Enterprise</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          Bespoke React portals, Laravel backends, APIs & mobile apps.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Category C: Digital Marketing & SEO */}
                  <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <Search className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white group-hover:text-[#FF7900] transition-colors">
                            C. Digital Marketing & SEO
                          </h4>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">AEO & GEO</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          Technical SEO, Answer & Generative Engine Optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    Real Working Solutions
                  </span>
                  <button 
                    onClick={onOpenDemoModal}
                    className="text-[#38BDF8] hover:text-[#FF7900] font-bold transition-colors"
                  >
                    Request Free Demo →
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================== */}
      {/* 3 MAIN SERVICE CATEGORIES DEEP DIVE                  */}
      {/* ==================================================== */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900] bg-[#FF7900]/10 px-3 py-1 rounded-full">
              Full-Spectrum Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A43] mt-3">
              Three Pillars of Technological Growth
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Whether you are an aspiring engineer seeking career-ready skills or an enterprise looking for reliable software systems, Jafasa delivers measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar A */}
            <div className="bg-[#F5F7FA] rounded-3xl p-8 border border-slate-200 hover:border-[#102A43] transition-all duration-300 group hover:-translate-y-1 shadow-card">
              <div className="w-14 h-14 rounded-2xl bg-[#102A43] text-white flex items-center justify-center mb-6 group-hover:bg-[#FF7900] transition-colors">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#102A43] mb-3">
                A. Technology Training
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Hands-on, project-based courses taught by active software engineers. From full-stack web and mobile apps to AI prompt engineering and creative UI/UX.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Courses starting from PKR 10,000/mo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Special student & merit concessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Free demo class before registration</span>
                </li>
              </ul>
              <Link 
                to="/courses"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#102A43] group-hover:text-[#FF7900] transition-colors"
              >
                <span>Browse Training Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar B */}
            <div className="bg-[#F5F7FA] rounded-3xl p-8 border border-slate-200 hover:border-[#FF7900] transition-all duration-300 group hover:-translate-y-1 shadow-card">
              <div className="w-14 h-14 rounded-2xl bg-[#FF7900] text-white flex items-center justify-center mb-6 transition-colors">
                <Code2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#102A43] mb-3">
                B. Software & Web Development
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Custom software solutions, enterprise web portals, responsive eCommerce systems, React single-page apps, and scalable Laravel backends.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Custom React & Laravel architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Cross-platform mobile apps (Flutter)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Final Year Project (FYP) mentoring</span>
                </li>
              </ul>
              <Link 
                to="/services/web-development"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#102A43] group-hover:text-[#FF7900] transition-colors"
              >
                <span>Explore Development Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar C */}
            <div className="bg-[#F5F7FA] rounded-3xl p-8 border border-slate-200 hover:border-[#0284C7] transition-all duration-300 group hover:-translate-y-1 shadow-card">
              <div className="w-14 h-14 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center mb-6 group-hover:bg-[#FF7900] transition-colors">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#102A43] mb-3">
                C. Digital Marketing & SEO
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Next-generation search optimization that goes beyond basic keywords into Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO).
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Technical & Local SEO for KPK & global</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>AI Search & Generative Engine Visibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Ethical, white-hat search compliance</span>
                </li>
              </ul>
              <Link 
                to="/services/seo-digital-marketing"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#102A43] group-hover:text-[#FF7900] transition-colors"
              >
                <span>Explore SEO & Marketing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================== */}
      {/* FREE INSTITUTIONAL WORKSHOPS (MAJOR HOMEPAGE SECTION) */}
      {/* ==================================================== */}
      <section className="py-20 lg:py-28 bg-[#102A43] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7900]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0284C7]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7900]/20 border border-[#FF7900]/30 text-[#FF7900] text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FREE TECHNOLOGY SESSIONS • WE VISIT YOUR CAMPUS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {WORKSHOPS_DATA.headline}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Jafasa Tech Solutions conducts <strong>100% FREE customized technology sessions</strong> for schools, colleges, universities, and student societies across <strong>Khyber Pakhtunkhwa (KPK), Pakistan</strong>.
              </p>

              {/* Topic Pills */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Popular Campus Workshop Topics:
                </p>
                <div className="flex flex-wrap gap-2">
                  {WORKSHOPS_DATA.topics.slice(0, 6).map((topic, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-semibold text-slate-200 border border-white/10"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Campus Highlights */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Customized syllabus matched to student academic level</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Hands-on tool demonstrations & live career roadmaps</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Available across Peshawar, Mardan, Swat, Abbottabad & all KPK</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/workshops"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7900] hover:text-[#FFA040] transition-colors"
                >
                  <span>Learn more about institutional eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7">
              <InstitutionalBookingForm />
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================== */}
      {/* FEATURED COURSES SECTION (Starting PKR 10,000/mo)     */}
      {/* ==================================================== */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900] bg-[#FF7900]/10 px-3 py-1 rounded-full">
                Professional Tech Programs
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#102A43] mt-3">
                Practical Learning That Gets You Hired
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Courses starting from <strong>PKR 10,000/month</strong> with special student discounts, fee concessions, and zero-risk <strong>Free Demo Classes</strong>.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenDemoModal}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF7900] to-[#E56D00] text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:from-[#E56D00] transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Demo</span>
              </button>
              <Link
                to="/courses"
                className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-[#102A43] text-xs font-bold hover:bg-slate-50 transition-colors"
              >
                View All Courses ({COURSES_DATA.length})
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-full">
                      {course.category}
                    </span>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      ★ {course.rating}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#102A43] group-hover:text-[#FF7900] transition-colors leading-snug mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 mb-4">
                    {course.description}
                  </p>

                  <div className="space-y-1.5 py-3 border-t border-slate-100 text-xs text-slate-700 font-medium">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Duration:</span>
                      <span className="font-bold text-[#102A43]">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Fee:</span>
                      <span className="font-extrabold text-[#FF7900]">{course.startingFee}</span>
                    </div>
                  </div>

                  <div className="my-2">
                    <span className="inline-block text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {course.discountBadge}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <button
                    onClick={onOpenDemoModal}
                    className="w-full py-2 px-3 rounded-lg bg-[#FF7900] hover:bg-[#E56D00] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Free Demo</span>
                  </button>
                  <Link
                    to={`/courses#${course.id}`}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs text-center transition-colors"
                  >
                    View Curriculum
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ==================================================== */}
      {/* REAL FOUNDERS & LEADERSHIP SECTION                   */}
      {/* ==================================================== */}
      <FounderSection />


      {/* ==================================================== */}
      {/* WHY PARTNER WITH JAFASA TECH SOLUTIONS               */}
      {/* ==================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900] bg-[#FF7900]/10 px-3 py-1 rounded-full">
              Enterprise Rigor & Authentic Pedagogy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A43] mt-3">
              Why Choose Jafasa Tech Solutions?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We stand apart from conventional institutes and cookie-cutter agencies by upholding absolute technical authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#102A43] text-white flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-[#102A43] mb-2">Production-Grade Code</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We develop software and train engineers using the exact modern stacks powering global tech companies: React, Tailwind, Laravel, Flutter, and Generative AI.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#FF7900] text-white flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-[#102A43] mb-2">Campus Engagement</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct community investment across KPK educational campuses with 100% free hands-on technology sessions and student workshops.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#0284C7] text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-[#102A43] mb-2">Zero Fake Promises</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Honest consulting. We never guarantee fictitious #1 search rankings or fabricate testimonials. Real results built on rigorous engineering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-[#102A43] mb-2">Direct Founder Access</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our founders actively teach, review projects, and advise institutional stakeholders personally via dedicated WhatsApp communication.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ==================================================== */}
      {/* FINAL CALL TO ACTION                                 */}
      {/* ==================================================== */}
      <section className="py-16 bg-gradient-to-r from-[#102A43] via-[#071B35] to-[#102A43] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">
            Ready to Build Your Future with Jafasa?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Book a Free Demo Class, discuss an enterprise software requirement, or invite us to your educational campus across KPK.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDemoModal}
              className="px-8 py-3.5 rounded-xl bg-[#FF7900] hover:bg-[#E56D00] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              Book FREE Demo Class
            </button>
            <a
              href="https://wa.me/923235848356"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-[#25D366] text-[#071B35] font-extrabold text-sm flex items-center gap-2 hover:bg-[#20bd5a] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: 0323 584 8356</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
