import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "assessment", label: "Assessment" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const BrandLogo = () => (
  <div className="relative h-10 w-[148px] overflow-hidden sm:h-12 sm:w-[178px] lg:h-14 lg:w-[222px]">
    <img
      src="/logo.svg"
      alt="KeratoCare"
      className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-[46%] scale-[4.2] object-contain object-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.10)]"
    />
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.12, 0.3, 0.5, 0.75],
        rootMargin: "-35% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "scrolled glass-card py-2 shadow-lg shadow-blue-900/5" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="rounded-[28px] border border-white/50 bg-white/75 px-4 py-2 shadow-[0_16px_36px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:px-5 lg:rounded-full lg:px-6">
          <div className="flex min-h-[64px] items-center justify-between gap-3 sm:min-h-[68px] lg:min-h-[74px] lg:gap-5">
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="group flex shrink-0 items-center self-stretch rounded-2xl transition-transform duration-300 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/90 focus-visible:ring-offset-0"
              aria-label="Go to KeratoCare homepage section"
            >
              <div className="flex items-center transition-transform duration-300 group-hover:-translate-y-0.5">
                <BrandLogo />
              </div>
            </button>

            <div className="hidden min-w-0 flex-1 items-center justify-end gap-5 md:flex lg:gap-7">
              <nav className="flex min-w-0 items-center justify-end gap-4 lg:gap-6 xl:gap-7">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <div key={item.id} className="group relative">
                      <button
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={`relative py-2 text-sm ${
                          isActive
                            ? "font-semibold text-blue-600"
                            : "text-gray-700 transition-colors hover:text-blue-600"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </button>
                      {isActive ? (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#4facfe] to-[#25B4B3]" />
                      ) : (
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-[#4facfe] transition-all duration-300 group-hover:w-full" />
                      )}
                    </div>
                  );
                })}
              </nav>

              <Button
                type="button"
                onClick={() => scrollToSection("assessment")}
                className="btn-shimmer btn-medical-primary h-auto shrink-0 rounded-full px-5 py-3 text-sm font-semibold text-white"
              >
                Free Vision Assessment
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/75 bg-white/85 text-slate-700 shadow-sm transition-all duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/90 focus-visible:ring-offset-0 md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              isOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="mt-3 rounded-3xl border border-white/40 bg-white/90 px-4 py-4 backdrop-blur-xl">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700 hover:bg-sky-50 hover:text-[#173B8D]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <a
                    href="tel:+917276861131"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-semibold text-[#173B8D] shadow-sm transition-all duration-200 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/90 focus-visible:ring-offset-0"
                  >
                    <Phone className="h-4 w-4 text-[#25B4B3]" />
                    <span>Call Now</span>
                  </a>

                  <Button
                    type="button"
                    onClick={() => scrollToSection("assessment")}
                    className="btn-shimmer btn-medical-primary h-auto rounded-full px-5 py-3 text-sm font-semibold text-white"
                  >
                    Free Vision Assessment
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
