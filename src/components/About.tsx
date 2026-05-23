import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Heart, Shield, Star, TrendingUp } from "lucide-react";
import keratoPhoto from "@/assets/kerato.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 500, label: "Happy Patients", suffix: "+", decimals: 0, delay: "reveal-delay-1" },
  { value: 6, label: "Years Experience", suffix: "+", decimals: 0, delay: "reveal-delay-2" },
  { value: 98, label: "Success Rate", suffix: "%", decimals: 0, delay: "reveal-delay-3" },
  { value: 4.9, label: "Patient Rating", suffix: "/5.0", decimals: 1, delay: "reveal-delay-4" },
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
              Leading Eye Care Clinic in Pune
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              KeratoCare is dedicated to providing premium eye care solutions
              with advanced technology and compassionate patient service.
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
                    <img
                      src={keratoPhoto}
                      alt="KeratoCare clinic"
                      className="aspect-square w-full rounded-2xl object-cover shadow-xl"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute -bottom-4 -right-4 rounded-2xl bg-secondary p-3 text-white shadow-lg">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                <div className="space-y-5 md:col-span-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">KeratoCare</h3>
                    <p className="text-muted-foreground">Premium Vision Care Clinic</p>
                    <p className="font-semibold text-primary">
                      Specializing in Keratoconus and Advanced Eye Treatment
                    </p>
                  </div>

                  <p className="leading-relaxed text-foreground">
                    KeratoCare is committed to transforming vision and improving
                    quality of life through innovative eye care solutions. With
                    over 6 years of dedicated service in advanced corneal
                    treatment and specialty contact lens fitting, we have helped
                    hundreds of patients achieve clarity and confidence in their
                    vision.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 rounded-xl bg-accent px-4 py-2">
                      <Award className="h-5 w-5 text-secondary" />
                      <span className="text-sm font-semibold">Advanced Technology</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-accent px-4 py-2">
                      <Heart className="h-5 w-5 text-secondary" />
                      <span className="text-sm font-semibold">Patient-First Care</span>
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
                      Learn More
                    </Button>
                    <Button
                      type="button"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Book Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mb-12 mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className={`reveal ${stat.delay} group relative overflow-hidden p-6 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
              >
                <TrendingUp className="absolute right-4 top-4 h-4 w-4 text-green-500" />
                <div className="relative z-10">
                  <div className="mb-2 flex items-center justify-center gap-1 text-3xl font-bold text-secondary">
                    {inView && (
                      <CountUp
                        end={stat.value}
                        decimals={stat.decimals}
                        duration={reducedMotion ? 0 : 2.5}
                      />
                    )}
                    <span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
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
