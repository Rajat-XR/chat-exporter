import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

/* ─── SEO Metadata (replaces index.html <head>) ────────────────────── */

const SITE_URL = "https://aistudio-chat-exporter.vercel.app";

export const metadata: Metadata = {
  title:
    "Export Google AI Studio Chats — Save to PDF, Markdown & JSON | Free Chrome Extension",
  description:
    "Free Chrome extension to save and download Google AI Studio conversations. Export chats to PDF, Markdown (.md), or JSON — privately. No servers, no cloud, no account required.",
  authors: [{ name: "Rajat Jain" }],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  verification: {
    google: "KOEZkE6vaj4xX_jCMAgCwRf6RoyrsMGmirzpsn5fSr4",
  },
  openGraph: {
    title:
      "Export Google AI Studio Chats — Save to PDF, Markdown & JSON | Free Chrome Extension",
    description:
      "Free Chrome extension to save and download Google AI Studio conversations. PDF, Markdown, JSON. Fully private, no servers.",
    type: "website",
    url: "/",
    siteName: "AI Studio Chat Exporter",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Google AI Studio Chat Exporter — export conversations to PDF, Markdown, and JSON",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google AI Studio Chat Exporter",
    description:
      "Export Google AI Studio conversations to PDF, Markdown, or JSON. Free, private, no account.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "apple-mobile-web-app-title": "Chat Exporter",
    "theme-color": "#111216",
  },
};

/* ─── JSON-LD Structured Data ───────────────────────────────────────── */

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Google AI Studio Chat Exporter",
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome",
  browserRequirements: "Requires Google Chrome browser",
  url: SITE_URL,
  // downloadUrl omitted until extension is published on Chrome Web Store
  softwareVersion: "1.0.0",
  datePublished: "2026-03-26",
  dateModified: new Date().toISOString().split("T")[0],
  description:
    "Free Chrome extension to export Google AI Studio conversations to PDF, Markdown, or JSON. 100% local processing, no data upload.",
  featureList: [
    "Export to PDF with dark mode support",
    "Export to Markdown — paste into Obsidian, Notion, or any editor",
    "Export to JSON for developers and automation",
    "Copy as Markdown to clipboard",
    "Auto-generated filenames from your first message",
    "100% local processing — no data upload",
    "Full conversation capture with smart scrolling",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Rajat Jain",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Google AI Studio Chat Exporter send my conversations to any server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All processing happens locally inside your browser. Your conversations never leave your device.",
      },
    },
    {
      "@type": "Question",
      name: "Which formats can I export Google AI Studio chats to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF, Markdown (.md), and JSON. You can also copy the entire conversation as Markdown directly to your clipboard.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work with all Google AI Studio models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Gemini 1.5 Pro, Gemini 2.0 Flash, Gemini 2.5 Pro, Gemini 3 Flash, Gemini 3.1 Pro, Gemini 3.1 Flash, and all other models available in Google AI Studio.",
      },
    },
    {
      "@type": "Question",
      name: "Is the extension free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free. No subscription, no account, no ads.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export very long conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The extension uses a smart multi-pass scroll strategy to capture all turns even in 100+ message conversations that use virtual rendering.",
      },
    },
    {
      "@type": "Question",
      name: "Can I save my Google AI Studio chat to Obsidian or Notion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — export as Markdown (.md) and paste it directly into Obsidian, Notion, Roam Research, Logseq, or any app that supports Markdown.",
      },
    },
    {
      "@type": "Question",
      name: "How do I save or download my Google AI Studio chat history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Install the extension, open any conversation in Google AI Studio (aistudio.google.com), click the extension icon, and choose PDF, Markdown, or JSON. Your chat downloads instantly.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work with Gemini 2.0, 2.5 Pro, 3 Flash, and Gemini 3.1 Pro in AI Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — it works with all Gemini models available inside Google AI Studio, including Gemini 1.5 Pro, Gemini 2.0 Flash, Gemini 2.5 Pro, Gemini 3 Flash, Gemini 3.1 Pro, Gemini 3.1 Flash, and all other models available in your AI Studio account.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work with Gemini thinking/reasoning mode in AI Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Thinking-mode outputs are fully captured in the export.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between PDF and Markdown export for AI Studio chats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF preserves the visual layout with dark mode styling, great for sharing or archiving. Markdown exports clean, structured text you can edit in any markdown tool like Obsidian or VS Code.",
      },
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Google AI Studio Chat Exporter",
  description:
    "Free Chrome extension to save and export Google AI Studio conversations to PDF, Markdown, or JSON.",
  url: SITE_URL,
  inLanguage: "en-US",
  dateModified: new Date().toISOString().split("T")[0],
  datePublished: "2026-03-26",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rajat Jain",
  url: SITE_URL,
  sameAs: ["https://github.com/Rajat-XR"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "rajatjain.dev@gmail.com",
    contactType: "customer support",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Export Google AI Studio Conversations",
  description:
    "Export any Google AI Studio chat to PDF, Markdown, or JSON in three steps using the free Chat Exporter Chrome extension.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open AI Studio",
      text: "Navigate to any conversation in Google AI Studio (aistudio.google.com).",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Click the Extension",
      text: "Click the Chat Exporter icon in your Chrome toolbar. Pick your format and options.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Export",
      text: "Hit Export Now or Copy. Your file downloads instantly or it is in your clipboard. Runs in under 3 seconds for most chats.",
    },
  ],
};

/* ─── Root Layout ───────────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Font preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>

        {/* Noscript fallback — keyword-rich content for crawlers */}
        <noscript>
          <h1>Google AI Studio Chat Exporter — Free Chrome Extension</h1>
          <p>
            Save and export your Google AI Studio conversations to PDF,
            Markdown, or JSON. This free Chrome extension processes everything
            locally in your browser — no servers, no cloud, no account required.
          </p>
          <h2>Export Formats</h2>
          <ul>
            <li>Export to PDF with dark mode support</li>
            <li>
              Export to Markdown — paste into Obsidian, Notion, Roam Research, or
              any markdown editor
            </li>
            <li>
              Export to JSON for developers, automation, and AI pipelines
            </li>
            <li>Copy as Markdown to clipboard</li>
            <li>Auto-generated filenames from your first message</li>
            <li>100% local processing — no data upload</li>
            <li>Full conversation capture with smart scrolling</li>
          </ul>
          <h2>Supported Models</h2>
          <p>
            Works with all Gemini models in Google AI Studio: Gemini 1.5 Pro,
            Gemini 2.0 Flash, Gemini 2.5 Pro, Gemini 3 Flash, Gemini 3.1 Pro,
            Gemini 3.1 Flash, and all future models.
          </p>
          <p>
            <a href="https://chromewebstore.google.com/">
              Add to Chrome — Free
            </a>
          </p>
          <p>
            <a href="/privacy">Privacy Policy</a>
          </p>
        </noscript>
      </body>
    </html>
  );
}
