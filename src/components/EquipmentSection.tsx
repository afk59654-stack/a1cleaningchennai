import React from 'react';
import { 
  Wrench, 
  FlaskConical, 
  ShieldCheck, 
  Check 
} from 'lucide-react';
import { 
  EQUIPMENT_SHOWCASE, 
  PROFESSIONAL_CHEMICALS,
  BUSINESS_CONFIG, 
  getWhatsAppLink 
} from '../config/businessData';

export const EquipmentSection: React.FC = () => {
  return (
    <section id="equipment" className="py-16 md:py-24 bg-white relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* =========================================================================
            PROFESSIONAL MACHINERY & EQUIPMENT SHOWCASE
           ========================================================================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wider mb-2 border border-gray-300">
              <Wrench className="w-3.5 h-3.5 text-black" />
              <span>Heavy-Duty Industrial Tools</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight">
              Professional Machinery & Equipment
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl mx-auto">
              We bring commercial single-disc rotary scrubbers, 1400W wet/dry injection extraction machines, and high-reach telescopic squeegees for immaculate results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EQUIPMENT_SHOWCASE.map((eq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-md hover:border-gray-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="h-44 overflow-hidden bg-gray-100 relative">
                  <img
                    src={eq.image}
                    alt={eq.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/80 text-white border border-white/20">
                    Commercial Grade
                  </span>
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#0a0a0a] text-sm sm:text-base">
                      {eq.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {eq.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
                    <Check className="w-3.5 h-3.5" />
                    <span>Included in every booking</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            CERTIFIED CHEMICALS (DIVERSEY TASKI & SAFE DEGREASERS)
           ========================================================================= */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wider mb-2 border border-gray-300">
              <FlaskConical className="w-3.5 h-3.5 text-black" />
              <span>Certified Cleaning Chemistry</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight">
              Hospital-Safe & Surface-Specific Chemicals
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl mx-auto">
              We never use corrosive unbranded acids that damage marble or grout. We exclusively utilize certified Diversey Taski series and non-toxic citrus degreasers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {PROFESSIONAL_CHEMICALS.map((chem) => (
              <div 
                key={chem.code}
                className="p-5 rounded-3xl border border-gray-200 bg-white hover:border-gray-400 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-black text-white">
                      {chem.code}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {chem.safety}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-[#0a0a0a] mt-2.5">
                    {chem.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    <strong>Target:</strong> {chem.purpose}
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-700">
                  <div className="font-semibold text-[#0a0a0a] text-[11px] mb-0.5">Key Benefit:</div>
                  <p className="leading-relaxed text-gray-600">{chem.benefit}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Banner */}
          <div className="mt-10 bg-gray-50 border border-gray-200 rounded-3xl p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-[#0a0a0a]">
                  Child, Pet & Senior-Citizen Safe Formulations
                </h5>
                <p className="text-xs text-gray-500">
                  Residue-free formulations that dry quickly with fresh, hypoallergenic fragrances.
                </p>
              </div>
            </div>
            <a
              href={getWhatsAppLink(`Hi ${BUSINESS_CONFIG.name}, what chemicals and equipment do you use for house cleaning?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 rounded-full bg-[#0a0a0a] hover:bg-gray-800 text-white text-xs font-bold flex items-center gap-2 transition-colors shrink-0"
            >
              <span>Ask Chemist / Supervisor</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
