import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  Phone, 
  MessageCircle 
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink, getTelLink } from '../config/businessData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image with Cleaner & Materials */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
                  alt="High quality cleaning materials, brushes and eco-safe solutions"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Local Chennai Badge */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white p-3.5 rounded-2xl shadow-md border border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#0a0a0a]">Chennai Headquarters</div>
                  <div className="text-[11px] text-gray-500">Residential & Commercial</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wider border border-gray-300 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-black" />
              <span>Professional Cleaning Company</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#0a0a0a] tracking-tight">
              About {BUSINESS_CONFIG.name}
            </h2>

            <p className="text-base text-gray-700 leading-relaxed font-normal">
              Premium home and commercial cleaning services in Chennai, combining trained professionals, quality equipment, and very affordable prices across Chennai.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Chennai homes and offices face persistent environmental challenges — heavy airborne dust, humidity, and stubborn borewell salt scaling on bathroom tiles and taps. We resolve these effectively using heavy-duty vacuum extractors, rotary floor scrubbing machines, and certified, safe cleaning solutions that protect your marble, tiles, woodwork, and appliances.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-700 font-medium">100% background-verified in-house crew</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-700 font-medium">Single-disc rotary floor scrubbers</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-700 font-medium">Commercial spaces from ₹8/sq.ft</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-700 font-medium">Pay only after satisfactory inspection</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppLink("Hello, I would like to enquire about cleaning services in Chennai.")}
                target="_blank"
                rel="noopener noreferrer"
                id="about-whatsapp-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={getTelLink()}
                id="about-call-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#0a0a0a] bg-white hover:bg-gray-100 border border-gray-300 transition-all active:scale-95 shadow-2xs"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>Call {BUSINESS_CONFIG.phoneRaw}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
