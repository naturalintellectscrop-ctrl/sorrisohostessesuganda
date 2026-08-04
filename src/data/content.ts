export type NavLink = {
  label: string;
  href: string;
};

// Full section list, used by the footer sitemap and anywhere a
// complete list of in-page sections is needed.
export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

// Contact details and social profiles are still blank pending the real
// values. The rows and icons stay visible either way; each one only
// becomes a working link once its value is filled in here, so the
// layout is final but nothing points somewhere false in the meantime.
export const siteInfo = {
  name: "Sorrisó Hostesses Uganda",
  shortName: "Sorrisó",
  tagline: "Premier Guest Support Services",
  phone: "",
  whatsapp: "",
  email: "",
  instagram: "",
  linkedin: "",
  facebook: "",
};

// Shown in place of a value while the corresponding siteInfo field is
// empty, so a channel is named without inventing a number or address.
export const contactChannelLabels = {
  whatsapp: "WhatsApp",
  phone: "Phone",
  email: "Email",
};

export const hero = {
  eyebrow: "Sorrisó Hostesses Uganda",
  headline: "Premier Guest Support Services",
  subcopy:
    "Hostesses, protocol teams, and guest support staff for weddings, conferences, and corporate events in Uganda.",
  ctaLabel: "Contact Us",
  ctaHref: "#contact",
  secondaryLabel: "Our Services",
  secondaryHref: "#services",
  image: "/images/placeholders/hero.jpg",
};

export const about = {
  eyebrow: "Who We Are",
  heading: "Hospitality staff who look after your guests.",
  body: "Sorrisó Hostesses Uganda provides trained hostesses and event support staff for weddings, conferences, and corporate functions. We receive, direct, and attend to guests through the course of your event, so you can give your attention to the occasion itself.",
  image: "/images/placeholders/about.jpg",
};

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Protocol Teams",
    description:
      "Ushering and protocol staff for award ceremonies, conferences, and formal events.",
  },
  {
    title: "Wedding Guest Support",
    description:
      "Guest aides and waitstaff for weddings, from reception through to the end of the evening.",
  },
  {
    title: "Security Personnel",
    description:
      "Bouncers and security staff for crowd control and guest safety.",
  },
  {
    title: "Corporate Hospitality",
    description:
      "Hosts and hostesses for product launches, galas, and company functions.",
  },
];

export type WhyPoint = {
  title: string;
  description: string;
};

// These describe how we work, not a track record we have not built yet.
export const whyChooseUs: WhyPoint[] = [
  {
    title: "Briefed Before Every Event",
    description:
      "Staff are taken through the running order, dress code, and guest list ahead of the day.",
  },
  {
    title: "Staffed to the Occasion",
    description:
      "Team size and roles are set by the format of your event rather than a fixed package.",
  },
  {
    title: "One Point of Contact",
    description:
      "A single person handles your booking, briefing, and any changes before the day.",
  },
  {
    title: "Arrival to Departure",
    description:
      "Cover from the moment guests arrive through to the close of the event.",
  },
];

// No eyebrow or ownership claim here on purpose: the images below are
// stand-ins, so the section stays a plain gallery until real Sorrisó
// event photography replaces them.
export const gallery = {
  eyebrow: "",
  heading: "Gallery",
  images: [
    { src: "/images/placeholders/hero.jpg", alt: "Guest support at a formal event" },
    { src: "/images/placeholders/about.jpg", alt: "Event coordination in progress" },
    { src: "/images/placeholders/gallery-1.jpg", alt: "Hostess team at an occasion" },
    { src: "/images/placeholders/gallery-2.jpg", alt: "Hostess team in uniform" },
  ],
};

export const contact = {
  eyebrow: "Get In Touch",
  heading: "Tell us about your event",
  body: "Send through the date, venue, and the kind of support you need, and we will come back to you with staffing options and pricing.",
};
