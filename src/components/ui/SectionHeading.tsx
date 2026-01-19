import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  children?: ReactNode;
}

export const SectionHeading = ({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
  children,
}: SectionHeadingProps) => {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 ${alignClass[align]}`}
    >
      {subtitle && (
        <span className={`text-sm tracking-[0.3em] uppercase font-body mb-4 block ${light ? "text-gold" : "text-gold-dark"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading text-4xl md:text-5xl font-semibold mb-4 ${light ? "text-ivory" : "text-foreground"}`}>
        {title}
      </h2>
      <div className={`w-24 h-0.5 bg-gold ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""} mb-6`} />
      {description && (
        <p className={`font-body text-lg leading-relaxed ${light ? "text-ivory/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
};
