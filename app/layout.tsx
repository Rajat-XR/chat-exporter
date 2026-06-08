import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

/* ─── SEO Metadata (replaces index.html <head>) ────────────────────── */

const SITE_URL = "https://aiexport.vercel.app";

export const metadata: Metadata = {
  title:
    "Chat Exporter: Save ChatGPT, Gemini & AI Studio chats to PDF, Markdown & JSON",
  description:
    "Free Chrome extension to save and download ChatGPT, Gemini, and Google AI Studio conversations. Export chats to PDF, Markdown (.md), or JSON — privately. No servers, no cloud, no account required.",
  authors: [{ name: "Rajat Jain" }],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  verification: {
    google: "KOEZkE6vaj4xX_jCMAgCwRf6RoyrsMGmirzpsn5fSr4",
  },
  openGraph: {
    title:
      "Chat Exporter: Save ChatGPT, Gemini & AI Studio chats to PDF, Markdown & JSON",
    description:
      "Free Chrome extension to save and download ChatGPT, Gemini, and Google AI Studio conversations. PDF, Markdown, JSON. Fully private, no servers.",
    type: "website",
    url: "/",
    siteName: "Chat Exporter",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chat Exporter — export conversations to PDF, Markdown, and JSON",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat Exporter",
    description:
      "Export ChatGPT, Gemini, and Google AI Studio conversations to PDF, Markdown, or JSON. Free, private, no account.",
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
  name: "Chat Exporter",
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome",
  browserRequirements: "Requires Google Chrome browser",
  url: SITE_URL,
  downloadUrl: "https://chromewebstore.google.com/detail/chat-exporter-for-google/pmccmopibnkjfmaddlloincblhcnmndd",
  softwareVersion: "1.0.0",
  datePublished: "2026-03-26",
  dateModified: new Date().toISOString().split("T")[0],
  description:
    "Free Chrome extension to export ChatGPT, Gemini, and Google AI Studio conversations to PDF, Markdown, or JSON. 100% local processing, no data upload.",
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
      name: "Does Chat Exporter send my conversations to any server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Everything runs locally in your browser. No data is uploaded, no API calls are made, and no analytics are tracked.",
      },
    },
    {
      "@type": "Question",
      name: "Which formats can I export chats to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF, Markdown, and JSON. PDF is best for sharing, Markdown for notes apps like Obsidian/Notion, JSON for backups and scripts.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work with ChatGPT, Gemini, and Google AI Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It works on chatgpt.com, chat.openai.com, gemini.google.com, and aistudio.google.com.",
      },
    },
    {
      "@type": "Question",
      name: "Is the extension free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 100% free with no limits, no account, and no paywall.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export very long conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The extension auto-scrolls and captures the full history, even for 100+ message chats.",
      },
    },
    {
      "@type": "Question",
      name: "Can I save my chat to Obsidian or Notion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, use 'Copy as Markdown' and paste directly. Formatting, code blocks, and tables are preserved.",
      },
    },
    {
      "@type": "Question",
      name: "How do I save or download my chat history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open any chat, click the extension, choose PDF/Markdown/JSON, then click Export Now.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work with GPT-4o, Gemini 2.5 Pro, and AI Studio models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it works with all current models on ChatGPT, Gemini, and AI Studio, including reasoning/thinking modes.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work with thinking/reasoning mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, both ChatGPT reasoning and Gemini thinking traces are captured if visible in the UI.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between PDF and Markdown export?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF is a formatted document for sharing/printing. Markdown is plain text with formatting for editing in notes apps.",
      },
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Chat Exporter",
  description:
    "Free Chrome extension to save and export ChatGPT, Gemini, and Google AI Studio conversations to PDF, Markdown, or JSON.",
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
  name: "How to Export AI Conversations",
  description:
    "Export any ChatGPT, Gemini, or Google AI Studio chat to PDF, Markdown, or JSON in three steps using the free Chat Exporter Chrome extension.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open Chat",
      text: "Navigate to any conversation in ChatGPT, Gemini, or Google AI Studio.",
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
    <html lang="en" dir="ltr" suppressHydrationWarning>
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
          <h1>Chat Exporter — Free Chrome Extension</h1>
          <p>
            Save and export your ChatGPT, Gemini, and Google AI Studio conversations to PDF,
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
            Works with all Gemini models in ChatGPT, Gemini, and Google AI Studio: Gemini 1.5 Pro,
            Gemini 2.0 Flash, Gemini 2.5 Pro, Gemini 3 Flash, Gemini 3.1 Pro,
            Gemini 3.1 Flash, and all future models.
          </p>
          <p>
            <a href="https://chromewebstore.google.com/detail/chat-exporter-for-google/pmccmopibnkjfmaddlloincblhcnmndd">
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
