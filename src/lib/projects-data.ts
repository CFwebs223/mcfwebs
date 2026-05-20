export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface ProjectContent {
  slug: string;
  title: string;
  tagline: string;
  subtitle: string;
  heroVideo: string;
  storyTitle: string;
  storyParagraphs: string[];
  featuresTitle: string;
  featuresSubtitle: string;
  features: ProjectFeature[];
  testimonials: ProjectTestimonial[];
  ctaText: string;
  ctaHref: string;
  // Visual identity
  colors: {
    bg: string;
    bgAlt: string;
    accent: string;
    accentLight: string;
    text: string;
    cardBg: string;
    border: string;
    badge: string;
  };
}

export const PROJECTS: ProjectContent[] = [
  {
    slug: "press-club",
    title: "The Press Club",
    tagline: "An exclusive digital threshold.",
    subtitle: "Scroll Experience — Luxury Hospitality",
    heroVideo: "/videos/projects/press-club.mp4",
    storyTitle: "Crafting a digital threshold for the discerning few.",
    storyParagraphs: [
      "The Press Club required a digital presence that matched the exclusivity of their physical space — an upscale private membership club where every detail signals belonging. They needed more than a website; they needed a threshold.",
      "We built a scroll-driven narrative that guides prospective members through the club's ethos, amenities, and application process without ever feeling like a sales pitch. Every section reveals itself with cinematic pacing.",
      "The result is a digital experience that feels like walking through the club's doors — understated, luxurious, and unmistakably intentional.",
    ],
    featuresTitle: "What was delivered",
    featuresSubtitle: "A complete digital ecosystem for the modern private member.",
    features: [
      { title: "Scroll-led brand narrative", description: "Cinematic section reveals that tell the club's story through paced, visual storytelling. Each scroll feels intentional." },
      { title: "Full-screen video integration", description: "Curated lifestyle footage woven into the narrative structure, reinforcing the club's atmosphere and values without overwhelming the page." },
      { title: "Membership enquiry engine", description: "A refined application flow that collects interest without friction. Designed for the member who values discretion and speed." },
      { title: "Events calendar module", description: "An elegant, filterable calendar showcasing club events, dinners, and guest speakers. Members can RSVP in two clicks." },
      { title: "Private member portal", description: "A gated area for existing members featuring exclusive content, booking capabilities, and club communications." },
    ],
    testimonials: [
      { quote: "The site captures exactly what we stand for — understated luxury. Every scroll feels intentional, like walking deeper into the club itself.", author: "James Whitfield", role: "Founder, The Press Club", rating: 5 },
      { quote: "Our membership applications tripled in the first month. The site does the selling for us.", author: "Sarah van der Merwe", role: "Membership Director", rating: 5 },
    ],
    ctaText: "Enquire about membership",
    ctaHref: "#contact",
    colors: {
      bg: "bg-[#0F0F0D]",
      bgAlt: "bg-[#1A1A16]",
      accent: "text-[#C9A94E]",
      accentLight: "text-[#D8C8AE]",
      text: "text-[#F8F4EC]",
      cardBg: "bg-[#1A1A16]/80",
      border: "border-[#C9A94E]/20",
      badge: "bg-[#C9A94E] text-[#0F0F0D]",
    },
  },
  {
    slug: "bottega-table",
    title: "Bottega Table",
    tagline: "Authentic意大利, served digitally.",
    subtitle: "Digital Menu — Fine Dining",
    heroVideo: "/videos/projects/bottega-table.mp4",
    storyTitle: "Bringing the warmth of the table to the screen.",
    storyParagraphs: [
      "Bottega Table is a fine-dining Italian restaurant where the experience begins before the first course arrives. They needed a digital menu that matched the artistry of their kitchen — beautiful, tactile, and effortless.",
      "We created a touchless menu experience that guests access by scanning a QR code at their table. Every dish is presented with full-bleed photography, thoughtful typography, and a layout that mirrors the restaurant's warm, rustic-elegant interior.",
      "The menu updates in real-time, allowing the chef to feature seasonal specials. Wine pairings appear alongside each course, and reservations integrate seamlessly for post-meal booking.",
    ],
    featuresTitle: "What was delivered",
    featuresSubtitle: "A digital dining experience that complements the plate.",
    features: [
      { title: "Touchless digital menu", description: "QR-code accessible menu with full-bleed dish photography, dietary filters, and real-time availability. No app download required." },
      { title: "Wine pairing guide", description: "Curated wine recommendations alongside each dish, with tasting notes and origin stories. Sommelier-approved." },
      { title: "Reservation integration", description: "One-tap booking directly from the menu. Guests book their next visit while still at the table." },
      { title: "Seasonal specials module", description: "The chef updates daily specials through a simple CMS. New dishes appear instantly without developer involvement." },
      { title: "Multi-language support", description: "Seamless switching between English, Italian and French — each with typography tailored to the language." },
    ],
    testimonials: [
      { quote: "Guests love scanning straight to the menu. It looks beautiful and works instantly — no waiting, no fuss.", author: "Marco Rossi", role: "Head Chef, Bottega Table", rating: 5 },
      { quote: "The wine pairing guide has increased our per-table spend by 22%. Guests are ordering wines they'd never have considered.", author: "Elena Conti", role: "Restaurant Manager", rating: 5 },
    ],
    ctaText: "Book a table",
    ctaHref: "#contact",
    colors: {
      bg: "bg-[#1A1C18]",
      bgAlt: "bg-[#22241F]",
      accent: "text-[#D8C8AE]",
      accentLight: "text-[#B9AA92]",
      text: "text-[#F8F4EC]",
      cardBg: "bg-[#22241F]/80",
      border: "border-[#D8C8AE]/20",
      badge: "bg-[#D8C8AE] text-[#1A1C18]",
    },
  },
  {
    slug: "solis-advisory",
    title: "Solis Advisory",
    tagline: "Clarity in every financial decision.",
    subtitle: "Business Website — Financial Advisory",
    heroVideo: "/videos/projects/solis-advisory.mp4",
    storyTitle: "Building trust through digital restraint.",
    storyParagraphs: [
      "Solis Advisory is a financial advisory firm that helps individuals and businesses navigate complex financial landscapes. Their existing website was dated, cluttered, and failed to convey the calm authority their clients expect.",
      "We stripped everything back. Clean layouts, deliberate whitespace, and a muted palette of charcoal and sage communicate stability without saying a word. Every element serves a purpose — there is no decoration for decoration's sake.",
      "The site guides visitors through service tiers with clear positioning, then captures leads through a streamlined enquiry flow. The result is a digital presence that feels as trustworthy as the advisors behind it.",
    ],
    featuresTitle: "What was delivered",
    featuresSubtitle: "A digital foundation built on credibility and clarity.",
    features: [
      { title: "Multi-section business website", description: "Clean, hierarchical layout that guides visitors from introduction through services, team, and contact without distraction." },
      { title: "Service tier showcase", description: "Clear, scannable service packages with transparent pricing indicators. Clients understand exactly what they're getting." },
      { title: "Trust signal integration", description: "Accreditations, regulatory badges, and media mentions positioned throughout the buyer's journey for maximum credibility." },
      { title: "Enquiry capture system", description: "A streamlined form that pre-qualifies leads before the first call. Advisors arrive at conversations prepared." },
      { title: "SEO-ready architecture", description: "Semantic HTML structure, fast load times, and properly tagged content that ranks for key financial search terms in their region." },
    ],
    testimonials: [
      { quote: "Our conversion rate tripled. The site looks more premium than anything our competitors have, and it shows in our pipeline.", author: "David Solis", role: "Managing Director, Solis Advisory", rating: 5 },
      { quote: "Clients consistently comment on how easy the site is to navigate. They find what they need and reach out — no friction.", author: "Priya Naidoo", role: "Client Relations Lead", rating: 5 },
    ],
    ctaText: "Schedule a consultation",
    ctaHref: "#contact",
    colors: {
      bg: "bg-[#1B1A17]",
      bgAlt: "bg-[#242320]",
      accent: "text-[#7D8A72]",
      accentLight: "text-[#B9AA92]",
      text: "text-[#F8F4EC]",
      cardBg: "bg-[#242320]/80",
      border: "border-[#7D8A72]/20",
      badge: "bg-[#7D8A72] text-[#1B1A17]",
    },
  },
  {
    slug: "atelier-east",
    title: "Atelier East",
    tagline: "Where space becomes feeling.",
    subtitle: "Landing Page — Interior Design Studio",
    heroVideo: "/videos/projects/atelier-east.mp4",
    storyTitle: "Translating spatial poetry into digital form.",
    storyParagraphs: [
      "Atelier East is an interior design studio that believes a room should feel like a story. Their landing page needed to capture that philosophy — not through description, but through the experience of browsing it.",
      "We designed a focused, single-offer page that leads visitors through the studio's portfolio, philosophy, and process in a single, seamless scroll. Every visual element was chosen to evoke the calm, refined atmosphere of their interiors.",
      "The consultation booking flow sits at the natural endpoint of the narrative — after the visitor has seen the work, understood the approach, and felt ready to begin their own project. Conversion feels like the obvious next step, not a hard sell.",
    ],
    featuresTitle: "What was delivered",
    featuresSubtitle: "A landing page that feels like walking into one of their spaces.",
    features: [
      { title: "Single-offer landing page", description: "Focused narrative structure that leads one audience — potential clients — through one clear journey from inspiration to consultation." },
      { title: "Portfolio gallery", description: "Full-bleed image gallery that showcases completed projects with before/after comparisons and material call-outs." },
      { title: "Consultation booking flow", description: "Streamlined booking system that captures project scope, timeline, and budget before the first meeting." },
      { title: "Brand positioning copy", description: "Strategic messaging that positions Atelier East as a design partner, not just a service provider. Every line reinforces their philosophy." },
      { title: "Social proof section", description: "Curated testimonials and press mentions that build confidence without overwhelming the clean visual hierarchy." },
    ],
    testimonials: [
      { quote: "It feels exactly like walking into one of our spaces — refined, calm and intentional. The site has become part of our pitch.", author: "Nadia Khoza", role: "Creative Director, Atelier East", rating: 5 },
      { quote: "We've had five consultation requests in the first week. The site attracts exactly the kind of client we want to work with.", author: "Liam de Bruyn", role: "Partner, Atelier East", rating: 5 },
    ],
    ctaText: "Book a consultation",
    ctaHref: "#contact",
    colors: {
      bg: "bg-[#0F0F0D]",
      bgAlt: "bg-[#1A1A16]",
      accent: "text-[#C7A96B]",
      accentLight: "text-[#D8C8AE]",
      text: "text-[#F8F4EC]",
      cardBg: "bg-[#1A1A16]/80",
      border: "border-[#C7A96B]/20",
      badge: "bg-[#C7A96B] text-[#0F0F0D]",
    },
  },
  {
    slug: "vela-law",
    title: "Vela Chambers",
    tagline: "Authority, made legible.",
    subtitle: "Business Website — Legal Practice",
    heroVideo: "/videos/projects/vela-law.mp4",
    storyTitle: "Making a boutique law firm impossible to overlook.",
    storyParagraphs: [
      "Vela Chambers is a boutique litigation and advisory practice built around three senior partners with decades of combined experience. Their old website looked like every other legal site on the internet — safe, dated and indistinguishable.",
      "We started by stripping their digital presence back to what actually matters: expertise, track record, and approachability. The design language is deliberate — dark navy, considered whitespace, and typography that commands attention without shouting.",
      "The result is a site that feels as credible as the partners themselves. New client enquiries increased significantly in the first quarter, and the firm now uses the website as part of their pitch to prospective clients.",
    ],
    featuresTitle: "What was delivered",
    featuresSubtitle: "A digital presence that matches the weight of the work.",
    features: [
      { title: "Practice area pages", description: "Dedicated pages for each area of law — structured clearly so visitors immediately understand whether Vela Chambers is the right fit for their matter." },
      { title: "Partner profiles", description: "Detailed, authoritative profiles for each senior partner. Credentials, specialisations and a direct line of contact — no gatekeeping." },
      { title: "Case result highlights", description: "Anonymised matter summaries that demonstrate track record without compromising client confidentiality. Proof over promises." },
      { title: "Secure enquiry flow", description: "A structured intake form that gathers matter type, urgency, and brief context before the first consultation — so partners arrive prepared." },
      { title: "SEO and local search", description: "Optimised for key legal search terms in their jurisdiction. The site ranks for practice areas, not just the firm name." },
    ],
    testimonials: [
      { quote: "We've had more serious enquiries in three months than in the previous two years. The site finally reflects the calibre of our work.", author: "Richard Vela", role: "Managing Partner, Vela Chambers", rating: 5 },
      { quote: "Clients consistently mention the website before our first call. It sets the right tone and they arrive with confidence.", author: "Amara Osei", role: "Partner, Vela Chambers", rating: 5 },
    ],
    ctaText: "Schedule a consultation",
    ctaHref: "#contact",
    colors: {
      bg: "bg-[#12141A]",
      bgAlt: "bg-[#1A1D26]",
      accent: "text-[#8FA3C4]",
      accentLight: "text-[#B8C8DC]",
      text: "text-[#F0F4F8]",
      cardBg: "bg-[#1A1D26]/80",
      border: "border-[#8FA3C4]/20",
      badge: "bg-[#8FA3C4] text-[#12141A]",
    },
  },
];
