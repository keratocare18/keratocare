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
      className="relative min-h-[100svh] overflow-hidden bg-gradient-hero-new pt-[var(--kc-hero-offset)] text-white"
    >
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="blob blob-animate left-[-96px] top-[-72px] h-[320px] w-[320px] bg-blue-400 sm:h-[420px] sm:w-[420px]" />
      <div
        className="blob blob-animate bottom-[-48px] right-[-72px] h-[280px] w-[280px] bg-cyan-400 sm:h-[360px] sm:w-[360px]"
        style={{ animationDelay: "4s" }}
      />

      <div className="container relative z-10 flex min-h-[calc(100svh-var(--kc-hero-offset))] items-center px-4 py-4 sm:py-5 md:py-6 lg:py-7">
        <div className="grid w-full items-center gap-7 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-8 xl:gap-12">
          <div className="order-1 mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-[44rem] lg:text-left xl:max-w-[48rem]">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="hero-text-box max-w-[720px]">
                <h1 className="hero-heading">
                  <span className="hero-heading-line hero-heading-line-nowrap">
                    Keratoconus Doesn't
                  </span>
                  <span className="hero-heading-line">Have to Mean</span>
                  <span className="hero-heading-line">
                    <span className="hero-blur-text">Blurry Vision</span>
                  </span>
                  <span className="hero-heading-line">Forever.</span>
                </h1>
                <p className="hero-sub">You Can See the World Clearly Again.</p>
              </div>

              <div className="grid max-w-[360px] gap-3 mx-auto sm:max-w-none sm:grid-cols-2 lg:mx-0">
                <div className="glass-card flex items-center gap-3 rounded-2xl border-l-4 border-l-[#4facfe] px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-5">
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

                <div className="glass-card flex items-center gap-3 rounded-2xl border-l-4 border-l-[#25B4B3] px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-5">
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

              <div className="mx-auto flex max-w-[360px] flex-col gap-3 pt-0.5 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:mx-0 lg:justify-start">
                <Button
                  type="button"
                  onClick={() => openAssessmentBooking()}
                  className="btn-shimmer btn-medical-primary group h-auto w-full rounded-full px-6 py-3.5 text-[15px] font-bold text-white sm:w-auto sm:px-7"
                >
                  Book Free Assessment
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="h-auto w-full rounded-full border-2 border-white/60 px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_40px_-24px_rgba(1,42,74,0.45)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto sm:px-7"
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
            <div className="relative w-full max-w-[360px] overflow-hidden rounded-[28px] ring-1 ring-white/20 shadow-2xl shadow-blue-900/20 transition-transform duration-500 hover:scale-[1.02] sm:max-w-[420px] lg:max-w-[500px] xl:max-w-[540px] transform-gpu will-change-transform">
              <div className="glass-card absolute left-5 top-5 z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-blue-700">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Born To Treat Keratoconus
              </div>

              {/* PERF: Explicit image dimensions reserve space up front, which avoids layout shift during the hero paint. */}
              <img
                src={heroImage}
                alt="Close-up eye care imagery representing KeratoCare vision treatment"
                width={736}
                height={1308}
                className="h-[260px] w-full object-cover object-center sm:h-[300px] lg:h-[340px] xl:h-[390px]"
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
