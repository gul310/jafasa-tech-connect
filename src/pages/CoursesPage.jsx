import { useState } from 'react';
import { 
  Search, Sparkles, Filter, CheckCircle2, Clock, 
  GraduationCap, Tag, MessageSquare, ArrowRight, HelpCircle 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COURSES_DATA, COURSE_CATEGORIES } from '../data/coursesData';
import { getWhatsAppUrl } from '../data/companyData';

export default function CoursesPage({ onOpenDemoModal }) {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [searchQuery, setSearchQuery] = useState("");
  const [enquiryCourse, setEnquiryCourse] = useState(COURSES_DATA[0].title);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: COURSES_DATA[0].title,
    mode: "Online (Interactive Zoom)",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCat = selectedCategory === "All Courses" || course.category === selectedCategory;
    const matchesQuery = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  const handleInlineEnquiry = (e) => {
    e.preventDefault();
    const url = getWhatsAppUrl('demo', formData);
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Professional Technology Training Courses by Jafasa Tech Solutions",
    "itemListElement": COURSES_DATA.map((c, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": c.title,
        "description": c.description,
        "provider": {
          "@type": "Organization",
          "name": "Jafasa Tech Solutions"
        }
      }
    }))
  };

  return (
    <div className="pt-28 pb-20">
      <SEOHead 
        title="Professional Technology Courses & Training — From PKR 10,000/mo"
        description="Comprehensive technology training: Full-Stack Web Development, AI & Prompt Engineering, Flutter Mobile Apps, Python, Graphic Design, WordPress, and SEO across KPK, Pakistan."
        schema={schema}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#102A43] via-[#071B35] to-[#102A43] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7900]/20 border border-[#FF7900]/30 text-[#FF7900] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Courses Starting From PKR 10,000 / Month</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Professional Technology Training
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            Practical, project-based engineering education designed to transition students into industry-ready software developers, AI practitioners, and digital specialists.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">🎓 Special Student Discounts</span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">💡 Affordable Fee Concessions</span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">🚀 100% Free Demo Class</span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {COURSE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#102A43] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF7900] bg-slate-50 focus:bg-white text-slate-800"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Main Course Listing Grid */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-[#102A43]">
              Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'Program' : 'Programs'}
            </h2>
            <button
              onClick={onOpenDemoModal}
              className="text-xs font-bold text-[#FF7900] hover:underline flex items-center gap-1"
            >
              <span>Can't find your topic? Request On-Demand Course</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                id={course.id}
                key={course.id}
                className="bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      ★ {course.rating}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#102A43] group-hover:text-[#FF7900] transition-colors leading-snug mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Highlights Badge */}
                  <div className="mb-4">
                    <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {course.discountBadge}
                    </span>
                  </div>

                  {/* Syllabus / Key Topics */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Modules Covered:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                      {course.topics.slice(0, 5).map((topic, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                          <span className="truncate">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Duration: {course.duration}</span>
                    <span className="text-[#FF7900] font-black text-sm">{course.startingFee}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={onOpenDemoModal}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FF7900] to-[#E56D00] hover:from-[#E56D00] text-white font-bold text-xs transition-all shadow-sm flex items-center justify-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Free Demo</span>
                    </button>
                    <a
                      href={getWhatsAppUrl('demo', { course: course.title })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#102A43] hover:text-white text-[#102A43] font-bold text-xs transition-all flex items-center justify-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Working Course Enquiry Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#102A43] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF7900]/10 blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-8 relative z-10">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#FF7900] text-white">
                Zero Financial Risk
              </span>
              <h2 className="text-3xl font-black mt-2">
                Book Your FREE Demo Class
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Experience our lecture style, view student work, and talk with our instructors before paying any course fees.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-white/10 rounded-2xl text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-[#25D366] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold">Demo Request Sent to WhatsApp Desk!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Our admissions counselor will share available demo batch schedules and Zoom links shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2 bg-[#FF7900] text-white text-xs font-bold rounded-lg"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInlineEnquiry} className="space-y-4 relative z-10 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF7900]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0323 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF7900]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                      Selected Course *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#071B35] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FF7900]"
                    >
                      {COURSES_DATA.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                      Preferred Learning Mode *
                    </label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#071B35] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FF7900]"
                    >
                      <option value="Online (Interactive Zoom)">Online (Interactive Zoom)</option>
                      <option value="Physical Campus">Physical Campus</option>
                      <option value="Hybrid (Physical + Online)">Hybrid (Physical + Online)</option>
                      <option value="Weekend Batch">Weekend Batch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                    Message / Learning Goals (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us what you wish to achieve (e.g. FYP preparation, freelancing, job transition)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF7900] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#FF7900] hover:bg-[#E56D00] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#FF7900]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Book Your FREE Demo Class</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Dispatches directly to WhatsApp admissions with instant confirmation.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
