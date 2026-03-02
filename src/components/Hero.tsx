import { Sparkles, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-24 lg:pt-36 pb-12 lg:pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow hero-glow-pulse pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-7"
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-[13px] font-medium text-primary">Geração com IA • n8n + GPT-4o</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-extrabold leading-[1.1] tracking-tight mb-5"
          style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
        >
          Gere System Prompts,{" "}
          <br className="hidden sm:block" />
          Landing Pages e Workflows{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient-hero">com IA</span> em segundos
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-9"
        >
          Preencha um formulário com o contexto do seu projeto. A IA arquiteta, gera e valida o resultado automaticamente — direto no seu email em até 90 segundos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#ferramentas"
            className="inline-flex items-center justify-center h-[52px] px-7 rounded-lg bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto"
          >
            Escolher ferramenta
            <ArrowDown size={16} className="ml-2" />
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center h-[52px] px-7 rounded-lg border border-border text-muted-foreground hover:text-foreground font-medium text-base transition-all duration-300 hover:bg-secondary hover:border-border/80 w-full sm:w-auto"
          >
            Ver como funciona
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px] text-muted-foreground/70"
        >
          <span>3 ferramentas ativas</span>
          <span className="text-border">•</span>
          <span>GPT-4o</span>
          <span className="text-border">•</span>
          <span>Resultado em 90s</span>
          <span className="text-border">•</span>
          <span>JSON pronto para importar</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
