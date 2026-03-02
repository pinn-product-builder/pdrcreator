import { Zap, Circle } from "lucide-react";
import { N8N_LINKS } from "@/lib/constants";

const footerLinks = [
  { label: "System Prompt", href: N8N_LINKS.prompt },
  { label: "Landing Page", href: N8N_LINKS.landing },
  { label: "Workflow n8n", href: N8N_LINKS.workflow },
];

const Footer = () => {
  return (
    <footer
      className="border-t border-border/40 py-6"
      style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
        {/* Left */}
        <div className="flex flex-col items-center lg:items-start gap-1">
          <div className="flex items-center gap-1.5">
            <Zap size={16} className="text-primary" />
            <span className="text-foreground font-semibold text-sm">PRD Hub</span>
          </div>
          <span className="text-[13px] text-muted-foreground/70">Powered by n8n + GPT-4o</span>
        </div>

        {/* Center */}
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-1.5 text-[13px] text-success">
          <Circle size={8} className="fill-success" />
          3 ferramentas ativas
        </div>
      </div>
    </footer>
  );
};

export default Footer;
