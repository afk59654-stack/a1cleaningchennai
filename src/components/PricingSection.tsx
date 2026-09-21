import React, { useState } from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Phone, 
  Tag, 
  ShieldCheck, 
  HelpCircle,
  Sparkles,
  Info,
  ArrowRight,
  Plus,
  Check,
  Building2,
  Home,
  Layers,
  ShoppingBag,
  Clock,
  Sparkle
} from 'lucide-react';
import { 
  PRICING_PLANS, 
  COMMERCIAL_OFFICE_PLAN,
  ROOM_BY_ROOM_SERVICES,
  ADD_ON_SERVICES,
  ALL_CHOOSE_SERVICES,
  EXACT_ADDON_SERVICES,
  BUSINESS_CONFIG, 
  getWhatsAppLink, 
  getTelLink,
  ServicePriceItem
} from '../config/businessData';
import { useCart } from '../context/CartContext';

export const PricingSection: React.FC = () => {
  const { addItem, removeItem, items, totalPrice, openCart } = useCart();
  const [serviceFilter, setServiceFilter] = useState<'all' | 'room' | 'service' | 'fullhome' | 'commercial'>('all');
  const [sqFtInput, setSqFtInput] = useState<number>(1200);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const selectedAddonsCount = items.filter(i => EXACT_ADDON_SERVICES.some(a => a.id === i.id)).length;

  const handleAddToCart = (
    id: string, 
    title: string, 
    price: number, 
    priceDisplay: string, 
    category: 'bhk' | 'room' | 'addon' | 'commercial', 
    bookingDesc: string, 
    unit?: string,
    image?: string
  ) => {
    addItem({
      id,
      title,
      price,
      priceDisplay,
      category,
      bookingDescription: bookingDesc,
      unit,
      image
    });

    setAddedIds(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [id]: false }));
    }, 1800);
  };

  const commercialEstimatedPrice = Math.max(sqFtInput * COMMERCIAL_OFFICE_PLAN.ratePerSqFt, 3500);

  return (
    <section id="pricing" className="py-16 md:py-24 relative bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wider mb-3 border border-gray-300 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Ultra-Luxury Standard • Transparent Rates</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#0a0a0a] tracking-tight">
            Full Home & Commercial Cleaning Rates
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Fixed, upfront rates for residential apartments, independent villas, and commercial workspaces across Chennai. Add to cart for combined bookings with zero advance.
          </p>
        </div>

        {/* Top Tier: BHK Residential Plans + Office & Commercial Space side-by-side */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0a0a0a] tracking-tight flex items-center gap-2">
                <Home className="w-5 h-5 text-black" />
                <span>Full Home Deep Cleaning – BHK Packages</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                Complete top-to-bottom deep sanitization with rotary machine floor buffing and bathroom descaling.
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Inspection First • Pay After</span>
            </span>
          </div>

          {/* Grid with 1 BHK, 2 BHK cards and Commercial Office Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* 1 BHK and 2 BHK Residential Cards */}
            {PRICING_PLANS.map((plan) => {
              const isAdded = !!addedIds[plan.id];
              const isInCart = items.some(i => i.id === plan.id);
              const planWhatsAppMsg = `Hi ${BUSINESS_CONFIG.name}, I want to book "${plan.name}" Deep Cleaning (${plan.priceDisplay}) for my Chennai home.`;

              return (
                <div
                  key={plan.id}
                  id={`pricing-card-${plan.id}`}
                  className={`group flex flex-col justify-between rounded-3xl p-5 transition-all duration-300 relative overflow-hidden bg-white ${
                    plan.highlight
                      ? 'ring-2 ring-black shadow-lg border border-black'
                      : 'border border-gray-200 shadow-2xs hover:shadow-md hover:border-gray-400'
                  }`}
                >
                  {/* Badges */}
                  {plan.originalPrice && (
                    <div className="absolute top-2.5 right-2.5 z-20 bg-emerald-700 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      Special Offer
                    </div>
                  )}
                  {plan.highlight && !plan.originalPrice && (
                    <div className="absolute top-2.5 right-2.5 z-20 bg-[#0a0a0a] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      Most Booked
                    </div>
                  )}

                  <div>
                    {/* Interior Photo */}
                    <div className="relative h-44 -mx-5 -mt-5 mb-4 overflow-hidden rounded-t-3xl bg-gray-100">
                      <img 
                        src={plan.image} 
                        alt={`${plan.name} Interior Cleaning`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-black/80 text-white backdrop-blur-md border border-white/20">
                          {plan.name}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between text-white">
                        <span className="text-xs text-gray-300 font-medium">Starting from</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-black text-white drop-shadow">{plan.priceDisplay}</span>
                          {plan.originalPrice && (
                            <span className="text-sm font-semibold text-gray-300 line-through">
                              {plan.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-3">
                      <h4 className="text-xl font-black text-[#0a0a0a] tracking-tight">
                        {plan.name} Full Home Cleaning
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5">
                        {plan.subtitle}
                      </p>
                    </div>

                    {/* Price display block with discounted presentation */}
                    <div className="py-3 px-3.5 my-3 border-y border-gray-100 bg-gray-50 rounded-2xl">
                      <span className="text-[10px] font-bold uppercase text-gray-500 block">
                        Full House Clean • Starting From
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl sm:text-3xl font-black text-[#0a0a0a] tracking-tight">
                          {plan.priceDisplay}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-base font-semibold text-gray-400 line-through">
                            {plan.originalPrice}
                          </span>
                        )}
                        <span className="text-xs text-gray-500 font-medium">/ onwards</span>
                      </div>
                      {plan.originalPrice && (() => {
                        const originalNumeric = parseInt(plan.originalPrice.replace(/[^0-9]/g, ''), 10);
                        const savings = originalNumeric && originalNumeric > plan.priceNumeric ? originalNumeric - plan.priceNumeric : 0;
                        return (
                          <div className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                            <span>Regular Price {plan.originalPrice} {savings > 0 ? `(Save ₹${savings.toLocaleString('en-IN')})` : ''}</span>
                          </div>
                        );
                      })()}
                    </div>

                    {/* Add-Ons Service Options */}
                    <div className="my-3 bg-gray-50/90 p-3 rounded-2xl border border-gray-200 text-xs">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-[#0a0a0a] flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                          <Plus className="w-3.5 h-3.5 text-black" />
                          <span>Add-Ons Service Options:</span>
                        </span>
                        <span className="text-[10px] text-gray-500 font-medium">Optional</span>
                      </div>
                      <div className="space-y-1.5">
                        {EXACT_ADDON_SERVICES.map((addon) => {
                          const isAddonInCart = items.some(i => i.id === addon.id);
                          return (
                            <button
                              key={addon.id}
                              type="button"
                              onClick={() => {
                                if (isAddonInCart) {
                                  removeItem(addon.id);
                                } else {
                                  addItem({
                                    id: addon.id,
                                    title: addon.name,
                                    price: addon.priceNumeric,
                                    priceDisplay: addon.priceDisplay,
                                    category: 'addon',
                                    bookingDescription: addon.shortDescription,
                                    image: addon.image
                                  }, 1, false);
                                }
                              }}
                              className={`w-full flex items-center justify-between py-1.5 px-2.5 rounded-xl text-xs transition-all text-left ${
                                isAddonInCart
                                  ? 'bg-black text-white font-bold shadow-2xs'
                                  : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-200'
                              }`}
                            >
                              <span className="truncate pr-1.5 font-medium">{addon.name}</span>
                              <span className={`text-[11px] font-bold shrink-0 ${isAddonInCart ? 'text-amber-300' : 'text-[#0a0a0a]'}`}>
                                {isAddonInCart ? '✓ Added' : `+${addon.priceDisplay}`}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Features checklist */}
                    <ul className="space-y-1.5 my-3 text-xs text-gray-700">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(
                        plan.id, 
                        `${plan.name} Full Home Deep Cleaning`, 
                        plan.priceNumeric, 
                        plan.priceDisplay, 
                        'bhk', 
                        plan.bookingDescription, 
                        undefined, 
                        plan.image
                      )}
                      id={`add-to-cart-${plan.id}`}
                      className={`w-full py-3 px-4 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-2xs ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : isInCart
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-[#0a0a0a] text-white hover:bg-gray-800'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Cart</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add to Cart ({plan.priceDisplay})</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getWhatsAppLink(planWhatsAppMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-emerald-50 hover:text-emerald-800 text-[#0a0a0a] border border-gray-200 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600 fill-current" />
                      <span>WhatsApp Book</span>
                    </a>
                  </div>

                </div>
              );
            })}

            {/* Right-Side Featured Card: Office & Commercial Spaces Starting at ₹6 / sq.ft */}
            <div 
              id="commercial-office-card"
              className="flex flex-col justify-between rounded-3xl p-5 bg-black text-white relative overflow-hidden shadow-xl border-2 border-black group"
            >
              {/* Subtle luxury glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Image Header */}
                <div className="relative h-44 -mx-5 -mt-5 mb-4 overflow-hidden rounded-t-3xl bg-gray-900">
                  <img 
                    src={COMMERCIAL_OFFICE_PLAN.image} 
                    alt="Office Commercial Places Cleaning in Chennai"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-amber-400 text-black shadow-sm">
                      Commercial & Office
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between">
                    <span className="text-xs text-gray-300">Rate / Sq.Ft</span>
                    <span className="text-xl font-black text-amber-300 drop-shadow">Starting from ₹6/sq.ft</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h4 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-amber-400" />
                    <span>Commercial & Office Cleaning</span>
                  </h4>
                  <p className="text-xs text-gray-300 line-clamp-1 mt-0.5">
                    {COMMERCIAL_OFFICE_PLAN.subtitle}
                  </p>
                </div>

                {/* Rate Highlight Block */}
                <div className="py-3 px-3.5 my-3 rounded-2xl bg-white/10 border border-white/15">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] font-bold text-gray-300 uppercase">Starting Rate</span>
                    <span className="text-2xl sm:text-3xl font-black text-amber-400">
                      Starting from ₹6 <span className="text-xs font-medium text-gray-300">/ sq. ft.</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300 mt-1">
                    IT Offices • Retail Showrooms • Clinics • Banks • Commercial Spaces
                  </p>
                </div>

                {/* Booking Description */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 leading-snug my-2">
                  <span className="font-bold text-white block mb-1">Commercial Scope:</span>
                  {COMMERCIAL_OFFICE_PLAN.bookingDescription}
                </div>

                {/* Quick Area Estimator */}
                <div className="space-y-1.5 my-3">
                  <div className="flex justify-between text-xs text-gray-300 font-semibold">
                    <span>Est. Area: {sqFtInput} sq.ft</span>
                    <span className="text-amber-300 font-bold">~ ₹{commercialEstimatedPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <input 
                    type="range" 
                    min="400" 
                    max="10000" 
                    step="200"
                    value={sqFtInput} 
                    onChange={(e) => setSqFtInput(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400">
                    <span>500 sqft</span>
                    <span>2,500 sqft</span>
                    <span>10,000+ sqft</span>
                  </div>
                </div>

                {/* Commercial Features */}
                <ul className="space-y-1.5 my-3 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Carpet extraction & floor machine buffing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Glass partitions & desk sanitization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Night shift / weekend timing available</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-3 border-t border-white/15 relative z-10">
                <button
                  type="button"
                  onClick={() => handleAddToCart(
                    `commercial-${sqFtInput}sqft`, 
                    `Commercial Deep Cleaning (${sqFtInput} sq.ft @ ₹6/sq.ft)`, 
                    commercialEstimatedPrice, 
                    `₹${commercialEstimatedPrice.toLocaleString('en-IN')}`, 
                    'commercial', 
                    `Commercial deep sanitization for approx ${sqFtInput} sq.ft space starting at ₹6/sq.ft. Includes workstation sanitization, floor buffing, glass partition wiping, and washroom descaling.`, 
                    'custom space',
                    COMMERCIAL_OFFICE_PLAN.image
                  )}
                  className="w-full py-3 px-4 rounded-full text-xs font-bold bg-amber-400 hover:bg-amber-300 text-black flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add {sqFtInput} sq.ft to Cart</span>
                </button>

                <a
                  href={getWhatsAppLink(`Hello ${BUSINESS_CONFIG.name}, I need a quote for our commercial office (${sqFtInput} sq.ft) in Chennai starting at ₹6 per sq.ft.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 bg-white/10 hover:bg-emerald-600 text-white border border-white/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                  <span>Get Commercial Quote</span>
                </a>
              </div>
            </div>

          </div>

          {/* Pricing Notice */}
          <div className="mt-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-gray-200 text-black flex items-center justify-center shrink-0">
                <Info className="w-4 h-4" />
              </div>
              <div className="flex-1 space-y-0.5">
                <p className="text-xs sm:text-sm font-bold text-[#0a0a0a]">
                  Final price is confirmed after examining property size, condition and specific requirements.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our team inspects total built-up sq.ft, balcony counts, and scale buildup before beginning. No surprise charges, pay after 100% satisfaction.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Zero Advance</span>
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            ADD-ON SERVICES SECTION (EXACTLY 3 OPTIONAL ADD-ONS)
            1. Kitchen Chimney Deep Cleaning – ₹499
            2. Fridge Interior Deep Cleaning – ₹399
            3. Kitchen Cabinet & Interior Deep Cleaning – ₹499
           ========================================================================= */}
        <div id="add-ons" className="mb-14 pt-10 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-[#0a0a0a] text-xs font-bold uppercase tracking-wider mb-2 border border-gray-300 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Optional Add-On Services</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight">
              Add-On Cleaning Services
            </h3>
            <p className="text-xs sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto leading-relaxed">
              Enhance your 1 to 5 BHK home cleaning with these 3 specialized interior and appliance treatments. Add or remove any add-on with one click—your total price updates automatically.
            </p>
          </div>

          {/* Exactly 3 Professional Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {EXACT_ADDON_SERVICES.map((addon) => {
              const isInCart = items.some(i => i.id === addon.id);
              const addonWhatsAppMsg = `Hi ${BUSINESS_CONFIG.name}, I want to add "${addon.name}" (${addon.priceDisplay}) to my cleaning booking in Chennai.`;

              return (
                <div
                  key={addon.id}
                  id={`addon-card-${addon.id}`}
                  className={`group flex flex-col justify-between rounded-3xl p-5 transition-all duration-300 relative overflow-hidden bg-white ${
                    isInCart
                      ? 'ring-2 ring-black shadow-lg border border-black'
                      : 'border border-gray-200 shadow-2xs hover:shadow-md hover:border-gray-400'
                  }`}
                >
                  {/* Badge */}
                  <div className="absolute top-2.5 right-2.5 z-20">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md ${
                      isInCart ? 'bg-emerald-600 text-white' : 'bg-[#0a0a0a] text-white'
                    }`}>
                      {isInCart ? '✓ Selected' : addon.badge}
                    </span>
                  </div>

                  <div>
                    {/* Visual Photo */}
                    <div className="relative h-44 -mx-5 -mt-5 mb-4 overflow-hidden rounded-t-3xl bg-gray-100">
                      <img 
                        src={addon.image} 
                        alt={addon.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between text-white">
                        <span className="text-xs text-gray-200 font-semibold">Optional Add-On</span>
                        <span className="text-2xl font-black text-amber-300 drop-shadow">{addon.priceDisplay}</span>
                      </div>
                    </div>

                    {/* Title & Price Header */}
                    <div className="mb-2">
                      <h4 className="text-lg sm:text-xl font-black text-[#0a0a0a] tracking-tight">
                        {addon.name}
                      </h4>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl font-black text-[#0a0a0a]">{addon.priceDisplay}</span>
                        <span className="text-xs text-gray-500 font-medium">/ treatment</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-gray-600 leading-relaxed my-3 bg-gray-50/80 p-3 rounded-2xl border border-gray-100">
                      {addon.shortDescription}
                    </p>
                  </div>

                  {/* Add / Remove Control */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    <button
                      type="button"
                      id={`addon-btn-${addon.id}`}
                      onClick={() => {
                        if (isInCart) {
                          removeItem(addon.id);
                        } else {
                          addItem({
                            id: addon.id,
                            title: addon.name,
                            price: addon.priceNumeric,
                            priceDisplay: addon.priceDisplay,
                            category: 'addon',
                            bookingDescription: addon.shortDescription,
                            image: addon.image
                          }, 1, false);
                        }
                      }}
                      className={`w-full py-3 px-4 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-2xs ${
                        isInCart
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-[#0a0a0a] text-white hover:bg-gray-800'
                      }`}
                    >
                      {isInCart ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>✓ Added (Click to Remove)</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Booking ({addon.priceDisplay})</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getWhatsAppLink(addonWhatsAppMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-emerald-50 hover:text-emerald-800 text-[#0a0a0a] border border-gray-200 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Automatic Total Price Calculator Bar */}
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-3xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Live Total Price:</span>
                  <span className="text-xl sm:text-2xl font-black text-[#0a0a0a]">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                  {selectedAddonsCount > 0 && (
                    <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      +{selectedAddonsCount} Add-On{selectedAddonsCount > 1 ? 's' : ''} Selected
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 mt-0.5">
                  Zero advance payment required • Pay after 100% inspection satisfaction
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={openCart}
                id="addon-cart-open-btn"
                className="flex-1 sm:flex-none py-2.5 px-5 rounded-full bg-black text-white hover:bg-gray-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Cart ({items.reduce((sum, i) => sum + i.quantity, 0)})</span>
              </button>

              <a
                href={getWhatsAppLink(
                  `Hi ${BUSINESS_CONFIG.name}, I want to book cleaning in Chennai.\n` +
                  (items.length > 0
                    ? `Order Summary:\n${items.map(i => `• ${i.title} (${i.priceDisplay}) x${i.quantity}`).join('\n')}\nTotal: ₹${totalPrice.toLocaleString('en-IN')}`
                    : `Please share prices for BHK + Add-on services.`)
                )}
                target="_blank"
                rel="noopener noreferrer"
                id="addon-whatsapp-book-btn"
                className="flex-1 sm:flex-none py-2.5 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CHOOSE YOUR CLEANING SERVICE (ROOM BY ROOM & SERVICE BY SERVICE BOOKING)
           ========================================================================= */}
        <div id="services" className="pt-16 border-t border-gray-200">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-[#0a0a0a] text-xs font-bold uppercase tracking-wider mb-2 border border-gray-300 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Chennai Professional Cleaning</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight">
              Choose Your Cleaning Service
            </h3>
            <p className="text-xs sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto leading-relaxed">
              Select room by room, individual appliances & furniture, or book complete full home and commercial packages. Simple, transparent starting prices with zero advance payment and pay-after-inspection guarantee.
            </p>

            {/* Mobile-Friendly Category Switcher Pills */}
            <div className="mt-6 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 px-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
              <button
                type="button"
                onClick={() => setServiceFilter('all')}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 shrink-0 transition-all ${
                  serviceFilter === 'all'
                    ? 'bg-[#0a0a0a] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span>All Services</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  serviceFilter === 'all' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {ALL_CHOOSE_SERVICES.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setServiceFilter('room')}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 shrink-0 transition-all ${
                  serviceFilter === 'room'
                    ? 'bg-[#0a0a0a] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Room by Room</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  serviceFilter === 'room' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {ALL_CHOOSE_SERVICES.filter(s => s.category === 'room').length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setServiceFilter('service')}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 shrink-0 transition-all ${
                  serviceFilter === 'service'
                    ? 'bg-[#0a0a0a] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Service by Service</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  serviceFilter === 'service' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {ALL_CHOOSE_SERVICES.filter(s => s.category === 'service').length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setServiceFilter('fullhome')}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 shrink-0 transition-all ${
                  serviceFilter === 'fullhome'
                    ? 'bg-[#0a0a0a] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Full Home</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  serviceFilter === 'fullhome' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {ALL_CHOOSE_SERVICES.filter(s => s.category === 'fullhome').length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setServiceFilter('commercial')}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 shrink-0 transition-all ${
                  serviceFilter === 'commercial'
                    ? 'bg-[#0a0a0a] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Office / Commercial</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  serviceFilter === 'commercial' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {ALL_CHOOSE_SERVICES.filter(s => s.category === 'commercial').length}
                </span>
              </button>
            </div>
          </div>

          {/* Services Grid: Clean, Simple, Professional & Mobile-Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-6">
            {ALL_CHOOSE_SERVICES.filter(s => {
              if (serviceFilter === 'all') return true;
              return s.category === serviceFilter;
            }).map((service) => {
              const isAdded = !!addedIds[service.id];
              const isInCart = items.some(i => i.id === service.id);
              const serviceQuoteMsg = `Hi ${BUSINESS_CONFIG.name}, I want to book "${service.name}" (${service.startingPrice} ${service.unit || ''}) in Chennai.`;

              return (
                <div 
                  key={service.id}
                  id={`choose-service-${service.id}`}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-gray-400 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Photo with Mobile-Safe Height */}
                    {service.image && (
                      <div className="h-40 sm:h-48 overflow-hidden bg-gray-100 relative">
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {service.popular && (
                          <span className="absolute top-2.5 right-2.5 bg-black text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                            Popular
                          </span>
                        )}

                        <div className="absolute bottom-2.5 left-3 right-3 flex items-baseline justify-between text-white">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs">
                            {service.categoryLabel}
                          </span>
                          <span className="text-lg sm:text-xl font-black text-amber-300 drop-shadow">
                            {service.startingPrice}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div className="p-4 sm:p-5 space-y-3">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-black text-[#0a0a0a] text-base sm:text-lg">
                            {service.name}
                          </h4>
                        </div>
                        {service.unit && (
                          <span className="text-[11px] font-medium text-gray-500 block mt-0.5">
                            Unit: {service.unit}
                          </span>
                        )}
                      </div>

                      {/* Clear, simple checklist - highly readable on mobile */}
                      <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-xs text-gray-700">
                        <span className="font-bold text-[#0a0a0a] block mb-1.5 text-[11px] uppercase tracking-wider">
                          What is Included:
                        </span>
                        <ul className="space-y-1.5">
                          {service.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-1.5 leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="text-gray-700">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* If Commercial, include interactive quick preview */}
                      {service.isCommercial && (
                        <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-2.5 text-xs text-emerald-950 space-y-1">
                          <div className="flex justify-between font-bold text-[11px]">
                            <span>Sample Area: 1,200 sq.ft</span>
                            <span className="text-emerald-800">Est: ₹7,200</span>
                          </div>
                          <p className="text-[11px] text-emerald-800 leading-tight">
                            Custom scale based on exact floor plan. Night & weekend schedules available.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Buttons with comfortable touch targets (44px min) */}
                  <div className="p-4 sm:p-5 pt-0 space-y-2">
                    {/* Add to Cart Button */}
                    <button
                      type="button"
                      onClick={() => handleAddToCart(
                        service.id,
                        service.name,
                        service.priceNumeric,
                        service.startingPrice,
                        service.category === 'room' 
                          ? 'room' 
                          : service.category === 'service' 
                          ? 'addon' 
                          : service.category === 'fullhome' 
                          ? 'bhk' 
                          : 'commercial',
                        service.bookingDescription,
                        service.unit,
                        service.image
                      )}
                      id={`choose-cart-btn-${service.id}`}
                      className={`w-full py-3 px-4 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-2xs ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : isInCart
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-[#0a0a0a] text-white hover:bg-gray-800'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add to Cart ({service.startingPrice})</span>
                        </>
                      )}
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={getWhatsAppLink(serviceQuoteMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 rounded-full text-xs font-semibold text-[#0a0a0a] bg-gray-100 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 flex items-center justify-center gap-1.5 transition-colors text-center"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={getTelLink()}
                        className="w-full py-2 px-3 rounded-full text-xs font-semibold text-[#0a0a0a] bg-white hover:bg-gray-100 border border-gray-200 flex items-center justify-center gap-1.5 transition-colors text-center"
                      >
                        <Phone className="w-3.5 h-3.5 text-black" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Pricing Guarantee Footer */}
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-200 text-xs sm:text-sm text-gray-700 space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-[#0a0a0a] text-sm">
              <ShieldCheck className="w-5 h-5 text-black shrink-0" />
              <span>{BUSINESS_CONFIG.name} Quality Promise:</span>
            </div>
            <p className="leading-relaxed text-gray-600">
              All prices shown are starting transparent benchmarks. Before starting work, our supervisor reviews room dimensions, heavy scale accumulation, and custom add-ons with you. You only pay after our complete supervisor inspection.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 font-semibold text-gray-800 text-xs border-t border-gray-100">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Advance Payment</span>
              </span>
              <span className="flex items-center gap-1.5 text-black">
                <Sparkles className="w-4 h-4 text-black" />
                <span>Diversey Taski Hospital-Safe Chemicals</span>
              </span>
              <span className="flex items-center gap-1.5 text-[#0a0a0a]">
                <Phone className="w-3.5 h-3.5 text-black" />
                <span>24/7 Helpline: {BUSINESS_CONFIG.phoneFormatted}</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
