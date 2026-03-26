import { ExternalLink, MousePointerClick, Download } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: ExternalLink,
    title: "Open AI Studio",
    description: "Navigate to any conversation in Google AI Studio (aistudio.google.com).",
  },
  {
    num: "2",
    icon: MousePointerClick,
    title: "Click the Extension",
    description: "Click the Chat Exporter icon in your Chrome toolbar. Pick your format and options.",
  },
  {
    num: "3",
    icon: Download,
    title: "Export",
    description: "Hit Export Now or Copy. Your file downloads instantly — or it's in your clipboard. Runs in under 3 seconds for most chats.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="container">
        <h2 className="fade-in-up text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Three steps. Seconds.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.num} className="fade-in-up relative text-center" style={{ transitionDelay: `${i * 120}ms` }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-12 hidden w-full translate-x-1/2 md:block">
                  <div className="mx-8 border-t border-dashed border-foreground/10" />
                </div>
              )}
              <div className="relative mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-card border border-foreground/[0.08]">
                <s.icon className="h-6 w-6 text-primary" />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {s.num}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mx-auto max-w-xs text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default HowItWorks;
