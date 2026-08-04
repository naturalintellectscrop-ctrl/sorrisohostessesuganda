"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contact, siteInfo } from "@/data/content";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

// Set NEXT_PUBLIC_CONTACT_FORM_EMAIL once a destination inbox is ready.
// Until then the form intentionally refuses to submit anywhere (see the
// "unconfigured" branch below), so no inquiry is ever silently routed to
// a placeholder address.
const CONTACT_FORM_EMAIL = process.env.NEXT_PUBLIC_CONTACT_FORM_EMAIL;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!CONTACT_FORM_EMAIL) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", `New inquiry from ${siteInfo.name} website`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_FORM_EMAIL)}`,
        { method: "POST", body: formData }
      );
      const data = await res.json();
      if (res.ok && data.success !== "false") {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24">
        <Reveal>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-5">
            {contact.eyebrow}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] text-white mb-6">
            {contact.heading}
          </h2>
          <p className="font-body text-white/65 leading-relaxed max-w-md mb-10">
            {contact.body}
          </p>

          {/* Each entry only renders once a real value exists in siteInfo,
              so the page never shows a blank or placeholder contact. */}
          <ul className="space-y-5">
            {siteInfo.whatsapp && (
              <li>
                <a
                  href={`https://wa.me/${siteInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-4 text-white/80 hover:text-gold-light transition-colors"
                >
                  <span className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle size={18} strokeWidth={1.5} />
                  </span>
                  <span className="font-body">{siteInfo.phone || siteInfo.whatsapp}</span>
                </a>
              </li>
            )}
            {siteInfo.phone && (
              <li>
                <a
                  href={`tel:${siteInfo.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-4 text-white/80 hover:text-gold-light transition-colors"
                >
                  <span className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <Phone size={18} strokeWidth={1.5} />
                  </span>
                  <span className="font-body">{siteInfo.phone}</span>
                </a>
              </li>
            )}
            {siteInfo.email && (
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="flex items-center gap-4 text-white/80 hover:text-gold-light transition-colors"
                >
                  <span className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <Mail size={18} strokeWidth={1.5} />
                  </span>
                  <span className="font-body">{siteInfo.email}</span>
                </a>
              </li>
            )}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full bg-transparent border border-white/20 rounded-sm px-5 py-4 font-body text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full bg-transparent border border-white/20 rounded-sm px-5 py-4 font-body text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <input
              type="text"
              name="event_type"
              placeholder="Event Type (Wedding, Conference, etc.)"
              className="w-full bg-transparent border border-white/20 rounded-sm px-5 py-4 font-body text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
            />
            <textarea
              name="message"
              placeholder="Tell us about your event"
              required
              rows={5}
              className="w-full bg-transparent border border-white/20 rounded-sm px-5 py-4 font-body text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold border border-gold px-8 py-4 text-sm font-body tracking-wide uppercase text-white hover:bg-transparent hover:text-gold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 w-full sm:w-auto"
            >
              {status === "submitting" && (
                <Loader2 size={16} className="animate-spin" />
              )}
              {status === "submitting" ? "Sending..." : "Send Inquiry"}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-gold-light">
                <CheckCircle2 size={16} /> Thank you. We will be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
            {status === "unconfigured" && (
              <p className="text-sm text-white/50">
                This form is not connected yet. Please check back shortly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
