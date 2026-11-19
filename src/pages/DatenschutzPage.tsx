import { useEffect } from "react";
import { ArrowLeft, Building2, Server, Database, AlertTriangle, UserCheck, FileText } from "lucide-react";

export default function DatenschutzPage() {
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
              Datenschutzerklärung
            </h1>
            <p className="text-[length:var(--text-body-lg)] text-muted-foreground font-body max-w-2xl mt-2">
              Informationen zur Verarbeitung personenbezogener Daten und deinen Rechten gemäß DSGVO.
            </p>
          </div>
        </div>

        {/* Entwurfsnotiz Callout */}
        <div className="border border-accent/40 bg-accent/10 p-5 sm:p-6 shadow-md text-foreground space-y-2">
          <div className="flex items-center gap-2 text-accent font-semibold font-mono text-[length:var(--text-body)]">
            <AlertTriangle className="size-5 shrink-0" />
            <span>Wichtige Entwurfsnotiz</span>
          </div>
          <p className="text-[length:var(--text-small)] text-muted-foreground font-body leading-relaxed">
            Hinweis zu offenen Hosting-Details: Konkrete Hosting-Protokolldauer, Unterauftragsverarbeiter, der Auftragsverarbeitungsvertrag (AVV) sowie die genauen Drittlandgarantien müssen noch final bestätigt werden.
          </p>
        </div>

        {/* Main Content Glass Card */}
        <div className="kit-glass border border-border bg-card/70 p-6 sm:p-10 shadow-2xl space-y-10 text-foreground">
          
          {/* Verantwortlicher */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <Building2 className="size-5 text-accent" />
              <h2 className="text-[length:var(--text-h3)] font-heading font-semibold">
                1. Verantwortlicher
              </h2>
            </div>
            <div className="space-y-2 text-[length:var(--text-body)] text-muted-foreground font-body leading-relaxed">
              <p className="text-foreground font-semibold text-[length:var(--text-body-lg)]">
                Florin Alexandru Ungureanu
              </p>
              <p className="text-foreground">AUFTRIVIO Einzelunternehmen</p>
              <p>Von-Reiner-Str. 26a</p>
              <p>93053 Regensburg, Deutschland</p>
              <p className="pt-1">
                <strong className="text-foreground">E-Mail:</strong>{" "}
                <a
                  href="mailto:kontakt@auftrivio.de"
                  className="text-accent underline underline-offset-4 hover:text-foreground transition-colors font-semibold"
                >
                  kontakt@auftrivio.de
                </a>
              </p>
            </div>
          </section>

          {/* Hosting */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <Server className="size-5 text-accent" />
              <h2 className="text-[length:var(--text-h3)] font-heading font-semibold">
                2. Hosting der Website
              </h2>
            </div>
            <div className="space-y-3 text-[length:var(--text-body)] text-muted-foreground font-body leading-relaxed">
              <p>
                Diese Website wird gehostet bei <strong className="text-foreground">Webild Inc.</strong>, Delaware, USA (Datenschutzerklärung:{" "}
                <a
                  href="https://www.webild.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4 hover:text-foreground transition-colors font-medium"
                >
                  https://www.webild.io/privacy
                </a>
                ).
              </p>
              <p>
                Zur Bereitstellung, technischen Auslieferung und Gewährleistung der Betriebssicherheit der Website können technische Zugriffsdaten (wie z. B. IP-Adresse, Browsertyp, Betriebssystem und Zeitpunkt des Zugriffs) verarbeitet werden.
              </p>
              <p>
                <strong className="text-foreground">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in dem sicheren, stabilen und effizienten Betrieb unserer Website.
              </p>
              <p>
                Eine Datenverarbeitung in den USA ist laut Angaben des Anbieters Webild Inc. möglich.
              </p>
            </div>
          </section>

          {/* Datenverarbeitung bei Projektanfragen */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <Database className="size-5 text-accent" />
              <h2 className="text-[length:var(--text-h3)] font-heading font-semibold">
                3. Datenverarbeitung bei Projektanfragen
              </h2>
            </div>
            <div className="space-y-4 text-[length:var(--text-body)] text-muted-foreground font-body leading-relaxed">
              <p>
                Wenn du uns eine Projektanfrage (z. B. über den Online-Kontakt-Funnel) übermittels, verarbeiten wir die von dir angegebenen Daten zur Bearbeitung und Beantwortung deines Anliegens.
              </p>
              
              <div>
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">
                  Erfasste Daten
                </h3>
                <p>
                  Im Rahmen der Anfrage werden folgende Daten verarbeitet: Name, E-Mail-Adresse, gewähltes Vorhaben, Ziel, gewünschter Startzeitpunkt und geschätztes Budget. Optional können Angaben zum Unternehmen, eine Telefonnummer sowie eine Beschreibung des Vorhabens gemacht werden.
                </p>
              </div>

              <div>
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">
                  Technische Übermittlung & Infrastruktur
                </h3>
                <ul className="list-disc list-inside space-y-1 text-[length:var(--text-small)] sm:text-[length:var(--text-body)]">
                  <li>
                    <strong className="text-foreground">Netlify:</strong> Die Übermittlung erfolgt beim Absenden über eine Netlify-Serverfunktion.
                  </li>
                  <li>
                    <strong className="text-foreground">Supabase:</strong> Anfragen werden in der Datenbank Supabase (primäre Datenbankregion Irland) gespeichert. Der Zugriff auf eingegangene Anfragen erfolgt ausschließlich im geschützten Adminbereich.
                  </li>
                  <li>
                    <strong className="text-foreground">Resend:</strong> Über den Dienst Resend wird eine automatische Benachrichtigung über den Eingang der Anfrage verschickt.
                  </li>
                  <li>
                    <strong className="text-foreground">IONOS:</strong> Bei direktem E-Mail-Kontakt erfolgt die Kommunikation über unseren E-Mail-Anbieter IONOS.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">
                  Zweck & Rechtsgrundlagen
                </h3>
                <p>
                  Der Zweck der Datenverarbeitung ist die Bearbeitung deiner Anfrage und die Vorbereitung einer möglichen Zusammenarbeit.
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage auf die Durchführung vorvertraglicher Maßnahmen gerichtet ist. In allen übrigen Fällen ist die Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an der zügigen und sachgerechten Bearbeitung deiner Anfrage).
                </p>
              </div>

              <div>
                <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground mb-2">
                  Speicherfrist
                </h3>
                <p>
                  Deine Daten werden so lange gespeichert, wie es für die vollständige Bearbeitung der Anfrage erforderlich ist oder sofern gesetzliche Aufbewahrungsfristen bestehen.
                </p>
              </div>
            </div>
          </section>

          {/* Rechte der Nutzer */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <UserCheck className="size-5 text-accent" />
              <h2 className="text-[length:var(--text-h3)] font-heading font-semibold">
                4. Rechte der Nutzer gemäß DSGVO
              </h2>
            </div>
            <div className="space-y-3 text-[length:var(--text-body)] text-muted-foreground font-body leading-relaxed">
              <p>
                Nach der Datenschutz-Grundverordnung stehen dir als betroffener Person folgende Rechte zu:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-[length:var(--text-small)] sm:text-[length:var(--text-body)]">
                <li>
                  <strong className="text-foreground">Auskunftsrecht (Art. 15 DSGVO):</strong> Du kannst Informationen über deine von uns verarbeiteten personenbezogenen Daten verlangen.
                </li>
                <li>
                  <strong className="text-foreground">Recht auf Berichtigung (Art. 16 DSGVO):</strong> Du hast das Recht auf unverzügliche Berichtigung unrichtiger oder Vervollständigung deiner bei uns gespeicherten Daten.
                </li>
                <li>
                  <strong className="text-foreground">Recht auf Löschung (Art. 17 DSGVO):</strong> Du kannst die Löschung deiner personenbezogenen Daten verlangen, soweit nicht andere gesetzliche Pflichten entgegenstehen.
                </li>
                <li>
                  <strong className="text-foreground">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Du hast das Recht, die Einschränkung der Verarbeitung deiner Daten zu verlangen.
                </li>
                <li>
                  <strong className="text-foreground">Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Du kannst verlangen, deine bereitgestellten Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
                </li>
                <li>
                  <strong className="text-foreground">Widerrufs- &amp; Widerspruchsrecht (Art. 7 Abs. 3 &amp; Art. 21 DSGVO):</strong> Erteilte Einwilligungen kannst du jederzeit mit Wirkung für die Zukunft widerrufen. Der Verarbeitung aufgrund berechtigter Interessen kannst du widersprechen.
                </li>
                <li>
                  <strong className="text-foreground">Beschwerderecht (Art. 77 DSGVO):</strong> Du hast das Recht, dich bei einer zuständigen Datenschutz-Aufsichtsbehörde zu beschweren.
                </li>
              </ul>
              <p className="pt-2">
                Zur Ausübung deiner Rechte genügt eine formlose Mitteilung per E-Mail an:{" "}
                <a
                  href="mailto:kontakt@auftrivio.de"
                  className="text-accent underline underline-offset-4 hover:text-foreground transition-colors font-semibold"
                >
                  kontakt@auftrivio.de
                </a>
                .
              </p>
            </div>
          </section>

          {/* Sicherheit & Kontakt */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <FileText className="size-5 text-accent" />
              <h2 className="text-[length:var(--text-h3)] font-heading font-semibold">
                5. Stand &amp; Aktualisierungen
              </h2>
            </div>
            <p className="text-[length:var(--text-body)] text-muted-foreground font-body leading-relaxed">
              Diese Datenschutzerklärung wird bei Bedarf angepasst, um geänderten rechtlichen Rahmenbedingungen oder technischen Weiterentwicklungen zu entsprechen.
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
