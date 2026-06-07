import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import MobileNav from "@/components/MobileNav";
import FloatingButtons from "@/components/FloatingButtons";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Eye, Sun, Sparkles, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GlareReduction = () => {
  useEffect(() => {
    document.title = "Glare Reduction & Night Vision Solutions | KeratoCare Pune";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Tired of halos, starbursts, and glare due to keratoconus? Explore specialty lenses and optical coatings at KeratoCare Pune to restore clear night vision.",
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-[#081B4B]">
      <Header />

      {/* Hero Section */}
      <div
        className="relative w-full overflow-hidden bg-gradient-to-r from-[#012A4A] to-[#25B4B3] pt-[calc(var(--kc-hero-offset)+4rem)] pb-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(79,172,254,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#012A4A] to-[#25B4B3]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-500/20 px-3 py-1">
            <Sun className="h-4 w-4 text-amber-300" />
            <span className="text-xs font-semibold tracking-wide">
              Visual Comfort
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Glare & Halo Reduction
          </h1>
          <p className="mb-6 text-lg text-white/80 max-w-2xl mx-auto">
            Specialized optical designs to minimize halo effects, starbursts, and light sensitivity.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Left Column - Main Details */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Section 1: What is it */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                  What Causes Glare and Halos?
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  Patients with keratoconus and irregular corneas suffer from a type of vision distortion known as "higher-order aberrations" (HOAs). In a normal eye, the cornea is spherical, letting light pass through evenly to focus on a single spot on the retina. However, a cone-shaped cornea bends and scatters light in multiple directions.
                </p>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  This scattering leads to distinct visual artifacts: glare (streaks of light spreading from a source), halos (rings of light around streetlights or headlights), and starbursts. These symptoms are especially severe in low-light environments, where your pupil dilates and allows more light to pass through the irregular edges of the corneal cone.
                </p>
              </section>

              {/* Section 2: Benefits */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <Eye className="h-6 w-6 text-teal-600" />
                  Benefits of Glare Reduction Lenses
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-600 mb-4">
                  By creating a smooth, uniform refracting surface over your irregular cornea, custom contact lenses effectively neutralize light scatter.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Night Driving Confidence: Eliminates blinding halos around oncoming headlights.",
                    "Improved Contrast: Sharpens details in dark or low-contrast situations.",
                    "Comfortable Screen Use: Reduces glare and double vision when reading text on screens.",
                    "Reduced Eye Strain: Relieves squinting, tension headaches, and fatigue.",
                    "Stable Vision: Provides constant correction that doesn't fluctuate with blinking.",
                    "Personalized Filters: Available with tint options for outdoor light sensitivity."
                  ].map((benefit, i) => {
                    const [title, desc] = benefit.split(": ");
                    return (
                      <Card key={i} className="p-4 border-slate-100 hover:shadow-md transition-shadow">
                        <div className="flex gap-2.5">
                          <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
                            <p className="text-xs text-slate-500 mt-1">{desc}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </section>

              {/* Section 3: Who Needs It */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <Sun className="h-6 w-6 text-amber-500" />
                  Who Needs Glare Reduction Solutions?
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  Visual glare therapy and specialized lenses are highly recommended for:
                </p>
                <ul className="space-y-3 pl-1">
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Night Drivers:</strong> Commuters who feel unsafe driving after sunset due to headlight glare.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Office Professionals:</strong> Individuals experiencing severe fatigue and dry eyes from long screen exposure.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Post-LASIK/Surgery Patients:</strong> Patients experiencing side effects like chronic glare or ghosting after laser procedures.</span>
                  </li>
                </ul>
              </section>

              {/* Section 4: The Process */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  How We Solve Glare Issues
                </h2>
                <div className="relative border-l border-blue-100 ml-3 pl-6 space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Ocular Aberration Assessment",
                      desc: "We perform diagnostic scans to isolate the exact optical pathways causing light scattering in your vision."
                    },
                    {
                      step: "2",
                      title: "Custom Scleral Fitting",
                      desc: "By resting on the sclera and placing a soothing fluid reservoir over the irregular cornea, scleral lenses physically replace the uneven surface with a perfectly smooth optical layer."
                    },
                    {
                      step: "3",
                      title: "Wavefront Optimization",
                      desc: "For advanced cases, we design wavefront-guided modifications to offset specific visual distortions."
                    },
                    {
                      step: "4",
                      title: "Testing & Refinement",
                      desc: "We test your visual comfort in a variety of lighting conditions, ensuring you enjoy clear, crisp sight without debilitating halos."
                    }
                  ].map((proc, index) => (
                    <div key={index} className="relative">
                      <span className="absolute -left-9 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-md">
                        {proc.step}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm">{proc.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{proc.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: FAQs */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-purple-600" />
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">Why are my halos worse at night?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      In low light, your pupils dilate (expand) to let in more light. This allows light to pass through the peripheral, highly irregular parts of your cone-shaped cornea, causing more severe light scattering and larger halos.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">Can normal eyeglasses reduce keratoconus glare?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      Standard eyeglasses can only correct simple refractive errors like near-sightedness and regular astigmatism. They cannot correct the complex, irregular light scattering caused by a bulging cornea. Custom specialty lenses are required to create a smooth surface and stop the scattering.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">Do scleral lenses cure glare immediately?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      Yes. As soon as you insert a properly aligned scleral lens, the saline fluid reservoir fills the gaps over your irregular cornea, creating a uniform optical surface. Most patients report an immediate and dramatic reduction in double images, glare, and starbursts during their first trial fitting.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

            </div>

            {/* Right Column - Side Banner Info */}
            <div className="lg:col-span-4">
              <aside className="sticky top-28 space-y-6">
                <Card className="p-6 border-slate-100 bg-gradient-to-br from-blue-50/50 to-teal-50/50">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Restore Clarity</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Do not let glare isolate you from night activities or cause screen fatigue. Our customizable scleral lens fittings are specifically mapped to neutralize higher-order aberrations, returning comfortable vision to your daily life.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>Comfortable night driving</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>Minimizes computer eye strain</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>Resolves ghosting & double vision</span>
                    </li>
                  </ul>
                </Card>
              </aside>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <Contact />

      <Footer />
      <MobileNav />
      <FloatingButtons />
    </div>
  );
};

export default GlareReduction;
