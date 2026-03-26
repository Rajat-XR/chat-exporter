import { FileText, ClipboardCopy, Tag, Moon, Lock, ScrollText } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Three Export Formats",
    description: "Export to PDF, Markdown, or JSON. Choose your format with one click — each optimized for its use case.",
  },
  {
    icon: ClipboardCopy,
    title: "Copy as Markdown",
    description: "Skip the file entirely. One click copies the full conversation as Markdown — paste straight into Notion, Obsidian, or GitHub.",
  },
  {
    icon: Tag,
    title: "Auto-Title Filenames",
    description: "Files are named from your first message. No more \"untitled-export-37.pdf\" — get meaningful names automatically.",
  },
  {
    icon: Moon,
    title: "Dark Mode PDF",
    description: "Export PDFs with a dark background and light text that matches AI Studio's aesthetic. Code blocks, headers, all tuned.",
  },
  {
    icon: Lock,
    title: "100% Private",
    description: "No server, no API calls, no analytics, no account. Your conversations are processed entirely in your browser and never leave your device.",
  },
  {
    icon: ScrollText,
    title: "Full Conversation Capture",
    description: "AI Studio uses virtual rendering. The extension performs an intelligent multi-pass scroll to capture every turn — even in 100+ message chats.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <div className="fade-in-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to keep your AI work.
          </h2>
          <p className="mt-4 text-muted-foreground">
            <strong className="text-foreground">Chat Exporter for AI Studio</strong> is a free Chrome extension that exports Google AI Studio conversations to PDF, Markdown, and JSON files. All processing happens locally in the browser — no data is sent to any server.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="fade-in-up glow-border-hover group rounded-xl border border-foreground/[0.08] bg-card p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
