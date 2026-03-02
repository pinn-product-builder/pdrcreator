import { ClipboardList, Cpu, Mail } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Preencha o formulário",
    description: "Descreva o que precisa gerar. Cada ferramenta tem campos estruturados que capturam todo o contexto necessário.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "A IA arquiteta e gera",
    description: "GPT-4o analisa seu briefing, define a arquitetura ideal e gera o output completo com avaliação e refinamento automáticos.",
  },
  {
    num: "03",
    icon: Mail,
    title: "Receba no email",
    description: "O resultado chega formatado no seu email, pronto para usar. Cole no n8n, no Lovable ou no seu agente de IA.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-14 lg:py-20 border-t border-border/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Como funciona</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Do formulário ao resultado final em menos de 90 segundos.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 max-w-4xl mx-auto">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[24px] left-[20%] right-[20%] border-t border-dashed border-border/60" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Number badge */}
              <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-sm font-bold text-primary transition-all duration-200 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/15 relative z-10">
                {step.num}
              </div>

              {/* Icon */}
              <div className="mt-5 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <step.icon size={20} className="text-muted-foreground" />
              </div>

              {/* Text */}
              <h3 className="text-base lg:text-lg font-semibold text-foreground mt-4">{step.title}</h3>
              <p className="text-[0.875rem] text-muted-foreground leading-relaxed mt-2 max-w-[280px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
