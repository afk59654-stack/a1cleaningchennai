import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Tag, 
  CalendarClock, 
  HeartHandshake, 
  MapPin, 
  Phone, 
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US_POINTS, BUSINESS_CONFIG, getWhatsAppLink, getTelLink } from '../config/businessData';

const ICONS = [
  ShieldCheck,    // Professional service
  Users,          // Reliable workers
  Sparkles,       // Quality cleaning
  Tag,            // Transparent pricing
  CalendarClock,  // Flexible scheduling
  HeartHandshake, // Customer satisfaction
  MapPin          // Chennai local service
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wider mb-3 border border-gray-300 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-black" />
            <span>Chennai Benchmark Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#0a0a0a] tracking-tight">
            Why Discerning Chennai Clients Choose Us
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
            From single-disc rotary tile buffing to certified Diversey Taski chemicals, we deliver luxury care with zero advance payment.
          </p>
        </div>

        {/* Core Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {WHY_CHOOSE_US_POINTS.map((item, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];

            return (
              <div
                key={idx}
                id={`why-choose-card-${idx}`}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-2xs hover:shadow-md hover:border-black transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white mb-5 transition-transform group-hover:scale-105">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-[#0a0a0a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Certified Luxury Protocol</span>
                </div>
              </div>
            );
          })}

          {/* Direct Booking Card */}
          <div className="bg-[#0a0a0a] rounded-3xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-md border border-black">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Direct WhatsApp Booking
              </span>
              <h3 className="text-xl font-black text-white mt-2">
                Ready for a Fresh & Spotless Space?
              </h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                Connect with our Chennai customer desk immediately. We schedule same-day or planned dates across Chennai.
              </p>
            </div>

            <div className="pt-5 space-y-2.5">
              <a
                href={getWhatsAppLink(`Hello ${BUSINESS_CONFIG.name}, I want to book a cleaning service in Chennai.`)}
                target="_blank"
                rel="noopener noreferrer"
                id="why-us-whatsapp-btn"
                className="w-full py-3 px-4 rounded-full text-xs sm:text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={getTelLink()}
                id="why-us-call-btn"
                className="w-full py-2.5 px-4 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center gap-1.5 transition-all active:scale-95 text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_CONFIG.phoneRaw}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
