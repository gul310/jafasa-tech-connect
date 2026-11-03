import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../data/companyData';

export default function ServiceCard({ name, desc, features = [], icon: Icon }) {
  const handleEnquire = () => {
    const url = getWhatsAppUrl('service', { serviceName: name });
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-card-hover border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        {Icon && (
          <div className="w-12 h-12 rounded-xl bg-[#102A43]/5 text-[#102A43] group-hover:bg-[#FF7900] group-hover:text-white transition-colors flex items-center justify-center mb-5">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h3 className="text-xl font-bold text-[#102A43] group-hover:text-[#FF7900] transition-colors mb-2">
          {name}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {desc}
        </p>

        {features.length > 0 && (
          <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
            {features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-slate-100">
        <button
          onClick={handleEnquire}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#102A43] text-[#102A43] hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all border border-slate-200 hover:border-[#102A43]"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Enquire for {name}</span>
          <ArrowRight className="w-3.5 h-3.5 opacity-60" />
        </button>
      </div>
    </div>
  );
}
