import { useState } from 'react';
import { ShieldCheck, MessageSquare, Sparkles, CheckCircle, User } from 'lucide-react';
import { FOUNDERS_DATA } from '../data/foundersData';

export default function FounderSection() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (founderId, fallbackSrc) => {
    setImgErrors(prev => {
      // If already tried fallback or no fallback, mark failed
      if (prev[founderId] === fallbackSrc) {
        return { ...prev, [founderId]: 'failed' };
      }
      return { ...prev, [founderId]: fallbackSrc };
    });
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA] relative overflow-hidden" id="leadership">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-24 w-96 h-96 rounded-full bg-[#102A43]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 -mr-24 w-96 h-96 rounded-full bg-[#FF7900]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Strong Brand Message */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A43]/10 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-4 border border-[#102A43]/15">
            <ShieldCheck className="w-4 h-4 text-[#FF7900]" />
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102A43] tracking-tight">
            {FOUNDERS_DATA.sectionTitle}
          </h2>
          <p className="text-lg text-[#FF7900] font-semibold mt-2">
            {FOUNDERS_DATA.sectionSubtitle}
          </p>
          <div className="mt-6 p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-slate-200/80 text-slate-700 text-sm sm:text-base leading-relaxed italic">
            "{FOUNDERS_DATA.brandMessage}"
          </div>
        </div>

        {/* Real Founders Cards Displayed Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {FOUNDERS_DATA.founders.map((founder) => {
            const currentImg = imgErrors[founder.id] 
              ? (imgErrors[founder.id] === 'failed' ? null : imgErrors[founder.id])
              : founder.image;

            return (
              <div
                key={founder.id}
                className="group bg-white rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-card-hover border border-slate-200/70 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container with Elegant Hover & Clean Background */}
                  <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 aspect-[16/11] border border-slate-200 flex items-center justify-center">
                    {currentImg ? (
                      <img
                        src={currentImg}
                        alt={founder.altText}
                        onError={() => handleImgError(founder.id, founder.fallbackImage)}
                        className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400">
                        <User className="w-16 h-16 text-slate-300 mb-2" />
                        <span className="text-xs font-semibold text-slate-500">{founder.name}</span>
                        <span className="text-[10px] text-slate-400">{founder.designation}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
                    
                    {/* Badge */}
                    <div className="absolute bottom-3 left-3 bg-[#102A43]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF7900]" />
                      <span>{founder.designation}</span>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#102A43] group-hover:text-[#FF7900] transition-colors">
                        {founder.name}
                      </h3>
                      <p className="text-sm sm:text-base font-bold text-[#0284C7] mt-0.5">
                        {founder.designation}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed pt-1">
                      {founder.bio}
                    </p>

                    {/* Focus Areas */}
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                        Core Focus & Domain Leadership:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {founder.focusAreas.map((area, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                            <CheckCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                            <span className="font-medium truncate">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Official Executive Profile
                  </span>
                  <a
                    href={founder.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A43] hover:text-[#FF7900] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Connect via WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
