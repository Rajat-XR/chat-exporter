const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="bg-surface-privacy py-24 md:py-32">
      <div className="container max-w-3xl">
        <h2 className="fade-in-up text-3xl font-bold tracking-tight text-foreground">Privacy Policy</h2>
        <p className="fade-in-up mt-2 text-sm text-muted-foreground">Effective date: March 2026</p>

        <div className="fade-in-up mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h3 className="mb-2 font-semibold text-foreground">What data is accessed</h3>
            <p>
              The extension reads the text content of your current Google AI Studio conversation — including turn text, system instructions, and optionally the page URL. It <strong className="text-foreground">only runs on aistudio.google.com</strong>. No permissions beyond the active tab and file download are requested.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-foreground">How it is used</h3>
            <p>
              Solely to generate the export file you requested (PDF, Markdown, or JSON). The data is processed <strong className="text-foreground">entirely within your browser</strong>. No data is transmitted to any external server.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-foreground">What is NOT done</h3>
            <p>
              No data is transmitted to any external server. No analytics are collected. No user accounts are created. No conversation content is stored beyond the active export session. No third-party tracking of any kind.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-foreground">Permissions used</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li><strong className="text-foreground">activeTab</strong> — to read the current tab</li>
              <li><strong className="text-foreground">scripting</strong> — to extract conversation content</li>
              <li><strong className="text-foreground">downloads</strong> — to save the exported file</li>
              <li><strong className="text-foreground">storage</strong> — to remember your preferences (dark/light mode)</li>
            </ul>
            <p className="mt-2">Host permission is limited to <strong className="text-foreground">aistudio.google.com</strong> only.</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-foreground">Contact</h3>
            <p>
              For questions or concerns, contact{" "}
              <a href="mailto:your-email@example.com" className="text-primary underline hover:no-underline">
                your-email@example.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
