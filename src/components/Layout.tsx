import { Outlet } from "react-router-dom";
import NavbarMenuPill from "@/components/navbars/NavbarMenuPill";
import FooterWordmarkLanding from "@/components/sections/footer/FooterWordmarkLanding";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="filled" data-pattern="none">
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
              name: "Erfahrungen",
              href: "#testimonial"
            },
            {
              name: "Kontakt",
              href: "#contact"
            }
          ]}
          contact={{
            text: "hallo@auftrivio.de",
            href: "mailto:hallo@auftrivio.de"
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
              text: "Kundenstimmen",
              href: "#testimonial"
            },
            {
              text: "Impressum",
              href: "#"
            },
            {
              text: "Datenschutz",
              href: "#"
            }
          ]}
          tagline="High-End Digitalagentur in Regensburg für Webdesign, SEO & KI-Automatisierung."
          copyright="© 2026 Auftrivio Digital Agency. Alle Rechte vorbehalten."
        />
      </footer>
    </div>
  );
}
