const FormatShowcase = () => {
  return (
    <section id="formats" className="py-24 md:py-32">
      <div className="container">
        <h2 className="fade-in-up text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Pick the format that fits your workflow.
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* PDF */}
          <article className="fade-in-up glow-border-hover rounded-xl border border-foreground/[0.08] bg-card overflow-hidden">
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold text-foreground">📄 PDF</h3>
              <p className="mb-4 text-sm text-muted-foreground">Beautiful, shareable, ready to send.</p>
              <div className="rounded-lg bg-background p-4 text-xs font-mono">
                <p className="mb-2 font-bold text-primary">Gemini 3.1 Pro</p>
                <p className="mb-2 text-foreground/80">Here's a Python function that handles pagination efficiently:</p>
                <div className="rounded bg-code p-3 text-foreground/70">
                  <code>def paginate(items, page=1, size=20):</code><br />
                  <code>{"  "}start = (page - 1) * size</code><br />
                  <code>{"  "}return items[start:start+size]</code>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Supports dark mode, code blocks, tables, inline formatting, and system instructions.</p>
            </div>
          </article>

          {/* Markdown */}
          <article className="fade-in-up glow-border-hover rounded-xl border border-foreground/[0.08] bg-card overflow-hidden" style={{ transitionDelay: "100ms" }}>
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold text-foreground">📝 Markdown</h3>
              <p className="mb-4 text-sm text-muted-foreground">Perfect for pasting into Obsidian, Notion, or any Markdown editor.</p>
              <div className="rounded-lg bg-background p-4 text-xs font-mono text-foreground/70">
                <p className="text-primary">### User</p>
                <p>How do I handle API rate limits?</p>
                <p className="my-1 text-foreground/20">---</p>
                <p className="text-primary">### Gemini 3.1 Pro</p>
                <p>Implement exponential backoff with</p>
                <p>jitter. Here's a pattern...</p>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Paste directly into any markdown editor. Works with Copy as Markdown for instant clipboard access.</p>
            </div>
          </article>

          {/* JSON */}
          <article className="fade-in-up glow-border-hover rounded-xl border border-foreground/[0.08] bg-card overflow-hidden" style={{ transitionDelay: "200ms" }}>
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold text-foreground">{"{ } "}JSON</h3>
              <p className="mb-4 text-sm text-muted-foreground">Use exported JSON to feed into Python scripts, analysis tools, or AI pipelines.</p>
              <div className="rounded-lg bg-background p-4 text-xs font-mono text-foreground/70">
                <p>{"{"}</p>
                <p>{"  "}<span className="text-primary">"role"</span>: "model",</p>
                <p>{"  "}<span className="text-primary">"content"</span>: "Use retry...",</p>
                <p>{"  "}<span className="text-primary">"model"</span>: "gemini-2.5-pro",</p>
                <p>{"  "}<span className="text-primary">"systemInstruction"</span>: "..."</p>
                <p>{"}"}</p>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Pipe into scripts, LLM pipelines, or databases. Structured and machine-readable.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FormatShowcase;
