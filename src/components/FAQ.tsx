import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Does Chat Exporter for AI Studio send my conversations to any server?",
    a: "No. All processing happens locally inside your browser. Your conversations never leave your device.",
  },
  {
    q: "Which formats can I export Google AI Studio chats to?",
    a: "PDF, Markdown (.md), and JSON. You can also copy the entire conversation as Markdown directly to your clipboard.",
  },
  {
    q: "Does it work with all Google AI Studio models?",
    a: "Yes — Gemini 1.5 Pro, Gemini 2.0, Gemini 3.1 Pro, and all other models available in Google AI Studio.",
  },
  {
    q: "Is the extension free?",
    a: "Yes, completely free. No subscription, no account, no ads.",
  },
  {
    q: "Can I export very long conversations?",
    a: "Yes. The extension uses a smart multi-pass scroll strategy to capture all turns even in 100+ message conversations that use virtual rendering.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <h2 className="fade-in-up text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="fade-in-up rounded-xl border border-foreground/[0.08] bg-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="pr-4 text-sm font-medium text-foreground">{f.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
