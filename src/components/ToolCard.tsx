import { CheckCircle, type LucideIcon } from "lucide-react";
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
      className="group relative bg-card border border-border rounded-card p-6 cursor-pointer transition-all duration-300 will-change-transform hover:-translate-y-1"
      style={{
        // @ts-ignore
        "--tool-accent": accentColor,
      } as React.CSSProperties}
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
      <div className="flex items-center justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
          style={{ backgroundColor: `${accentColor}20` }}
        >
          <Icon size={24} style={{ color: accentColor }} />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-success">
          <span className="w-1.5 h-1.5 rounded-full bg-success" />
          Ativo
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-semibold text-foreground mt-4">{title}</h3>
      <p className="text-[0.9rem] text-muted-foreground leading-relaxed mt-2">{description}</p>

      {/* Checklist */}
      <ul className="mt-5 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
            <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: accentColor }} />
            {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className="mt-6 w-full h-11 rounded-lg text-sm font-semibold transition-all duration-300 border"
        style={{
          color: accentColor,
          borderColor: `${accentColor}60`,
          backgroundColor: `${accentColor}10`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = accentColor;
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.borderColor = accentColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = `${accentColor}10`;
          e.currentTarget.style.color = accentColor;
          e.currentTarget.style.borderColor = `${accentColor}60`;
        }}
      >
        Abrir ferramenta →
      </button>
    </motion.div>
  );
};

export default ToolCard;
