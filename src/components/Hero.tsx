import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Phone, Users } from "lucide-react";
import heroImage from "@/assets/hero-eye.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { openAssessmentBooking } from "@/lib/whatsapp";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    try {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mq.matches);

      const handler = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
      if (mq.addEventListener) {
        mq.addEventListener("change", handler);
      } else {
        mq.addListener(handler);
      }

      return () => {
        if (mq.removeEventListener) {
          mq.removeEventListener("change", handler);
        } else {
          mq.removeListener(handler);
        }
      };
    } catch {
      return undefined;
    }
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="hero-section relative min-h-[90svh] overflow-hidden bg-gradient-hero-new pt-[var(--kc-hero-offset)] text-[#081B4B]"
      style={{
        background:
          "linear-gradient(135deg, #dfeefc 0%, #c9e7fa 35%, #b7e4f8 70%, #bff1ea 100%)",
      }}
    >
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-[0.15]" />
      <div
        className="blob blob-animate left-[-96px] top-[-72px] h-[240px] w-[240px] bg-blue-300 sm:h-[320px] sm:w-[320px]"
        style={{ opacity: 0.18, filter: "blur(90px)" }}
      />
      <div
        className="blob blob-animate bottom-[-48px] right-[-72px] h-[220px] w-[220px] bg-teal-300 sm:h-[300px] sm:w-[300px]"
        style={{ animationDelay: "4s", opacity: 0.18, filter: "blur(90px)" }}
      />

      <div className="hero-content-wrap container relative z-10 flex min-h-[calc(90svh-var(--kc-hero-offset))] items-center px-4 py-1 sm:py-2 md:py-2 lg:py-3">
        <div className="grid w-full items-center gap-5 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-6 xl:gap-8">
          <div className="order-1 mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-[44rem] lg:text-left xl:max-w-[48rem]">
            <div className="space-y-3 sm:space-y-4 lg:space-y-4">
              <div className="hero-text-box max-w-[720px]">
                <h1 className="flex max-w-[680px] flex-col leading-[0.92] tracking-tight text-balance">
                  <br></br>
                                    <br></br>


                  <span
                    className={`reveal hero-top-label text-[22px] font-bold tracking-[0.35em] text-[#0B3D91] ${inView ? "visible reveal-delay-1" : ""}`}
                    style={{ transitionDuration: "0.35s" }}
                  >
                    LIVING WITH KERATOCONUS?
                  </span>
                  
                  <div
                    className="hero-top-underline mx-auto lg:mx-0 h-[3px] w-[90px]"
                    style={{ background: "linear-gradient(90deg, #2563EB, #25B4B3)" }}
                  />
                  <span
                    className={`reveal hero-headline-line-sm mt-1 block text-[38px] font-semibold leading-[1.12] text-[#081B4B] sm:text-[44px] md:text-[56px] lg:text-[66px] xl:text-[70px] ${inView ? "visible reveal-delay-2" : ""}`}
                    style={{ transitionDuration: "0.4s" }}
                  >
                    You Don't Have to Struggle
                  </span>
                  <span
                    className={`reveal hero-headline-line-sm hero-emphasis-gradient mt-1 block text-[38px] font-semibold leading-[1.12] bg-[linear-gradient(90deg,#2563EB_0%,#1E88E5_35%,#14B8A6_100%)] bg-clip-text text-transparent sm:text-[44px] md:text-[56px] lg:text-[66px] xl:text-[70px] ${inView ? "visible reveal-delay-3" : ""}`}
                    style={{ transitionDuration: "0.4s" }}
                  >
                    With Blurry Vision
                  </span>
                  <span
                    className={`reveal hero-headline-line-sm mt-1 block text-[38px] font-semibold leading-[0.9] text-[#081B4B] sm:text-[44px] md:text-[56px] lg:text-[66px] xl:text-[70px] ${inView ? "visible reveal-delay-4" : ""}`}
                    style={{ transitionDuration: "0.4s" }}
                  >
                    Anymore.
                  </span>

                </h1>
                <div
                  className={`reveal hero-sub-wrapper mt-2.5 lg:mx-0 mx-auto ${inView ? "visible" : ""}`}
                  style={{ transitionDuration: "0.4s", transitionDelay: "0.5s" }}
                >
                  
                  <div
                    className="hero-sub-accent h-[54px] w-[3px]"
                    style={{ background: "linear-gradient(180deg, #2563EB, #25B4B3)" }}
                  />
                  
                  <p className="hero-sub-text text-[22px] font-medium leading-[1.45] text-[#475569]">
                    Clearer vision starts with the right <span className="hero-sub-highlight">keratoconus treatment</span>.
                  </p>
                </div>
              </div>

              <div className="grid max-w-[360px] gap-2.5 mx-auto sm:max-w-none sm:grid-cols-2 lg:mx-0">
                <div className="hero-stat-card glass-card flex items-center gap-3 rounded-2xl border-l-4 border-l-[#4facfe] px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4facfe]/15 text-[#4facfe] sm:h-11 sm:w-11">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-extrabold text-[#012A4A] sm:text-2xl">
                      {inView && (
                        <CountUp end={500} duration={reducedMotion ? 0 : 2.2} separator="," />
                      )}
                      +
                    </div>
                    <div className="text-sm font-medium leading-snug text-slate-600">Happy Patients</div>
                  </div>
                </div>

                <div className="hero-stat-card glass-card flex items-center gap-3 rounded-2xl border-l-4 border-l-[#25B4B3] px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25B4B3]/15 text-[#25B4B3] sm:h-11 sm:w-11">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-extrabold text-[#012A4A] sm:text-2xl">
                      {inView && <CountUp end={98} duration={reducedMotion ? 0 : 2.2} />}%
                    </div>
                    <div className="text-sm font-medium leading-snug text-slate-600">Success Rate</div>
                  </div>
                </div>
              </div>

              <div className="mx-auto flex max-w-[360px] flex-col gap-2.5 pt-0 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:mx-0 lg:justify-start">
                <Button
                  type="button"
                  onClick={() => openAssessmentBooking()}
                  className="hero-primary-cta btn-shimmer btn-medical-primary group h-auto w-full rounded-full px-6 py-3.5 text-[15px] font-bold text-white sm:w-auto sm:px-7"
                >
                  Book Your First Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="hero-secondary-cta h-auto w-full rounded-full border-2 px-6 py-3.5 text-[15px] font-semibold backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 sm:w-auto sm:px-7"
                >
                  <a href="tel:+918432861131">
                    <Phone className="w-4 h-4 animate-pulse" />
                    Call Now
                  </a>
                </Button>
                
              </div>

           
            </div>
          </div>

          <div className="order-2 flex justify-center lg:justify-end">
            <div className="hero-image-shell relative w-full max-w-[360px] overflow-hidden rounded-[28px] transition-transform duration-500 hover:scale-[1.02] sm:max-w-[420px] lg:max-w-[500px] xl:max-w-[540px] transform-gpu will-change-transform">
             

              {/* PERF: Explicit image dimensions reserve space up front, which avoids layout shift during the hero paint. */}
              <img
                src={heroImage}
                alt="Close-up eye care imagery representing KeratoCare vision treatment"
                width={736}
                height={1308}
                className="hero-image h-[240px] w-full object-cover object-center sm:h-[280px] lg:h-[320px] xl:h-[362px]"
                decoding="async"
                fetchPriority="high"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-[#012A4A]/18 via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
