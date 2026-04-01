export interface Provider {
  slug: string;
  name: string;
  credentials: string;
  practiceName: string;
  region: string;
  regionSlug: string;
  city: string;
  citySlug: string;
  neighborhood?: string;
  address?: string;
  phone?: string;
  website?: string;
  specialties: string[];
  bio: string;
  whyMenChoose: string;
  notable: string[];
  treatments: {
    name: string;
    description: string;
    duration?: string;
    priceRange?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const providers: Provider[] = [
  {
    slug: "dr-steven-fagien",
    name: "Dr. Steven Fagien",
    credentials: "MD, FACS",
    practiceName: "Aesthetic Facial & Ocular Plastic Surgery",
    region: "South Florida",
    regionSlug: "south-florida",
    city: "Boca Raton",
    citySlug: "boca-raton",
    neighborhood: "East Boca Raton",
    website: "https://stevenfagien.com",
    specialties: [
      "Botox & Dysport",
      "Dermal Fillers",
      "Periorbital Rejuvenation",
      "Blepharoplasty",
      "Non-Surgical Facial Rejuvenation",
    ],
    bio: "Dr. Steven Fagien is one of the most published and internationally recognized injectors in the United States. A board-certified oculoplastic surgeon based in Boca Raton, he has served as a consultant and clinical researcher for Allergan — the manufacturer of Botox — and literally helped develop the injection techniques used by practitioners worldwide. He is the author of key medical textbooks on injectables and facial rejuvenation that are considered required reading in the field.",
    whyMenChoose: "Men seek out Dr. Fagien for his precision-driven, no-nonsense approach. His background in oculoplastic surgery means he understands the unique anatomy of the male face — stronger brow ridges, thicker skin, and the need for results that look natural, never overdone. His expertise in the eye area is especially valued by men looking to reduce crow's feet and under-eye aging without looking 'worked on.'",
    notable: [
      "Board-certified oculoplastic surgeon (FACS)",
      "Clinical researcher & consultant for Allergan (Botox manufacturer)",
      "Author of leading medical textbooks on injectables",
      "Helped develop injection techniques used globally",
      "One of the most published injectors in the U.S.",
      "30+ years of experience in facial aesthetics",
    ],
    treatments: [
      {
        name: "Botox & Dysport",
        description: "Precision injections targeting forehead lines, frown lines (11s), and crow's feet. Dr. Fagien's technique preserves natural masculine expression while smoothing deep-set wrinkles.",
        duration: "15-20 minutes",
        priceRange: "$400-$800",
      },
      {
        name: "Dermal Fillers",
        description: "Strategic volume restoration using Juvederm, Restylane, and other premium fillers. Ideal for men dealing with under-eye hollows, nasolabial folds, or jawline definition.",
        duration: "30-45 minutes",
        priceRange: "$800-$2,500",
      },
      {
        name: "Periorbital Rejuvenation",
        description: "Dr. Fagien's signature specialty. A combination of Botox, fillers, and targeted techniques to rejuvenate the entire eye area — the #1 area men want treated.",
        duration: "30-60 minutes",
        priceRange: "$1,500-$4,000",
      },
      {
        name: "Non-Surgical Facelift",
        description: "A customized combination of injectables to restore a youthful, refreshed appearance without surgery or downtime. Perfect for the busy professional.",
        duration: "45-60 minutes",
        priceRange: "$3,000-$6,000",
      },
    ],
    faqs: [
      {
        question: "Does Dr. Fagien treat male patients specifically?",
        answer: "Yes. Dr. Fagien has extensive experience treating men and understands that male facial anatomy requires a different approach than female patients. His techniques are calibrated to maintain masculine features while reducing signs of aging.",
      },
      {
        question: "What is the recovery time for Botox with Dr. Fagien?",
        answer: "Most men return to their normal routine immediately after treatment. You may experience minor redness or swelling at injection sites that resolves within a few hours. Results begin appearing within 3-5 days, with full effect at 2 weeks.",
      },
      {
        question: "How much does Botox cost at Dr. Fagien's practice?",
        answer: "Botox treatments at Dr. Fagien's Boca Raton practice typically range from $400-$800 depending on the number of areas treated. A consultation will provide an exact quote based on your specific goals.",
      },
      {
        question: "Why is Dr. Fagien considered one of the best injectors in the country?",
        answer: "Dr. Fagien literally helped write the book on injectable treatments. As a clinical researcher for Allergan (the company that makes Botox), he helped develop the techniques other doctors now use. His combination of surgical training and injectable expertise makes him uniquely qualified.",
      },
      {
        question: "Where is Dr. Fagien's office in Boca Raton?",
        answer: "Dr. Fagien's practice, Aesthetic Facial & Ocular Plastic Surgery, is located in East Boca Raton, Florida. The office serves patients from across South Florida including West Palm Beach, Fort Lauderdale, and Miami.",
      },
    ],
  },
];

// Helper functions
export function getProviderBySlug(region: string, city: string, slug: string): Provider | undefined {
  return providers.find(
    (p) => p.regionSlug === region && p.citySlug === city && p.slug === slug
  );
}

export function getProvidersByCity(region: string, city: string): Provider[] {
  return providers.filter((p) => p.regionSlug === region && p.citySlug === city);
}

export function getProvidersByRegion(region: string): Provider[] {
  return providers.filter((p) => p.regionSlug === region);
}

export function getAllRegions(): { name: string; slug: string; cities: { name: string; slug: string; count: number }[] }[] {
  const regionMap = new Map<string, { name: string; cities: Map<string, { name: string; count: number }> }>();

  for (const p of providers) {
    if (!regionMap.has(p.regionSlug)) {
      regionMap.set(p.regionSlug, { name: p.region, cities: new Map() });
    }
    const region = regionMap.get(p.regionSlug)!;
    if (!region.cities.has(p.citySlug)) {
      region.cities.set(p.citySlug, { name: p.city, count: 0 });
    }
    region.cities.get(p.citySlug)!.count++;
  }

  return Array.from(regionMap.entries()).map(([slug, data]) => ({
    name: data.name,
    slug,
    cities: Array.from(data.cities.entries()).map(([citySlug, city]) => ({
      name: city.name,
      slug: citySlug,
      count: city.count,
    })),
  }));
}
