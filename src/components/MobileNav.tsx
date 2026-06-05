import { memo, useEffect, useState } from "react";
import { Calendar, ClipboardCheck, Home, Info, Mail } from "lucide-react";
import { openAssessmentBooking } from "@/lib/whatsapp";

const observableSections = ["hero", "services", "assessment", "about", "contact"] as const;

const MobileNav = memo(() => {
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frameId = 0;

    // PERF: This nav is driven by scroll, so rAF keeps visibility updates at
    // one paint-synced state change per frame instead of many event callbacks.
    const updateVisibility = () => {
      frameId = 0;
      const currentScrollY = window.scrollY;
      const nextVisible = !(currentScrollY > lastScrollY && currentScrollY > 100);
      setVisible((previous) => (previous === nextVisible ? previous : nextVisible));
      lastScrollY = currentScrollY;
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    const sections = observableSections
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return undefined;
    }

    // PERF: IntersectionObserver replaces per-scroll getBoundingClientRect()
    // checks, so active-state updates happen without layout reads in the hot path.
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const nextSection = visibleEntries[0]?.target.id;
        if (!nextSection) {
          return;
        }

        const mappedSection = nextSection === "services" ? "assessment" : nextSection;
        setActiveSection((previous) => (previous === mappedSection ? previous : mappedSection));
      },
      {
        threshold: [0.18, 0.36, 0.55, 0.72],
        rootMargin: "-35% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
      className={`fixed bottom-0 left-0 right-0 z-40 glass-card border-t border-white/30 shadow-2xl shadow-blue-900/10 transition-transform duration-300 transform-gpu will-change-transform md:hidden ${
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

        {/* Mobile: assessment section removed from page; point this item to Services instead to avoid broken links */}
        <button
          type="button"
          onClick={() => scrollToSection("services")}
          aria-label="Go to Services"
          className={itemClass("services")}
        >
          <ClipboardCheck className="h-5 w-5" />
          <span>Services</span>
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
          onClick={() => openAssessmentBooking()}
          aria-label="Book appointment"
          className="btn-shimmer mx-0.5 flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#25D366] to-[#25B4B3] text-white shadow-lg shadow-green-300/35 transition-all active:scale-95"
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs font-medium">Book</span>
        </button>
      </div>
    </nav>
  );
});

MobileNav.displayName = "MobileNav";

export default MobileNav;
