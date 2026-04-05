"use client";

import { Button } from "@/components/ui/button";
import { Lock, ArrowDown } from "lucide-react";


const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 py-20 text-center">
        {/* Badge */}
        <div className="fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card px-4 py-1.5 text-sm text-muted-foreground">
          <span className="text-primary">✦</span> Free Chrome Extension
        </div>

        {/* Headline */}
        <h1 className="fade-in-up mx-auto max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Export Google AI Studio Conversations <span className="text-gradient-primary">Beautifully.</span>
        </h1>

        {/* Sub-headline */}
        <p className="fade-in-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          One click to save any Google AI Studio chat as a perfectly formatted PDF, Markdown, or JSON file. Download and keep your AI conversations locally — <strong className="text-foreground">fully private, no servers, no cloud.</strong>
        </p>

        {/* CTAs */}
        <div className="fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="hero" size="lg" className="px-6" asChild>
            <a href="/#cws">
              <img src="/assets/web-store-logo.png" alt="Chrome Web Store" className="h-7 w-7 mr-2.5" />
              <span className="text-base">Add to Chrome — It's Free</span>
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" className="px-6" asChild>
            <a href="#how-it-works">
              <span className="text-base">See How It Works</span> <ArrowDown className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Trust line */}
        <p className="fade-in-up mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <Lock className="h-3.5 w-3.5" />
          Local only · No data leaves your browser · No account required
        </p>

        {/* Extension Screenshot */}
        <div className="fade-in-up mx-auto mt-16 max-w-md">
          <div className="glow-primary rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/extension-screenshot-placeholder.png"
              alt="Google AI Studio Chat Exporter extension popup showing PDF, Markdown, and JSON export options with dark mode toggle and progress bar"
              className="w-full h-auto"
              loading="lazy"
              width={800}
              height={1024}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
