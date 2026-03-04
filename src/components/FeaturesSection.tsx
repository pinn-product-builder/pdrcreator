import { Bot, Layout, Workflow, Rocket, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Bot,
    title: "Propostas Comerciais",
    accentColor: "#8B5CF6",
    items: [
      "Escopo detalhado com entregas e prazos",
      "Valores e condições de pagamento claros",
      "Copy persuasiva adaptada ao segmento",
      "Seção de diferenciais e garantias",
      "Formatação profissional pronta para envio",
    ],
  },
  {
    icon: Layout,
    title: "Landing Page",
    accentColor: "#6366F1",
    items: [
      "Knowledge File completo para Lovable",
      "Design Tokens: cores, tipografia e espaçamento",
      "Prompt por seção com copy real",
      "Componentes definidos e nomeados",
      "Checklist de lançamento com 20 critérios",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow n8n",
    accentColor: "#06B6D4",
    items: [
      "Blueprint com arquitetura de 8 fases",
      "JSON completo com nodes e connections",
      "typeVersions validados automaticamente",
      "Error handling e retry configurados",
      "Pronto para importar via Ctrl+V no n8n",
    ],
  },
  {
    icon: Rocket,
    title: "PRD SaaS",
    accentColor: "#F59E0B",
    items: [
      "Visão do produto e personas detalhadas",
      "Requisitos funcionais e não-funcionais",
      "Stack técnica e arquitetura recomendada",
      "Roadmap de MVP com priorização clara",
      "Métricas de sucesso e KPIs definidos",
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section id="o-que-voce-recebe" className="py-14 lg:py-20 border-t border-border/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">O que você recebe</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Outputs profissionais e prontos para usar — sem ajustes manuais necessários.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-card p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${feat.accentColor}15` }}
                >
                  <feat.icon size={20} style={{ color: feat.accentColor }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feat.title}</h3>
              </div>
              <ul className="space-y-3 flex-1">
                {feat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[0.8125rem] text-muted-foreground leading-snug">
                    <CheckCircle size={14} className="mt-[3px] shrink-0" style={{ color: feat.accentColor }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
