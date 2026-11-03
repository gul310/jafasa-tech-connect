import { useState } from 'react';
import { X, Search, CheckCircle2, AlertCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/companyData';

export default function SEOAuditModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    websiteUrl: "",
    name: "",
    phone: "",
    goals: "Improve local Google presence & technical site health"
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = getWhatsAppUrl('seo_audit', formData);
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#102A43] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FF7900] text-white mb-2">
            Technical & On-Page Review
          </div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span>Request a Professional Website Audit</span>
            <Search className="w-5 h-5 text-[#38BDF8]" />
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            We evaluate technical crawlability, mobile responsiveness, Core Web Vitals, and keyword relevance.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-[#102A43]">SEO Audit Request Sent!</h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Our technical SEO specialists will inspect your domain and share key findings and improvement recommendations on WhatsApp.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 px-6 py-2.5 bg-[#102A43] text-white text-sm font-semibold rounded-lg hover:bg-[#071B35] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Website URL *
              </label>
              <input
                type="url"
                required
                placeholder="https://example.com"
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Contact Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0323 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Current Search Objectives / Problems
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Low local visibility in Peshawar, slow site speed, missing Google Map ranking..."
                value={formData.goals}
                onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800 resize-none"
              />
            </div>

            {/* Ethical Disclaimer */}
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-800">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Ethical Compliance:</strong> Jafasa Tech Solutions adheres to Google Search Essentials and white-hat SEO practices. We do not promise guaranteed #1 rankings or manipulated traffic.
              </span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF7900] to-[#E56D00] hover:from-[#E56D00] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#FF7900]/25 transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Submit SEO Audit Request</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
