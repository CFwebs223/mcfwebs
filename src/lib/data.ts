export interface Capability {
  title: string;
  description: string;
  number: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  bestFor: string;
  features: string[];
  cta: string;
  badge?: string;
}

export const NAV_ITEMS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export const CAPABILITIES: Capability[] = [
  {
    title: "Business websites",
    description:
      "Clean, credible websites for service businesses that need to look established online.",
    number: "01",
  },
  {
    title: "Landing pages",
    description:
      "Focused pages built around one offer, one audience and one clear action.",
    number: "02",
  },
  {
    title: "Digital menus",
    description:
      "Fast, polished menu experiences for restaurants, cafés and hospitality brands.",
    number: "03",
  },
  {
    title: "Booking flows",
    description:
      "Simple digital journeys that help customers enquire, book or take the next step.",
    number: "04",
  },
  {
    title: "Lead capture pages",
    description:
      "Structured pages designed to turn traffic into real conversations.",
    number: "05",
  },
  {
    title: "Website redesigns",
    description:
      "Sharper positioning, cleaner layouts and a more premium digital first impression.",
    number: "06",
  },
  {
    title: "Copy and positioning",
    description:
      "Clear messaging that makes your offer easier to understand and easier to trust.",
    number: "07",
  },
  {
    title: "AI-assisted workflows",
    description:
      "Modern build systems that help launch faster without sacrificing taste.",
    number: "08",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Digital Menu",
    price: "R2,000",
    bestFor: "Restaurants, cafés and small businesses that need a simple digital experience.",
    features: [
      "Mobile-friendly digital menu",
      "Clean branded layout",
      "Easy customer access",
      "Fast turnaround",
      "Basic contact/action links",
    ],
    cta: "Enquire now",
  },
  {
    title: "Business Website",
    price: "R5,000",
    bestFor: "Service businesses that need a credible website and clearer online presence.",
    features: [
      "Multi-section business website",
      "Mobile-first design",
      "Clear service positioning",
      "Contact and enquiry flow",
      "Basic SEO-ready structure",
    ],
    cta: "Start a website",
    badge: "Most practical",
  },
  {
    title: "Scroll Experience",
    price: "R8,000",
    bestFor: "Brands that want a more cinematic, premium and memorable website.",
    features: [
      "Scroll-based visual experience",
      "Premium motion design",
      "Custom animated sections",
      "Stronger brand presence",
      "Built for standout first impressions",
    ],
    cta: "Build something premium",
    badge: "Premium",
  },
];

export const CONTACT_INFO = {
  email: "hello@mcfwebs.com",
  whatsapp: "+27781064098",
  whatsappMessage: "Hi mcf.webs, I'd like to enquire about a project.",
} as const;
