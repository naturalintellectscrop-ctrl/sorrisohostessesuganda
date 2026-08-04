"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, siteInfo } from "@/data/content";

const menuLinks = navLinks.filter((link) => link.href !== "#contact");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-cream/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(17,17,17,0.1)]" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/sorriso-logo.png"
            alt={siteInfo.name}
            width={216}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm tracking-wide uppercase text-ink/70 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gold px-6 py-2.5 text-sm font-body tracking-wide uppercase text-white border border-gold hover:bg-transparent hover:text-gold transition-all duration-300 hover:-translate-y-0.5"
        >
          Contact Us
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden text-ink"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream/80 backdrop-blur-xl border-t border-white/40 shadow-lg">
          <ul className="flex flex-col px-6 py-6 gap-5">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-2xl text-ink hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-8">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-full rounded-full bg-gold px-6 py-3.5 text-sm font-body tracking-wide uppercase text-white border border-gold hover:bg-transparent hover:text-gold transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
