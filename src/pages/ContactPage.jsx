import { useState } from 'react';
import { 
  Phone, Mail, MapPin, MessageSquare, 
  Clock, Sparkles, Send, CheckCircle2, Building2, GraduationCap, Briefcase 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';

export default function ContactPage({ onOpenDemoModal }) {
  const [enquiryType, setEnquiryType] = useState("course");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Course & Training Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = "";
    if (enquiryType === "course") {
      url = getWhatsAppUrl('demo', { name: formData.name, phone: formData.phone, message: formData.message, course: formData.subject });
    } else if (enquiryType === "workshop") {
      url = getWhatsAppUrl('workshop', { institutionName: formData.subject, contactPerson: formData.name, phone: formData.phone, requirements: formData.message });
    } else {
      url = getWhatsAppUrl('service', { name: formData.name, serviceName: formData.subject, details: formData.message });
    }
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Jafasa Tech Solutions",
    "description": "Get in touch with Jafasa Tech Solutions via WhatsApp 0323 584 8356, email, or institutional inquiry across Khyber Pakhtunkhwa (KPK), Pakistan.",
    "telephone": "+92-323-5848356"
  };

  return (
    <div className="pt-28 pb-20">
      <SEOHead 
        title="Contact Us — Official WhatsApp & Campus Coordination"
        description="Connect with Jafasa Tech Solutions admissions, corporate software division, and institutional campus visit coordination across KPK, Pakistan."
        schema={schema}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#102A43] via-[#071B35] to-[#102A43] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7900]/20 border border-[#FF7900]/30 text-[#FF7900] text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Desk: 0323 584 8356</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Connect With Jafasa Tech Solutions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Whether you are booking a Free Demo Class, inviting us to your campus, or initiating a corporate software project, we are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Communication Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Primary Card */}
              <div className="p-8 rounded-3xl bg-[#25D366] text-[#071B35] shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/30 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[#071B35]" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-white/40 px-3 py-1 rounded-full">
                    Instant Response
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-black">Official WhatsApp</h3>
                  <p className="text-xs font-semibold text-[#071B35]/80 mt-1">
                    Direct line for admissions, demos, and corporate inquiries
                  </p>
                </div>
                <div className="text-3xl font-black tracking-tight pt-1">
                  {COMPANY_INFO.phone}
                </div>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#071B35] hover:bg-[#102A43] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Open WhatsApp Conversation</span>
                </a>
              </div>

              {/* Office & Operations Card */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-card space-y-6">
                <div>
                  <h4 className="text-lg font-black text-[#102A43]">Outreach & Availability</h4>
                  <p className="text-xs text-slate-500 mt-1">Official operational specifications</p>
                </div>

                <div className="space-y-4 text-xs text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FF7900] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Regional Outreach:</strong>
                      <span>Khyber Pakhtunkhwa (KPK), Pakistan</span>
                      <p className="text-[11px] text-slate-500 mt-0.5">Visiting institutions across Peshawar, Mardan, Swat, Abbottabad, and all KPK districts.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Official Emails:</strong>
                      <span>info@jafasatech.com</span>
                      <p className="text-[11px] text-slate-500 mt-0.5">admissions@jafasatech.com • solutions@jafasatech.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Desk Timings:</strong>
                      <span>Monday – Saturday: 9:00 AM – 7:00 PM (PKT)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Multi-Category Interactive Enquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-200/80">
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900] bg-[#FF7900]/10 px-3 py-1 rounded-full">
                  Fast-Track Communication
                </span>
                <h3 className="text-2xl font-black text-[#102A43] mt-2">
                  Send a Direct Pre-Filled Message
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Select your inquiry category to format your request directly for WhatsApp:
                </p>
              </div>

              {/* Inquiry Type Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => {
                    setEnquiryType("course");
                    setFormData({ ...formData, subject: "Course & Training Inquiry" });
                  }}
                  className={`p-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1.5 ${
                    enquiryType === "course"
                      ? 'bg-[#102A43] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Course Enquiry</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setEnquiryType("workshop");
                    setFormData({ ...formData, subject: "Free Campus Workshop" });
                  }}
                  className={`p-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1.5 ${
                    enquiryType === "workshop"
                      ? 'bg-[#102A43] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Workshop Booking</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setEnquiryType("service");
                    setFormData({ ...formData, subject: "Enterprise Service Project" });
                  }}
                  className={`p-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1.5 ${
                    enquiryType === "service"
                      ? 'bg-[#102A43] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Business Services</span>
                </button>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-slate-50 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-[#102A43]">Inquiry Formatted & Sent!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Your inquiry has been launched on official WhatsApp. We look forward to conversing with you!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-[#102A43] text-white text-xs font-bold rounded-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0323 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Subject / Course / Service *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Specific Requirements *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Detail your request or queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF7900] to-[#E56D00] hover:from-[#E56D00] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via Official WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      Automatically opens WhatsApp with your selected category and customized message.
                    </p>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
