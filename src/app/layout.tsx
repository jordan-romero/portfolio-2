import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "./content";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const description =
  "Jordan Romero is a senior software engineer building AI product end to end at Luster: realtime voice, LLM pipelines, integrations and the agents behind them.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Jordan Romero · Senior Software Engineer",
  description,
  openGraph: {
    title: "Jordan Romero · Senior Software Engineer",
    description,
    url: site.url,
    images: ["/images/headshot.png"],
    type: "website",
  },
  twitter: { card: "summary", title: "Jordan Romero", description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0d" },
    { media: "(prefers-color-scheme: light)", color: "#f5f2ec" },
  ],
};

// Sets the theme before first paint so there is no flash of the wrong one.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
