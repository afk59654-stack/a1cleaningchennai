/**
 * BUSINESS CONFIGURATION
 * Edit this file to update contact numbers, services, pricing, service areas, and reviews.
 */

export const BUSINESS_CONFIG = {
  name: "A1 Full Home Cleaning Services In Chennai",
  shortName: "A1 Professional Home Cleaning Service",
  tagline: "Luxury, Professional & Reliable Residential & Commercial Deep Cleaning in Chennai",
  
  // PRIMARY CONTACT NUMBERS (Edit here to update throughout the website)
  phoneRaw: "9042325745",
  phoneFormatted: "+91 90423 25745",
  whatsappNumber: "919042325745", // Country code 91 + 10 digit number without + or spaces
  
  // LOCATION
  city: "Chennai",
  state: "Tamil Nadu",
  country: "India",
  addressDisplay: "Serving All Residential Areas in Chennai, Tamil Nadu",
  
  // BUSINESS HOURS
  workingHours: "7:00 AM – 9:00 PM (Monday to Sunday)",
  
  // PRICING STARTING NOTE
  pricingNote: "Affordable Pricing – Get a Free Quote",
};

/**
 * Generate a pre-filled WhatsApp link
 */
export function getWhatsAppLink(customMessage?: string): string {
  const defaultMsg = `Hello ${BUSINESS_CONFIG.name}, I would like to enquire about home cleaning services in Chennai. Please provide a free quote.`;
  const message = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${message}`;
}

/**
 * Direct phone dial link
 */
export function getTelLink(): string {
  return `tel:${BUSINESS_CONFIG.phoneRaw}`;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  features: string[];
  recommendedFor: string;
  popular?: boolean;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "full-home-cleaning",
    title: "Full Home Cleaning",
    shortDesc: "Complete top-to-bottom thorough cleaning of your entire residence, covering living room, bedrooms, kitchen, bathrooms, and balconies.",
    image: "/images/team-floor-scrubbing.jpg",
    features: [
      "Floor rotary scrubbing & deep vacuuming",
      "Cobweb removal & wall dusting",
      "Fan, tube light & switchboard wiping",
      "Window panes, grills & mesh cleaning",
      "Door polish & surface sanitization"
    ],
    recommendedFor: "Move-in / Move-out, Festivals & Yearly deep clean",
    popular: true
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    shortDesc: "Intensive deep sanitation targeting hidden grime, stubborn tile stains, hard water deposits, and neglected corner areas.",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80",
    features: [
      "Heavy dirt extraction with industrial vacuum",
      "High-pressure tile & grout descaling",
      "Cabinet interior & exterior degreasing",
      "Sanitization of high-touch surfaces",
      "Hard water stain treatment"
    ],
    recommendedFor: "Homes needing an intense rejuvenation",
    popular: true
  },
  {
    id: "kitchen-cleaning",
    title: "Kitchen Cleaning",
    shortDesc: "Specialized grease removal, countertop degreasing, modular cabinet wiping, tile disinfection, and sink scrub.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    features: [
      "Oil & grease removal from wall tiles",
      "Stovetop, exhaust fan & burner scrub",
      "Modular trolley & cabinet shelf wiping",
      "Stainless steel sink descaling & shine",
      "Exhaust fan oil buildup removal"
    ],
    recommendedFor: "Oily modular kitchens & festive cooking preparation"
  },
  {
    id: "bathroom-cleaning",
    title: "Bathroom Cleaning",
    shortDesc: "Vigorous removal of hard water stains, yellow scales, soap scums, and complete disinfection of commode, tiles, and fixtures.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    features: [
      "Hard water scale removal on taps & shower",
      "Floor and wall tile buffing & stain lift",
      "Toilet bowl & washbasin deep disinfection",
      "Mirror & glass partition streak-free wipe",
      "Drain grate cleaning & odor neutralizer"
    ],
    recommendedFor: "Chennai homes with borewell hard water deposits",
    popular: true
  },
  {
    id: "sofa-cleaning",
    title: "Sofa Cleaning",
    shortDesc: "Professional wet-and-dry vacuum foam shampooing and fabric extraction to remove dust mites, sweat stains, and food spills.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    features: [
      "Deep dry extraction of micro-dust & allergens",
      "Fabric-safe chemical foam scrub",
      "Moisture and dirt extraction vacuuming",
      "Gentle leather conditioning (for leather sofas)",
      "Cushion rejuvenation & freshness fragrance"
    ],
    recommendedFor: "Fabric & leather sofas, recliners, and dining chairs"
  },
  {
    id: "bedroom-cleaning",
    title: "Bedroom Cleaning",
    shortDesc: "Dust-free bedroom revitalization including wardrobe exterior cleaning, under-bed vacuuming, mattress dry vacuuming, and AC dusting.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    features: [
      "Mattress deep vacuum extraction",
      "Wardrobe exterior & handle disinfection",
      "Under-bed and heavy furniture shift vacuuming",
      "Curtain dusting & window sill cleaning",
      "Ceiling fan blades & AC outer panel wipe"
    ],
    recommendedFor: "Allergy-free sleeping environment & guest preparation"
  },
  {
    id: "hall-cleaning",
    title: "Hall Cleaning",
    shortDesc: "Living room & dining area deep cleaning including TV cabinet dusting, showcase wiping, chandelier dusting, and floor buffing.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    features: [
      "TV unit, showpieces & glass shelf wiping",
      "Dining table & chair thorough cleaning",
      "Door frame, decorative trim & baseboard dusting",
      "Floor scrubbing & high-sheen mop",
      "Balcony sliding track & glass wipe"
    ],
    recommendedFor: "Welcoming living spaces & family gatherings"
  }
];

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  priceDisplay: string;
  originalPrice?: string;
  priceNumeric: number;
  startingLabel: string;
  image: string;
  highlight?: boolean;
  features: string[];
  bookingDescription: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "1-bhk",
    name: "1 BHK",
    subtitle: "Compact Flat / 1-Bedroom Apartment",
    startingLabel: "Starting from",
    priceDisplay: "₹2,999",
    originalPrice: "₹3,599",
    priceNumeric: 2999,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    bookingDescription: "Complete deep cleaning of 1 Bedroom, 1 Living Hall, 1 Kitchen, and 1 Bathroom. Includes floor rotary scrubbing, fan/light wiping, window track vacuuming, and full sanitization.",
    features: [
      "1 Bedroom, 1 Living Hall & 1 Kitchen",
      "1 Bathroom complete deep chemical clean & descaling",
      "Ceiling fans, light fixtures & switchboards",
      "Windows, panes & sliding track vacuuming",
      "Complete floor rotary scrubbing & mop"
    ]
  },
  {
    id: "2-bhk",
    name: "2 BHK",
    subtitle: "Standard 2-Bedroom Family Home",
    startingLabel: "Starting from",
    priceDisplay: "₹3,599",
    originalPrice: "₹3,999",
    priceNumeric: 3599,
    image: "/images/bhk2_interior_photo_1789077830830.jpg",
    highlight: true,
    bookingDescription: "Comprehensive deep cleaning for standard 2 BHK home: 2 Bedrooms, Hall, Dining, Kitchen, and up to 2 Bathrooms. Intensive tile scrubbing, kitchen degreasing, and sanitaryware descaling.",
    features: [
      "2 Bedrooms, Hall, Dining & Kitchen",
      "Up to 2 Bathrooms descaling & sanitization",
      "Kitchen grease, wall tiles & stove scrub",
      "Window grills, glass & mesh cleaning",
      "Single-disc rotary floor buffing & shine"
    ]
  },
  {
    id: "3-bhk",
    name: "3 BHK",
    subtitle: "Spacious 3-Bedroom Family Residence",
    startingLabel: "Starting from",
    priceDisplay: "₹4,599",
    originalPrice: "₹4,999",
    priceNumeric: 4599,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    bookingDescription: "In-depth deep cleaning for spacious 3 BHK residences: 3 Bedrooms, Hall, Dining, Kitchen, Utility, Balconies, and up to 3 Bathrooms. Includes mechanized floor scrubbing, window track vacuuming, and kitchen degreasing.",
    features: [
      "3 Bedrooms, Living Room, Dining & Kitchen",
      "Up to 3 Bathrooms acid-free descaling",
      "Utility area, balcony tracks & window mesh",
      "Cupboards, wardrobes exterior & fan wipe",
      "Complete rotary machine floor scrub & buff"
    ]
  },
  {
    id: "4-bhk",
    name: "4 BHK",
    subtitle: "Premium 4-Bedroom Home / Penthouse",
    startingLabel: "Starting from",
    priceDisplay: "₹5,999",
    originalPrice: "₹6,999",
    priceNumeric: 5999,
    image: "/images/bhk4_interior_photo_1789773958391.jpg",
    bookingDescription: "Exhaustive deep cleaning tailored for large 4 BHK apartments and penthouses: 4 Bedrooms, Living, Dining, Kitchen, Balconies, and up to 4 Bathrooms with motorized floor scrubbing and complete sanitization.",
    features: [
      "4 Bedrooms, Expansive Living & Dining",
      "Up to 4 Bathrooms intensive descaling",
      "All balconies, utility & window sliding tracks",
      "Fans, decorative lights & door frames cleaned",
      "Heavy-duty rotary floor machine buffing"
    ]
  },
  {
    id: "5-bhk",
    name: "5 BHK",
    subtitle: "Luxury Independent House / Duplex Villa",
    startingLabel: "Starting from",
    priceDisplay: "₹7,999",
    originalPrice: "₹8,999",
    priceNumeric: 7999,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    highlight: true,
    bookingDescription: "Complete deep cleaning for large 5 BHK residences and duplex villas: 5 Bedrooms, Living Hall, Dining, Family Lounge, Kitchen, Balconies, and up to 5 Bathrooms with mechanized floor scrubbing.",
    features: [
      "5 Bedrooms, Living, Dining & Family Lounge",
      "Up to 5 Bathrooms deep descaling & sanitization",
      "Kitchen grease scrub, cabinets & tile polish",
      "Balcony tracks, glass partitions & window grills",
      "Single-disc rotary floor buffing across all floors"
    ]
  }
];

export interface CommercialPlan {
  id: string;
  name: string;
  subtitle: string;
  startingPrice: string;
  ratePerSqFt: number;
  unit: string;
  image: string;
  features: string[];
  bookingDescription: string;
}

export const COMMERCIAL_OFFICE_PLAN: CommercialPlan = {
  id: "commercial-office",
  name: "Office & Commercial Places",
  subtitle: "Corporate Offices, Tech Parks, Retail Showrooms, Clinics & Banks",
  startingPrice: "₹6",
  ratePerSqFt: 6,
  unit: "per sq. ft.",
  image: "/images/ceiling_ladder_clean_1789076379410.jpg",
  bookingDescription: "Comprehensive commercial deep cleaning starting from ₹6 per square foot: Workstation sanitization, carpet foam extraction, rotary machine floor buffing, glass facade & partition wipe, cafeteria degreasing, and executive washroom descaling. Flexible night & weekend schedules.",
  features: [
    "Starting from ₹6 per square foot",
    "Workstation, keyboard & chair disinfection",
    "Carpet extraction & rotary floor machine scrubbing",
    "Glass partitions, doors & biometric scanner sanitization",
    "Cafeteria, pantry & executive washroom deep descaling",
    "Flexible night, weekend or shift timings"
  ]
};

export interface ServicePriceItem {
  id: string;
  name: string;
  category: 'room' | 'addon';
  startingPrice: string;
  priceNumeric: number;
  unit?: string;
  description: string;
  bookingDescription: string;
  image?: string;
  popular?: boolean;
}

export const ROOM_BY_ROOM_SERVICES: ServicePriceItem[] = [
  {
    id: "room-bathroom",
    name: "Bathroom Cleaning",
    category: "room",
    startingPrice: "Starting from ₹499",
    priceNumeric: 499,
    unit: "per bathroom",
    description: "Borewell hard water descaling, yellow stain removal, commode disinfection & tap chrome buffing.",
    bookingDescription: "Rigorous removal of tough Chennai borewell hard water deposits on floor and wall tiles, toilet bowl deep sanitization, tap/shower descaling, mirror wiping, and odor elimination.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "room-kitchen",
    name: "Kitchen Cleaning",
    category: "room",
    startingPrice: "Starting from ₹1,499",
    priceNumeric: 1499,
    unit: "per kitchen",
    description: "Degreasing wall tiles, gas stove, exhaust fan, stainless steel sink descaling & cabinet exteriors.",
    bookingDescription: "Deep chemical degreasing of oily backsplash tiles, gas stove burners, exhaust fan blades, sink hard water descaling, countertop disinfection, and cabinet exterior wiping.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "room-hall",
    name: "Hall Cleaning",
    category: "room",
    startingPrice: "Starting from ₹1,199",
    priceNumeric: 1199,
    unit: "per hall",
    description: "Living area dusting, TV unit wipe, chandelier dusting, sliding window tracks & machine floor shine.",
    bookingDescription: "Full living room and dining room care: TV showcase wiping, sliding balcony glass cleaning, chandelier & fan dusting, sofa dry vacuuming, and rotary machine floor buffing.",
    image: "/images/window_glass_clean_1789076530482.jpg",
    popular: true
  },
  {
    id: "room-bedroom",
    name: "Bedroom Cleaning",
    category: "room",
    startingPrice: "Starting from ₹899",
    priceNumeric: 899,
    unit: "per bedroom",
    description: "Ceiling fan blades, wardrobe exterior, switchboards, under-bed vacuuming & window sill wipe.",
    bookingDescription: "Complete dust-free bedroom revitalization: Wardrobe exterior polish, window tracks & grill vacuuming, under-bed dust extraction, mattress dry vacuuming, and antiseptic floor mopping.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "room-balcony",
    name: "Balcony Cleaning",
    category: "room",
    startingPrice: "Starting from ₹399",
    priceNumeric: 399,
    unit: "per balcony",
    description: "Floor scrubbing, railing dust removal, drain unclogging, moss clean & sliding track vacuum.",
    bookingDescription: "Thorough removal of outdoor dust, bird droppings, moss on balcony tiles, safety grill wiping, drain unclogging, and sliding door track vacuuming.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "room-utility-store",
    name: "Utility / Store Room Cleaning",
    category: "room",
    startingPrice: "Starting from ₹699",
    priceNumeric: 699,
    unit: "per room",
    description: "Utility washing area descaling, store room shelf dusting, floor scrubbing & spider web clearing.",
    bookingDescription: "Dedicated deep clean for utility area or store room: washing machine area grime removal, wall tile scrubbing, storage shelf wiping, cobweb clearance, and floor wash.",
    image: "/images/window_glass_clean_1789076530482.jpg"
  }
];

/**
 * Exactly 3 Optional Add-On Services
 * 1. Kitchen Chimney Deep Cleaning – ₹499
 * 2. Fridge Interior Deep Cleaning – ₹399
 * 3. Kitchen Cabinet & Interior Deep Cleaning – ₹499
 */
export interface ExactAddOnService {
  id: string;
  name: string;
  category: 'addon';
  priceNumeric: number;
  priceDisplay: string;
  shortDescription: string;
  badge: string;
  image: string;
}

export const EXACT_ADDON_SERVICES: ExactAddOnService[] = [
  {
    id: "addon-kitchen-chimney",
    name: "Kitchen Chimney Deep Cleaning",
    category: "addon",
    priceNumeric: 499,
    priceDisplay: "₹499",
    shortDescription: "Heavy degreasing of mesh and baffle filters, motor exterior hood, oil collector cups, and stainless steel chimney exterior buffing.",
    badge: "Specialized Add-On",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "addon-fridge-interior",
    name: "Fridge Interior Deep Cleaning",
    category: "addon",
    priceNumeric: 399,
    priceDisplay: "₹399",
    shortDescription: "Complete interior defrost cleaning, sanitizing glass shelves, veggie crisper boxes, door rubber gaskets, and odor elimination.",
    badge: "Food-Safe Disinfection",
    image: "/images/fridge_interior_clean_1789773944704.jpg"
  },
  {
    id: "addon-kitchen-cabinet",
    name: "Kitchen Cabinet & Interior Deep Cleaning",
    category: "addon",
    priceNumeric: 499,
    priceDisplay: "₹499",
    shortDescription: "Internal vacuuming, grease and turmeric stain wiping, anti-fungal disinfection, and shelf realignment for modular cabinets.",
    badge: "Modular Kitchen",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=600&q=80"
  }
];

export const ADD_ON_SERVICES: ServicePriceItem[] = [
  {
    id: "addon-sofa",
    name: "Sofa Cleaning",
    category: "addon",
    startingPrice: "Starting from ₹699",
    priceNumeric: 699,
    unit: "5-seater shampoo cleaning",
    description: "5-seater shampoo cleaning: high-foaming fabric shampoo wash, motorized rotary spot scrubbing & high-suction extraction.",
    bookingDescription: "Deep injection and extraction shampoo wash for 5-seater sofa. Removes embedded sweat, dust mites, coffee/food stains, leaving a fresh hypoallergenic scent.",
    image: "/images/sofa_cushion_shampoo_1789076364809.jpg",
    popular: true
  },
  {
    id: "addon-mattress",
    name: "Mattress Cleaning",
    category: "addon",
    startingPrice: "Starting from ₹599",
    priceNumeric: 599,
    unit: "per mattress",
    description: "HEPA high-suction vibration vacuuming targeting dust mites, dead skin cells & allergens.",
    bookingDescription: "Deep clinical extraction of micro-dust, allergen mites, and bed microbes from both sides of the mattress using industrial HEPA filtration vacuums.",
    image: "/images/carpet_mattress_extract_1789076394844.jpg",
    popular: true
  },
  {
    id: "addon-ac",
    name: "AC Cleaning",
    category: "addon",
    startingPrice: "Starting from ₹599",
    priceNumeric: 599,
    unit: "per unit",
    description: "Filter mesh deep cleaning, cooling coil dusting, drain tray clearing, and outer cover sanitization.",
    bookingDescription: "Thorough air conditioner deep cleaning including air filter mesh washing, cooling fins and coil dust extraction, water drain tray clearing, and front panel wipe for fresh, allergen-free air.",
    image: "/images/ceiling_ladder_clean_1789076379410.jpg",
    popular: true
  },
  {
    id: "addon-bedroom-interior",
    name: "Bedroom Interior Cleaning",
    category: "addon",
    startingPrice: "Starting from ₹399",
    priceNumeric: 399,
    unit: "per bedroom",
    description: "Wardrobe interior shelf wipe, drawer vacuuming, dust removal & sanitized reorganization.",
    bookingDescription: "Deep internal vacuuming and wiping of bedroom wardrobes, drawers, side tables, and shelves to eliminate trapped dust, fabric lint, and moisture.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "addon-hall-interior",
    name: "Hall Interior Cleaning",
    category: "addon",
    startingPrice: "Starting from ₹699",
    priceNumeric: 699,
    unit: "per hall",
    description: "Showcase interior wiping, TV console storage, display shelves & crockery unit cleaning.",
    bookingDescription: "Detailed interior dusting and wiping of living room showcase units, TV console cabinets, display shelves, and crockery units with lint-free microfiber care.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
  }
];

// Combine for backward compatibility
export const ADDITIONAL_SERVICE_PRICES = [...ROOM_BY_ROOM_SERVICES, ...ADD_ON_SERVICES];

export interface CleaningServiceOption {
  id: string;
  name: string;
  category: 'room' | 'service' | 'fullhome' | 'commercial';
  categoryLabel: string;
  startingPrice: string;
  originalPrice?: string;
  priceNumeric: number;
  unit?: string;
  image?: string;
  popular?: boolean;
  bullets: string[];
  bookingDescription: string;
  isCommercial?: boolean;
}

export const ALL_CHOOSE_SERVICES: CleaningServiceOption[] = [
  // 1. Bathroom
  {
    id: "room-bathroom",
    name: "Bathroom Cleaning",
    category: "room",
    categoryLabel: "Room by Room",
    startingPrice: "Starting from ₹499",
    priceNumeric: 499,
    unit: "per bathroom",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    popular: true,
    bullets: [
      "Borewell hard water descaling & yellow scale removal",
      "Toilet commode deep sanitization & stain removal",
      "Taps, shower chrome buffing & floor tile scrubbing"
    ],
    bookingDescription: "Rigorous removal of tough Chennai borewell hard water deposits on floor and wall tiles, toilet bowl deep sanitization, tap/shower descaling, mirror wiping, and odor elimination."
  },
  // 2. Kitchen
  {
    id: "room-kitchen",
    name: "Kitchen Cleaning",
    category: "room",
    categoryLabel: "Room by Room",
    startingPrice: "Starting from ₹1,499",
    priceNumeric: 1499,
    unit: "per kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    popular: true,
    bullets: [
      "Oily backsplash wall tiles degreasing",
      "Gas stove burners, platform & exhaust fan scrub",
      "Stainless steel sink descaling & cabinet exterior polish"
    ],
    bookingDescription: "Deep chemical degreasing of oily backsplash tiles, gas stove burners, exhaust fan blades, sink hard water descaling, countertop disinfection, and cabinet exterior wiping."
  },
  // 3. Hall
  {
    id: "room-hall",
    name: "Hall Cleaning",
    category: "room",
    categoryLabel: "Room by Room",
    startingPrice: "Starting from ₹1,199",
    priceNumeric: 1199,
    unit: "per hall",
    image: "/images/window_glass_clean_1789076530482.jpg",
    popular: true,
    bullets: [
      "TV unit, showcase & dining furniture dusting",
      "Balcony sliding glass & window track vacuuming",
      "Ceiling fans, chandeliers wipe & floor machine buffing"
    ],
    bookingDescription: "Full living room and dining room care: TV showcase wiping, sliding balcony glass cleaning, chandelier & fan dusting, sofa dry vacuuming, and rotary machine floor buffing."
  },
  // 4. Bedroom
  {
    id: "room-bedroom",
    name: "Bedroom Cleaning",
    category: "room",
    categoryLabel: "Room by Room",
    startingPrice: "Starting from ₹899",
    priceNumeric: 899,
    unit: "per bedroom",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Ceiling fan blades, lights & switchboards clean",
      "Wardrobe exterior polish & window sill wiping",
      "Under-bed dust vacuuming & antiseptic floor mopping"
    ],
    bookingDescription: "Complete dust-free bedroom revitalization: Wardrobe exterior polish, window tracks & grill vacuuming, under-bed dust extraction, mattress dry vacuuming, and antiseptic floor mopping."
  },
  // 5. Balcony
  {
    id: "room-balcony",
    name: "Balcony Cleaning",
    category: "room",
    categoryLabel: "Room by Room",
    startingPrice: "Starting from ₹399",
    priceNumeric: 399,
    unit: "per balcony",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Outdoor floor tiles scrubbing & drain unclogging",
      "Safety grill dust removal & railing wash",
      "Sliding glass door tracks vacuuming & moss removal"
    ],
    bookingDescription: "Thorough removal of outdoor dust, bird droppings, moss on balcony tiles, safety grill wiping, drain unclogging, and sliding door track vacuuming."
  },
  // 6. Utility / Store Room
  {
    id: "room-utility-store",
    name: "Utility / Store Room",
    category: "room",
    categoryLabel: "Room by Room",
    startingPrice: "Starting from ₹699",
    priceNumeric: 699,
    unit: "per room",
    image: "/images/window_glass_clean_1789076530482.jpg",
    bullets: [
      "Washing machine area soap scum & grime removal",
      "Utility wall tiles scrubbing & drain descaling",
      "Store room shelf dusting, cobweb clearance & floor wash"
    ],
    bookingDescription: "Dedicated deep clean for utility area or store room: washing machine area grime removal, wall tile scrubbing, storage shelf wiping, cobweb clearance, and floor wash."
  },
  // 7. Sofa
  {
    id: "addon-sofa",
    name: "Sofa Cleaning",
    category: "service",
    categoryLabel: "Service by Service",
    startingPrice: "Starting from ₹699",
    priceNumeric: 699,
    unit: "5-seater shampoo cleaning",
    image: "/images/sofa_cushion_shampoo_1789076364809.jpg",
    popular: true,
    bullets: [
      "5-seater shampoo wash with motorized foam scrub",
      "High-suction moisture & deep sweat extraction",
      "Stubborn spot stain removal & fresh fragrance"
    ],
    bookingDescription: "Deep injection and extraction shampoo wash for 5-seater sofa. Removes embedded sweat, dust mites, coffee/food stains, leaving a fresh hypoallergenic scent."
  },
  // 8. Mattress
  {
    id: "addon-mattress",
    name: "Mattress Cleaning",
    category: "service",
    categoryLabel: "Service by Service",
    startingPrice: "Starting from ₹599",
    priceNumeric: 599,
    unit: "per mattress",
    image: "/images/carpet_mattress_extract_1789076394844.jpg",
    popular: true,
    bullets: [
      "HEPA vibration vacuuming targeting dust mites",
      "Dead skin cells & micro-dust extraction both sides",
      "Hospital-grade hypoallergenic sanitized finish"
    ],
    bookingDescription: "Deep clinical extraction of micro-dust, allergen mites, and bed microbes from both sides of the mattress using industrial HEPA filtration vacuums."
  },
  // 9. AC
  {
    id: "addon-ac",
    name: "AC Cleaning",
    category: "service",
    categoryLabel: "Service by Service",
    startingPrice: "Starting from ₹599",
    priceNumeric: 599,
    unit: "per unit",
    image: "/images/ceiling_ladder_clean_1789076379410.jpg",
    popular: true,
    bullets: [
      "Filter mesh wash & cooling fins dusting",
      "Cooling coil micro-dust extraction",
      "Water drain tray clearing & outer cover wipe"
    ],
    bookingDescription: "Thorough air conditioner deep cleaning including air filter mesh washing, cooling fins and coil dust extraction, water drain tray clearing, and front panel wipe for fresh, allergen-free air."
  },
  // 10. Full Home Cleaning (1 BHK to 5 BHK)
  {
    id: "1-bhk",
    name: "1 BHK Full Home Cleaning",
    category: "fullhome",
    categoryLabel: "Full Home Cleaning",
    startingPrice: "Starting from ₹2,999",
    originalPrice: "₹3,599",
    priceNumeric: 2999,
    unit: "1 BHK Apartment",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    popular: true,
    bullets: [
      "1 Bedroom, 1 Living Room, 1 Kitchen & 1 Bathroom",
      "Rotary machine floor scrub & bathroom descaling",
      "Ceiling fans, switchboards & window track vacuum"
    ],
    bookingDescription: "Complete deep cleaning of 1 Bedroom, 1 Living Hall, 1 Kitchen, and 1 Bathroom. Includes floor rotary scrubbing, fan/light wiping, window track vacuuming, and full sanitization."
  },
  {
    id: "2-bhk",
    name: "2 BHK Full Home Cleaning",
    category: "fullhome",
    categoryLabel: "Full Home Cleaning",
    startingPrice: "Starting from ₹3,599",
    originalPrice: "₹3,999",
    priceNumeric: 3599,
    unit: "2 BHK Apartment",
    image: "/images/bhk2_interior_photo_1789077830830.jpg",
    popular: true,
    bullets: [
      "2 Bedrooms, Hall, Dining, Kitchen & up to 2 Bathrooms",
      "Heavy tile hard water descaling & kitchen degreasing",
      "Mechanized rotary floor buffing & window grill polish"
    ],
    bookingDescription: "Comprehensive deep cleaning for standard 2 BHK home: 2 Bedrooms, Hall, Dining, Kitchen, and up to 2 Bathrooms. Intensive tile scrubbing, kitchen degreasing, and descaling."
  },
  {
    id: "3-bhk",
    name: "3 BHK Full Home Cleaning",
    category: "fullhome",
    categoryLabel: "Full Home Cleaning",
    startingPrice: "Starting from ₹4,599",
    originalPrice: "₹4,999",
    priceNumeric: 4599,
    unit: "3 BHK Apartment / House",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    popular: true,
    bullets: [
      "3 Bedrooms, Living Room, Dining, Kitchen & up to 3 Bathrooms",
      "Tile scrubbing, balcony tracks & kitchen cabinet wipe",
      "Rotary machine floor buffing across all 3 bedrooms & hall"
    ],
    bookingDescription: "In-depth deep cleaning for spacious 3 BHK residences: 3 Bedrooms, Hall, Dining, Kitchen, Utility, Balconies, and up to 3 Bathrooms. Includes mechanized floor scrubbing, window track vacuuming, and kitchen degreasing."
  },
  {
    id: "4-bhk",
    name: "4 BHK Luxury Home Cleaning",
    category: "fullhome",
    categoryLabel: "Full Home Cleaning",
    startingPrice: "Starting from ₹5,999",
    originalPrice: "₹6,999",
    priceNumeric: 5999,
    unit: "4 BHK Large Flat / Penthouse",
    image: "/images/bhk4_interior_photo_1789773958391.jpg",
    popular: true,
    bullets: [
      "4 Bedrooms, Expansive Living Hall, Dining & up to 4 Bathrooms",
      "Acid-free descaling of taps, shower enclosures & tile grout",
      "High-torque rotary floor machine scrubbing for entire home"
    ],
    bookingDescription: "Exhaustive deep cleaning tailored for large 4 BHK apartments and penthouses: 4 Bedrooms, Living, Dining, Kitchen, Balconies, and up to 4 Bathrooms with motorized floor scrubbing and complete sanitization."
  },
  {
    id: "5-bhk",
    name: "5 BHK Luxury Villa Cleaning",
    category: "fullhome",
    categoryLabel: "Full Home Cleaning",
    startingPrice: "Starting from ₹7,999",
    originalPrice: "₹8,999",
    priceNumeric: 7999,
    unit: "5 BHK / Duplex Villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    popular: true,
    bullets: [
      "5 Bedrooms, Living, Dining, Family Lounge & up to 5 Bathrooms",
      "Complete rotary machine floor scrub & wall tile descaling",
      "High ceiling fixtures, chandeliers, balconies & window tracks"
    ],
    bookingDescription: "Complete deep cleaning for large 5 BHK residences and duplex villas: 5 Bedrooms, Living Hall, Dining, Family Lounge, Kitchen, Balconies, and up to 5 Bathrooms with mechanized floor scrubbing."
  },
  // 13. Office / Commercial Cleaning
  {
    id: "commercial-office",
    name: "Office / Commercial Cleaning",
    category: "commercial",
    categoryLabel: "Commercial Cleaning",
    startingPrice: "Starting from ₹6 / sq. ft.",
    priceNumeric: 6,
    unit: "per sq. ft.",
    image: "/images/ceiling_ladder_clean_1789076379410.jpg",
    popular: true,
    isCommercial: true,
    bullets: [
      "Workstation, cabin & chair sanitization",
      "Carpet extraction & rotary floor machine scrubbing",
      "Glass partitions & cafeteria/restroom deep descaling"
    ],
    bookingDescription: "Comprehensive commercial deep cleaning starting from ₹6 per square foot: Workstation sanitization, carpet foam extraction, rotary machine floor buffing, glass facade & partition wipe, cafeteria degreasing, and executive washroom descaling."
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "Professional Service",
    description: "Experienced cleaning technicians trained with industry-standard protocols and courteous customer etiquette."
  },
  {
    title: "Reliable Workers",
    description: "Background-verified, punctual local staff who respect your home and handle your belongings with utmost care."
  },
  {
    title: "Quality Cleaning",
    description: "We use professional industrial vacuum cleaners and high-grade eco-friendly cleaning materials for spotless results."
  },
  {
    title: "Affordable Pricing",
    description: "Transparent, pocket-friendly quotes with zero hidden charges. You inspect the work before final payment."
  },
  {
    title: "Flexible Scheduling",
    description: "Book conveniently on weekdays or weekends. We adjust to your preferred morning or afternoon time slot."
  },
  {
    title: "Customer Satisfaction",
    description: "Your peace of mind is our priority. If you notice any missed spot during handover, we re-clean it on the spot."
  },
  {
    title: "Chennai Local Service",
    description: "Proudly based in Chennai, delivering quick response times across all central, south, north, and suburban areas."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: "01",
    title: "Contact Us",
    description: "Call or message us directly on WhatsApp with your location in Chennai."
  },
  {
    stepNumber: "02",
    title: "Tell Us Your Cleaning Requirement",
    description: "Specify whether you need a full home deep clean, kitchen, bathroom, or specific room cleaning."
  },
  {
    stepNumber: "03",
    title: "Get a Quote",
    description: "Receive an upfront, transparent estimate tailored to your flat size or home requirements."
  },
  {
    stepNumber: "04",
    title: "Schedule Cleaning",
    description: "Pick your preferred date and time. Our equipped cleaning team arrives right on time."
  },
  {
    stepNumber: "05",
    title: "Enjoy a Clean Home",
    description: "Inspect the shining results, enjoy your sanitized home, and relax in a fresh living space."
  }
];

/**
 * Common Chennai Service Localities
 * Easily edit or append new areas here
 */
export const CHENNAI_SERVICE_AREAS = [
  // South Chennai
  "Velachery",
  "Adyar",
  "Thiruvanmiyur",
  "Besant Nagar",
  "Guindy",
  "Saidapet",
  "Medavakkam",
  "Madipakkam",
  "Nanganallur",
  "Pallikaranai",
  "Tambaram",
  "Chromepet",
  "Pallavaram",
  
  // Central Chennai
  "T. Nagar",
  "Anna Nagar",
  "Kilpauk",
  "Nungambakkam",
  "Mylapore",
  "Alwarpet",
  "Gopalapuram",
  "Egmore",
  "Chetpet",
  "Kodambakkam",
  "Ashok Nagar",
  "KK Nagar",
  "Vadapalani",
  
  // OMR & ECR IT Corridor
  "Perungudi",
  "Thoraipakkam",
  "Sholinganallur",
  "Navalur",
  "Siruseri",
  "Karapakkam",
  "Injambakkam",
  "Neelankarai",
  
  // West & North Chennai
  "Porur",
  "Mogappair",
  "Ambattur",
  "Koyambedu",
  "Ramapuram",
  "Iyyappanthangal",
  "Perambur",
  "Kolathur",
  "Villivakkam"
];

/**
 * 3 Structured realistic review placeholders
 * Clearly documented so the owner can swap in real reviews anytime.
 */
export interface CustomerReview {
  id: string;
  author: string;
  locality: string;
  serviceType: string;
  rating: number;
  dateText: string;
  comment: string;
}

export const REVIEW_PLACEHOLDERS: CustomerReview[] = [
  {
    id: "review-1",
    author: "Karthik R.",
    locality: "Velachery, Chennai",
    serviceType: "2 BHK Full Home Deep Cleaning",
    rating: 5,
    dateText: "Recent Customer",
    comment: "Booked A1 Professional Home Cleaning Service for our 2 BHK apartment before our housewarming. The team arrived on time with heavy vacuum cleaners and scrubbing machines. The kitchen grease and bathroom hard water marks were completely cleaned. Very polite workers."
  },
  {
    id: "review-2",
    author: "Priya Sundaram",
    locality: "Anna Nagar, Chennai",
    serviceType: "Kitchen & Bathroom Cleaning",
    rating: 5,
    dateText: "Recent Customer",
    comment: "Our bathroom tiles had tough yellow stains from borewell water which we couldn't remove ourselves. The team descaled the tiles and polished the taps until they looked new. Booking on WhatsApp was super easy."
  },
  {
    id: "review-3",
    author: "Senthil Kumar",
    locality: "Thoraipakkam (OMR), Chennai",
    serviceType: "3 BHK Apartment Move-In Cleaning",
    rating: 5,
    dateText: "Recent Customer",
    comment: "Needed urgent cleaning before moving into our rental flat in OMR. Called their number in the morning and they scheduled it promptly. Cleaned all window tracks, balconies, and floor thoroughly. Very reasonable pricing."
  }
];

/**
 * Professional Equipment & Cleaning Material Showcase
 * Emphasizes vacuum machines, cleaning materials, and male technicians in uniform
 */
export const EQUIPMENT_SHOWCASE = [
  {
    title: "Rotary Floor Scrubber & Buffing Machine",
    desc: "Single-disc commercial buffer with deep lather scrub to lift ground-in dirt, oil grime, and grout stains on marble & tiles.",
    image: "/images/team-floor-scrubbing.jpg",
    alt: "Professional cleaning team with rotary floor scrubbing machine"
  },
  {
    title: "Deep Injection-Extraction Wet Vacuum",
    desc: "Commercial injection extraction wand spraying cleaning solution and pulling out moisture and dust from carpets, mattresses & sofas.",
    image: "/images/carpet_mattress_extract_1789076394844.jpg",
    alt: "Deep extraction wet vacuum wand cleaning carpets and mattresses"
  },
  {
    title: "Window Glass & High-Reach Cleaning",
    desc: "Floor-to-ceiling glass panel squeegeeing, ceiling fan & vent dusting on aluminum step ladders with safe anti-static tools.",
    image: "/images/window_glass_clean_1789076530482.jpg",
    alt: "Professional cleaning technicians wiping large glass windows and vacuuming hall"
  },
  {
    title: "Sofa & Cushion Foam Shampooing",
    desc: "Motorized handheld rotary brush and high-suction vacuum extraction removing deep embedded food spots and allergens.",
    image: "/images/sofa_cushion_shampoo_1789076364809.jpg",
    alt: "Cleaners shampooing sofa cushions on site with rotary scrubber and vacuum"
  }
];

export interface ChemicalItem {
  code: string;
  name: string;
  purpose: string;
  benefit: string;
  safety: string;
}

export const PROFESSIONAL_CHEMICALS: ChemicalItem[] = [
  {
    code: "Taski R1",
    name: "Bathroom Cleaner & Sanitizer",
    purpose: "Toilet bowls, bathtubs, tiles & sink disinfection",
    benefit: "Eliminates 99.9% germs, neutralizes bad odors & kills bacteria",
    safety: "Hospital-Grade & Color-Coded Safe"
  },
  {
    code: "Taski R2",
    name: "Hygienic Hard Surface Floor Cleaner",
    purpose: "Marble, granite, vitrified tile & wooden flooring",
    benefit: "Removes oily footprints and soap scum without dulling sheen",
    safety: "pH-Neutral & Residue-Free"
  },
  {
    code: "Taski R3",
    name: "Glass & Mirror Streak-Free Restorer",
    purpose: "Window panes, glass partitions, vanity mirrors & tables",
    benefit: "Leaves crystal clear transparency without smudges or streaks",
    safety: "Fast Drying & Anti-Static"
  },
  {
    code: "Taski R4",
    name: "Wood & Leather Luster Conditioner",
    purpose: "Modular wardrobes, wood doors, TV consoles & leather sofas",
    benefit: "Restores deep natural shine while creating dust-repellent coat",
    safety: "Silicone-Enhanced & Non-Greasy"
  },
  {
    code: "Taski R6",
    name: "Heavy-Duty Hard Water & Scale Remover",
    purpose: "Stubborn borewell calcium stains, tap scales & urinals",
    benefit: "Dissolves hardened lime build-up in minutes without scraping",
    safety: "Controlled Acid Formulation"
  },
  {
    code: "Citrus Eco",
    name: "Food-Safe Kitchen Degreaser",
    purpose: "Oily stovetop grates, gas stoves, backsplash & fryers",
    benefit: "Emulsifies heavy Indian cooking oil and turmeric residues",
    safety: "100% Non-Toxic & Food Surface Safe"
  }
];
