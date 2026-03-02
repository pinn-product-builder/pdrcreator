import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";
import { N8N_LINKS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Ferramentas", href: "#ferramentas" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "O que você recebe", href: "#o-que-voce-recebe" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-14 lg:h-16 flex items-center transition-all duration-300 backdrop-blur-xl ${
        scrolled ? "border-b border-[rgba(255,255,255,0.06)]" : ""
      }`}
      style={{ background: "rgba(10,15,30,0.85)" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Zap size={20} className="text-primary" />
          <span className="text-foreground font-bold text-lg">PRD Hub</span>
          <span className="ml-1 inline-flex items-center rounded-full bg-primary/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            Beta
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#ferramentas"
          className="hidden lg:inline-flex items-center h-10 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold transition-all duration-300 hover:brightness-110 glow-pulse"
        >
          Começar agora
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 h-full w-[280px] bg-card z-50 p-6 flex flex-col gap-2"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                className="self-end p-2 text-foreground mb-4"
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center h-12 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#ferramentas"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center h-12 rounded-lg bg-primary text-primary-foreground font-semibold"
              >
                Começar agora
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
