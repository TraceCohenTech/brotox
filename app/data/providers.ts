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
  {
    slug: "dr-kenneth-beer",
    name: "Dr. Kenneth Beer",
    credentials: "MD, PA",
    practiceName: "Palm Beach Cosmetic Dermatology",
    region: "South Florida",
    regionSlug: "south-florida",
    city: "West Palm Beach",
    citySlug: "west-palm-beach",
    website: "https://beerderm.com",
    specialties: [
      "Botox & Dysport",
      "Dermal Fillers",
      "Sculptra",
      "Laser Treatments",
      "Clinical Research",
    ],
    bio: "Dr. Kenneth Beer is a nationally recognized Key Opinion Leader (KOL) in the field of injectables and cosmetic dermatology. Based in West Palm Beach, he is a board-certified dermatologist who trains other physicians on advanced injection techniques and serves as a clinical researcher developing next-generation aesthetic treatments. He is one of the most respected and published injectors in all of Florida.",
    whyMenChoose: "Men gravitate toward Dr. Beer for his evidence-based, no-fluff approach. As someone who literally researches and tests new injectable products before they hit the market, he offers treatments backed by the latest science. His injection technique is known for precision and subtlety — exactly what men want when they're looking for results that no one can quite put their finger on.",
    notable: [
      "Board-certified dermatologist",
      "Nationally recognized Key Opinion Leader (KOL)",
      "Trains physicians on advanced injection techniques",
      "Clinical researcher for next-gen aesthetic treatments",
      "One of the most published injectors in Florida",
      "20+ years in cosmetic dermatology",
    ],
    treatments: [
      {
        name: "Botox & Dysport",
        description: "Expert-level neurotoxin injections for forehead lines, frown lines, and crow's feet. Dr. Beer's research background means you're getting the most current, optimized techniques available.",
        duration: "15-20 minutes",
        priceRange: "$350-$750",
      },
      {
        name: "Sculptra",
        description: "Collagen-stimulating injectable that gradually restores facial volume over several months. A favorite among men who want subtle, progressive improvement rather than an overnight change.",
        duration: "30-45 minutes",
        priceRange: "$800-$1,500 per vial",
      },
      {
        name: "Dermal Fillers",
        description: "Strategic placement of Restylane, Juvederm, and other premium fillers to address under-eye hollows, nasolabial folds, and jawline contouring for a more defined masculine look.",
        duration: "30-45 minutes",
        priceRange: "$700-$2,000",
      },
      {
        name: "Laser Skin Resurfacing",
        description: "Advanced laser treatments to improve skin texture, reduce sun damage, and tighten skin. Ideal for men who spend time outdoors in the South Florida sun.",
        duration: "45-60 minutes",
        priceRange: "$1,000-$3,000",
      },
    ],
    faqs: [
      {
        question: "What makes Dr. Beer different from other injectors in West Palm Beach?",
        answer: "Dr. Beer is a Key Opinion Leader who trains other doctors on injection techniques and conducts clinical research on new aesthetic products. You're essentially getting treated by one of the people who helps develop the treatments other providers use.",
      },
      {
        question: "Does Dr. Beer have experience treating male patients?",
        answer: "Yes. Dr. Beer's practice sees a significant number of male patients, particularly professionals in the Palm Beach area. He understands that men require different dosing, placement, and aesthetic goals than female patients.",
      },
      {
        question: "How much does Botox cost at Dr. Beer's West Palm Beach office?",
        answer: "Botox treatments at Palm Beach Cosmetic Dermatology typically range from $350-$750 depending on the areas treated. An in-person consultation will determine the exact cost for your specific needs.",
      },
      {
        question: "What is Sculptra and why do men like it?",
        answer: "Sculptra is a collagen stimulator that works gradually over 2-3 months, producing natural-looking volume restoration. Men prefer it because the results develop slowly — so there's no sudden 'what happened to your face' moment.",
      },
      {
        question: "Where is Dr. Beer's practice located?",
        answer: "Palm Beach Cosmetic Dermatology is located in West Palm Beach, Florida, serving patients throughout Palm Beach County including Palm Beach Gardens, Jupiter, and Boca Raton.",
      },
    ],
  },
  {
    slug: "dr-rian-maercks",
    name: "Dr. Rian Maercks",
    credentials: "MD",
    practiceName: "The Maercks Institute",
    region: "South Florida",
    regionSlug: "south-florida",
    city: "Miami",
    citySlug: "miami",
    neighborhood: "Coconut Grove",
    website: "https://maercksinstitute.com",
    specialties: [
      "Cold Sculpting (Non-Surgical Facelifts)",
      "Facial Sculpting with Fillers",
      "Botox & Dysport",
      "Structural Fat Grafting",
      "Plastic Surgery",
    ],
    bio: "Dr. Rian Maercks is a board-certified plastic surgeon and the founder of The Maercks Institute in Miami's Coconut Grove. He is renowned for his proprietary 'Cold Sculpting' technique — a non-surgical approach to facial rejuvenation using strategically placed fillers that can rival the results of a traditional facelift. His work has been featured in Vogue, Harper's Bazaar, Allure, and he counts numerous celebrities among his patients.",
    whyMenChoose: "Men choose Dr. Maercks because he's the anti-plastic-surgery plastic surgeon. His Cold Sculpting technique means no incisions, no general anesthesia, and no telltale signs of work. For high-profile men — executives, athletes, public figures — who can't afford any downtime or any suspicion, Maercks delivers a refreshed, masculine look using only injectables and his artistic eye.",
    notable: [
      "Board-certified plastic surgeon",
      "Creator of proprietary 'Cold Sculpting' technique",
      "Celebrity clientele (names undisclosed)",
      "Featured in Vogue, Harper's Bazaar, Allure",
      "Pioneer in non-surgical facial rejuvenation",
      "Known for natural, never-overdone results",
    ],
    treatments: [
      {
        name: "Cold Sculpting (Non-Surgical Facelift)",
        description: "Dr. Maercks' signature technique using strategic filler placement to lift, contour, and rejuvenate the face without surgery. Results rival a traditional facelift with zero downtime.",
        duration: "60-90 minutes",
        priceRange: "$5,000-$15,000",
      },
      {
        name: "Botox & Dysport",
        description: "Precision neurotoxin injections that complement his sculpting work. Used conservatively to maintain natural expression while smoothing deep-set lines.",
        duration: "15-20 minutes",
        priceRange: "$500-$1,000",
      },
      {
        name: "Jawline & Chin Sculpting",
        description: "Strategic filler placement along the jaw and chin to create a stronger, more defined masculine profile. One of the most requested treatments by male patients.",
        duration: "30-45 minutes",
        priceRange: "$2,000-$5,000",
      },
      {
        name: "Under-Eye Rejuvenation",
        description: "Targeted treatment for dark circles, hollows, and bags under the eyes using a combination of fillers and fat grafting techniques.",
        duration: "30-45 minutes",
        priceRange: "$1,500-$4,000",
      },
    ],
    faqs: [
      {
        question: "What is Cold Sculpting and how is it different from regular fillers?",
        answer: "Cold Sculpting is Dr. Maercks' proprietary technique that uses fillers not just to fill wrinkles, but to structurally reshape and lift the face. Think of it as architectural engineering for your face rather than just patching holes. The results can rival a surgical facelift.",
      },
      {
        question: "Is Dr. Maercks a good choice for men who want subtle results?",
        answer: "Absolutely. Dr. Maercks built his reputation on results that look natural, not 'done.' His male patients — many of whom are executives and public figures — specifically seek him out because no one can tell they've had work done.",
      },
      {
        question: "How much does a consultation with Dr. Maercks cost?",
        answer: "Consultation fees vary. Contact The Maercks Institute directly through our consultation request form for current pricing and availability.",
      },
      {
        question: "Where is The Maercks Institute located in Miami?",
        answer: "The Maercks Institute is located in the Coconut Grove neighborhood of Miami, serving patients from across South Florida and beyond. Many patients fly in specifically for Dr. Maercks' expertise.",
      },
      {
        question: "What is the recovery time for Cold Sculpting?",
        answer: "Most patients experience minimal swelling for 2-3 days and can return to normal activities immediately. There are no incisions or stitches. Full results develop over 2-4 weeks as the fillers settle.",
      },
    ],
  },
  {
    slug: "dr-paul-jarrod-frank",
    name: "Dr. Paul Jarrod Frank",
    credentials: "MD",
    practiceName: "PFRANKMD",
    region: "New York Tristate",
    regionSlug: "new-york",
    city: "Manhattan",
    citySlug: "manhattan",
    neighborhood: "Upper East Side",
    website: "https://pfrankmd.com",
    specialties: [
      "Botox & Dysport",
      "Dermal Fillers",
      "CoolSculpting",
      "Body Contouring",
      "Laser Treatments",
    ],
    bio: "Dr. Paul Jarrod Frank is a celebrity cosmetic dermatologist and the founder of PFRANKMD on Manhattan's Upper East Side. A board-certified dermatologist, he is known for his 'Pro-Aging' philosophy — embracing aging gracefully while using targeted treatments to keep you looking your best. He has a massive social media following, has authored books on skincare, and is one of the most recognizable names in New York City aesthetics.",
    whyMenChoose: "Dr. Frank's 'Pro-Aging' philosophy resonates deeply with men. He's not about freezing your face or making you look 25 again — he's about making you look like the best version of yourself at your current age. His male clientele includes Wall Street executives, media personalities, and athletes who want a polished, natural look. His Upper East Side practice has a modern, masculine vibe that puts men at ease.",
    notable: [
      "Board-certified cosmetic dermatologist",
      "Founder of PFRANKMD on the Upper East Side",
      "Celebrity clientele across finance, media, and sports",
      "Author and 'Pro-Aging' advocate",
      "Strong social media presence and media appearances",
      "Pioneer in combining injectables with body contouring",
    ],
    treatments: [
      {
        name: "Botox & Dysport",
        description: "Expertly placed neurotoxin injections that smooth wrinkles while preserving your natural expressions. Dr. Frank's signature approach ensures you still look like you — just refreshed.",
        duration: "15-20 minutes",
        priceRange: "$500-$1,000",
      },
      {
        name: "Dermal Fillers",
        description: "Strategic volume restoration for the mid-face, under-eyes, jawline, and chin. Dr. Frank specializes in masculine contouring that enhances rather than feminizes facial structure.",
        duration: "30-45 minutes",
        priceRange: "$1,000-$3,000",
      },
      {
        name: "CoolSculpting",
        description: "Non-invasive fat reduction for stubborn areas like love handles, belly fat, and the double chin. No surgery, no downtime — a favorite among busy NYC professionals.",
        duration: "35-60 minutes per area",
        priceRange: "$750-$2,000 per area",
      },
      {
        name: "Laser Skin Resurfacing",
        description: "Advanced laser treatments to address sun damage, uneven skin tone, and texture issues. Keeps your skin looking healthy and youthful without any obvious 'treatment' look.",
        duration: "30-60 minutes",
        priceRange: "$1,500-$4,000",
      },
    ],
    faqs: [
      {
        question: "What is Dr. Frank's 'Pro-Aging' approach?",
        answer: "Pro-Aging means embracing your age while using smart, targeted treatments to look your best. It's the opposite of trying to look 20 years younger. For men, this means subtle Botox, strategic fillers, and skin treatments that make you look refreshed and healthy — not 'done.'",
      },
      {
        question: "Does PFRANKMD treat a lot of male patients?",
        answer: "Yes. A significant portion of Dr. Frank's practice is male patients, including Wall Street executives, media personalities, and athletes. The practice environment is designed to feel modern and comfortable for men.",
      },
      {
        question: "Where is PFRANKMD located in Manhattan?",
        answer: "PFRANKMD is located on the Upper East Side of Manhattan, easily accessible from Midtown and the rest of the city. The practice serves patients from across the New York tristate area.",
      },
      {
        question: "How much does Botox cost at PFRANKMD?",
        answer: "Botox at PFRANKMD typically ranges from $500-$1,000 depending on the number of areas treated. Manhattan pricing reflects the expertise level — Dr. Frank is one of the top injectors in NYC.",
      },
      {
        question: "Can I get Botox and CoolSculpting in the same visit?",
        answer: "Yes, many male patients combine treatments in a single visit for efficiency. Dr. Frank's team can create a comprehensive treatment plan that addresses both facial aging and body contouring.",
      },
    ],
  },
  {
    slug: "dr-lara-devgan",
    name: "Dr. Lara Devgan",
    credentials: "MD, MPH, FACS",
    practiceName: "Lara Devgan, MD Plastic Surgery",
    region: "New York Tristate",
    regionSlug: "new-york",
    city: "Manhattan",
    citySlug: "manhattan",
    neighborhood: "Upper East Side",
    website: "https://laradevganmd.com",
    specialties: [
      "Botox & Dysport",
      "Dermal Fillers",
      "Surgical Facelifts",
      "Rhinoplasty",
      "Skincare & Medical-Grade Products",
    ],
    bio: "Dr. Lara Devgan is a board-certified plastic surgeon with a practice on Manhattan's Upper East Side. With credentials including MD, MPH, and FACS, she combines surgical precision with an artist's eye. She has one of the largest followings of any plastic surgeon on Instagram (500K+), has appeared on Real Housewives, and runs her own medical-grade skincare line. Despite her celebrity profile, she is deeply respected in the medical community for her technical skill.",
    whyMenChoose: "Men choose Dr. Devgan because she understands that male aesthetics require a completely different playbook. Her surgical training gives her an anatomical precision that pure injectors often lack — she knows exactly how the muscles, fat pads, and bone structure of the male face work together. Her male patients appreciate her direct, results-focused communication style and the discretion her practice offers.",
    notable: [
      "Board-certified plastic surgeon (FACS)",
      "MD + Master of Public Health (MPH)",
      "500K+ Instagram followers — top social media presence in field",
      "Founder of her own medical-grade skincare line",
      "Featured on Real Housewives and major media outlets",
      "Known for combining surgical and non-surgical approaches",
    ],
    treatments: [
      {
        name: "Botox & Dysport",
        description: "Surgeon-level precision for neurotoxin placement. Dr. Devgan's deep understanding of facial anatomy from thousands of surgeries translates to injectable results that are exceptionally natural.",
        duration: "15-20 minutes",
        priceRange: "$500-$1,200",
      },
      {
        name: "Dermal Fillers",
        description: "Expert volume restoration and facial contouring. Specializing in jawline enhancement, chin projection, and under-eye treatment — the three most requested areas for men.",
        duration: "30-45 minutes",
        priceRange: "$1,000-$3,500",
      },
      {
        name: "Non-Surgical Rhinoplasty",
        description: "Reshape and refine the nose using fillers instead of surgery. Can straighten bumps, lift the tip, and improve symmetry in a single appointment with no downtime.",
        duration: "15-30 minutes",
        priceRange: "$1,500-$3,000",
      },
      {
        name: "Comprehensive Rejuvenation",
        description: "A full-face treatment plan combining Botox, fillers, and skincare protocols tailored to the male patient. Addresses aging holistically rather than one wrinkle at a time.",
        duration: "60-90 minutes",
        priceRange: "$3,000-$8,000",
      },
    ],
    faqs: [
      {
        question: "Is Dr. Devgan a good choice for men even though she's known for celebrity female clients?",
        answer: "Absolutely. Dr. Devgan's surgical training means she deeply understands male facial anatomy — the thicker skin, stronger musculature, and different aesthetic ideals. Many men specifically seek out female providers because they tend to have a more refined aesthetic eye.",
      },
      {
        question: "What is a non-surgical rhinoplasty?",
        answer: "A non-surgical nose job uses dermal fillers to reshape the nose — straightening bumps, lifting the tip, or improving symmetry — without surgery. It takes 15-30 minutes, has no downtime, and results last 12-18 months. Very popular with men who want improvement without the commitment of surgery.",
      },
      {
        question: "Where is Dr. Devgan's office?",
        answer: "Dr. Devgan's practice is on the Upper East Side of Manhattan, serving patients from across New York City and the tristate area. Many patients travel from out of state for her expertise.",
      },
      {
        question: "How much does Botox cost at Dr. Devgan's practice?",
        answer: "Botox at Dr. Devgan's practice ranges from $500-$1,200 depending on the areas treated. As a board-certified plastic surgeon on the Upper East Side, her pricing reflects her exceptional expertise and credentials.",
      },
      {
        question: "Does Dr. Devgan offer skincare products for men?",
        answer: "Yes. Her medical-grade skincare line includes products suitable for men's skin, which tends to be thicker and oilier. She can recommend a personalized regimen during your consultation.",
      },
    ],
  },
  {
    slug: "dr-jason-pozner",
    name: "Dr. Jason Pozner",
    credentials: "MD, FACS",
    practiceName: "Sanctuary Plastic Surgery",
    region: "South Florida",
    regionSlug: "south-florida",
    city: "Boca Raton",
    citySlug: "boca-raton",
    website: "https://sanctuaryplasticsurgery.com",
    specialties: [
      "Botox & Dysport",
      "Laser Treatments",
      "Body Contouring",
      "Dermal Fillers",
      "Plastic Surgery",
    ],
    bio: "Dr. Jason Pozner is a board-certified plastic surgeon and the founder of Sanctuary Plastic Surgery in Boca Raton. He is internationally recognized as an expert in laser and light-based procedures, having co-authored the definitive textbook on the subject. A past president of multiple professional societies, Dr. Pozner combines cutting-edge technology with decades of surgical experience to deliver premium aesthetic results.",
    whyMenChoose: "Men choose Dr. Pozner for his technology-forward approach. Rather than relying solely on injectables, he offers a full spectrum of treatments including advanced lasers, energy-based devices, and body contouring — giving men a comprehensive anti-aging and body optimization plan. His straightforward, technical communication style resonates with men who want to understand exactly what they're getting.",
    notable: [
      "Board-certified plastic surgeon (FACS)",
      "Co-authored definitive textbook on laser procedures",
      "Internationally recognized laser & light expert",
      "Past president of multiple professional societies",
      "Pioneer in combining laser + injectable treatments",
      "25+ years in aesthetic medicine",
    ],
    treatments: [
      {
        name: "Botox & Dysport",
        description: "Precision neurotoxin treatments performed by a surgeon who understands the deeper anatomy. Ideal for men who want clean, natural results from an expert with decades of experience.",
        duration: "15-20 minutes",
        priceRange: "$400-$800",
      },
      {
        name: "Advanced Laser Treatments",
        description: "Dr. Pozner literally wrote the book on laser procedures. From skin resurfacing to tightening, he uses the most advanced devices available to treat sun damage, texture, and laxity.",
        duration: "30-90 minutes",
        priceRange: "$1,000-$5,000",
      },
      {
        name: "Body Contouring",
        description: "Non-surgical and minimally invasive fat reduction and skin tightening. Popular with men targeting stubborn belly fat, love handles, and the submental (double chin) area.",
        duration: "45-90 minutes",
        priceRange: "$2,000-$6,000",
      },
      {
        name: "Dermal Fillers",
        description: "Strategic volume restoration for the face, with a focus on maintaining a strong, masculine appearance. Jawline, chin, and cheek treatments tailored to male anatomy.",
        duration: "30-45 minutes",
        priceRange: "$800-$2,500",
      },
    ],
    faqs: [
      {
        question: "What makes Sanctuary Plastic Surgery different?",
        answer: "Dr. Pozner co-wrote the textbook on laser and light-based treatments that other doctors learn from. His practice offers the full range of surgical and non-surgical options, so your treatment plan is based on what's best for you, not what's available.",
      },
      {
        question: "Is Dr. Pozner good for men who are new to aesthetics?",
        answer: "Yes. Many of his male patients start with Botox or laser treatments before exploring other options. He takes a consultative approach, building a long-term plan that evolves with your goals.",
      },
      {
        question: "How much does Botox cost at Sanctuary Plastic Surgery?",
        answer: "Botox at Sanctuary Plastic Surgery in Boca Raton ranges from $400-$800 depending on the treatment areas. A consultation will provide an exact quote based on your goals.",
      },
      {
        question: "Where is Sanctuary Plastic Surgery located?",
        answer: "Sanctuary Plastic Surgery is located in Boca Raton, Florida, serving patients from across South Florida including West Palm Beach, Fort Lauderdale, and Miami.",
      },
      {
        question: "Can I combine Botox with laser treatments?",
        answer: "Absolutely. Dr. Pozner is an expert in combining injectables with laser and energy-based treatments for comprehensive rejuvenation. This multi-modal approach often delivers better results than any single treatment alone.",
      },
    ],
  },
  {
    slug: "dr-shereene-idriss",
    name: "Dr. Shereene Idriss",
    credentials: "MD",
    practiceName: "Idriss Dermatology",
    region: "New York Tristate",
    regionSlug: "new-york",
    city: "Manhattan",
    citySlug: "manhattan",
    neighborhood: "Union Square",
    website: "https://shereeneidrissmd.com",
    specialties: [
      "Botox & Dysport",
      "Dermal Fillers",
      "Laser Treatments",
      "Chemical Peels",
      "Skin Health Education",
    ],
    bio: "Dr. Shereene Idriss is a board-certified dermatologist and the founder of Idriss Dermatology near Union Square in Manhattan. She has built one of the largest educational followings in dermatology through her YouTube and Instagram channels, where she's known for debunking skincare myths with science-backed honesty. Her clinical work is equally respected — she combines cosmetic dermatology expertise with a commitment to skin health that goes beyond just aesthetics.",
    whyMenChoose: "Men are drawn to Dr. Idriss because of her no-BS, educational approach. She explains exactly what she's doing and why, which appeals to men who want to understand the science behind their treatments. Her focus on skin health (not just cosmetics) means she'll also address issues like sun damage, rosacea, and acne scarring alongside anti-aging treatments — giving men a comprehensive skin improvement plan.",
    notable: [
      "Board-certified dermatologist",
      "Major YouTube & Instagram following for skincare education",
      "Known for science-backed, myth-busting approach",
      "Founder of Idriss Dermatology",
      "Combines cosmetic and medical dermatology expertise",
      "Trusted voice in skincare across major media outlets",
    ],
    treatments: [
      {
        name: "Botox & Dysport",
        description: "Evidence-based neurotoxin injections with a focus on natural results. Dr. Idriss takes an educational approach — she'll explain exactly what's happening and why, which her male patients love.",
        duration: "15-20 minutes",
        priceRange: "$400-$900",
      },
      {
        name: "Dermal Fillers",
        description: "Targeted filler placement for under-eyes, nasolabial folds, and jawline definition. Dr. Idriss is conservative by nature — she'd rather do less and have you come back than overdo it.",
        duration: "30-45 minutes",
        priceRange: "$800-$2,500",
      },
      {
        name: "Laser & Energy Treatments",
        description: "Advanced laser treatments for skin texture, sun damage, and overall skin quality. A great complement to injectables for men who want comprehensive skin improvement.",
        duration: "30-60 minutes",
        priceRange: "$500-$3,000",
      },
      {
        name: "Comprehensive Skin Health Plan",
        description: "A full evaluation and treatment plan covering both cosmetic goals and underlying skin health issues. Includes product recommendations, treatment scheduling, and ongoing monitoring.",
        duration: "60 minutes (initial consult)",
        priceRange: "$300-$500 consultation",
      },
    ],
    faqs: [
      {
        question: "Is Dr. Idriss good for men who are first-timers with Botox?",
        answer: "She's one of the best choices for first-timers. Her educational approach means she'll walk you through everything — what Botox does, how it works, what to expect — so you feel completely informed and confident before any needle touches your face.",
      },
      {
        question: "Does Dr. Idriss take a conservative approach?",
        answer: "Yes. She's known for a 'less is more' philosophy, which is exactly what most men want. She'd rather start conservatively and build up over time than overdo it on the first visit.",
      },
      {
        question: "Where is Idriss Dermatology located?",
        answer: "Idriss Dermatology is located near Union Square in Manhattan, easily accessible from most parts of New York City. The practice serves patients from across the tristate area.",
      },
      {
        question: "How much does Botox cost at Idriss Dermatology?",
        answer: "Botox treatments at Idriss Dermatology range from $400-$900 depending on the areas treated. Pricing is competitive for a board-certified dermatologist in Manhattan.",
      },
      {
        question: "Can Dr. Idriss help with skin issues beyond wrinkles?",
        answer: "Absolutely. As a medical and cosmetic dermatologist, she treats acne, rosacea, sun damage, and other skin conditions alongside anti-aging treatments. Many men appreciate this holistic approach to skin health.",
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
