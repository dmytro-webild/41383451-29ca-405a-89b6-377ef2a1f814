import { motion, useReducedMotion } from "motion/react";
import { useKitMotion } from "@/components/kit/kitMotion";

type AboutSectionProps = {
  tag?: string;
  title?: string;
  name?: string;
  role?: string;
  description?: string;
  className?: string;
};

export default function AboutSection({
  tag = "05 / Über AUFTRIVIO",
  title = "Über AUFTRIVIO",
  name = "Florin Alexandru Ungureanu",
  role = "Geschäftsführer von AUFTRIVIO",
  description = "High-End Webdesign, SEO & KI-Automatisierung aus Regensburg. Wir verbinden Ästhetik mit technischer Präzision für messbares digitales Wachstum.",
  className = "",
}: AboutSectionProps) {
  const reduce = !!useReducedMotion();
  const live = !reduce;
  const { ease, slow } = useKitMotion();

  return (
    <section aria-label="Über AUFTRIVIO" className={`relative py-[var(--section-space)] text-foreground ${className}`}>
      <div className="kit-glass mx-auto flex w-[var(--container)] flex-col gap-6 p-[1.375rem] lg:p-[clamp(2rem,3.5vw,3.5rem)]">
        {tag && (
          <motion.div
            initial={live ? { opacity: 0, y: 12 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: slow * 0.5, ease }}
            className="flex items-center gap-3 font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-accent"
          >
            <span>{tag}</span>
          </motion.div>
        )}

        <motion.h2
          initial={live ? { opacity: 0, y: 16 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: slow * 0.6, ease, delay: 0.1 }}
          className="text-[length:var(--text-h2)] font-heading"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={live ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: slow * 0.7, ease, delay: 0.2 }}
          className="mt-2 border-l-2 border-accent pl-6 py-2"
        >
          <p className="text-[length:var(--text-h3)] font-heading text-foreground font-semibold">
            {name}, <span className="text-accent font-normal">{role}</span>
          </p>
          {description && (
            <p className="mt-4 text-[length:var(--text-body-lg)] text-muted-foreground max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
