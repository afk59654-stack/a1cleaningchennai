import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  ArrowRight,
  ShieldAlert,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SERVICES_LIST, getWhatsAppLink, getTelLink, BUSINESS_CONFIG } from '../config/businessData';

export const ServicesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-sky-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Comprehensive Cleaning Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Our Home Cleaning Services in Chennai
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Tailored residential cleaning using high-suction vacuum machines, specialized descaling chemicals, and trained technicians for every room in your home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service) => {
            const isExpanded = expandedId === service.id;
            const serviceWhatsAppMsg = `Hi ${BUSINESS_CONFIG.name}, I would like to get a quote for "${service.title}" in Chennai.`;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="flex flex-col bg-white rounded-3xl border border-sky-100/90 overflow-hidden shadow-[0_4px_24px_rgba(2,132,199,0.04)] hover:shadow-xl hover:border-sky-200 transition-all duration-300 group"
              >
                {/* Image Container with Tag */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-200">
                  <img
                    src={service.image}
                    alt={`${service.title} - Professional cleaning in Chennai`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                  {service.popular && (
                    <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                      Most Booked
                    </span>
                  )}

                  <h3 className="absolute bottom-3 left-4 right-4 text-xl font-black text-white drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>

                {/* Content Container */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Short Description */}
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>

                    {/* Features Checklist */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-sky-800 mb-1">
                        What's Included:
                      </div>
                      <ul className="space-y-1.5">
                        {service.features.slice(0, isExpanded ? service.features.length : 3).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {service.features.length > 3 && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(service.id)}
                          className="mt-2 text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 focus:outline-none"
                        >
                          {isExpanded ? (
                            <>
                              <span>Show less</span>
                              <ChevronUp className="w-3.5 h-3.5" />
                            </>
                          ) : (
                            <>
                              <span>+{service.features.length - 3} more details</span>
                              <ChevronDown className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Recommended for Tag */}
                  <div className="pt-2">
                    <div className="text-[11px] font-medium text-slate-600 bg-sky-50/50 px-3 py-1.5 rounded-xl border border-sky-100">
                      <span className="font-bold text-slate-800">Top-Rated For: </span>
                      {service.recommendedFor}
                    </div>
                  </div>

                  {/* Action Buttons: Get Quote & Direct Call */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href={getWhatsAppLink(serviceWhatsAppMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`quote-btn-${service.id}`}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-500/25 transition-all active:scale-95 text-center"
                    >
                      <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                      <span>Get Quote</span>
                    </a>

                    <a
                      href={getTelLink()}
                      id={`call-btn-${service.id}`}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all active:scale-95 text-center"
                    >
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <span>{BUSINESS_CONFIG.phoneRaw}</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Fast Help */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-7 border border-sky-100/90 shadow-[0_4px_24px_rgba(2,132,199,0.04)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Need a combination package or customized cleaning?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                We customize cleaning packages for villas, duplexes, independent homes, and offices in Chennai.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppLink(`Hello ${BUSINESS_CONFIG.name}, I need a custom cleaning package for my home in Chennai.`)}
            target="_blank"
            rel="noopener noreferrer"
            id="services-custom-package-btn"
            className="shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-500/25 transition-all active:scale-95 flex items-center gap-2"
          >
            <span>Talk with our Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
