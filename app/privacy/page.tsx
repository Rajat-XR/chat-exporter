import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Google AI Studio Chat Exporter",
  description:
    "Privacy policy for Google AI Studio Chat Exporter. All data is processed locally in your browser. No servers, no tracking, no data collection.",
  alternates: { canonical: "/privacy" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://aistudio-chat-exporter.vercel.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy",
      item: "https://aistudio-chat-exporter.vercel.app/privacy",
    },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#111216] text-[#e4e4e7] font-sans flex flex-col">
        <Navbar />
        <main className="flex-1 mx-auto max-w-3xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 w-full">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#a1a1aa] mb-12">
            Effective date: March 2026
          </p>

          <div className="space-y-8 text-[15px] leading-relaxed text-[#a1a1aa]">
            <section>
              <h2 className="text-[15px] font-semibold text-[#e4e4e7] mb-3">
                What data is accessed
              </h2>
              <p>
                The extension reads the text content of your current Google AI
                Studio conversation — including turn text, system instructions,
                and optionally the page URL. It{" "}
                <strong className="font-semibold text-[#e4e4e7]">
                  only runs on aistudio.google.com
                </strong>
                . No permissions beyond the active tab and file download are
                requested.
              </p>
            </section>

            <section>
              <h2 className="text-[15px] font-semibold text-[#e4e4e7] mb-3">
                How it is used
              </h2>
              <p>
                Solely to generate the export file you requested (PDF, Markdown,
                or JSON). The data is processed
                <strong className="font-semibold text-[#e4e4e7]">
                  {" "}
                  entirely within your browser
                </strong>
                . No data is transmitted to any external server.
              </p>
            </section>

            <section>
              <h2 className="text-[15px] font-semibold text-[#e4e4e7] mb-3">
                What is NOT done
              </h2>
              <p>
                No data is transmitted to any external server. No analytics are
                collected. No user accounts are created. No conversation content
                is stored beyond the active export session. No third-party
                tracking of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-[15px] font-semibold text-[#e4e4e7] mb-3">
                Permissions used
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-[#52525b]">
                <li>
                  <strong className="font-semibold text-[#e4e4e7]">
                    activeTab
                  </strong>{" "}
                  — to read the current tab
                </li>
                <li>
                  <strong className="font-semibold text-[#e4e4e7]">
                    scripting
                  </strong>{" "}
                  — to extract conversation content
                </li>
                <li>
                  <strong className="font-semibold text-[#e4e4e7]">
                    downloads
                  </strong>{" "}
                  — to save the exported file
                </li>
                <li>
                  <strong className="font-semibold text-[#e4e4e7]">
                    storage
                  </strong>{" "}
                  — to remember your preferences (dark/light mode)
                </li>
              </ul>
              <p className="mt-4">
                Host permission is limited to{" "}
                <strong className="font-semibold text-[#e4e4e7]">
                  aistudio.google.com
                </strong>{" "}
                only.
              </p>
            </section>

            <section>
              <h2 className="text-[15px] font-semibold text-[#e4e4e7] mb-3">
                Contact
              </h2>
              <p>
                For questions or concerns, contact{" "}
                <a
                  href="mailto:rajatjain.dev@gmail.com"
                  className="text-[#a1a1aa] underline underline-offset-4 decoration-[#52525b] hover:text-[#e4e4e7] hover:decoration-[#e4e4e7] transition-colors"
                >
                  rajatjain.dev@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
