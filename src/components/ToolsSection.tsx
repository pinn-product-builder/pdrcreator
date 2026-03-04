import { Bot, Layout, Workflow, Rocket } from "lucide-react";
import { N8N_LINKS } from "@/lib/constants";
import ToolCard from "./ToolCard";
import { motion } from "framer-motion";

const tools = [
  {
    icon: Bot,
    title: "Gerador de Propostas Comerciais",
    description: "Cria propostas comerciais profissionais e persuasivas, prontas para enviar ao cliente.",
    items: [
      "Proposta estruturada com escopo, prazos e valores",
      "Copy profissional adaptada ao segmento do cliente",
      "Formatação pronta para apresentação e envio",
    ],
    link: N8N_LINKS.proposal,
    accentColor: "#8B5CF6",
  },
  {
    icon: Layout,
    title: "Gerador de Landing Page",
    description: "Gera prompts profissionais para o Lovable com Design System, Knowledge File e copy real por seção.",
    items: [
      "Knowledge File + Design Tokens prontos para colar",
      "Prompts por seção com copy real — zero lorem ipsum",
      "Checklist de lançamento com 20 critérios de qualidade",
    ],
    link: N8N_LINKS.landing,
    accentColor: "#6366F1",
  },
  {
    icon: Workflow,
    title: "Gerador de Workflows n8n",
    description: "Arquiteta e gera JSON completo de workflow n8n com metodologias de produção. Pronto para importar.",
    items: [
      "Blueprint com arquitetura canônica de 8 fases",
      "JSON validado com typeVersions e connections corretos",
      "Repair automático quando erros são detectados",
    ],
    link: N8N_LINKS.workflow,
    accentColor: "#06B6D4",
  },
  {
    icon: Rocket,
    title: "Gerador de PRD SaaS",
    description: "Gera um PRD completo para MicroSaaS e SaaS — escopo, funcionalidades, stack técnica e roadmap prontos para execução.",
    items: [
      "PRD estruturado com visão, personas e requisitos",
      "Stack técnica recomendada e arquitetura definida",
      "Roadmap de MVP com priorização de funcionalidades",
    ],
    link: N8N_LINKS.saas,
    accentColor: "#F59E0B",
  },
];

const ToolsSection = () => {
  return (
    <section id="ferramentas" className="py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Escolha sua ferramenta</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Quatro workflows n8n especializados. Preencha o formulário e receba o resultado no email.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {tools.map((tool, i) => (
            <ToolCard key={tool.title} {...tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
