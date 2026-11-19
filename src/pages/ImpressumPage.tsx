import { useEffect } from "react";
import { ArrowLeft, Building2, Mail, MapPin, Phone, User, ShieldCheck } from "lucide-react";

export default function ImpressumPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative isolate min-h-svh py-[var(--section-space)] pt-[clamp(6.5rem,14vh,8.5rem)] text-foreground">
      <div className="mx-auto flex w-[var(--container)] flex-col gap-8 px-[1.375rem] lg:px-[clamp(2rem,3.5vw,3.5rem)]">
        
        {/* Header Breadcrumb & Title */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-[length:var(--text-small)] text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="size-4" />
              <span>Zurück zur Startseite</span>
            </a>
          </div>

          <div>
            <span className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-accent">
              AUFTRIVIO · Rechtliche Informationen
            </span>
            <h1 className="text-[length:calc(var(--text-h1)*0.85)] font-heading font-semibold mt-1">
              Impressum
            </h1>
            <p className="text-[length:var(--text-body-lg)] text-muted-foreground font-body max-w-2xl mt-2">
              Rechtliche Anbieterkennzeichnung gemäß § 5 TMG und § 18 MStV.
            </p>
          </div>
        </div>

        {/* Main Content Glass Card */}
        <div className="kit-glass border border-border bg-card/70 p-6 sm:p-10 shadow-2xl space-y-10 text-foreground">
          
          {/* Angaben gem. TMG */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <Building2 className="size-5 text-accent" />
              <h2 className="text-[length:var(--text-h3)] font-heading font-semibold">
                Angaben gemäß § 5 TMG
              </h2>
            </div>
            <div className="space-y-2 text-[length:var(--text-body)] text-muted-foreground font-body leading-relaxed">
              <p className="text-foreground font-semibold text-[length:var(--text-body-lg)]">
                AUFTRIVIO – Digital Growth &amp; Technology Agency
              </p>
              <p>
                <strong className="text-foreground">Rechtsform:</strong> Einzelunternehmen
              </p>
              <p>
                <strong className="text-foreground">Inhaber:</strong> Florin Alexandru Ungureanu
              </p>
            </div>
          </section>

          {/* Anschrift */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <MapPin className="size-5 text-accent" />
              <h2 className="text-[length:var(--text-h3)] font-heading font-semibold">
                Anschrift
              </h2>
            </div>
            <div className="text-[length:var(--text-body)] text-muted-foreground font-body leading-relaxed">
              <p className="text-foreground font-medium">Von-Reiner-Str. 26a</p>
              <p>93053 Regensburg</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <Mail className="size-5 text-accent" />
              <h2 className="text-[length:var(--text-h3)] font-heading font-semibold">
                Kontakt
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[length:var(--text-body)] font-body">
              <div className="flex items-center gap-3 p-4 border border-border bg-card/40">
                <Phone className="size-5 text-accent shrink-0" />
                <div>
                  <span className="block font-mono text-[length:var(--text-label)] uppercase text-muted-foreground">
                    Telefon
                  </span>
                  <a
                    href="tel:+4917643980069"
                    className="text-accent underline underline-offset-4 hover:text-foreground transition-colors font-semibold"
                  >
                    +49 176 43980069
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 border border-border bg-card/40">
                <Mail className="size-5 text-accent shrink-0" />
                <div>
                  <span className="block font-mono text-[length:var(--text-label)] uppercase text-muted-foreground">
                    E-Mail
                  </span>
                  <a
                    href="mailto:kontakt@auftrivio.de"
                    className="text-accent underline underline-offset-4 hover:text-foreground transition-colors font-semibold"
                  >
                    kontakt@auftrivio.de
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Vertreten durch */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <User className="size-5 text-accent" />
              <h2 className="text-[length:var(--text-h3)] font-heading font-semibold">
                Vertreten durch
              </h2>
            </div>
            <p className="text-[length:var(--text-body)] text-muted-foreground font-body">
              Florin Alexandru Ungureanu (Inhaber)
            </p>
          </section>

          {/* Inhaltlich Verantwortlicher */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <ShieldCheck className="size-5 text-accent" />
              <h2 className="text-[length:var(--text-h3)] font-heading font-semibold">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
            </div>
            <p className="text-[length:var(--text-body)] text-muted-foreground font-body leading-relaxed">
              Florin Alexandru Ungureanu<br />
              Von-Reiner-Str. 26a, 93053 Regensburg, Deutschland
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section className="space-y-4 border-t border-border/60 pt-6">
            <h2 className="text-[length:var(--text-body-lg)] font-heading font-semibold text-foreground">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="text-[length:var(--text-small)] text-muted-foreground font-body leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-foreground transition-colors"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        {/* Navigation Action */}
        <div className="flex justify-start">
          <a href="/" className="btn-primary flex items-center gap-2">
            <ArrowLeft className="size-4" />
            <span className="btn-label">Zurück zur Startseite</span>
          </a>
        </div>
      </div>
    </div>
  );
}
