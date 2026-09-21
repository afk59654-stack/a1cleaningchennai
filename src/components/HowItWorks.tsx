import React from 'react';
import { 
  PhoneCall, 
  ClipboardList, 
  Calculator, 
  CalendarCheck, 
  Home, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS, getWhatsAppLink } from '../config/businessData';

const STEP_ICONS = [
  PhoneCall,     // 01 Contact Us
  ClipboardList, // 02 Tell Us Your Cleaning Requirement
  Calculator,    // 03 Get a Quote
  CalendarCheck, // 04 Schedule Cleaning
  Home           // 05 Enjoy a Clean Home
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wider mb-3 border border-gray-300 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Seamless White-Glove Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#0a0a0a] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
            From adding rooms to your cart to final post-clean inspection, experience seamless luxury service across Chennai.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const IconComponent = STEP_ICONS[idx % STEP_ICONS.length];

            return (
              <div
                key={idx}
                id={`how-it-works-step-${idx + 1}`}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-2xs hover:border-black hover:shadow-md transition-all flex flex-col items-start text-left group"
              >
                {/* Step Number & Icon Header */}
                <div className="w-full flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-black text-gray-200 group-hover:text-black transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold text-[#0a0a0a] mb-2 leading-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connection Arrow indicator on larger screens */}
                {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gray-300 pointer-events-none">
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Step 1 Quick Start CTA */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppLink("Hello A1 Professional Home Cleaning Service, I am ready to book a service.")}
            target="_blank"
            rel="noopener noreferrer"
            id="how-it-works-start-btn"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all active:scale-95"
          >
            <span>Start Step 1: Book on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
