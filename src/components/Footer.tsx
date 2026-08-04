import Image from "next/image";
import { navLinks, siteInfo } from "@/data/content";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2.2c2.72 0 3.05.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.89 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.07.06 1.4.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.07.05-1.4.06-4.12.06s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.21 15.05 2.2 14.72 2.2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 0 1 5.64 2.53c.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.8 2.8 0 0 0-.66-1.02 2.8 2.8 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3-1.05-.05-1.37-.06-4.04-.06Zm0 3.15a4.85 4.85 0 1 1 0 9.7 4.85 4.85 0 0 1 0-9.7Zm0 8a3.15 3.15 0 1 0 0-6.3 3.15 3.15 0 0 0 0 6.3Zm5.04-8.2a1.13 1.13 0 1 1-2.27 0 1.13 1.13 0 0 1 2.27 0Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75Zm6.4 0h3.36v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.34V21h-3.5v-5.98c0-1.43-.03-3.26-1.99-3.26-2 0-2.3 1.56-2.3 3.16V21H9.6V8.75Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.53c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.3 4.3c-2.24 0-3.78 1.37-3.78 3.88v2.16H7.96v2.96h2.56V21h2.98Z" />
    </svg>
  );
}

const socials = [
  { Icon: InstagramIcon, href: siteInfo.instagram, label: "Instagram" },
  { Icon: LinkedinIcon, href: siteInfo.linkedin, label: "LinkedIn" },
  { Icon: FacebookIcon, href: siteInfo.facebook, label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid sm:grid-cols-3 gap-10 items-start">
          <div className="flex items-center gap-3">
            <span className="bg-ivory rounded-sm px-3 py-2 inline-flex">
              <Image
                src="/images/sorriso-logo.jpeg"
                alt={siteInfo.name}
                width={194}
                height={36}
                className="h-7 w-auto"
              />
            </span>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 sm:justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-white/60 hover:text-gold-light transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 sm:justify-end">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
                className="w-11 h-11 rounded-full flex items-center justify-center text-white/80 bg-white/[0.06] backdrop-blur-md border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] hover:text-gold-light hover:bg-gold/20 hover:border-gold/40 transition-colors duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="font-body text-xs text-white/40">
            &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
