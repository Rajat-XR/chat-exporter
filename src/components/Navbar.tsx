import { Button } from "@/components/ui/button";
import logoPlaceholder from "@/assets/logo-placeholder.png";
import webStoreLogo from "@/assets/web-store-logo.png";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/5 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <img src={logoPlaceholder} alt="Chat Exporter for AI Studio logo" className="h-8 w-8 rounded-lg" width={32} height={32} />
          <span className="text-base font-semibold tracking-tight text-foreground whitespace-nowrap">
            Chat Exporter for Google AI Studio
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="/#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="/#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
          <a href="/#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">FAQ</a>
          <a href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Privacy</a>
          <Button variant="hero" size="sm" asChild>
            <a href="/#cws">
              <img src={webStoreLogo} alt="Chrome Web Store" className="h-4 w-4 mr-1.5" />
              <span className="text-[13px]">Add to Chrome — Free</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
