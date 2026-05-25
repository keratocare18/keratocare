import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Heart, Shield, ShieldCheck, Star, TrendingUp, Users, Eye } from "lucide-react";
import keratoPhoto from "@/assets/kerato.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 500, label: "Keratoconus & irregular cornea patients", suffix: "+", decimals: 0, delay: "reveal-delay-1" },
  { value: "Trusted for complex cases", label: "Difficult fits & second opinions welcomed", delay: "reveal-delay-2" },
  { value: 98, label: "Achieve clear, comfortable vision", suffix: "%", decimals: 0, delay: "reveal-delay-3" },
  { value: "4.9 / 5.0", label: "Patient rating", delay: "reveal-delay-4" },
] as const;

const testimonials = [
  {
    name: "Priya M.",
    location: "Pune, 28",
    text: "My vision went from completely blurry and distorted to crisp and clear. The team at KeratoCare explained everything and made me feel confident about the lenses. It changed my life.",
    before: "-8.50 (severe keratoconus)",
    after: "20/25 vision (corrected)",
    lens: "Scleral",
  },
  {
    name: "Amit K.",
    location: "Pune, 35",
    text: "I was told I'd never see clearly again. KeratoCare proved them wrong. The custom lenses are comfortable and my vision is better than it has been in years.",
    before: "Could not drive at night",
    after: "Clear night vision",
    lens: "Hybrid",
  },
  {
    name: "Sneha R.",
    location: "Pune, 24",
    text: "Professional, knowledgeable, and caring. The entire process was smooth and the results exceeded my expectations. Highly recommend KeratoCare.",
    before: "Struggled with reading",
    after: "Reading without strain",
    lens: "Mini Scleral",
  },
] as const;

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    try {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mq.matches);
    } catch {
      // Ignore unsupported environments.
    }
  }, []);

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Keratoconus & Speciality Lens Clinic in Pune
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We take time to understand your eyes, explain your options clearly,
              and guide you through every step of keratoconus care.
            </p>
          </div>

          <div className="reveal reveal-delay-2">
            <Card
              id="specialists"
              className="scroll-mt-24 relative overflow-hidden rounded-3xl border-white/60 p-8 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-radial from-blue-100/60 to-transparent rounded-3xl blur-2xl scale-110 pointer-events-none" />

              <div className="relative z-10 grid items-center gap-8 md:grid-cols-3">
                <div className="md:col-span-1">
                  <div className="relative group">
                    {/* PERF: Lazy loading plus explicit dimensions keeps this below-the-fold image from blocking paint or shifting content. */}
                    <div className="overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src={keratoPhoto}
                        alt="KeratoCare clinic"
                        width={736}
                        height={672}
                        className="block h-auto w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 rounded-2xl bg-secondary p-3 text-white shadow-lg">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                <div className="space-y-5 md:col-span-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">KeratoCare</h3>
                    <p className="text-muted-foreground">Keratoconus & Specialty Lens Clinic</p>
                    <p className="font-semibold text-primary">
                      Specialising in keratoconus, scleral lenses & irregular cornea cases
                    </p>
                  </div>

                  <p className="leading-relaxed text-foreground">
                    KeratoCare is dedicated to helping keratoconus and
                    difficult-to-fit patients see clearly and live confidently.
                    We focus on corneal mapping, scleral and RGP lens fitting,
                    and complex cornea cases. Many patients come to us after
                    trying other clinics. Here, every question gets a clear
                    answer.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 rounded-xl bg-accent px-4 py-2">
                      <Award className="h-5 w-5 text-secondary" />
                      <span className="text-sm font-semibold">Detailed corneal mapping</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-accent px-4 py-2">
                      <Heart className="h-5 w-5 text-secondary" />
                      <span className="text-sm font-semibold">No-rush, patient-first visits</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Learn More About KeratoCare
                    </Button>
                    <Button
                      type="button"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Book Keratoconus Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mb-12 mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className={`reveal ${stat.delay} group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/85 px-4 py-5 text-center shadow-[0_14px_34px_-26px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-6 sm:py-7`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50/70 via-white to-cyan-50/50 opacity-80" />
                <div className="relative z-10 flex min-h-[154px] flex-col items-center justify-center gap-2.5 sm:min-h-[180px] sm:gap-3">
                  {stat.label === "Difficult fits & second opinions welcomed" ? (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25B4B3]/15 text-[#25B4B3] ring-1 ring-[#25B4B3]/10 sm:h-14 sm:w-14">
                      <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                  ) : stat.label === "Keratoconus & irregular cornea patients" ? (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4facfe]/15 text-[#4facfe] ring-1 ring-[#4facfe]/10 sm:h-14 sm:w-14">
                      <Users className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                  ) : stat.label === "Achieve clear, comfortable vision" ? (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25B4B3]/15 text-[#25B4B3] ring-1 ring-[#25B4B3]/10 sm:h-14 sm:w-14">
                      <Eye className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                  ) : null}

                  {typeof stat.value === "number" ? (
                    <div className="flex items-end justify-center gap-1 text-2xl font-black tracking-[-0.04em] text-secondary sm:text-4xl">
                      {inView && (
                        <CountUp
                          end={stat.value}
                          decimals={stat.decimals ?? 0}
                          duration={reducedMotion ? 0 : 2.5}
                        />
                      )}
                      <span className="text-xl font-black sm:text-3xl">{stat.suffix}</span>
                    </div>
                  ) : (
                    <div className="max-w-[18ch] text-balance text-base font-black leading-tight text-secondary sm:text-xl">
                      {stat.value}
                    </div>
                  )}

                  <div className="max-w-[18ch] text-balance text-sm leading-snug text-muted-foreground sm:text-[15px]">
                    {stat.label}
                  </div>

                  {stat.label === "Patient rating" ? (
                    <div className="flex flex-col items-center gap-2 pt-1">
                      <div className="flex items-center justify-center gap-1.5 text-amber-400 sm:gap-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-5 w-5 fill-current sm:h-6 sm:w-6" />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 bg-gradient-to-r from-primary to-secondary" />
              </Card>
            ))}
          </div>

          <div id="testimonials" className="scroll-mt-24 mb-12">
            <h3 className="mb-8 text-center text-2xl font-bold">
              Patient Success Stories
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="relative overflow-hidden p-6"
                >
                  <span className="absolute top-2 left-3 text-7xl font-serif text-blue-100 leading-none select-none pointer-events-none">
                    "
                  </span>

                  <div className="relative z-10">
                    <div className="mb-3 flex gap-0.5">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <p className="mb-4 text-sm italic text-foreground">
                      {testimonial.text}
                    </p>

                    <div className="space-y-2 border-t pt-4 text-sm">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                        <span className="ml-1 font-normal text-muted-foreground">
                          | {testimonial.location}
                        </span>
                      </div>
                      <div className="text-muted-foreground">
                        Before: {testimonial.before}
                      </div>
                      <div className="flex items-center gap-1 font-semibold text-secondary">
                        <TrendingUp className="h-3 w-3 text-green-500" />
                        After: {testimonial.after}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Lens Type: {testimonial.lens}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
