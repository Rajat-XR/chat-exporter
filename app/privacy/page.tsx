import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy: Chat Exporter",
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
      item: "https://aiexport.vercel.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy",
      item: "https://aiexport.vercel.app/privacy",
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
            Effective date: June 2026
          </p>

          <div className="space-y-8 text-[15px] leading-relaxed text-[#a1a1aa]">
            <section>
              <h2 className="text-[15px] font-semibold text-[#e4e4e7] mb-3">
                What Data is Accessed
              </h2>
              <p>
                The extension reads the text and formatting content of your active conversation turn on the supported platforms—specifically including message text, code blocks, tables, lists, system instructions (where supported, like Google AI Studio), and optionally the page URL.
              </p>
              <p className="mt-3">The extension runs only on:</p>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-[#52525b] mt-2">
                <li><code className="text-[#e4e4e7]">aistudio.google.com</code></li>
                <li><code className="text-[#e4e4e7]">chatgpt.com</code></li>
                <li><code className="text-[#e4e4e7]">chat.openai.com</code></li>
                <li><code className="text-[#e4e4e7]">gemini.google.com</code></li>
              </ul>
              <p className="mt-3">
                No permissions beyond the active tab, content scripting, storage, and file downloads are requested.
              </p>
            </section>

            <section>
              <h2 className="text-[15px] font-semibold text-[#e4e4e7] mb-3">
                How it is Used
              </h2>
              <p>
                The accessed data is used <strong className="font-semibold text-[#e4e4e7]">solely</strong> to generate the export files you request (PDF, Markdown, or JSON).
              </p>
              <p className="mt-3">
                All data processing is performed <strong className="font-semibold text-[#e4e4e7]">entirely within your browser locally</strong>. No conversation data is ever sent to, stored on, or transmitted to any external server.
              </p>
            </section>

            <section>
              <h2 className="text-[15px] font-semibold text-[#e4e4e7] mb-3">
                What is NOT Done
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-[#52525b]">
                <li><strong className="font-semibold text-[#e4e4e7]">No Remote Transmission:</strong> No data is transmitted to any external server.</li>
                <li><strong className="font-semibold text-[#e4e4e7]">No Analytics or Tracking:</strong> No user behavior analytics, event logs, or telemetry are collected.</li>
                <li><strong className="font-semibold text-[#e4e4e7]">No User Accounts:</strong> No user accounts or personal profiles are created.</li>
                <li><strong className="font-semibold text-[#e4e4e7]">No Long-term Storage:</strong> No conversation content is cached or stored beyond the active export session.</li>
                <li><strong className="font-semibold text-[#e4e4e7]">No Third-Party Scripts:</strong> No third-party tracking, advertising, or analysis scripts are included.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[15px] font-semibold text-[#e4e4e7] mb-3">
                Permissions Used
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-[#52525b]">
                <li><strong className="font-semibold text-[#e4e4e7]">activeTab</strong> — Granted temporarily to read the active conversation tab when you click the extension popup icon.</li>
                <li><strong className="font-semibold text-[#e4e4e7]">scripting</strong> — Used to safely extract the conversation DOM content from the active tab.</li>
                <li><strong className="font-semibold text-[#e4e4e7]">downloads</strong> — Used to save the generated PDF, Markdown, or JSON files directly to your device's downloads folder.</li>
                <li><strong className="font-semibold text-[#e4e4e7]">storage</strong> — Used to persist your preferred settings locally (e.g., dark/light mode preference).</li>
                <li><strong className="font-semibold text-[#e4e4e7]">Host Permissions</strong> — Permanent host permission is limited only to <code className="text-[#e4e4e7]">aistudio.google.com</code> (required to pre-inject a helper script at document start to securely access AI Studio's internal conversation metadata). For ChatGPT and Gemini, tab access is granted strictly on-demand via the temporary <code className="text-[#e4e4e7]">activeTab</code> permission when you open the popup.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[15px] font-semibold text-[#e4e4e7] mb-3">
                Contact
              </h2>
              <p>
                If you have any questions or concerns regarding this privacy policy, please contact{" "}
                <a
                  href="mailto:rajatjain.dev@gmail.com"
                  className="text-[#a1a1aa] underline underline-offset-4 decoration-[#52525b] hover:text-[#e4e4e7] hover:decoration-[#e4e4e7] transition-colors"
                >
                  <strong className="font-semibold text-[#e4e4e7]">rajatjain.dev@gmail.com</strong>
                </a>.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
