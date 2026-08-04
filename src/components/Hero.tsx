"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { hero } from "@/data/content";

export default function Hero() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.set(
      [eyebrowRef.current, headlineRef.current, subRef.current, ctaRef.current],
      { opacity: 0, y: 24 }
    ).set(imageRef.current, { opacity: 0, scale: 1.04 });

    tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.7 })
      .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.45")
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.55")
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
      .to(imageRef.current, { opacity: 1, scale: 1, duration: 1.3 }, "-=1.1");
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-ink overflow-hidden pt-20"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-24 w-full">
        <div className="max-w-2xl">
          <p
            ref={eyebrowRef}
            className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-gold-light mb-6"
          >
            {hero.eyebrow}
          </p>
          <h1
            ref={headlineRef}
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-white mb-6"
          >
            {hero.headline}
          </h1>
          <p
            ref={subRef}
            className="font-body text-base md:text-lg text-white/75 max-w-xl mb-10 leading-relaxed"
          >
            {hero.subcopy}
          </p>
          <div ref={ctaRef} className="flex flex-wrap items-center gap-5">
            <a
              href={hero.ctaHref}
              className="inline-flex items-center rounded-full bg-gold border border-gold px-8 py-4 text-sm font-body tracking-wide uppercase text-white hover:bg-transparent hover:text-gold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04]"
            >
              {hero.ctaLabel}
            </a>
            <a
              href={hero.secondaryHref}
              className="inline-flex items-center rounded-full border border-white/30 px-8 py-4 text-sm font-body tracking-wide uppercase text-white hover:border-gold hover:text-gold-light transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04]"
            >
              {hero.secondaryLabel}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex text-white/50 hover:text-gold-light transition-colors duration-300"
      >
        <ArrowDown size={26} strokeWidth={1.5} className="animate-bounce" />
      </a>
    </section>
  );
}
