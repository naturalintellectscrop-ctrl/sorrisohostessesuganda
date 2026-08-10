import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sorrisó Hostesses Uganda | Premier Guest Support Services",
  description:
    "Hostesses, protocol teams, and guest support staff for weddings, conferences, and corporate events in Uganda.",
  // The favicon itself is served via the src/app/favicon.ico file
  // convention (auto-detected by Next.js), so only the Apple touch icon
  // needs an explicit entry here.
  icons: {
    apple: "/images/favicon-256.png",
  },
  // Without this, mobile Safari (and some Android browsers) auto-detect
  // phone-number-looking text and wrap it in their own native link with
  // a hardcoded blue style, overriding the page's own <a href="tel:">
  // styling on the contact section's phone numbers.
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
