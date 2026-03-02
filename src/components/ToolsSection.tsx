import { Bot, Layout, Workflow } from "lucide-react";
import { N8N_LINKS } from "@/lib/constants";
import ToolCard from "./ToolCard";
import { motion } from "framer-motion";

const tools = [
  {
    icon: Bot,
    title: "Gerador de System Prompt",
    description: "Cria system prompts de produção para agentes de IA usando Context Engineering e loop Generator-Evaluator-Optimizer.",
    items: [
      "System Prompt completo com 10 componentes",
      "Score automático 0-100 com avaliação por 7 dimensões",
      "Refinamento automático até score ≥ 85",
    ],
    link: N8N_LINKS.prompt,
    accentColor: "#8B5CF6",
  },
  {
    icon: Layout,
    title: "Gerador de Landing Page",
    description: "Gera prompts profissionais para o Lovable com Knowledge File, Design System completo e copy real para cada seção.",
    items: [
      "Knowledge File + Design Tokens prontos para colar",
      "Prompts por seção com copy real (zero lorem ipsum)",
      "Checklist de lançamento com 20 critérios",
    ],
    link: N8N_LINKS.landing,
    accentColor: "#6366F1",
  },
  {
    icon: Workflow,
    title: "Gerador de Workflows n8n",
    description: "Arquiteta e gera JSON completo de workflow n8n aplicando metodologias de produção. Pronto para importar com Ctrl+V.",
    items: [
      "Blueprint com arquitetura canônica de 8 fases",
      "JSON validado com typeVersions corretos",
      "Repair automático se erros forem detectados",
    ],
    link: N8N_LINKS.workflow,
    accentColor: "#06B6D4",
  },
];

const ToolsSection = () => {
  return (
    <section id="ferramentas" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Escolha sua ferramenta</h2>
          <p className="text-muted-foreground mt-3">
            Cada ferramenta é um workflow n8n completo ativado por formulário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <ToolCard key={tool.title} {...tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
