import { ClipboardList, Cpu, Mail } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Preencha o formulário",
    description: "Descreva o que você precisa. Cada ferramenta tem entre 8 e 12 campos estruturados para capturar o contexto completo.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "A IA arquiteta e gera",
    description: "GPT-4o analisa o briefing, define a arquitetura ideal e gera o output completo. Um agente avalia e refina até atingir qualidade de produção.",
  },
  {
    num: "03",
    icon: Mail,
    title: "Receba no email",
    description: "O resultado chega formatado no email informado. Pronto para usar: cole no n8n, no Lovable ou no seu agente de IA.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Como funciona</h2>
          <p className="text-muted-foreground mt-3">
            Do formulário ao resultado em menos de 90 segundos.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[40px] left-[16.6%] right-[16.6%] border-t border-dashed border-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col items-center text-center lg:pl-0 pl-10 lg:text-center text-left lg:items-center items-start"
            >
              {/* Mobile connecting line */}
              {i < steps.length - 1 && (
                <div className="lg:hidden absolute left-[19px] top-[48px] bottom-[-32px] border-l border-dashed border-border" />
              )}

              {/* Number */}
              <div className="w-10 h-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-sm font-bold text-primary transition-transform duration-200 group-hover:scale-110 group-hover:border-primary relative z-10">
                {step.num}
              </div>

              {/* Icon */}
              <step.icon size={32} className="text-muted-foreground mt-4" />

              {/* Text */}
              <h3 className="text-lg font-semibold text-foreground mt-3">{step.title}</h3>
              <p className="text-[0.9rem] text-muted-foreground leading-relaxed mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
