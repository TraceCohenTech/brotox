import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug } from "@/app/blog/data/articles-extra3";
import Breadcrumbs from "@/app/components/Breadcrumbs";

// SEO-friendly slug mapping: /botox-for-men/cost-guide → articles data
const seoSlugs: Record<string, string> = {
  "is-it-worth-it": "is-botox-for-men-worth-it",
  "first-appointment-guide": "what-to-expect-first-botox-appointment",
  "vs-fillers": "botox-vs-fillers-for-men",
  "cost-guide": "how-much-does-botox-cost-for-men",
  "best-age-to-start": "best-age-to-start-botox-men",
  "forehead-lines-guide": "botox-forehead-lines-men",
  "side-effects": "botox-side-effects-men",
  "jawline-sculpting": "jawline-botox-filler-men",
  "before-and-after": "botox-before-after-men",
  "crows-feet-treatment": "crows-feet-botox-men",
  "hyperhidrosis-sweating-treatment": "botox-hyperhidrosis-men",
  "aftercare-guide": "botox-aftercare-guide-men",
  "myths-debunked": "botox-myths-men-believe",
  "athletes-workout-guide": "botox-athletes-workout-men",
  "how-to-find-a-provider": "find-botox-provider-men",
  "executives-professionals-guide": "botox-executives-professionals-men",
  "beards-guide": "botox-men-with-beards",
  "men-vs-women-differences": "botox-men-vs-women-differences",
  "skincare-routine-guide": "botox-skincare-routine-men",
  "frown-lines-guide": "botox-frown-lines-men",
  "neck-bands-guide": "botox-neck-bands-men",
  "tmj-jaw-pain-guide": "botox-tmj-jaw-pain-men",
  "men-in-their-30s": "botox-men-30s",
  "men-over-50-guide": "botox-men-over-50",
  "dysport-xeomin-comparison": "botox-vs-dysport-vs-xeomin-men",
  "baby-botox-guide": "baby-botox-men",
  "psychology-confidence-guide": "psychology-botox-men",
  "maintenance-schedule-guide": "botox-maintenance-schedule-men",
  "dating-apps-confidence-guide": "botox-men-dating-apps",
  "men-in-their-20s": "botox-men-20s",
  "men-in-their-40s": "botox-men-40s",
  "men-over-60-guide": "botox-men-over-60",
  "under-eye-wrinkles-guide": "botox-under-eye-men",
  "lip-flip-guide": "lip-flip-botox-men",
  "budget-botox-guide": "botox-men-budget",
  "botox-alcohol-guide": "botox-alcohol-men",
  "daxxify-guide": "daxxify-men-guide",
  "botox-vs-retinol-guide": "botox-vs-retinol-men",
  "botox-roi-guide": "botox-roi-men",
  "chin-filler-guide": "chin-filler-men",
  "kybella-double-chin-guide": "kybella-men-guide",
  "micro-botox-natural-look-guide": "micro-botox-men",
  "wedding-prep-botox-guide": "botox-men-wedding-prep",
  "testosterone-trt-botox-guide": "botox-testosterone-trt-men",
  "balding-forehead-botox-guide": "botox-men-balding-forehead",
  "botox-men-nyc": "botox-men-nyc-guide",
  "facelift-vs-botox-guide": "facelift-vs-botox-men",
  "stop-botox-guide": "stop-botox-men-guide",
  "botox-skeptics-guide": "botox-skeptics-guide-men",
  "under-eye-filler-guide": "under-eye-filler-men",
  "cheek-filler-guide": "cheek-filler-men",
  "sculptra-collagen-guide": "sculptra-men-guide",
  "divorce-confidence-botox-guide": "botox-men-divorce",
  "stress-aging-botox-guide": "stress-aging-botox-men",
  "celebrity-men-botox-guide": "celebrity-men-botox",
  "botox-finance-men-guide": "botox-men-finance",
  "thread-lift-vs-botox-guide": "thread-lift-vs-botox-men",
  "botox-loyalty-programs-guide": "botox-loyalty-programs-men",
  "bad-results-botox-guide": "botox-bad-results-men",
  "nose-filler-rhinoplasty-guide": "nose-filler-men-guide",
  "temple-filler-guide": "temple-filler-men-guide",
  "microneedling-skin-guide": "microneedling-men-guide",
  "chemical-peels-skin-guide": "chemical-peels-men-guide",
  "travel-botox-guide": "botox-men-frequent-travel",
  "botox-tech-men-guide": "botox-men-tech",
  "botox-law-men-guide": "botox-men-law",
  "prp-vampire-facial-guide": "prp-facial-men-guide",
  "botox-men-miami-guide": "botox-men-miami",
  "botox-men-la-guide": "botox-men-la",
  "laser-skin-resurfacing-guide": "laser-skin-resurfacing-men",
  "botox-sales-men-guide": "botox-men-sales",
  "botox-real-estate-men-guide": "botox-men-real-estate",
  "needle-anxiety-botox-guide": "botox-men-needle-anxiety",
  "acne-scars-botox-men-guide": "botox-men-acne-scars",
  "botox-military-men-guide": "botox-men-military",
  "public-speakers-botox-men-guide": "botox-men-public-speakers",
  "botox-men-texas-guide": "botox-men-texas",
  "botox-men-chicago-guide": "botox-men-chicago",
  "botox-men-dc-guide": "botox-men-dc",
  "partner-conversation-botox-guide": "botox-partner-conversation-men",
  "botox-men-atlanta-guide": "botox-men-atlanta",
  "botox-men-san-francisco-guide": "botox-men-san-francisco",
  "botox-vs-laser-guide": "botox-vs-laser-treatments-men",
  "mens-grooming-botox-guide": "mens-grooming-botox-routine",
  "botox-tax-deductible-guide": "botox-tax-deductible-men",
  "botox-provider-questions-guide": "botox-questions-provider-men",
  "botox-men-boston-guide": "botox-men-boston",
  "botox-men-seattle-guide": "botox-men-seattle",
  "botox-long-term-results-guide": "botox-long-term-results-men",
  "botox-men-media-guide": "botox-men-media-camera",
  "coolsculpting-vs-lipo-guide": "coolsculpting-vs-lipo-men",
  "brow-lift-botox-guide": "brow-lift-botox-men",
  "botox-men-denver-guide": "botox-men-denver",
  "botox-men-scottsdale-guide": "botox-men-scottsdale",
  "botox-touchups-guide": "botox-touchups-men",
  "botox-glossary-guide": "botox-glossary-men",
  "botox-men-dark-skin-guide": "botox-men-dark-skin",
  "botox-men-nashville-guide": "botox-men-nashville",
  "botox-men-san-diego-guide": "botox-men-san-diego",
  "botox-men-rosacea-guide": "botox-men-rosacea",
  "gummy-smile-botox-guide": "gummy-smile-botox-men",
  "rf-microneedling-morpheus8-guide": "rf-microneedling-men-guide",
  "botox-oily-skin-men-guide": "botox-oily-skin-men",
  "botox-men-las-vegas-guide": "botox-men-las-vegas",
  "botox-men-phoenix-guide": "botox-men-phoenix",
  "filler-reversal-hyaluronidase-guide": "filler-reversal-men-guide",
  "mens-aesthetics-decade-plan": "mens-aesthetics-by-decade",
  "botox-skincare-timing-guide": "botox-skincare-timing-men",
  "pdo-thread-lift-men-guide": "pdo-thread-lift-men",
  "botox-units-dosing-guide": "botox-units-men-guide",
  "is-botox-painful-for-men": "botox-painful-men",
  "botox-masculine-results-guide": "botox-looks-masculine-men",
  "how-long-botox-kicks-in": "botox-kick-in-timeline-men",
  "botox-vs-jeuveau-guide": "botox-vs-jeuveau-men",
  "med-spa-vs-dermatologist-guide": "med-spa-vs-dermatologist-men-botox",
  "botox-migraines-guide": "botox-migraines-men",
  "botox-lunch-break-guide": "botox-lunch-break-men",
  "botox-deep-wrinkles-guide": "botox-deep-wrinkles-men",
  "botox-resistance-immunity-guide": "botox-resistance-men",
  "botox-men-houston-guide": "botox-men-houston",
  "botox-men-dallas-guide": "botox-men-dallas",
  "botox-men-portland-guide": "botox-men-portland",
  "botox-men-philadelphia-guide": "botox-men-philadelphia",
  "full-face-rejuvenation-guide": "full-face-rejuvenation-men",
  "mens-aesthetics-trends-2026": "mens-aesthetics-trends-2026",
  "botox-face-shape-guide": "botox-face-shape-men",
  "botox-smokers-men-guide": "botox-smokers-men",
  "botox-gym-fitness-men-guide": "botox-gym-fitness-men",
  "botox-personal-brand-men-guide": "botox-personal-brand-men",
  "botox-hooded-eyes-guide": "botox-hooded-eyes-men",
  "botox-hsa-fsa-guide": "botox-hsa-fsa-men",
  "botox-one-time-guide": "botox-one-time-men",
  "botox-sweaty-palms-guide": "botox-sweaty-palms-men",
  "botox-trap-shoulder-guide": "botox-trap-shoulder-pain-men",
  "botox-summer-guide": "botox-summer-guide-men",
  "botox-antidepressants-guide": "botox-antidepressants-men",
  "botox-groupon-deals-guide": "botox-groupon-deals-men",
  "botox-younger-smoother-guide": "botox-younger-smoother-men",
  "botox-calf-slimming-guide": "botox-calf-slimming-men",
  "ozempic-face-fillers-guide": "ozempic-face-fillers-men",
  "nefertiti-lift-men-guide": "nefertiti-lift-men-guide",
  "botox-partner-perspective-guide": "botox-men-partner-perspective",
  "botox-zoom-calls-guide": "botox-men-zoom-calls",
  "collagen-banking-men-guide": "collagen-banking-men-guide",
  "botox-resting-angry-face-guide": "botox-resting-angry-face-men",
  "prp-hair-restoration-guide": "prp-hair-restoration-men",
  "botox-first-year-guide": "botox-men-first-year",
  "injectable-menu-men-guide": "injectable-menu-men",
  "skinbooster-injections-guide": "skinbooster-injections-men",
  "botox-coffee-before-guide": "botox-coffee-before-men",
  "botox-blood-pressure-meds-guide": "botox-blood-pressure-meds-men",
  "botox-pore-size-guide": "botox-pore-size-men",
  "botox-sunscreen-skin-defense-guide": "botox-sunscreen-skin-defense-men",
  "botox-winter-guide": "botox-winter-guide-men",
  "botox-jowls-guide": "botox-jowls-men",
  "botox-financing-guide": "botox-financing-men",
  "botox-morning-evening-guide": "botox-morning-evening-men",
  "botox-science-explained-guide": "botox-science-explained-men",
  "botox-negotiate-pricing-guide": "botox-negotiate-pricing-men",
  "botox-vs-chemical-peels-guide": "botox-vs-chemical-peels-men",
  "lip-filler-guide": "lip-filler-men-guide",
  "marionette-lines-filler-guide": "marionette-lines-filler-men",
  "botox-sensitive-skin-guide": "botox-sensitive-skin-eczema-men",
  "botox-expressive-face-guide": "botox-expressive-face-men",
  "botox-event-timing-guide": "botox-event-timing-guide-men",
  "botox-scalp-sweating-guide": "botox-scalp-sweating-men",
  "mens-skin-aging-science-guide": "mens-skin-aging-science",
  "botox-supplements-avoid-guide": "botox-supplements-avoid-men",
  "botox-men-minneapolis-guide": "botox-men-minneapolis-guide",
  "botox-men-austin-guide": "botox-men-austin-guide",
  "tech-neck-botox-guide": "botox-tech-neck-men",
  "going-gray-botox-guide": "botox-men-going-gray",
  "between-botox-sessions-guide": "botox-between-sessions-men",
  "strong-muscles-botox-guide": "botox-men-strong-muscles",
  "healthcare-workers-botox-guide": "botox-men-nurses-healthcare",
  "botox-vs-filters-guide": "botox-vs-filters-men",
  "filler-combo-men-guide": "filler-combination-men-guide",
  "weight-loss-botox-fillers-guide": "botox-men-after-weight-loss",
  "job-interview-botox-guide": "botox-men-job-interview",
  "filler-vs-fat-grafting-guide": "filler-vs-fat-grafting-men",
  "botox-vs-face-cream-guide": "botox-vs-face-cream-men",
  "botox-pricing-per-unit-vs-area": "botox-per-unit-vs-area-pricing-men",
  "botox-cost-by-city-guide": "botox-cost-by-city-men",
  "expensive-vs-cheap-botox-guide": "botox-expensive-vs-cheap-men",
  "fathers-day-botox-guide": "botox-fathers-day-men",
  "new-year-botox-men-guide": "botox-new-year-men",
  "botox-history-science-guide": "botox-history-men",
  "botox-headaches-side-effects-guide": "botox-headaches-men",
  "wedding-guest-botox-guide": "botox-wedding-guest-men",
  "botox-vs-facial-men-guide": "botox-vs-facial-men",
  "entrepreneurs-botox-guide": "botox-men-entrepreneurs",
  "professional-headshots-botox-guide": "botox-men-professional-headshots",
  "golfers-botox-guide": "botox-men-golfers",
  "botox-men-tampa-guide": "botox-men-tampa",
  "botox-men-charlotte-guide": "botox-men-charlotte",
  "botox-men-salt-lake-city-guide": "botox-men-salt-lake-city",
  "botox-men-new-orleans-guide": "botox-men-new-orleans",
  "filler-migration-men-guide": "filler-migration-men",
  "botox-men-turning-50-guide": "botox-men-turning-50",
  "intermittent-fasting-botox-guide": "botox-men-intermittent-fasting",
  "botox-wearing-off-guide": "botox-wearing-off-signs-men",
  "botox-men-need-more-units-guide": "botox-men-need-more-units",
  "botox-migration-safety-guide": "botox-migration-spread-men",
  "botox-bunny-lines-guide": "botox-bunny-lines-men",
  "botox-chin-dimpling-guide": "botox-chin-dimpling-men",
  "botox-necklace-lines-guide": "botox-necklace-lines-men",
  "botox-perioral-lines-guide": "botox-perioral-lines-men",
  "botox-holiday-party-guide": "botox-holiday-party-men",
  "botox-thick-skin-men-guide": "botox-thick-skin-men",
  "botox-facial-asymmetry-guide": "botox-facial-asymmetry-men",
  "botox-asian-men-guide": "botox-asian-men-guide",
  "botox-outdoor-workers-guide": "botox-outdoor-workers-men",
  "botox-career-promotion-guide": "botox-men-career-promotion",
  "botox-wish-i-knew-guide": "botox-men-wish-i-knew",
  "botox-retired-men-guide": "botox-retired-men-guide",
  "botox-round-face-men-guide": "botox-men-round-face",
  "botox-men-glasses-guide": "botox-men-glasses",
  "botox-andropause-guide": "botox-men-andropause",
  "botox-blue-collar-men-guide": "botox-men-blue-collar",
  "botox-post-covid-men-guide": "botox-men-post-covid",
  "botox-hairline-men-guide": "botox-hairline-men",
  "preventive-vs-corrective-botox-men": "botox-preventive-vs-corrective-men",
  "botox-when-sick-men-guide": "botox-when-sick-men",
  "botox-sleep-position-men-guide": "botox-sleep-position-men",
  "botox-flying-travel-men-guide": "botox-flying-men",
  "botox-dry-skin-men-guide": "botox-dry-skin-men",
  "botox-what-not-to-do-men-guide": "botox-what-not-to-do-men",
  "botox-mental-health-confidence-men": "botox-mental-health-men",
  "botox-who-administers-men-guide": "botox-who-administers-men",
  "botox-skin-types-men-guide": "botox-men-skin-types",
  "botox-sauna-steam-room-men-guide": "botox-sauna-steam-room-men",
  "botox-facial-sweating-men-guide": "botox-facial-sweating-men",
  "botox-tanning-sun-exposure-men-guide": "botox-tanning-sun-exposure-men",
  "allergan-vs-galderma-men-guide": "allergan-vs-galderma-men",
  "botox-neck-muscle-pain-men-guide": "botox-neck-muscle-pain-men",
  "botox-antibodies-immune-men-guide": "botox-antibodies-men",
  "botox-food-prep-appointment-men": "botox-food-prep-men",
  "botox-eye-area-complete-men-guide": "botox-eye-area-complete-men",
  "botox-insurance-coverage-men-guide": "botox-insurance-coverage-men",
  "botox-workplace-reactions-men-guide": "botox-workplace-reactions-men",
  "botox-men-psoriasis-guide": "botox-men-psoriasis",
  "botox-men-large-forehead-guide": "botox-men-large-forehead",
  "botox-competitive-athletes-guide": "botox-competitive-athletes-men",
  "botox-men-skin-cancer-guide": "botox-men-skin-cancer-history",
  "botox-men-autoimmune-guide": "botox-men-autoimmune",
  "botox-men-latino-guide": "botox-men-latino",
  "botox-men-70s-guide": "botox-men-70s",
  "botox-men-facial-scars-guide": "botox-men-facial-scarring",
  "botox-men-music-industry-guide": "botox-men-music-industry",
  "botox-men-politics-guide": "botox-men-politics",
  "botox-men-black-guide": "botox-men-black",
  "botox-men-south-asian-guide": "botox-men-south-asian",
  "botox-men-middle-eastern-guide": "botox-men-middle-eastern",
  "botox-spring-guide-men": "botox-men-spring-guide",
  "botox-fall-guide-men": "botox-men-fall-guide",
  "botox-men-in-their-60s": "botox-men-60s-guide",
  "botox-men-orlando-guide": "botox-men-orlando",
  "botox-men-raleigh-guide": "botox-men-raleigh",
  "botox-combination-skin-men-guide": "botox-men-combination-skin",
  "botox-annual-cost-men-guide": "botox-men-annual-budget",
  "reunion-prep-botox-men-guide": "botox-men-reunion",
  "botox-men-crossfit-guide": "botox-men-crossfit-hiit",
  "hifu-vs-botox-men-guide": "hifu-vs-botox-men",
  "botox-men-teachers-guide": "botox-men-teachers",
  "botox-men-hospitality-guide": "botox-men-hospitality",
  "botox-men-career-change-guide": "botox-men-career-change",
  "botox-men-team-sports-guide": "botox-men-team-sports",
  "mens-anti-aging-toolkit-guide": "mens-anti-aging-toolkit-2026",
  "botox-men-chefs-guide": "botox-men-chefs-culinary",
  "botox-men-content-creators-guide": "botox-men-content-creators",
  "botox-day-by-day-results-men": "botox-men-day-by-day",
  "botox-provider-red-flags-men": "botox-men-red-flags",
  "botox-longevity-wellness-men": "botox-men-longevity",
  "botox-natural-looking-men": "botox-men-natural-looking",
  "botox-pre-appointment-checklist-men": "botox-men-prep-checklist",
  "botox-lifestyle-results-men": "botox-men-lifestyle-results",
  "botox-biohacking-men": "botox-men-biohacking",
  "botox-retinol-combo-men": "botox-men-retinol-combo",
  "botox-track-results-men": "botox-men-track-results",
  "botox-confidence-research-men": "botox-men-confidence",
  "botox-in-office-vs-at-home-men": "botox-men-in-office-vs-at-home",
  "why-men-look-older-guide": "botox-men-looking-older-than-age",
  "botox-personal-trainers-guide": "botox-men-personal-trainers",
  "botox-ceo-executive-guide": "botox-men-ceo-guide",
  "cold-plunge-ice-bath-botox-guide": "botox-men-cold-therapy-ice-bath",
  "diet-nutrition-botox-guide": "botox-men-diet-nutrition",
  "botox-tattoos-men-guide": "botox-men-tattoos",
  "botox-pilots-aviation-guide": "botox-men-pilots-aviation",
  "cortisol-facial-aging-guide": "botox-men-cortisol-facial-aging",
  "botox-dating-over-40-guide": "botox-men-dating-over-40",
  "botox-coaches-mentors-guide": "botox-men-coaches-trainers",
  "botox-gym-supplements-guide": "botox-men-creatine-gym-supplements",
  "upper-vs-lower-face-botox-men": "botox-men-upper-vs-lower-face",
  "botox-bruxism-teeth-grinding-men": "botox-men-bruxism-grinding",
  "prevent-botox-bruising-men": "botox-men-bruising-prevention",
  "do-you-tip-botox-provider-men": "botox-men-tip-injector",
  "botox-abroad-medical-tourism-men": "botox-men-abroad-tourism",
  "first-botox-consultation-men": "botox-men-first-consultation",
  "partner-suggested-botox-men": "botox-men-partner-suggested",
  "botox-before-presentation-speech-men": "botox-men-before-big-presentation",
  "botox-sweating-complete-guide-men": "botox-men-sweating-complete",
  "botox-black-friday-holiday-deals-men": "botox-men-black-friday-deals",
  "botox-new-dad-guide": "botox-men-new-dad",
  "what-to-say-got-botox-guide": "botox-men-what-to-say",
  "botox-construction-trades-guide": "botox-men-construction-trades",
  "botox-men-academia-guide": "botox-men-academia",
  "botox-night-shift-workers-guide": "botox-men-night-shift",
  "botox-men-over-45-guide": "botox-men-over-45",
  "botox-management-consulting-guide": "botox-men-management-consulting",
  "botox-cannabis-vaping-guide": "botox-men-cannabis-vaping",
  "botox-photogenic-camera-guide": "botox-men-photogenic",
  "botox-acupuncture-comparison-guide": "botox-men-acupuncture-comparison",
  "botox-first-year-experience-guide": "botox-men-first-year-of-treatment",
  "botox-eye-twitching-men-guide": "botox-men-eye-twitching",
  "botox-dental-office-men-guide": "botox-men-dental-office",
  "botox-second-appointment-men-guide": "botox-men-second-appointment",
  "botox-gamers-streamers-men-guide": "botox-men-gamers-esports",
  "botox-overdone-frozen-look-men": "botox-men-overdone-look",
  "botox-tension-headaches-men-guide": "botox-men-tension-headaches",
  "botox-uneven-eyebrows-men-guide": "botox-men-uneven-eyebrows",
  "botox-forehead-only-men-guide": "botox-men-forehead-only",
  "botox-anger-mood-science-men": "botox-men-anger-facial-feedback",
  "how-often-men-get-botox": "botox-men-how-often",
  "botox-men-job-search-career": "botox-men-before-job-loss",
  "botox-bjj-combat-sports-guide": "botox-men-bjj-combat-sports",
  "botox-work-from-home-men-guide": "botox-men-remote-workers",
  "botox-pharma-sales-men-guide": "botox-men-pharma-medical-sales",
  "botox-5-year-plan-men-guide": "botox-men-5-year-plan",
  "botox-creative-professionals-men-guide": "botox-men-creative-professionals",
  "botox-private-equity-vc-men-guide": "botox-men-private-equity-vc",
  "botox-milestone-birthday-men-guide": "botox-men-milestone-birthday-prep",
  "botox-dating-after-50-men-guide": "botox-men-dating-after-50",
  "botox-single-fathers-men-guide": "botox-men-single-fathers",
  "botox-powerlifting-weightlifting-men-guide": "botox-men-weight-training-powerlifting",
  "botox-law-enforcement-men-guide": "botox-men-law-enforcement",
  "botox-men-privacy-discretion-guide": "botox-men-discretion-guide",
  "botox-two-week-results-men-guide": "botox-men-two-week-check",
  "botox-men-small-town-rural-guide": "botox-men-small-towns",
  "botox-gift-cards-men-guide": "botox-gift-guide-men",
  "botox-men-photo-documentation-guide": "botox-men-photo-guide",
  "botox-men-adhd-guide": "botox-men-adhd",
  "botox-or-fillers-first-men-guide": "botox-vs-fillers-sequence-men",
  "botox-group-party-appointments-men": "botox-men-group-appointments",
  "botox-blood-thinners-anticoagulants-men": "botox-men-blood-thinners",
  "masseter-jaw-slimming-guide": "botox-men-masseter-jaw-slimming",
  "collagen-supplements-botox-guide": "botox-men-collagen-supplements",
  "sleep-facial-aging-guide": "botox-men-sleep-facial-aging",
  "botox-membership-plans-guide": "botox-men-subscription-membership",
  "gut-health-skin-aging-guide": "botox-men-gut-health-skin",
  "years-of-botox-results-guide": "botox-men-years-of-treatment",
  "face-mapping-botox-guide": "botox-men-face-mapping-guide",
  "vitamin-c-skin-botox-guide": "botox-men-vitamin-c-skin",
  "daily-spf-botox-guide": "botox-men-spf-daily-guide",
  "mens-aesthetics-mindset-guide": "botox-men-mindset-aesthetics",
  "hormones-facial-aging-guide": "botox-men-hormones-facial-aging",
  "diabetes-botox-guide": "botox-men-diabetes",
  "shaving-after-botox-guide": "botox-men-shaving-routine",
  "allergy-season-botox-guide": "botox-men-allergy-season",
  "active-acne-botox-guide": "botox-men-active-acne",
  "botox-vs-hydrafacial-guide": "botox-vs-hydrafacial-men",
  "hair-loss-botox-guide": "botox-men-hair-loss-treatments",
  "lasik-botox-timing-guide": "botox-men-lasik-timing",
  "eyelid-drooping-ptosis-guide": "botox-men-eyelid-drooping",
  "massage-after-botox-guide": "botox-men-massage-timing",
  "dark-circles-men-guide": "botox-men-dark-circles",
  "red-light-therapy-vs-botox-guide": "red-light-therapy-vs-botox-men",
  "microcurrent-facials-vs-botox-guide": "microcurrent-vs-botox-men",
  "botox-men-bells-palsy-guide": "botox-men-bells-palsy",
  "botox-men-sobriety-guide": "botox-men-sobriety-recovery",
  "botox-men-thyroid-guide": "botox-men-thyroid-conditions",
  "botox-men-resting-tired-face-guide": "botox-men-resting-tired-face",
  "botox-men-endurance-athletes-guide": "botox-men-triathlon-endurance",
  "botox-men-glp1-weight-loss-guide": "botox-men-glp1-weight-loss-aesthetics",
  "complete-jawline-guide-men": "botox-men-jawline-complete-guide",
  "botox-men-sun-damage-guide": "botox-men-sun-damaged-skin",
  "botox-snoring-treatment-men": "botox-snoring-men",
  "botox-after-hair-transplant-guide": "botox-after-hair-transplant-men",
  "botox-keto-diet-men-guide": "botox-keto-carnivore-diet-men",
  "botox-back-pain-men-guide": "botox-chronic-back-pain-men",
  "botox-swimming-pool-men-guide": "botox-swimming-men",
  "botox-posture-men-guide": "botox-posture-men",
  "botox-vitiligo-skin-men-guide": "botox-vitiligo-men",
  "botox-men-reviews-community-guide": "botox-men-online-reviews",
  "botox-single-area-vs-full-face-men": "botox-single-vs-full-face-men",
  "botox-alternatives-men-guide": "botox-alternatives-non-injection-men",
  "botox-skiers-snowboarders-guide": "botox-men-skiers-snowboarders",
  "botox-surfers-men-guide": "botox-men-surfers",
  "botox-genetic-aging-men-guide": "botox-men-genetic-aging",
  "botox-hot-yoga-men-guide": "botox-men-hot-yoga",
  "botox-architecture-design-men-guide": "botox-men-architecture-design",
  "botox-wine-spirits-men-guide": "botox-men-wine-spirits-industry",
  "botox-cyclists-men-guide": "botox-men-cyclists-cycling",
  "botox-hunters-fishermen-men-guide": "botox-men-hunters-fishermen",
  "botox-poker-players-men-guide": "botox-men-poker-players",
  "botox-hikers-backpackers-men-guide": "botox-men-hikers-backpackers",
  "botox-vs-face-yoga-men-guide": "botox-vs-face-yoga-men",
  "botox-plastic-surgeon-vs-med-spa-men": "botox-plastic-surgeon-vs-med-spa-men",
  "botox-after-rhinoplasty-men-guide": "botox-men-after-rhinoplasty",
  "couples-botox-appointment-men-guide": "botox-couples-appointment-men",
  "botox-men-sunny-climate-uv-guide": "botox-men-high-uv-climate-guide",
  "botox-injection-anatomy-men-guide": "botox-injection-anatomy-guide-men",
  "botox-pricing-red-flags-men-guide": "botox-pricing-red-flags-men",
  "hand-rejuvenation-men-botox-guide": "botox-men-hand-rejuvenation",
  "botox-cancer-recovery-men-guide": "botox-men-cancer-recovery",
  "botox-firefighters-men-guide": "botox-men-firefighters",
  "botox-tennis-men-guide": "botox-men-tennis-players",
  "botox-vs-tretinoin-retin-a-men": "botox-vs-tretinoin-men",
  "botox-men-detroit-guide": "botox-men-detroit",
  "botox-men-pittsburgh-guide": "botox-men-pittsburgh",
  "botox-men-sacramento-guide": "botox-men-sacramento",
  "botox-motorcyclists-men-guide": "botox-men-motorcyclists",
  "botox-men-first-90-days-guide": "botox-men-first-90-days",
  "botox-nonprofit-social-sector-men": "botox-men-nonprofit-sector",
  "botox-men-genetic-father-guide": "botox-men-father-mirror-genetics",
  "botox-men-richmond-guide": "botox-men-richmond",
  "botox-vs-sculptra-men-guide": "botox-men-vs-sculptra",
  "best-time-of-year-botox-men": "botox-men-best-time-of-year",
  "botox-niacinamide-skincare-men": "botox-men-niacinamide-stack",
  "botox-permanent-face-changes-men": "botox-men-permanent-face-question",
  "botox-men-social-media-truth": "botox-men-tiktok-reality",
  "botox-tell-your-doctor-men": "botox-men-tell-your-doctor",
  "botox-men-multi-area-one-visit": "botox-men-multiple-areas-one-session",
  "why-men-wait-too-long-botox": "botox-men-cost-of-waiting",
  "botox-men-age-35-start": "botox-men-35-sweet-spot",
  "botox-men-long-term-research-guide": "botox-men-long-term-research",
  "botox-gay-lgbtq-men-guide": "botox-men-gay-lgbtq",
  "botox-midlife-crisis-men-guide": "botox-men-midlife-crisis",
  "botox-marketing-creative-men-guide": "botox-men-marketing-creative",
  "botox-veterans-civilian-guide": "botox-men-veterans-civilian",
  "botox-bald-scalp-dome-guide": "botox-men-bald-scalp-dome",
  "botox-emergency-medicine-men-guide": "botox-men-emergency-medicine",
  "botox-sports-broadcasters-men-guide": "botox-men-sports-broadcasters",
  "botox-minimalist-approach-men-guide": "botox-men-minimalist",
  "botox-workplace-ageism-men-guide": "botox-men-ageism-workplace",
  "botox-second-chapter-men-guide": "botox-men-second-chapter",
  "dao-mouth-corners-botox-men": "botox-dao-mouth-corners-men",
  "botox-nose-tip-lift-guide": "botox-nose-tip-lift-men",
  "botox-foot-sweating-hyperhidrosis-men": "botox-foot-sweating-men",
  "botox-accutane-isotretinoin-men": "botox-men-accutane",
  "botox-rogaine-finasteride-men": "botox-men-rogaine-finasteride",
  "botox-spock-brow-fix-men": "botox-men-spock-brow",
  "botox-not-working-men-guide": "botox-men-non-responder",
  "botox-men-65-senior-guide": "botox-men-over-65",
  "botox-heavy-drooping-brow-men": "botox-men-heavy-brow-arch",
  "botox-chest-sweating-men": "botox-men-chest-sweating",
  "turkey-neck-botox-men-guide": "botox-men-turkey-neck",
  "botox-nasolabial-folds-men-guide": "botox-men-nasolabial-folds",
  "botox-social-anxiety-men-guide": "botox-men-social-anxiety",
  "botox-digital-nomad-men-guide": "botox-men-digital-nomad",
  "botox-office-workers-men-guide": "botox-men-office-workers",
  "dry-needling-vs-botox-men-guide": "botox-men-dry-needling-vs-botox",
  "microblading-botox-brow-men-guide": "botox-men-microblading-brow",
  "peptide-skincare-botox-men-guide": "botox-men-peptide-skincare",
  "platysmal-bands-botox-men-guide": "botox-men-platysmal-bands",
  "gua-sha-vs-botox-men-guide": "botox-men-gua-sha-vs-botox",
  "botox-men-new-jersey-guide": "botox-men-new-jersey",
  "botox-men-baltimore-guide": "botox-men-baltimore",
  "botox-men-san-antonio-guide": "botox-men-san-antonio",
  "profhilo-men-guide": "botox-men-profhilo",
  "radiesse-men-filler-guide": "botox-men-radiesse",
  "juvederm-vs-restylane-men-guide": "botox-men-juvederm-vs-restylane",
  "botox-men-kansas-city-guide": "botox-men-kansas-city",
  "exosome-facial-men-guide": "botox-men-exosomes",
  "botox-men-columbus-ohio-guide": "botox-men-columbus-ohio",
  "polynucleotides-pdrn-men-guide": "botox-men-polynucleotides",
  "zinc-botox-results-men-guide": "botox-zinc-supplement-men",
  "miradry-vs-botox-sweating-men-guide": "miradry-vs-botox-sweating-men",
  "what-botox-cant-fix-men-guide": "botox-limitations-men",
  "botox-sleep-apnea-cpap-men-guide": "botox-men-sleep-apnea",
  "botox-groin-sweating-men-guide": "botox-groin-sweating-men",
  "botox-ed-viagra-cialis-men-guide": "botox-men-ed-medications",
  "botox-aftercare-nutrition-diet-men": "botox-aftercare-nutrition-men",
  "chain-vs-independent-medspa-men-guide": "botox-chain-vs-independent-men",
  "botox-bodybuilders-physique-men-guide": "botox-men-bodybuilding-physique",
  "botox-parkinsons-disease-men-guide": "botox-men-parkinsons",
  "botox-men-southern-us-guide": "botox-men-south-guide",
  "botox-introverts-guide": "botox-men-introvert-guide",
  "what-women-notice-botox-men": "botox-men-what-women-notice",
  "mens-facial-aging-guide": "mens-facial-aging-progression",
  "extreme-sports-botox-men": "botox-men-adventure-sports",
  "botox-10-year-cost-guide": "botox-men-decade-cost-analysis",
  "facial-volume-loss-men-guide": "male-facial-volume-loss-guide",
  "botox-no-downtime-guide": "botox-men-no-downtime-guide",
  "fatherhood-botox-guide": "botox-men-fatherhood-self-care",
  "botox-psychological-effects-men": "botox-men-psychological-transformation",
  "does-botox-age-faster-wear-off": "botox-age-faster-wear-off-men",
  "botox-men-regret-satisfaction-guide": "botox-men-regret-research",
  "botox-acne-breakouts-men-guide": "botox-acne-breakouts-men",
  "botox-antibiotics-interaction-men-guide": "botox-antibiotics-men",
  "botox-essential-tremor-men-guide": "botox-essential-tremor-men",
  "botox-packages-bundle-deals-men": "botox-packages-deals-men",
  "botox-heavy-forehead-feeling-men": "botox-heavy-forehead-men",
  "botox-skip-session-gap-men": "botox-skip-session-men",
  "botox-dry-eyes-men-guide": "botox-dry-eyes-men",
  "botox-before-after-photos-guide-men": "botox-read-before-after-photos-men",
  "botox-chronic-pain-men-guide": "botox-men-chronic-pain-guide",
  "botox-men-blushing-guide": "botox-men-blushing-flushing",
  "botox-tell-if-someone-had-it-men": "botox-men-spotting-natural-overdone",
  "botox-men-annual-calendar": "botox-men-annual-optimization-calendar",
  "botox-men-switching-providers": "botox-men-changing-providers-guide",
  "botox-hyaluronic-acid-men": "botox-men-hyaluronic-acid-skincare",
  "botox-post-surgery-safety-men": "botox-men-post-surgery-timing",
  "botox-men-brow-communication": "botox-men-brow-goals-injector-guide",
  "botox-dental-work-timing-men": "botox-men-dental-procedures-timing",
  "botox-jaw-tension-vs-slimming-men": "botox-men-jaw-tension-vs-slimming",
  "botox-men-facial-expressions-social": "botox-men-facial-expressions-social",
  "botox-vegan-men-guide": "botox-men-vegan",
  "botox-natural-looking-fear-guide": "botox-men-afraid-looking-fake",
  "silver-fox-botox-guide": "botox-men-silver-fox",
  "first-impressions-career-botox-men": "botox-men-first-impressions-career",
  "botox-men-networking-guide": "botox-men-professional-networking",
  "botox-total-grooming-budget-men": "botox-men-total-grooming-investment",
  "botox-provider-relationship-guide": "botox-men-provider-relationship",
  "botox-integrative-wellness-men": "botox-men-integrative-approach",
  "botox-men-stigma-emotional-guide": "botox-men-emotional-wellness-stigma",
  "botox-virtual-consult-men-guide": "botox-men-virtual-consultation",
  "gym-face-botox-men-guide": "botox-men-gym-face",
  "botox-allergy-guide-men": "botox-allergy-reaction-men",
  "botox-skin-effects-men-guide": "botox-skin-thinning-myth-men",
  "botox-muscle-atrophy-guide-men": "botox-muscle-atrophy-men",
  "botox-steroids-interaction-men": "botox-men-steroids-prednisone",
  "botox-consent-form-guide-men": "botox-consent-form-men",
  "botox-hemifacial-spasm-guide-men": "botox-hemifacial-spasm-men",
  "botox-pacemaker-men-guide": "botox-men-heart-condition-pacemaker",
  "botox-hidden-fees-pricing-men": "botox-hidden-fees-men",
  "botox-voice-disorder-men-guide": "botox-men-voice-disorders",
  "botox-post-stroke-men-guide": "botox-men-post-stroke",
  "botox-men-under-35-guide": "botox-men-under-35",
  "botox-men-55-65-guide": "botox-men-over-55",
  "botox-weekend-warrior-guide": "botox-men-weekend-warrior",
  "botox-men-how-young-look-guide": "botox-men-looking-younger-guide",
  "botox-men-nutrition-protein-guide": "botox-men-protein-nutrition-skin",
  "botox-spf-anti-aging-stack-guide": "botox-men-sunscreen-synergy",
  "botox-men-outdoor-sports-guide": "botox-men-outdoor-lifestyle",
  "botox-urban-professional-guide": "botox-men-urban-professional-guide",
  "botox-men-age-gracefully-guide": "botox-men-aging-gracefully",
  "botox-men-grooming-system-guide": "botox-men-grooming-upgrade",
  "letybo-neurotoxin-men-guide": "letybo-men-guide",
  "botox-vs-radiofrequency-men-guide": "botox-vs-radiofrequency-men",
  "lip-flip-vs-lip-filler-men-guide": "lip-flip-vs-lip-filler-men",
  "botox-concierge-mobile-men-guide": "botox-concierge-men",
  "juvederm-voluma-men-guide": "juvederm-voluma-men",
  "botox-men-hollow-thin-face-guide": "botox-men-hollow-face",
  "botox-men-decade-evolution-guide": "botox-men-evolution-2026",
  "botox-men-teaching-clinic-guide": "botox-men-teaching-clinic",
  "daxxify-vs-dysport-men-guide": "daxxify-vs-dysport-men",
  "sculptra-vs-radiesse-men-guide": "sculptra-vs-radiesse-men",
  "botox-cold-sores-men-guide": "botox-men-cold-sores",
  "botox-numbing-cream-men-guide": "botox-men-numbing-cream",
  "botox-vacation-timing-men-guide": "botox-men-vacation-timing",
  "botox-keloid-scarring-men-guide": "botox-men-keloid-history",
  "botox-six-month-check-men-guide": "botox-men-six-month-milestone",
  "botox-mask-wearers-men-guide": "botox-men-mask-wearing",
  "botox-individual-variation-men-guide": "botox-men-individual-variation",
  "botox-masculinity-stigma-men-guide": "botox-men-reframe-masculinity",
  "botox-high-altitude-men-guide": "botox-men-high-altitude",
  "botox-annual-review-men-guide": "botox-men-annual-review-guide",
  "botox-first-session-calibration-men": "botox-men-first-session-not-best",
  "all-neurotoxins-2026-men-guide": "five-neurotoxins-men-2026-guide",
  "botox-vitamin-d-skin-men-guide": "botox-men-vitamin-d-connection",
  "botox-12-month-plan-men-guide": "botox-men-12-month-plan",
  "botox-5-year-face-projection-men": "botox-men-5year-projection",
  "botox-face-self-assessment-men-guide": "botox-men-face-self-assessment",
  "botox-men-40s-boom-guide": "botox-men-40s-surge-guide",
  "botox-late-starter-over-50-men": "botox-men-start-late-over-50",
  "botox-men-strategic-investment-guide": "botox-men-strategic-investment",
  "botox-maximize-consultation-men-guide": "botox-men-maximize-consultation",
  "botox-forehead-eyebrow-men-guide": "botox-men-forehead-eyebrow-connection",
  "botox-men-louisville-guide": "botox-men-louisville",
  "botox-men-indianapolis-guide": "botox-men-indianapolis",
  "botox-men-charleston-sc-guide": "botox-men-charleston-sc",
  "botox-men-jacksonville-guide": "botox-men-jacksonville",
  "botox-men-boise-guide": "botox-men-boise",
  "botox-face-after-weight-loss-guide": "botox-men-face-after-weight-loss",
  "botox-after-mohs-surgery-guide": "botox-men-mohs-skin-care",
  "botox-men-st-louis-guide": "botox-men-st-louis",
  "botox-men-memphis-guide": "botox-men-memphis",
  "botox-men-oklahoma-city-guide": "botox-men-oklahoma-city",
  "botox-gig-economy-men-guide": "botox-men-gig-economy",
  "botox-air-pollution-skin-men-guide": "botox-men-air-pollution-skin",
  "botox-men-body-image-guide": "botox-men-body-image-psychology",
  "botox-relocation-new-provider-guide": "botox-men-relocation-new-provider",
  "botox-men-second-marriage-guide": "botox-men-second-marriage",
  "botox-micro-stressors-aging-guide": "botox-men-micro-stressors-aging",
  "botox-men-career-setback-guide": "botox-men-career-setback",
  "botox-father-son-aesthetics-guide": "botox-men-father-son-aesthetics",
  "botox-caffeine-skin-men-guide": "botox-men-caffeine-skin",
  "botox-men-first-100-days-guide": "botox-men-100-days",
  "botox-overactive-bladder-men-guide": "botox-men-overactive-bladder",
  "botox-body-odor-bromhidrosis-men-guide": "botox-men-bromhidrosis",
  "botox-raynauds-phenomenon-men-guide": "botox-men-raynauds",
  "botox-linkedin-headshot-men-guide": "botox-men-linkedin-photo-guide",
  "botox-which-zone-first-men-guide": "botox-men-zone-priority",
  "botox-medication-interactions-men-guide": "botox-men-medication-checklist",
  "botox-spasticity-injury-men-guide": "botox-men-spasticity-injury",
  "botox-facial-feedback-mood-men-guide": "botox-men-facial-feedback-mood",
  "botox-chin-masseter-comparison-men-guide": "botox-men-chin-masseter-comparison",
  "botox-second-opinion-men-guide": "botox-men-second-opinion",
  "botox-counterfeit-guide-men": "botox-counterfeit-diluted-men",
  "botox-ptsd-men-guide": "botox-men-ptsd",
  "botox-hiv-men-guide": "botox-men-hiv",
  "botox-men-cleveland-guide": "botox-men-cleveland",
  "botox-men-cincinnati-guide": "botox-men-cincinnati",
  "botox-men-virginia-beach-guide": "botox-men-virginia-beach",
  "botox-men-fort-worth-guide": "botox-men-fort-worth",
  "botox-men-albuquerque-guide": "botox-men-albuquerque",
  "botox-men-pre-retirement-guide": "botox-men-pre-retirement",
  "botox-caregivers-men-guide": "botox-men-caregivers",
  "first-botox-nerves-guide-men": "botox-men-nervous-first-timer",
  "botox-palmar-sweaty-hands-men": "botox-men-sweaty-palms",
  "trap-tox-shoulder-botox-men": "botox-men-shoulder-trapezius",
  "botox-chronic-migraine-fda-men": "botox-men-chronic-migraines",
  "botox-leg-calf-slimming-men": "botox-men-calf-slimming",
  "jeuveau-vs-botox-comparison-men": "botox-men-jeuveau-vs-botox",
  "botox-payment-plans-men-guide": "botox-men-financing-options",
  "negotiate-botox-price-men": "botox-men-price-negotiation",
  "botox-one-time-then-stop-men": "botox-men-one-time-reality",
  "how-botox-works-science-men": "botox-men-neurotoxin-science",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  // Pre-render first 20 SEO slugs; rest generated on-demand
  return Object.keys(seoSlugs).slice(0, 20).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleSlug = seoSlugs[slug];
  if (!articleSlug) return {};
  const article = getArticleBySlug(articleSlug);
  if (!article) return {};

  // Canonical points to /blog/ version to avoid duplicate content
  // /botox-for-men/ pages exist for SEO-friendly URLs but /blog/ is the canonical
  return {
    title: article.metaTitle,
    description: article.description,
    alternates: { canonical: `https://brotoxofficial.com/blog/${articleSlug}` },
    robots: { index: false, follow: true },
    openGraph: {
      title: article.metaTitle,
      description: article.description,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.publishedDate,
      url: `https://brotoxofficial.com/blog/${articleSlug}`,
      authors: ["Brotox Official"],
    },
  };
}

export default async function SeoArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const articleSlug = seoSlugs[slug];
  if (!articleSlug) notFound();
  const article = getArticleBySlug(articleSlug);
  if (!article) notFound();

  const lastUpdated = new Date().toISOString().split("T")[0];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    dateModified: lastUpdated,
    image: "https://brotoxofficial.com/og-image.png",
    author: [
      {
        "@type": "Person",
        name: "Trace Cohen",
        url: "https://x.com/Trace_Cohen",
        jobTitle: "Founder",
        worksFor: { "@type": "Organization", name: "Brotox Official" },
      },
      { "@type": "Organization", name: "Brotox Official", url: "https://brotoxofficial.com" },
    ],
    publisher: { "@type": "Organization", name: "Brotox Official", url: "https://brotoxofficial.com", logo: { "@type": "ImageObject", url: "https://brotoxofficial.com/og-image.png" } },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://brotoxofficial.com/botox-for-men/${slug}`,
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".quick-answer"] },
    },
    articleSection: article.category,
    wordCount: article.sections.reduce((acc, s) => acc + s.content.length + (s.items?.join("").length || 0), 0),
    about: { "@type": "Thing", name: "Botox for Men", sameAs: "https://en.wikipedia.org/wiki/Botulinum_toxin" },
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: article.title,
    url: `https://brotoxofficial.com/botox-for-men/${slug}`,
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".quick-answer"] },
    abstract: article.description,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  let sectionCount = 0;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="min-h-screen bg-[var(--background)]">
        <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-12">
          <div className="container-main max-w-3xl">
            <Breadcrumbs items={[
              { label: "Home", href: "/" },
              { label: "Botox for Men", href: "/blog" },
              { label: article.title },
            ]} />
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/20 text-xs font-semibold">
                {article.category}
              </span>
              <span className="text-gray-400 text-sm">{article.readTime}</span>
              <span className="text-gray-500 text-sm">By Trace Cohen</span>
              <span className="text-gray-500 text-sm">|</span>
              <span className="text-green-400 text-sm font-medium">Last updated: {lastUpdated}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </section>

        {/* Quick Answer Block */}
        <section className="pt-8 pb-4">
          <div className="container-main max-w-3xl">
            <div className="quick-answer bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
              <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">Quick Answer</p>
              <p className="text-white text-lg leading-relaxed">{article.description}</p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container-main max-w-3xl">
            <article className="space-y-6">
              {article.sections.map((section, i) => {
                sectionCount++;
                const showCta = sectionCount > 0 && sectionCount % 4 === 0;
                return (
                  <div key={i}>
                    {section.type === "heading" && (
                      <h2 className="text-2xl font-bold text-white mt-10 mb-4">{section.content}</h2>
                    )}
                    {section.type === "paragraph" && (
                      <p className="text-gray-300 text-lg leading-relaxed">{section.content}</p>
                    )}
                    {section.type === "list" && (
                      <div>
                        <p className="text-gray-300 text-lg mb-3">{section.content}</p>
                        <ul className="space-y-2 ml-1">
                          {section.items?.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-gray-300">
                              <span className="text-blue-400 mt-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {section.type === "callout" && (
                      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 my-6">
                        <p className="text-amber-200 font-medium">{section.content}</p>
                      </div>
                    )}
                    {showCta && (
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 my-8 text-center">
                        <p className="text-white font-bold mb-2">Ready to find a provider near you?</p>
                        <Link href="/find-botox-near-me" className="btn-primary inline-block py-3 px-6 text-sm">Search by Zip Code →</Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </article>

            {article.faqs.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {article.faqs.map((faq, i) => (
                    <details key={i} className="group card p-6 cursor-pointer">
                      <summary className="flex items-center justify-between text-white font-semibold list-none">
                        <span className="pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="text-gray-300 mt-4 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-16 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-black text-white mb-3">Find a Provider Near You</h2>
              <p className="text-lg text-blue-200 mb-6">Enter your zip code and get matched with a vetted Botox provider for men.</p>
              <Link href="/find-botox-near-me" className="btn-primary inline-block text-lg">Get Matched Free</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
