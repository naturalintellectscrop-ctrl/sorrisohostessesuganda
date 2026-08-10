import { ShieldCheck, HeartHandshake, ShieldAlert, Briefcase } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services } from "@/data/content";

const icons = [ShieldCheck, HeartHandshake, ShieldAlert, Briefcase];

export default function Services() {
  return (
    <section id="services" className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16 lg:mb-20">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-5">
            What We Offer
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] text-white">
            Our Services
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={service.title} delay={i * 0.08} className="bg-ink">
                <div className="h-full p-8 lg:p-10 hover:bg-white/[0.03] transition-colors duration-300">
                  <Icon className="text-gold mb-6" size={30} strokeWidth={1.4} />
                  <h3 className="font-display text-2xl text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    {service.description}
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
