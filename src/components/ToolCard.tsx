import { CheckCircle, ExternalLink, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  link: string;
  accentColor: string;
  index: number;
}

const ToolCard = ({ icon: Icon, title, description, items, link, accentColor, index }: ToolCardProps) => {
  const openLink = () => window.open(link, "_blank", "noopener,noreferrer");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={openLink}
      className="group relative bg-card border border-border rounded-card p-6 cursor-pointer transition-all duration-300 will-change-transform hover:-translate-y-1 flex flex-col"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accentColor;
        e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${accentColor}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
          style={{ backgroundColor: `${accentColor}15` }}
        >
          <Icon size={24} style={{ color: accentColor }} />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-success">
          <span className="w-1.5 h-1.5 rounded-full bg-success" />
          Ativo
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-semibold text-foreground leading-snug">{title}</h3>
      <p className="text-[0.875rem] text-muted-foreground leading-relaxed mt-2">{description}</p>

      {/* Checklist */}
      <ul className="mt-5 space-y-2.5 flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[0.8125rem] text-secondary-foreground leading-snug">
            <CheckCircle size={14} className="mt-[3px] shrink-0" style={{ color: accentColor }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className="mt-6 w-full h-11 rounded-lg text-sm font-semibold transition-all duration-300 border flex items-center justify-center gap-2"
        style={{
          color: accentColor,
          borderColor: `${accentColor}40`,
          backgroundColor: `${accentColor}08`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = accentColor;
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.borderColor = accentColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = `${accentColor}08`;
          e.currentTarget.style.color = accentColor;
          e.currentTarget.style.borderColor = `${accentColor}40`;
        }}
      >
        Abrir ferramenta
        <ExternalLink size={14} />
      </button>
    </motion.div>
  );
};

export default ToolCard;
