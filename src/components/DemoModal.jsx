import { useState } from 'react';
import { X, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { getWhatsAppUrl } from '../data/companyData';

export default function DemoModal({ isOpen, onClose, defaultCourse = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: defaultCourse || COURSES_DATA[0].title,
    mode: "Online (Interactive Zoom)",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate prefilled WhatsApp URL and dispatch
    const url = getWhatsAppUrl('demo', formData);
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#102A43] via-[#071B35] to-[#04101E] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FF7900] text-white">
              100% Free
            </span>
            <span className="text-xs text-slate-300">No Obligation</span>
          </div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span>Book Your FREE Demo Class</span>
            <Sparkles className="w-5 h-5 text-[#FF7900]" />
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Experience our hands-on pedagogy and meet our instructors before paying a single rupee.
          </p>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-[#102A43]">Demo Class Request Dispatched!</h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              We have forwarded your details to our WhatsApp admissions desk. Our team will verify your slot and send class joining credentials shortly.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-[#102A43] text-white text-sm font-semibold rounded-lg hover:bg-[#071B35] transition-colors"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Student Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] focus:border-transparent text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 0323 1234567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] focus:border-transparent text-slate-800"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Selected Course *
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800 bg-white"
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Learning Mode *
                </label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800 bg-white"
                >
                  <option value="Online (Interactive Zoom)">Online (Interactive Zoom)</option>
                  <option value="Physical Campus">Physical Campus</option>
                  <option value="Hybrid (Physical + Online)">Hybrid (Physical + Online)</option>
                  <option value="Weekend Batch">Weekend Batch</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Message / Prior Experience (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Tell us about your background or any specific questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF7900] to-[#E56D00] hover:from-[#E56D00] hover:to-[#CC5E00] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#FF7900]/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Your FREE Demo Class</span>
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                Clicking opens official WhatsApp with your demo class request prefilled.
              </p>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
