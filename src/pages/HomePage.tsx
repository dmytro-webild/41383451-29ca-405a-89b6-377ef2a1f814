import HeroShapeSplit from "@/components/sections/hero/HeroShapeSplit";
import ServicesGhostList from "@/components/sections/features/ServicesGhostList";
import ProcessBentoPanels from "@/components/sections/features/ProcessBentoPanels";
import GalleryWordPanels from "@/components/sections/gallery/GalleryWordPanels";
import TestimonialPortraitQuote from "@/components/sections/testimonial/TestimonialPortraitQuote";
import FaqHairlineIndex from "@/components/sections/faq/FaqHairlineIndex";
import ContactUnderlineForm from "@/components/sections/contact/ContactUnderlineForm";
import ModelStage from "@/components/kit/ModelStage";
import LoaderWordmarkHandoff from "@/components/loaders/LoaderWordmarkHandoff";

export default function HomePage() {
  return (
    <>
      <ModelStage
        shape="arcs"
        fixed={{
          sm: {
            y: 0.8,
            scale: 0.7
          },
          scroll: {
            rotate: 540,
            tilt: 14,
            scale: 0.08,
            x: 0.05
          }
        }}
        dpr={{
          lg: 1.5,
          sm: 1.25
        }}
      />

      <LoaderWordmarkHandoff
        brand="Auftrivio"
      />

      <div id="hero" data-webild-section="HeroShapeSplit" data-webild-section-id="HeroShapeSplit-1" data-section="hero" className="relative z-[45]">
        <HeroShapeSplit
          tag="01 / Digital"
          title="Dein Unternehmen verdient mehr als nur eine Webseite."
          description="Wir entwickeln High-End Websites, SEO und KI-Workflows in Regensburg für dein Wachstum."
          primaryButton={{
            text: "Digitales Projekt starten",
            href: "#contact"
          }}
          secondaryButton={{
            text: "Leistungen sehen",
            href: "#services"
          }}
          scrollLabel="Mehr entdecken"
          introDelay={1.7}
        />
      </div>

      <div id="services" data-webild-section="ServicesGhostList" data-webild-section-id="ServicesGhostList-1" data-section="services" className="relative z-[45]">
        <ServicesGhostList
          tag="02 / Leistungen"
          items={[
            {
              title: "Webdesign & Dev",
              description: "High-End Webseiten mit Fokus auf Konversion und digitale Performance."
            },
            {
              title: "SEO & Sichtbarkeit",
              description: "Regensburg-fokussierte Optimierung für maximale Auffindbarkeit bei Google."
            },
            {
              title: "KI & Automation",
              description: "Effizienz durch maßgeschneiderte KI-Workflows und smarte Prozesse."
            },
            {
              title: "CRM & Vertrieb",
              description: "Strukturiertes Lead-Management für messbar höheren Umsatz."
            },
            {
              title: "Online-Marketing",
              description: "Datengetriebene Kampagnen für gezielte Neukundengewinnung."
            },
            {
              title: "Digitale Funnels",
              description: "Durchdachte Kunden-Journeys für nachhaltiges Wachstum.",
              button: {
                text: "Jetzt anfragen",
                href: "#contact"
              }
            }
          ]}
          description="Maßgeschneiderte digitale Lösungen für maximale Sichtbarkeit und Effizienz in Regensburg."
        />
      </div>

      <div id="process" data-webild-section="ProcessBentoPanels" data-webild-section-id="ProcessBentoPanels-1" data-section="process" className="relative z-[45]">
        <ProcessBentoPanels
          tag="03 / UNSER PROZESS"
          title="In 5 Schritten zum Erfolg"
          description="Ein klarer Ablauf für deinen digitalen Vorsprung in Regensburg."
          items={[
            {
              title: "Analyse & Strategie",
              description: "Wir prüfen deinen Ist-Zustand und decken verborgene Potenziale auf."
            },
            {
              title: "Konzeption & Design",
              description: "Ein maßgeschneidertes Design, das deine Marke perfekt inszeniert."
            },
            {
              title: "Entwicklung & KI",
              description: "Saubere Codierung und smarte Prozesse für maximale Performance."
            },
            {
              title: "Launch & Wachstum",
              description: "Nachhaltige Optimierung für dauerhaft mehr Kunden und Erfolg."
            }
          ]}
        />
      </div>

      <div id="gallery" data-webild-section="GalleryWordPanels" data-webild-section-id="GalleryWordPanels-1" data-section="gallery" className="relative z-[45]" data-scene>
        <GalleryWordPanels
          label="04 / Referenzen"
          title="Projekte mit messbarem Wachstum"
          items={[
            {
              title: "Donauwerk",
              category: "Webdesign & SEO",
              description: "Neuer Markenauftritt und lokale SEO-Optimierung für maximale Neukundengewinnung in Regensburg.",
              imageSrc: "https://img.b2bpic.net/free-photo/young-smiley-businesswomen-working-with-laptop-desk_23-2148824883.jpg",
              imageAlt: "Young smiley businesswomen working with laptop at desk"
            },
            {
              title: "Autohaus",
              category: "KI & Automatik",
              description: "Automatisierte Kundenanfragen und KI-gestützte Prozessoptimierung für qualifizierte Termine.",
              imageSrc: "https://img.b2bpic.net/free-photo/research-analysis-ideas-strategy-information-concept_53876-123886.jpg",
              imageAlt: "Research Analysis Ideas Strategy Information Concept"
            },
            {
              title: "TaxConsult",
              category: "Digitale Funnels",
              description: "Skalierbares Funnel-System zur automatisierten Gewinnung qualifizierter Mandanten.",
              imageSrc: "https://img.b2bpic.net/free-photo/diverse-team-people-analyzing-data-charts-report-digital-tablet-using-online-networking-information-plan-business-project-colelagues-looking-diagrams-infographics-close-up_482257-50696.jpg",
              imageAlt: "Diverse team of people analyzing data charts report on digital tablet, using online networking information to plan business project. Colelagues looking at diagrams and infographics. Close up."
            },
            {
              title: "FinanzHub",
              category: "CRM & Vertrieb",
              description: "Nahtlose CRM-Integration und automatisierte Vertriebsprozesse für messbare Effizienz.",
              imageSrc: "https://img.b2bpic.net/free-photo/black-tea-pen-spectacles-blank-white-papers-with-clipboard-wooden-background_23-2147941840.jpg",
              imageAlt: "Black tea; pen; spectacles and blank white papers with clipboard on wooden background"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialPortraitQuote" data-webild-section-id="TestimonialPortraitQuote-1" data-section="testimonial" className="relative z-[45]">
        <TestimonialPortraitQuote
          label="Kundenstimmen"
          title="Was unsere Kunden sagen"
          items={[
            {
              quote: "Die Zusammenarbeit war professionell und die Ergebnisse übertreffen unsere Erwartungen.",
              name: "Lukas Richter",
              role: "Geschäftsführer",
              imageSrc: "https://img.b2bpic.net/free-photo/young-hispanic-businessman-smiling-happy-touching-his-glasses-city_839833-13933.jpg",
              imageAlt: "Young hispanic businessman smiling happy touching his glasses at the city."
            },
            {
              quote: "Endlich ein Partner, der versteht, worauf es digital wirklich ankommt.",
              name: "Laura Koch",
              role: "Marketingleitung",
              imageSrc: "https://img.b2bpic.net/free-photo/isolated-shot-joyful-brenette-young-cute-woman-laughs-joyfully-as-hears-funny-anecdote-from-friend_496169-2540.jpg",
              imageAlt: "Isolated shot of joyful brenette young cute woman laughs joyfully as hears funny anecdote from friend"
            },
            {
              quote: "Absolute Empfehlung für alle, die in Regensburg wachsen wollen.",
              name: "Moritz Weber",
              role: "Inhaber",
              imageSrc: "https://img.b2bpic.net/free-photo/guy-is-sitting-cafe_1157-17020.jpg",
              imageAlt: "The guy is sitting at the cafe"
            }
          ]}
        />
      </div>

      <div id="faq" data-webild-section="FaqHairlineIndex" data-webild-section-id="FaqHairlineIndex-1" data-section="faq" className="relative z-[45]">
        <FaqHairlineIndex
          tag="06 / ANTWORTEN"
          title="Fragen zum Ablauf"
          items={[
            {
              title: "Wie lange dauert die Entwicklung?",
              description: "Planung und Umsetzung dauern in der Regel 4 bis 6 Wochen, abhängig vom gewählten Umfang und den gewünschten Funktionen."
            },
            {
              title: "Bietet ihr SEO für Regensburg an?",
              description: "Ja, wir konzentrieren uns gezielt auf lokale Rankings und die digitale Sichtbarkeit deiner Marke in Regensburg und Umgebung."
            },
            {
              title: "Wann lohnt sich die Automatisierung?",
              description: "Sobald sich administrative Abläufe wiederholen, bringt eine gezielte Automatisierung deiner Prozesse direkte Zeitersparnis."
            },
            {
              title: "Wie läuft die Zusammenarbeit ab?",
              description: "Über unseren klaren Prozess analysieren wir deine Anforderungen und setzen dein digitales Projekt Schritt für Schritt um."
            },
            {
              title: "Kann ich Inhalte selbst pflegen?",
              description: "Ja, du erhältst ein intuitives CMS und ein Handover, sodass dein Team Inhalte jederzeit eigenständig anpassen kann."
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactUnderlineForm" data-webild-section-id="ContactUnderlineForm-1" data-section="contact" className="relative z-[45]">
        <ContactUnderlineForm
          title="Kostenlose Analyse anfragen"
          fields={[
            {
              name: "name",
              label: "Dein Name",
              placeholder: "Max Mustermann",
              required: true
            },
            {
              name: "email",
              label: "E-Mail-Adresse",
              type: "email",
              placeholder: "hallo@auftrivio.de",
              required: true
            },
            {
              name: "message",
              label: "Projekt-Details",
              type: "textarea",
              placeholder: "Beschreibe dein Vorhaben in wenigen Sätzen.",
              required: true
            }
          ]}
          servicesLabel="Service wählen"
          services={[
            "Webdesign",
            "SEO Optimierung",
            "KI Integration",
            "CRM Systeme",
            "Online-Marketing",
            "Digitale Funnels"
          ]}
          button={{
            text: "Analyse anfragen"
          }}
        />
      </div>
    </>
  );
}
