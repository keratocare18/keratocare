import { useEffect, useState } from "react";
import { Calendar, ClipboardCheck, Home, Info, Mail } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const MobileNav = () => {
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(!(currentScrollY > lastScrollY && currentScrollY > 100));
      lastScrollY = currentScrollY;

      const sections = ["hero", "services", "assessment", "about", "contact"] as const;
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) {
        setActiveSection(current === "services" ? "assessment" : current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const itemClass = (id: string) =>
    `mx-0.5 flex flex-col items-center justify-center rounded-xl px-2 py-1 text-xs font-medium transition-all active:scale-95 ${
      activeSection === id
        ? "bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 rounded-xl"
        : "text-muted-foreground"
    }`;

  return (
    <nav
      role="navigation"
      aria-label="Mobile navigation"
      className={`fixed bottom-0 left-0 right-0 z-40 glass-card border-t border-white/30 shadow-2xl shadow-blue-900/10 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid h-16 grid-cols-5 gap-1 px-2 py-2">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          aria-label="Go to Home"
          className={itemClass("hero")}
        >
          <Home className="h-5 w-5" />
          <span>Home</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection("about")}
          aria-label="Go to About"
          className={itemClass("about")}
        >
          <Info className="h-5 w-5" />
          <span>About</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection("assessment")}
          aria-label="Go to Assess"
          className={itemClass("assessment")}
        >
          <ClipboardCheck className="h-5 w-5" />
          <span>Assess</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          aria-label="Go to Contact"
          className={itemClass("contact")}
        >
          <Mail className="h-5 w-5" />
          <span>Contact</span>
        </button>

        <button
          type="button"
          onClick={() => openWhatsApp("consultation")}
          aria-label="Book appointment"
          className="btn-shimmer mx-0.5 flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#25D366] to-[#25B4B3] text-white shadow-lg shadow-green-300/35 transition-all active:scale-95"
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs font-medium">Book</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
