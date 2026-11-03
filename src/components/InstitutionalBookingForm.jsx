import { useState } from 'react';
import { Building2, Send, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { WORKSHOPS_DATA } from '../data/workshopsData';
import { getWhatsAppUrl } from '../data/companyData';

export default function InstitutionalBookingForm({ defaultTopic = "" }) {
  const [formData, setFormData] = useState({
    institutionName: "",
    institutionType: "University",
    contactPerson: "",
    phone: "",
    city: "Peshawar",
    topic: defaultTopic || WORKSHOPS_DATA.topics[0],
    participants: "50 - 100 Students",
    requirements: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = getWhatsAppUrl('workshop', formData);
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
      <div className="bg-[#102A43] p-6 text-white relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#FF7900] text-white">
            100% Free Campus Sessions
          </span>
          <span className="text-xs text-sky-300 font-semibold flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> All KPK Districts
          </span>
        </div>
        <h3 className="text-2xl font-black text-white">
          Invite Jafasa to Your Campus
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Provide your institutional details below. Our academic outreach team will review your preferred date and topic.
        </p>
      </div>

      {submitted ? (
        <div className="p-10 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-[#102A43]">Invitation Dispatched to Admissions Desk!</h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Thank you! Your institutional booking request has been sent directly to our campus coordination desk on WhatsApp. We will coordinate session logistics and confirm dates with you.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2.5 bg-[#FF7900] text-white text-sm font-bold rounded-lg hover:bg-[#E56D00] transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Institution Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. University of Engineering & Tech / Govt College"
                value={formData.institutionName}
                onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Institution Type *
              </label>
              <select
                value={formData.institutionType}
                onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800 bg-white"
              >
                <option value="University">University / Degree College</option>
                <option value="College">Intermediate College</option>
                <option value="School">High School / Cadet College</option>
                <option value="Student Society">Student Society / Tech Club</option>
                <option value="Educational Academy">Educational Academy / NGO</option>
                <option value="Technology Community">Technology Community</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Contact Person *
              </label>
              <input
                type="text"
                required
                placeholder="HOD / Faculty / President"
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                City / District (KPK) *
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800 bg-white"
              >
                {WORKSHOPS_DATA.cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
                <option value="Other KPK Region">Other KPK District</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Session Topic *
              </label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800 bg-white"
              >
                {WORKSHOPS_DATA.topics.map((top) => (
                  <option key={top} value={top}>{top}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Expected Participants *
              </label>
              <select
                value={formData.participants}
                onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800 bg-white"
              >
                <option value="30 - 50 Students">30 - 50 Students</option>
                <option value="50 - 100 Students">50 - 100 Students</option>
                <option value="100 - 250 Students">100 - 250 Students</option>
                <option value="250+ Students (Auditorium)">250+ Students (Auditorium Session)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Additional Requirements / Preferred Dates (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Preferred morning timing, specific focus on career roadmaps or lab demonstration..."
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7900] text-slate-800 resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF7900] to-[#E56D00] hover:from-[#E56D00] hover:to-[#CC5E00] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-[#FF7900]/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <Building2 className="w-5 h-5" />
              <span>Invite Jafasa to Your Campus</span>
            </button>
            <p className="text-[11px] text-center text-slate-500 mt-2">
              Free of charge for registered schools, colleges, and universities across Khyber Pakhtunkhwa.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
