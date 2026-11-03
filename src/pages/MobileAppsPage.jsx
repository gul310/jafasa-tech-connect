import { Smartphone, CheckCircle2, Layers, Cpu, MessageSquare, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SERVICES_DATA } from '../data/servicesData';
import { getWhatsAppUrl } from '../data/companyData';

export default function MobileAppsPage() {
  const data = SERVICES_DATA.mobileApps;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Jafasa Tech Solutions"
    },
    "serviceType": "Cross-Platform Mobile Apps, Flutter Development, React Native, Android"
  };

  return (
    <div className="pt-28 pb-20">
      <SEOHead 
        title="Mobile App Development (Flutter & React Native) — Jafasa Tech Solutions"
        description="Bespoke Android and iOS mobile app development using Flutter, React Native, and robust cloud APIs by Jafasa Tech Solutions."
        schema={schema}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#102A43] via-[#071B35] to-[#102A43] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284C7]/20 border border-[#0284C7]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Cross-Platform Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            {data.headline}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            {data.shortDesc}
          </p>
        </div>
      </section>

      {/* Interactive Mobile Device Mockup Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Mockup Render */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-72 sm:w-80 h-[560px] bg-[#071B35] rounded-[48px] p-4 shadow-2xl border-4 border-slate-700/60 ring-1 ring-white/20">
                {/* Speaker & Notch */}
                <div className="w-28 h-4 bg-black rounded-b-xl mx-auto mb-3" />
                
                {/* Simulated Screen */}
                <div className="w-full h-[480px] bg-white rounded-[32px] overflow-hidden flex flex-col justify-between p-4 shadow-inner">
                  <div>
                    {/* Simulated App Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#102A43] flex items-center justify-center text-white text-xs font-black">
                          J
                        </div>
                        <div>
                          <div className="text-xs font-black text-[#102A43]">Jafasa Mobile</div>
                          <div className="text-[10px] text-slate-400">Connected to Cloud API</div>
                        </div>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    {/* Simulated Cards */}
                    <div className="mt-4 space-y-2.5">
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-[#102A43] to-[#071B35] text-white">
                        <span className="text-[10px] text-[#38BDF8] font-bold">Real-Time Metrics</span>
                        <div className="text-xl font-black mt-0.5">99.8% Uptime</div>
                        <div className="text-[10px] text-slate-300 mt-1">Cross-platform 60 FPS performance</div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center justify-between text-xs font-bold text-[#102A43]">
                          <span>Offline Data Sync</span>
                          <span className="text-[#25D366]">Active</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2">
                          <div className="bg-[#FF7900] h-1.5 rounded-full w-4/5" />
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                        <div className="font-bold text-[#102A43]">Biometric & Secure Auth</div>
                        <p className="text-[10px] text-slate-500 mt-0.5">Encrypted local SQLite & KeyStore</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FF7900]/10 text-center">
                    <span className="text-[11px] font-bold text-[#FF7900]">Native Gestures & Haptics</span>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="w-32 h-1 bg-white/40 rounded-full mx-auto mt-3" />
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900] bg-[#FF7900]/10 px-3 py-1 rounded-full">
                Native Speed • Single Codebase
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#102A43]">
                High-Performance Apps Built with Flutter & React Native
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We engineer scalable mobile applications that provide buttery smooth 60 FPS animations, offline caching, and responsive layouts across thousands of Android and iOS devices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {data.categories.map((cat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="text-sm font-bold text-[#102A43] mb-1">{cat.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={getWhatsAppUrl('service', { serviceName: 'Mobile App Development' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#102A43] hover:bg-[#071B35] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Consult with Mobile Architects</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
