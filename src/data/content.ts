export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const siteInfo = {
  name: "Sorrisó Hostesses Uganda",
  shortName: "Sorrisó",
  tagline: "Premier Guest Support Services",
  phone: "+256-700782133",
  whatsapp: "256700782133",
  email: "info@sorrisouganda.com",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
  facebook: "https://www.facebook.com/",
};

export const hero = {
  eyebrow: "Sorrisó Hostesses Uganda",
  headline: "Premier Guest Support Services",
  subcopy:
    "Tailored hospitality solutions for weddings, conferences, and prestigious occasions — delivered with elegance, discretion, and warmth.",
  ctaLabel: "Contact Us",
  ctaHref: "#contact",
  secondaryLabel: "Our Services",
  secondaryHref: "#services",
  image: "/images/placeholders/hero.jpg",
};

export const about = {
  eyebrow: "Who We Are",
  heading: "Elegance in every detail, warmth in every welcome.",
  body: "Sorrisó Hostesses Uganda elevates every celebration and corporate occasion with exceptional guest experiences. Our teams bring dedication, poise, and expertise to ensure each event receives top-tier support — creating lasting impressions that guests remember long after the evening ends.",
  image: "/images/placeholders/about.jpg",
  stats: [
    { label: "Events Supported", value: "150+" },
    { label: "Trained Staff", value: "40+" },
    { label: "Years Combined Experience", value: "10+" },
  ],
};

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Protocol Teams",
    description:
      "Refined protocol staff for award ceremonies, conferences, and prestigious state and corporate events.",
  },
  {
    title: "Wedding Guest Support",
    description:
      "360° guest aides and waitstaff dedicated to seamless, unforgettable wedding celebrations.",
  },
  {
    title: "Security Personnel",
    description:
      "Discreet, professional bouncers and security staff trained in crowd management and guest safety.",
  },
  {
    title: "Corporate Hospitality",
    description:
      "Polished hosts and hostesses for product launches, galas, and executive functions.",
  },
];

export type WhyPoint = {
  title: string;
  description: string;
};

export const whyChooseUs: WhyPoint[] = [
  {
    title: "Trained Excellence",
    description:
      "Every team member is trained in etiquette, discretion, and guest care to the highest standard.",
  },
  {
    title: "Tailored Solutions",
    description:
      "No two events are alike — we shape our staffing and service around your occasion's needs.",
  },
  {
    title: "Trusted & Professional",
    description:
      "A reputation built on reliability, discretion, and consistently outstanding service.",
  },
  {
    title: "Seamless Coordination",
    description:
      "From reception to farewell, our teams manage the details so you can host with ease.",
  },
];

export const gallery = {
  eyebrow: "A Glimpse of Our Work",
  heading: "Moments We've Helped Create",
  images: [
    { src: "/images/placeholders/hero.jpg", alt: "Guest support at a formal event" },
    { src: "/images/placeholders/about.jpg", alt: "Event coordination in progress" },
    { src: "/images/placeholders/gallery-1.jpg", alt: "Hostess team at an occasion" },
    { src: "/images/placeholders/gallery-2.jpg", alt: "Hostess team in uniform" },
  ],
};

export const contact = {
  eyebrow: "Get In Touch",
  heading: "Let's Make Your Event Unforgettable",
  body: "Reach out for inquiries and reservations — our team responds promptly to help you plan seamless guest experiences.",
};
