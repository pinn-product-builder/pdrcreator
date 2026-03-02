import { Sparkles, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow hero-glow-pulse pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 mb-8"
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-sm text-primary">Geração com IA • n8n + GPT-4o</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-extrabold leading-tight mb-6"
          style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
        >
          Gere System Prompts,
          <br />
          Landing Pages e Workflows
          <br />
          <span className="text-gradient-hero">com IA</span> em segundos
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-[540px] mx-auto mb-10"
        >
          Preencha um formulário, a IA arquiteta, gera e valida automaticamente.
          Você recebe o resultado no email em menos de 90 segundos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#ferramentas"
            className="inline-flex items-center justify-center h-[52px] px-7 rounded-lg bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:brightness-110 w-full sm:w-auto"
          >
            Escolher ferramenta
            <ArrowDown size={16} className="ml-2" />
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center h-[52px] px-7 rounded-lg border border-border text-foreground font-semibold text-base transition-all duration-300 hover:bg-secondary w-full sm:w-auto"
          >
            Ver como funciona
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mt-10 text-[13px] text-muted-foreground"
        >
          3 ferramentas ativas • GPT-4o • Resultado em 90s • JSON pronto para importar
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
