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
  role = "Geschäftsführer",
  description = "Wir verbinden Ästhetik mit technischer Präzision für messbares digitales Wachstum in Regensburg und darüber hinaus.",
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
          className="mt-2 border-l-2 border-accent pl-6 py-2 space-y-4"
        >
          <div>
            <p className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-accent mb-1">
              Geschäftsführung
            </p>
            <h3 className="text-[length:var(--text-h3)] font-heading text-foreground font-semibold">
              {name} · <span className="text-accent font-normal">{role} von AUFTRIVIO</span>
            </h3>
          </div>

          <p className="text-[length:var(--text-body-lg)] text-muted-foreground max-w-3xl leading-relaxed">
            Als Geschäftsführer führt {name} AUFTRIVIO mit dem Anspruch, Unternehmen durch maßgeschneidertes High-End Webdesign, erstklassige Suchmaschinenoptimierung (SEO) und smarte KI-Automatisierung aus Regensburg auf das nächste digitale Level zu heben.
          </p>

          {description && (
            <p className="text-[length:var(--text-body)] text-muted-foreground/90 max-w-3xl leading-relaxed">
              {description}
            </p>
          )}

          <div className="pt-2 font-mono text-[length:var(--text-small)] text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>AUFTRIVIO</span>
            <span>·</span>
            <span>Geschäftsführer: {name}</span>
            <span>·</span>
            <span>Regensburg, Deutschland</span>
            <span>·</span>
            <a href="mailto:kontakt@auftrivio.de" className="text-accent underline underline-offset-2 hover:text-foreground transition-colors font-medium">
              kontakt@auftrivio.de
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
