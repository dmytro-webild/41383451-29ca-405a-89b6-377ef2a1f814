import { motion, useReducedMotion } from "motion/react";
import { useKitMotion } from "@/components/kit/kitMotion";

type TestimonialSectionProps = {
  label?: string;
  title?: string;
  description?: string;
  ariaLabel?: string;
  className?: string;
};

export default function TestimonialPortraitQuote({
  label = "Kundenstimmen",
  title = "Kundenstimmen & Referenzen",
  description = "Erfahrungsberichte und Referenzen unserer Partner werden nach persönlicher Freigabe veröffentlicht.",
  ariaLabel = "Kundenstimmen",
  className = "",
}: TestimonialSectionProps) {
  const reduce = !!useReducedMotion();
  const live = !reduce;
  const { ease, slow } = useKitMotion();

  return (
    <section aria-label={ariaLabel} className={`relative py-[var(--section-space)] text-foreground ${className}`}>
      <div className="kit-glass mx-auto flex w-[var(--container)] flex-col gap-6 p-[1.375rem] lg:p-[clamp(2rem,3.5vw,3.5rem)]">
        {label && (
          <motion.div
            initial={live ? { opacity: 0, y: 12 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: slow * 0.5, ease }}
            className="flex items-center gap-3 font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-accent"
          >
            <span>{label}</span>
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
          className="p-6 border border-border bg-card/40 rounded-none max-w-2xl"
        >
          <p className="text-[length:var(--text-body-lg)] text-muted-foreground leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
