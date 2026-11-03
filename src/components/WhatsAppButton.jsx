import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    const text = quickMsg.trim() 
      ? `Hello Jafasa Tech Solutions! ${quickMsg}`
      : `Hello Jafasa Tech Solutions! I would like to enquire about your training courses and corporate digital solutions.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
    setQuickMsg("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="bg-[#102A43] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#102A43] rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold">Jafasa Tech Solutions</h4>
                <p className="text-[11px] text-slate-300">Official Admissions & Support</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 bg-slate-50 text-xs text-slate-600 space-y-2">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/60">
              <p className="text-slate-700 font-medium">
                👋 Assalamu Alaikum! How can we assist you today?
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Ask about our <strong>PKR 10,000/mo courses</strong>, book a <strong>Free Demo</strong>, or invite us for a <strong>Free KPK Campus Workshop</strong>.
              </p>
            </div>

            <form onSubmit={handleSend} className="pt-2 space-y-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#FF7900] bg-white text-slate-800"
              />
              <button
                type="submit"
                className="w-full py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start WhatsApp Chat</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button with Pulse Effect */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 p-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none"
        aria-label="Contact Jafasa Tech Solutions on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10 pointer-events-none"></span>
        <MessageSquare className="w-6 h-6" />
        <span className="hidden sm:inline-block text-xs font-bold pr-1">Chat on WhatsApp</span>
      </button>
    </div>
  );
}
