import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavbarMenuPill from "@/components/navbars/NavbarMenuPill";
import FooterWordmarkLanding from "@/components/sections/footer/FooterWordmarkLanding";
import DatenschutzModal from "@/components/sections/privacy/DatenschutzModal";
import ImpressumModal from "@/components/sections/privacy/ImpressumModal";

export default function Layout() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const privacyTarget = (e.target as HTMLElement)?.closest('a[href="#datenschutz"], a[href="#privacy"], a[href*="datenschutz"]');
      if (privacyTarget) {
        e.preventDefault();
        setIsPrivacyOpen(true);
        return;
      }
      const impressumTarget = (e.target as HTMLElement)?.closest('a[href="#impressum"], a[href*="impressum"]');
      if (impressumTarget) {
        e.preventDefault();
        setIsImpressumOpen(true);
        return;
      }
    };
    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="filled" data-pattern="none">
      <DatenschutzModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <ImpressumModal isOpen={isImpressumOpen} onClose={() => setIsImpressumOpen(false)} />

      <header data-webild-section="Header">
        <NavbarMenuPill
          brand="Auftrivio"
          navItems={[
            {
              name: "Leistungen",
              href: "#services"
            },
            {
              name: "Prozess",
              href: "#process"
            },
            {
              name: "Projekte",
              href: "#gallery"
            },
            {
              name: "Über uns",
              href: "#about"
            },
            {
              name: "Kontakt",
              href: "#contact"
            }
          ]}
          contact={{
            text: "Digitales Projekt starten",
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="filled" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer" className="relative z-[45]">
        <FooterWordmarkLanding
          brand="Auftrivio"
          links={[
            {
              text: "Leistungen",
              href: "#services"
            },
            {
              text: "Ablauf",
              href: "#process"
            },
            {
              text: "Über AUFTRIVIO",
              href: "#about"
            },
            {
              text: "Kundenstimmen",
              href: "#testimonial"
            },
            {
              text: "Impressum",
              href: "#impressum"
            },
            {
              text: "Datenschutz",
              href: "#datenschutz"
            }
          ]}
          tagline="High-End Digitalagentur in Regensburg für Webdesign, SEO & KI-Automatisierung."
          copyright="© 2026 AUFTRIVIO Digital Agency. Alle Rechte vorbehalten."
        />
      </footer>
    </div>
  );
}
