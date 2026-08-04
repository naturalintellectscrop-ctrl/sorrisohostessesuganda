import { Award, Sparkles, BadgeCheck, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import { whyChooseUs } from "@/data/content";

const icons = [Award, Sparkles, BadgeCheck, Users];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16 lg:mb-20">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-5">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink">
            The Sorrisó Standard
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
          {whyChooseUs.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={point.title} delay={i * 0.08} className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center">
                  <Icon className="text-gold" size={22} strokeWidth={1.4} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-ink mb-2">
                    {point.title}
                  </h3>
                  <p className="font-body text-sm text-ink/65 leading-relaxed max-w-md">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
