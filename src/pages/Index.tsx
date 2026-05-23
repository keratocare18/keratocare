import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VisionSlider from "@/components/VisionSlider";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      if (bar) {
        bar.style.width = `${Math.min(pct, 100)}%`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div id="scroll-progress" />
      <main>
        <div className="reveal">
          <Hero />
        </div>
        <div className="reveal reveal-delay-1">
          <VisionSlider />
        </div>
        <div className="reveal">
          <Services />
        </div>
        <div className="reveal reveal-delay-1">
          <About />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <div className="reveal reveal-delay-1">
        <Footer />
      </div>
      <MobileNav />
      <FloatingButtons />
    </div>
  );
};

export default Index;
