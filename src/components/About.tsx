import Image from "next/image";
import Reveal from "@/components/Reveal";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src={about.image}
              alt="Sorrisó hostesses attending to guests"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden sm:block w-32 h-32 border border-gold rounded-sm" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-5">
            {about.eyebrow}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink mb-6">
            {about.heading}
          </h2>
          <p className="font-body text-ink/70 leading-relaxed max-w-xl mb-10">
            {about.body}
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-md">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-gold mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-ink/60 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
