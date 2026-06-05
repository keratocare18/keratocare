import { lazy, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import FloatingButtons from "@/components/FloatingButtons";
import LazySection from "@/components/LazySection";

const VisionSlider = lazy(() => import("@/components/VisionSlider"));
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const scrollProgressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bar = scrollProgressRef.current;
    if (!bar) {
      return undefined;
    }

    let maxScroll = 1;
    let frameId = 0;
    let resizeTimer = 0;

    const updateMaxScroll = () => {
      const { body, documentElement } = document;
      maxScroll = Math.max(body.scrollHeight, documentElement.scrollHeight) - window.innerHeight;
    };

    const paintProgress = () => {
      frameId = 0;
      const pct = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      bar.style.transform = `scaleX(${pct})`;
    };

    // PERF: rAF keeps scroll writes aligned to the browser's paint cycle, and
    // ResizeObserver + debounced resize prevent repeated sync layout work.
    const requestPaint = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(paintProgress);
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        updateMaxScroll();
        requestPaint();
      }, 150);
    };

    const sizeObserver = new ResizeObserver(() => {
      updateMaxScroll();
      requestPaint();
    });

    sizeObserver.observe(document.documentElement);
    sizeObserver.observe(document.body);
    updateMaxScroll();
    requestPaint();

    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      sizeObserver.disconnect();
      window.removeEventListener("scroll", requestPaint);
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(resizeTimer);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const observed = new WeakSet<Element>();

    const observeRevealElement = (element: Element) => {
      if (observed.has(element) || element.classList.contains("visible")) {
        return;
      }

      observed.add(element);
      obs.observe(element);
    };

    const observeRevealTree = (root: ParentNode) => {
      root.querySelectorAll(".reveal").forEach(observeRevealElement);
    };

    // PERF: Lazy-loaded sections mount after the first paint, so a one-time
    // query can miss their reveal nodes and leave them hidden at opacity 0.
    // MutationObserver lets the reveal system observe newly inserted sections.
    observeRevealTree(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) {
            return;
          }

          if (node.matches(".reveal")) {
            observeRevealElement(node);
          }

          observeRevealTree(node);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      obs.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div id="scroll-progress" ref={scrollProgressRef} />
      <main>
        <div className="reveal">
          <Hero />
        </div>
        <LazySection
          component={VisionSlider}
          className="reveal reveal-delay-1"
          placeholderHeight={760}
        />
        <LazySection
          component={Services}
          className="reveal"
          placeholderHeight={980}
        />
        {/* Assessment section removed per request */}
        <LazySection
          component={About}
          className="reveal reveal-delay-1"
          placeholderHeight={1050}
        />
        <LazySection
          component={Contact}
          className="reveal"
          placeholderHeight={1180}
        />
      </main>
      <LazySection
        component={Footer}
        className="reveal reveal-delay-1"
        placeholderHeight={860}
      />
      <MobileNav />
      <FloatingButtons />
    </div>
  );
};

export default Index;
