import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

type DatenschutzModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DatenschutzModal({ isOpen, onClose }: DatenschutzModalProps) {
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
                <h2 className="text-[length:var(--text-h3)] font-heading mt-1">Datenschutzerklärung</h2>
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
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">1. Datenschutz auf einen Blick</h3>
                <p>
                  Der Schutz deiner persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir darüber, wie deine Daten bei der Nutzung der AUFTRIVIO-Webseite verarbeitet werden.
                </p>
              </section>

              <section>
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">2. Verantwortliche Stelle</h3>
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                  <strong className="text-foreground">AUFTRIVIO</strong><br />
                  Florin Alexandru Ungureanu, Geschäftsführer<br />
                  Regensburg, Deutschland<br />
                  E-Mail: hallo@auftrivio.de
                </p>
              </section>

              <section>
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">3. Erhebung und Speicherung personenbezogener Daten</h3>
                <p>
                  Wenn du unser interaktives Kontaktformular nutzt, erheben wir folgende erforderliche Angaben:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Projekt-Details, Vorhaben, Zeitrahmen und Budget (freiwillig)</li>
                </ul>
                <p className="mt-2">
                  Diese Daten werden ausschließlich zur Bearbeitung deiner Anfrage und zur Vorbereitung einer Zusammenarbeit verarbeitet und gespeichert.
                </p>
              </section>

              <section>
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">4. Deine Rechte</h3>
                <p>
                  Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung deiner gespeicherten personenbezogenen Daten. Wende dich hierfür einfach an hallo@auftrivio.de.
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
