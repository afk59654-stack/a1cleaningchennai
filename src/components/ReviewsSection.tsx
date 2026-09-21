import React from 'react';
import { 
  Star, 
  CheckCircle, 
  MapPin, 
  MessageCircle,
  Quote
} from 'lucide-react';
import { REVIEW_PLACEHOLDERS, BUSINESS_CONFIG, getWhatsAppLink } from '../config/businessData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wider mb-3 border border-gray-300 shadow-2xs">
            <Star className="w-3.5 h-3.5 fill-black text-black" />
            <span>Verified Chennai Client Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#0a0a0a] tracking-tight">
            Client Reviews & Testimonials
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
            Read firsthand experiences from homeowners and corporate offices across Chennai who rely on {BUSINESS_CONFIG.name}.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEW_PLACEHOLDERS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-2xs hover:border-black hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Ratings */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                    <span className="ml-1 text-xs font-bold text-gray-900">
                      5.0
                    </span>
                  </div>

                  <Quote className="w-6 h-6 text-gray-200" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#0a0a0a] text-sm">
                    {review.author}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-black shrink-0" />
                    <span>{review.locality}</span>
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-800 mt-1">
                    Service: {review.serviceType}
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 text-black flex items-center justify-center shrink-0" title="Verified Customer">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Post Cleaning Assurance CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-600 mb-3">
            Zero advance payment required. 100% inspection guarantee on every single booking.
          </p>
          <a
            href={getWhatsAppLink(`Hello ${BUSINESS_CONFIG.name}, I want to book a cleaning service in Chennai.`)}
            target="_blank"
            rel="noopener noreferrer"
            id="reviews-book-whatsapp-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Book on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
