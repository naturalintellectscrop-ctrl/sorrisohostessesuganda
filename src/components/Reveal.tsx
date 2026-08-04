"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "span";
  delay?: number;
  y?: number;
  duration?: number;
};

export default function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  y = 28,
  duration = 0.9,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, y });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: "power3.out",
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, y, duration]);

  const Tag = as;
  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
