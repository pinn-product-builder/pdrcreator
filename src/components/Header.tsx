import { useState, useEffect } from "react";
import { Zap, Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { label: "Ferramentas", href: "#ferramentas" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#o-que-voce-recebe" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-14 lg:h-16 flex items-center transition-all duration-300 backdrop-blur-xl ${
        scrolled ? "border-b border-border/40 shadow-lg shadow-background/50" : ""
      }`}
      style={{ background: "var(--header-bg)" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Zap size={20} className="text-primary transition-transform duration-200 group-hover:scale-110" />
          <span className="text-foreground font-bold text-lg tracking-tight">PRD Hub</span>
          <span className="ml-1 inline-flex items-center rounded-full bg-primary/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            Beta
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right group */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#ferramentas"
            className="inline-flex items-center h-10 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold transition-all duration-300 hover:brightness-110 glow-pulse"
          >
            Começar agora
          </a>
        </div>

        {/* Mobile right group */}
        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="flex items-center justify-center w-11 h-11 rounded-lg text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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
              className="fixed top-0 right-0 h-full w-[280px] bg-card border-l border-border z-50 p-6 flex flex-col gap-1"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Zap size={18} className="text-primary" />
                  <span className="text-foreground font-bold">PRD Hub</span>
                </div>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Fechar menu"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center h-12 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-[15px]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              
              <div className="mt-auto pt-6 border-t border-border flex flex-col gap-3">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-2 h-11 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-sm font-medium"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun size={16} />
                      Modo claro
                    </>
                  ) : (
                    <>
                      <Moon size={16} />
                      Modo escuro
                    </>
                  )}
                </button>

                <a
                  href="#ferramentas"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center h-12 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-200 hover:brightness-110"
                >
                  Começar agora
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
