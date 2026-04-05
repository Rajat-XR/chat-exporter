const Footer = () => {
  return (
    <footer className="border-t border-foreground/5 py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <img src="/assets/logo-placeholder.png" alt="Google AI Studio Chat Exporter logo" className="h-6 w-6 rounded-md" width={24} height={24} />
              <p className="text-base font-semibold tracking-tight text-foreground whitespace-nowrap">
                Google AI Studio Chat Exporter
              </p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Not affiliated with or endorsed by Google LLC.</p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/#cws" className="transition-colors hover:text-foreground">Chrome Web Store</a>
            <a href="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground/70 max-w-xl mx-auto">
          Save and export your Google AI Studio conversations to PDF, Markdown, and JSON — 100% free, 100% private.
        </p>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          © 2026. Chat Exporter, made with ❤️ by Rajat Jain.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

