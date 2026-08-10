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

// Contact details and social profiles. Anything still blank is pending
// the real value. Rows and icons stay visible either way; each one only
// becomes a working link once its value is filled in here, so the
// layout is final but nothing points somewhere false in the meantime.
export const siteInfo = {
  name: "Sorrisó Hostesses Uganda",
  shortName: "Sorrisó",
  tagline: "Premier Guest Support Services",
  phones: ["0774870442", "0700440699", "0778985133"],
  whatsapp: "https://wa.me/256700440699",
  email: "",
  instagram: "",
  linkedin: "",
  tiktok: "https://www.tiktok.com/@sorrishostessesuganda",
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
    "Dedicated guest support, waiter, and security teams for weddings, conferences, and corporate events in Uganda.",
  ctaLabel: "Contact Us",
  ctaHref: "#contact",
  secondaryLabel: "Our Services",
  secondaryHref: "#services",
  image: "/images/gallery/serving-1.jpeg",
};

export const about = {
  eyebrow: "Who We Are",
  heading: "Your celebration deserves more than a team just showing up.",
  body: "We want you and your guests to feel welcomed, comfortable, and well taken care of. Depending on your event needs, we provide dedicated teams for different responsibilities, so each team can focus on their role and your guests receive better service.",
  image: "/images/gallery/serving-2.jpeg",
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
    title: "Dedicated Teams",
    description:
      "Guest support, waiters, and security are separate teams, each focused on their own role.",
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

// No eyebrow or ownership claim here on purpose: this is a working
// selection of real event photos, not a curated portfolio claim.
export const gallery = {
  eyebrow: "",
  heading: "Gallery",
  images: [
    { src: "/images/gallery/serving-1.jpeg", alt: "Guest support staff serving at a wedding" },
    { src: "/images/gallery/serving-2.jpeg", alt: "Staff assisting the bride at a wedding" },
    { src: "/images/gallery/entrance-dance.jpeg", alt: "Wedding reception entrance" },
    { src: "/images/gallery/venue-setup.jpeg", alt: "Event venue set up for a reception" },
  ],
};

export const contact = {
  eyebrow: "Get In Touch",
  heading: "Tell us about your event",
  body: "Send through the date, venue, and the kind of support you need, and we will come back to you with staffing options and pricing.",
};
