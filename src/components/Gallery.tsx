import Image from "next/image";
import Reveal from "@/components/Reveal";
import { gallery } from "@/data/content";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16 lg:mb-20">
          {gallery.eyebrow && (
            <p className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-5">
              {gallery.eyebrow}
            </p>
          )}
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink">
            {gallery.heading}
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {gallery.images.map((image, i) => (
            <Reveal
              key={image.src + i}
              delay={i * 0.06}
              className={`relative overflow-hidden rounded-sm ${
                i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
              } ${i === 1 ? "sm:mt-10" : ""}`}
            >
              <div className="group relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
