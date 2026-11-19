import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

type ImpressumModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ImpressumModal({ isOpen, onClose }: ImpressumModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto kit-glass border border-border bg-card/95 p-6 sm:p-10 rounded-none shadow-2xl text-foreground text-left"
          >
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <div>
                <span className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-accent">
                  AUFTRIVIO
                </span>
                <h2 className="text-[length:var(--text-h3)] font-heading mt-1">Impressum</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Schließen"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="space-y-6 text-muted-foreground text-[length:var(--text-body)] leading-relaxed font-body">
              <section>
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">Angaben gemäß § 5 TMG</h3>
                <p>
                  <strong className="text-foreground">AUFTRIVIO – Digital Growth &amp; Technology Agency</strong><br />
                  Einzelunternehmen<br />
                  Inhaber: Florin Alexandru Ungureanu<br />
                  Von-Reiner-Str. 26a, 93053 Regensburg, Deutschland
                </p>
              </section>

              <section>
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">Kontakt</h3>
                <p>
                  Telefon:{" "}
                  <a href="tel:+4917643980069" className="text-accent underline hover:text-foreground font-medium">
                    +49 176 43980069
                  </a><br />
                  E-Mail:{" "}
                  <a href="mailto:kontakt@auftrivio.de" className="text-accent underline hover:text-foreground font-medium">
                    kontakt@auftrivio.de
                  </a><br />
                  Website: https://auftrivio.de
                </p>
              </section>

              <section>
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">Vertreten durch</h3>
                <p>Florin Alexandru Ungureanu (Inhaber)</p>
              </section>

              <section>
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
                <p>
                  Florin Alexandru Ungureanu<br />
                  Von-Reiner-Str. 26a, 93053 Regensburg, Deutschland
                </p>
              </section>

              <section>
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>
            </div>

            <div className="mt-8 pt-4 border-t border-border flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="btn-primary"
              >
                <span className="btn-label">Schließen</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
