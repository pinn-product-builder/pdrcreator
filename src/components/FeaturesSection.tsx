import { Bot, Layout, Workflow, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Bot,
    title: "System Prompt",
    accentColor: "#8B5CF6",
    items: [
      "Persona + Role + Goal definidos",
      "Constraints, Guidelines e Tone of Voice",
      "Output Format com exemplos concretos",
      "Score 0-100 com 7 critérios de avaliação",
      "Loop de refinamento até qualidade ≥ 85",
    ],
  },
  {
    icon: Layout,
    title: "Landing Page",
    accentColor: "#6366F1",
    items: [
      "Knowledge File completo para Lovable",
      "Design Tokens (cores, tipografia, espaçamento)",
      "Prompt por seção com copy real",
      "Componentes definidos e nomeados",
      "Checklist de lançamento com 20 itens",
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
      "Pronto para importar via Ctrl+V",
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section id="o-que-voce-recebe" className="py-16 lg:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">O que você recebe</h2>
          <p className="text-muted-foreground mt-3">
            Cada ferramenta gera outputs profissionais prontos para usar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-card p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${feat.accentColor}20` }}
                >
                  <feat.icon size={20} style={{ color: feat.accentColor }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feat.title}</h3>
              </div>
              <ul className="space-y-3">
                {feat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: feat.accentColor }} />
                    {item}
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
