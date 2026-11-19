import { useState, useId } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Check, ArrowLeft, ArrowRight, Sparkles, ShieldCheck, RefreshCw } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type OptionItem = {
  id: string;
  title: string;
  description?: string;
  icon?: string;
};

const VORHABEN_OPTIONS: OptionItem[] = [
  { id: "webdesign", title: "Webdesign & Dev", description: "High-End Webseite mit Fokus auf Marke & Konversion" },
  { id: "seo", title: "SEO & Sichtbarkeit", description: "Top Google-Rankings in Regensburg & Region" },
  { id: "ki", title: "KI & Automatisierung", description: "Smarte KI-Workflows & Prozessoptimierung" },
  { id: "crm", title: "CRM & Vertrieb", description: "Strukturiertes Lead-Management & Vertrieb" },
  { id: "marketing", title: "Online-Marketing", description: "Datengetriebene Kampagnen für Neukunden" },
  { id: "funnel", title: "Digitale Funnels", description: "Durchdachte Kunden-Journeys für Wachstum" },
];

const GOAL_MAPPING: Record<string, OptionItem[]> = {
  webdesign: [
    { id: "web_relaunch", title: "Relaunch & modernes Markenimage", description: "Veraltete Website durch ein High-End Redesign ersetzen" },
    { id: "web_leads", title: "Messbar mehr Neukunden gewinnen", description: "Optimierte UX für maximale Anfragen & Conversion" },
    { id: "web_perf", title: "Maximale Ladezeiten & Mobile Performance", description: "Perfekte Darstellung auf allen Endgeräten" },
  ],
  seo: [
    { id: "seo_top1", title: "Top-1 Ranking in Regensburg & Region", description: "Lokal auffindbar sein, wenn Kunden nach deinen Leistungen suchen" },
    { id: "seo_traffic", title: "Mehr organischer Traffic ohne Ads", description: "Nachhaltige Sichtbarkeit bei Google aufbauen" },
    { id: "seo_brand", title: "Markenautorität in der Branche stärken", description: "Expertenstatus durch qualitativen Content" },
  ],
  ki: [
    { id: "ki_time", title: "Zeitersparnis durch KI-Workflows", description: "Wiederkehrende administrative Aufgaben automatisieren" },
    { id: "ki_bot", title: "Intelligenter 24/7 Support-Chatbot", description: "Sofortige Antworten für Kundenanfragen" },
    { id: "ki_process", title: "Bestehende Prozesse digital verknüpfen", description: "Nahtloser Datenaustausch zwischen Systemen" },
  ],
  crm: [
    { id: "crm_leads", title: "Automatisches Lead-Handling", description: "Anfragen sofort im CRM erfassen und weiterverarbeiten" },
    { id: "crm_pipeline", title: "Transparente Vertriebs-Pipeline", description: "Alle Deals und Verkäufe im Überblick behalten" },
  ],
  marketing: [
    { id: "mkt_qual", title: "Qualifizierte B2B/B2C Anfragen generieren", description: "Gezielte Ansprache der idealen Zielgruppe" },
    { id: "mkt_roi", title: "Höherer Return on Investment (ROI)", description: "Messbarer Erfolg pro investiertem Marketing-Euro" },
  ],
  funnel: [
    { id: "funnel_conv", title: "Höhere Conversion-Rate", description: "Besucher Schritt für Schritt zu Kunden führen" },
    { id: "funnel_system", title: "Skalierbares Funnel-System", description: "Planbare Neukundengewinnung rund um die Uhr" },
  ],
};

const DEFAULT_GOALS: OptionItem[] = [
  { id: "goal_growth", title: "Neukundengewinnung & Umsatz steigern", description: "Planbar mehr qualifizierte Anfragen erhalten" },
  { id: "goal_efficiency", title: "Prozesse digitalisieren & Zeit sparen", description: "Workflows automatisieren und Aufwand reduzieren" },
  { id: "goal_branding", title: "Markenauftritt & Sichtbarkeit stärken", description: "Einzigartige digitale Präsenz in Regensburg aufbauen" },
  { id: "goal_scale", title: "Skalierbares digitales System etablieren", description: "Zukunftssicheres Fundament für digitales Wachstum" },
];

const START_OPTIONS: OptionItem[] = [
  { id: "sofort", title: "Ab sofort", description: "Schnellstmöglicher Projektstart erwünscht" },
  { id: "1-2-monate", title: "In 1 bis 2 Monaten", description: "Umsetzung im kommenden Quartal geplant" },
  { id: "3-6-monate", title: "In 3 bis 6 Monaten", description: "Mittelfristiges Digitalprojekt" },
  { id: "flexibel", title: "Flexible Orientierung", description: "Erste Beratung & Konzept unverbindlich prüfen" },
];

const BUDGET_OPTIONS: OptionItem[] = [
  { id: "2.5k-5k", title: "2.500 € – 5.000 €", description: "Kompakter Einstieg / Fokus-Projekt" },
  { id: "5k-10k", title: "5.000 € – 10.000 €", description: "Standard High-End Agenturlösung" },
  { id: "10k-25k", title: "10.000 € – 25.000 €", description: "Umfassendes digitales Gesamtsystem" },
  { id: "25k+", title: "25.000 €+", description: "Enterprise / Maßgeschneiderte Komplettlösung" },
];

export default function ContactFunnel({ className }: { className?: string }) {
  const reduce = !!useReducedMotion();
  const consentCheckboxId = useId();
  const [step, setStep] = useState(1);

  // Form State
  const [selectedVorhaben, setSelectedVorhaben] = useState<string[]>(["webdesign"]);
  const [selectedZiele, setSelectedZiele] = useState<string[]>([]);
  const [selectedStart, setSelectedStart] = useState<string>("sofort");
  const [selectedBudget, setSelectedBudget] = useState<string>("5k-10k");

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Get dynamic goals based on selected Vorhaben
  const getDynamicGoalOptions = (): OptionItem[] => {
    if (selectedVorhaben.length === 0) return DEFAULT_GOALS;
    const goals: OptionItem[] = [];
    const addedIds = new Set<string>();

    selectedVorhaben.forEach((vKey) => {
      const items = GOAL_MAPPING[vKey];
      if (items) {
        items.forEach((item) => {
          if (!addedIds.has(item.id)) {
            addedIds.add(item.id);
            goals.push(item);
          }
        });
      }
    });

    if (goals.length === 0) return DEFAULT_GOALS;
    return goals;
  };

  const dynamicGoalOptions = getDynamicGoalOptions();

  // Handlers for step 1 (Vorhaben - Multi select)
  const toggleVorhaben = (id: string) => {
    setValidationError(null);
    if (selectedVorhaben.includes(id)) {
      if (selectedVorhaben.length > 1) {
        setSelectedVorhaben(selectedVorhaben.filter((item) => item !== id));
      }
    } else {
      setSelectedVorhaben([...selectedVorhaben, id]);
    }
  };

  // Handlers for step 2 (Ziel - Multi select)
  const toggleZiel = (id: string) => {
    setValidationError(null);
    if (selectedZiele.includes(id)) {
      setSelectedZiele(selectedZiele.filter((item) => item !== id));
    } else {
      setSelectedZiele([...selectedZiele, id]);
    }
  };

  // Navigation handlers
  const handleNext = () => {
    setValidationError(null);
    if (step === 1 && selectedVorhaben.length === 0) {
      setValidationError("Bitte wähle mindestens ein Vorhaben aus.");
      return;
    }
    if (step === 2 && selectedZiele.length === 0 && dynamicGoalOptions.length > 0) {
      // Auto-select first if none selected
      setSelectedZiele([dynamicGoalOptions[0].id]);
    }
    if (step < 5) {
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    setValidationError(null);
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!contactData.name.trim()) {
      setValidationError("Bitte gib deinen Namen ein.");
      return;
    }
    if (!contactData.email.trim() || !contactData.email.includes("@")) {
      setValidationError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }
    if (!contactData.consent) {
      setValidationError("Bitte stimme der Datenschutzerklärung zu.");
      return;
    }

    // Submit complete (preview mode - no backend email dispatch)
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    setSelectedVorhaben(["webdesign"]);
    setSelectedZiele([]);
    setSelectedStart("sofort");
    setSelectedBudget("5k-10k");
    setContactData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      consent: false,
    });
    setValidationError(null);
  };

  return (
    <section aria-label="Projektanfrage Funnel" className={cn("relative py-[var(--section-space)] text-foreground", className)}>
      <div className="kit-glass mx-auto flex w-[var(--container)] flex-col gap-6 p-[1.375rem] lg:p-[clamp(2rem,3.5vw,3.5rem)]">

        {/* Section Title */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-accent">
              Projektanfrage
            </span>
            <a
              href="mailto:kontakt@auftrivio.de"
              className="font-mono text-[length:var(--text-small)] text-accent underline underline-offset-4 hover:text-foreground transition-colors font-medium"
            >
              kontakt@auftrivio.de
            </a>
          </div>
          <h2 className="text-[length:var(--text-h2)] font-heading">
            Starte dein digitales Projekt
          </h2>
          <p className="text-[length:var(--text-body-lg)] text-muted-foreground max-w-2xl">
            In 5 kurzen Schritten zur maßgeschneiderten Analyse für dein Vorhaben in Regensburg. Oder schreib uns direkt per E-Mail an{" "}
            <a
              href="mailto:kontakt@auftrivio.de"
              className="text-accent underline underline-offset-4 hover:text-foreground transition-colors font-medium"
            >
              kontakt@auftrivio.de
            </a>.
          </p>
        </div>

        {/* Funnel Box */}
        <div className="mt-4 border border-border bg-card/60 p-6 sm:p-10 rounded-none shadow-xl">

          {!isSubmitted ? (
            <>
              {/* Progress Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-[length:var(--text-small)] font-mono uppercase tracking-[var(--label-tracking)] mb-3">
                  <span className="text-accent font-semibold">Schritt {step} von 5</span>
                  <span className="text-muted-foreground">
                    {step === 1 && "1. Vorhaben (Mehrfachauswahl)"}
                    {step === 2 && "2. Primäres Ziel"}
                    {step === 3 && "3. Zeitrahmen"}
                    {step === 4 && "4. Budgetrahmen"}
                    {step === 5 && "5. Kontaktdaten"}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 w-full bg-border overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: "20%" }}
                    animate={{ width: `${(step / 5) * 100}%` }}
                    transition={{ duration: reduce ? 0 : 0.4, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Validation Error Notice */}
              {validationError && (
                <div className="mb-6 p-4 border border-destructive/50 bg-destructive/10 text-destructive-foreground text-[length:var(--text-small)] font-body">
                  {validationError}
                </div>
              )}

              {/* Step Content */}
              <form onSubmit={step === 5 ? handleSubmit : (e) => e.preventDefault()}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={reduce ? false : { opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduce ? undefined : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-[length:var(--text-h3)] font-heading mb-1">
                          Welche Leistungen interessieren dich?
                        </h3>
                        <p className="text-[length:var(--text-small)] text-muted-foreground font-body">
                          Wähle eine oder mehrere Optionen (Mehrfachauswahl).
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {VORHABEN_OPTIONS.map((item) => {
                          const isSelected = selectedVorhaben.includes(item.id);
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => toggleVorhaben(item.id)}
                              className={cn(
                                "flex flex-col justify-between text-left p-5 border transition-all duration-200 relative group min-h-[7.5rem]",
                                isSelected
                                  ? "border-accent bg-accent/10 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                                  : "border-border bg-card/80 hover:border-accent/60 hover:bg-card"
                              )}
                            >
                              <div className="flex items-start justify-between w-full">
                                <span className={cn("font-heading font-semibold text-[length:var(--text-body-lg)]", isSelected ? "text-accent" : "text-foreground")}>
                                  {item.title}
                                </span>
                                <div className={cn(
                                  "size-5 border flex items-center justify-center transition-colors shrink-0 ml-2 mt-0.5",
                                  isSelected ? "border-accent bg-accent text-accent-foreground" : "border-border text-transparent group-hover:border-accent/50"
                                )}>
                                  <Check className="size-3.5 stroke-[3]" />
                                </div>
                              </div>
                              {item.description && (
                                <p className="text-[length:var(--text-small)] text-muted-foreground mt-3 leading-snug">
                                  {item.description}
                                </p>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={reduce ? false : { opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduce ? undefined : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-[length:var(--text-h3)] font-heading mb-1">
                          Was ist dein wichtigstes Ziel?
                        </h3>
                        <p className="text-[length:var(--text-small)] text-muted-foreground font-body">
                          Dynamisch angepasst an deine Auswahl im vorherigen Schritt.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {dynamicGoalOptions.map((item) => {
                          const isSelected = selectedZiele.includes(item.id);
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => toggleZiel(item.id)}
                              className={cn(
                                "flex flex-col justify-between text-left p-5 border transition-all duration-200 min-h-[7rem]",
                                isSelected
                                  ? "border-accent bg-accent/10 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                                  : "border-border bg-card/80 hover:border-accent/60 hover:bg-card"
                              )}
                            >
                              <div className="flex items-start justify-between w-full">
                                <span className={cn("font-heading font-semibold text-[length:var(--text-body-lg)]", isSelected ? "text-accent" : "text-foreground")}>
                                  {item.title}
                                </span>
                                <div className={cn(
                                  "size-5 border flex items-center justify-center transition-colors shrink-0 ml-2 mt-0.5",
                                  isSelected ? "border-accent bg-accent text-accent-foreground" : "border-border text-transparent"
                                )}>
                                  <Check className="size-3.5 stroke-[3]" />
                                </div>
                              </div>
                              {item.description && (
                                <p className="text-[length:var(--text-small)] text-muted-foreground mt-2 leading-snug">
                                  {item.description}
                                </p>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={reduce ? false : { opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduce ? undefined : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-[length:var(--text-h3)] font-heading mb-1">
                          Wann soll das Projekt starten?
                        </h3>
                        <p className="text-[length:var(--text-small)] text-muted-foreground font-body">
                          Wähle deinen präferierten Zeitrahmen.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {START_OPTIONS.map((item) => {
                          const isSelected = selectedStart === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setSelectedStart(item.id)}
                              className={cn(
                                "flex flex-col justify-between text-left p-5 border transition-all duration-200 min-h-[6.5rem]",
                                isSelected
                                  ? "border-accent bg-accent/10 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                                  : "border-border bg-card/80 hover:border-accent/60 hover:bg-card"
                              )}
                            >
                              <div className="flex items-start justify-between w-full">
                                <span className={cn("font-heading font-semibold text-[length:var(--text-body-lg)]", isSelected ? "text-accent" : "text-foreground")}>
                                  {item.title}
                                </span>
                                <div className={cn(
                                  "size-5 rounded-full border flex items-center justify-center transition-colors shrink-0 ml-2 mt-0.5",
                                  isSelected ? "border-accent bg-accent text-accent-foreground" : "border-border text-transparent"
                                )}>
                                  <div className="size-2 bg-accent-foreground rounded-full" />
                                </div>
                              </div>
                              {item.description && (
                                <p className="text-[length:var(--text-small)] text-muted-foreground mt-2">
                                  {item.description}
                                </p>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={reduce ? false : { opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduce ? undefined : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-[length:var(--text-h3)] font-heading mb-1">
                          Welches Budget hast du eingeplant?
                        </h3>
                        <p className="text-[length:var(--text-small)] text-muted-foreground font-body">
                          Ermöglicht uns die zielgenaue Konzeption.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {BUDGET_OPTIONS.map((item) => {
                          const isSelected = selectedBudget === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setSelectedBudget(item.id)}
                              className={cn(
                                "flex flex-col justify-between text-left p-5 border transition-all duration-200 min-h-[6.5rem]",
                                isSelected
                                  ? "border-accent bg-accent/10 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                                  : "border-border bg-card/80 hover:border-accent/60 hover:bg-card"
                              )}
                            >
                              <div className="flex items-start justify-between w-full">
                                <span className={cn("font-heading font-semibold text-[length:var(--text-body-lg)]", isSelected ? "text-accent" : "text-foreground")}>
                                  {item.title}
                                </span>
                                <div className={cn(
                                  "size-5 rounded-full border flex items-center justify-center transition-colors shrink-0 ml-2 mt-0.5",
                                  isSelected ? "border-accent bg-accent text-accent-foreground" : "border-border text-transparent"
                                )}>
                                  <div className="size-2 bg-accent-foreground rounded-full" />
                                </div>
                              </div>
                              {item.description && (
                                <p className="text-[length:var(--text-small)] text-muted-foreground mt-2">
                                  {item.description}
                                </p>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 5 && (
                    <motion.div
                      key="step5"
                      initial={reduce ? false : { opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduce ? undefined : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-[length:var(--text-h3)] font-heading mb-1">
                          Fast geschafft! Wohin sollen wir die Auswertung senden?
                        </h3>
                        <p className="text-[length:var(--text-small)] text-muted-foreground font-body">
                          Name und E-Mail sind Pflichtfelder. Wir behandeln deine Daten streng vertraulich.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <label className="flex flex-col gap-2">
                          <span className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]">
                            Dein Name *
                          </span>
                          <input
                            type="text"
                            required
                            placeholder="Max Mustermann"
                            value={contactData.name}
                            onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                            className="w-full bg-background border border-border p-3 text-[length:var(--text-body)] text-foreground outline-none focus:border-accent transition-colors"
                          />
                        </label>

                        <label className="flex flex-col gap-2">
                          <span className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]">
                            E-Mail-Adresse *
                          </span>
                          <input
                            type="email"
                            required
                            placeholder="hallo@unternehmen.de"
                            value={contactData.email}
                            onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                            className="w-full bg-background border border-border p-3 text-[length:var(--text-body)] text-foreground outline-none focus:border-accent transition-colors"
                          />
                        </label>

                        <label className="flex flex-col gap-2">
                          <span className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]">
                            Unternehmen (Optional)
                          </span>
                          <input
                            type="text"
                            placeholder="Musterfirma GmbH"
                            value={contactData.company}
                            onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                            className="w-full bg-background border border-border p-3 text-[length:var(--text-body)] text-foreground outline-none focus:border-accent transition-colors"
                          />
                        </label>

                        <label className="flex flex-col gap-2">
                          <span className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]">
                            Telefonnummer (Optional)
                          </span>
                          <input
                            type="tel"
                            placeholder="+49 170 1234567"
                            value={contactData.phone}
                            onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                            className="w-full bg-background border border-border p-3 text-[length:var(--text-body)] text-foreground outline-none focus:border-accent transition-colors"
                          />
                        </label>

                        <label className="flex flex-col gap-2 sm:col-span-2">
                          <span className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)]">
                            Projektbeschreibung & Besonderheiten (Optional)
                          </span>
                          <textarea
                            rows={3}
                            placeholder="Beschreibe kurz deine aktuellen Herausforderungen oder besonderen Wünsche..."
                            value={contactData.message}
                            onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                            className="w-full bg-background border border-border p-3 text-[length:var(--text-body)] text-foreground outline-none focus:border-accent transition-colors resize-none"
                          />
                        </label>
                      </div>

                      {/* Privacy consent checkbox */}
                      <div className="pt-2">
                        <label htmlFor={consentCheckboxId} className="flex items-start gap-3 cursor-pointer group">
                          <input
                            id={consentCheckboxId}
                            type="checkbox"
                            checked={contactData.consent}
                            onChange={(e) => setContactData({ ...contactData, consent: e.target.checked })}
                            className="mt-1 size-4 accent-accent cursor-pointer"
                          />
                          <span className="text-[length:var(--text-small)] text-muted-foreground leading-snug">
                            Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                            <a
                              href="#datenschutz"
                              className="text-accent underline underline-offset-2 hover:text-foreground font-medium"
                            >
                              Datenschutzerklärung
                            </a>{" "}
                            zu.
                          </span>
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Navigation Buttons */}
                <div className="mt-10 pt-6 border-t border-border flex items-center justify-between gap-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="btn-secondary flex items-center gap-2"
                    >
                      <ArrowLeft className="size-4" />
                      <span className="btn-label">Zurück</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn-primary flex items-center gap-2 ml-auto"
                    >
                      <span className="btn-label">Weiter</span>
                      <ArrowRight className="size-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-primary flex items-center gap-2 ml-auto"
                    >
                      <Sparkles className="size-4" />
                      <span className="btn-label">Kostenlose Analyse anfragen</span>
                    </button>
                  )}
                </div>
              </form>
            </>
          ) : (
            /* Confirmation Screen (Preview Testbestätigung without real email sending) */
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="py-8 text-center flex flex-col items-center max-w-xl mx-auto space-y-6"
            >
              <div className="size-16 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent">
                <ShieldCheck className="size-8" />
              </div>

              <div>
                <span className="font-mono text-[length:var(--text-label)] uppercase text-accent tracking-[var(--label-tracking)]">
                  Vorschau-Bestätigung (Test-Modus)
                </span>
                <h3 className="text-[length:var(--text-h2)] font-heading mt-2">
                  Anfrage erfolgreich übermittelt!
                </h3>
                <p className="text-[length:var(--text-body-lg)] text-muted-foreground mt-3 leading-relaxed">
                  Vielen Dank, <strong className="text-foreground">{contactData.name}</strong>! Wir haben deine Angaben erhalten und melden uns innerhalb von 24 Stunden mit einer Ersteinschätzung.
                </p>
              </div>

              {/* Summary details */}
              <div className="w-full text-left bg-background/60 border border-border p-5 space-y-3 text-[length:var(--text-small)] font-body">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground font-mono">Vorhaben:</span>
                  <span className="text-foreground font-semibold">
                    {VORHABEN_OPTIONS.filter((o) => selectedVorhaben.includes(o.id)).map((o) => o.title).join(", ")}
                  </span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground font-mono">Zeitrahmen:</span>
                  <span className="text-foreground font-semibold">
                    {START_OPTIONS.find((o) => o.id === selectedStart)?.title}
                  </span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground font-mono">Budget:</span>
                  <span className="text-foreground font-semibold">
                    {BUDGET_OPTIONS.find((o) => o.id === selectedBudget)?.title}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">E-Mail:</span>
                  <span className="text-foreground font-semibold">{contactData.email}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-secondary flex items-center gap-2"
                >
                  <RefreshCw className="size-4" />
                  <span className="btn-label">Weitere Anfrage starten</span>
                </button>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
