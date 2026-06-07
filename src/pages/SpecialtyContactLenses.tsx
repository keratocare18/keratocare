import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import MobileNav from "@/components/MobileNav";
import FloatingButtons from "@/components/FloatingButtons";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Eye, ShieldAlert, Award, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SpecialtyContactLenses = () => {
  useEffect(() => {
    document.title = "Specialty Contact Lenses | KeratoCare Pune";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Explore specialty contact lenses for keratoconus at KeratoCare Pune. Discover custom rigid gas permeable (RGP), hybrid, and piggyback contact lenses.",
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
            <Award className="h-4 w-4 text-teal-300" />
            <span className="text-xs font-semibold tracking-wide">
              Specialized Fittings
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Specialty Contact Lenses
          </h1>
          <p className="mb-6 text-lg text-white/80 max-w-2xl mx-auto">
            Custom-designed contact lenses tailored for irregular corneas, high astigmatism, and keratoconus.
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
                  <Eye className="h-6 w-6 text-blue-600" />
                  What are Specialty Contact Lenses?
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  Specialty contact lenses are custom-crafted ocular devices designed for eyes that cannot be properly corrected using standard soft contact lenses or regular eyeglasses. They are typically used when the cornea is irregular, scarred, or has distorted curvature due to conditions like keratoconus.
                </p>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  Unlike traditional disposable lenses, specialty lenses are manufactured using state-of-the-art oxygen-permeable materials and are engineered specifically to match the physical dimensions of your unique eye. They correct severe astigmatism and higher-order aberrations, focusing light precisely onto the retina.
                </p>
              </section>

              {/* Section 2: Modalities */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <Award className="h-6 w-6 text-teal-600" />
                  Types of Specialty Lenses We Fit
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  Every eye is different. We evaluate your cornea to determine which of these specialty options will yield the best visual outcomes and physical comfort:
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card className="p-5 border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-900 mb-2">Rigid Gas Permeable (RGP) Lenses</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Smaller, durable lenses that float on the natural tear layer over the cornea. They offer exceptionally sharp vision, excellent durability, and allow high levels of oxygen to reach the eye's surface.
                    </p>
                  </Card>
                  <Card className="p-5 border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-900 mb-2">Hybrid Contact Lenses</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      These lenses feature a rigid gas-permeable center for crystal-clear visual clarity, surrounded by a soft outer skirt. This provides the crisp vision of an RGP lens with the immediate comfort of a soft lens.
                    </p>
                  </Card>
                  <Card className="p-5 border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-900 mb-2">Piggyback Lens Systems</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A fitting method where a rigid RGP lens is placed directly on top of a soft contact lens worn on the eye. The soft lens acts as a protective shield and comfortable cushion, while the rigid lens corrects visual errors.
                    </p>
                  </Card>
                  <Card className="p-5 border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-900 mb-2">Custom Soft Contact Lenses</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Specially manufactured soft lenses with thicker profiles and custom curvatures designed to drape over early-stage irregular corneas without causing discomfort.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Section 3: Who Needs It */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <ShieldAlert className="h-6 w-6 text-red-500" />
                  Who Needs Specialty Lenses?
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  These custom-fit options are highly beneficial for:
                </p>
                <ul className="space-y-3 pl-1">
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Early to Advanced Keratoconus:</strong> Providing stable vision where normal soft lenses fail.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Pellucid Marginal Degeneration (PMD):</strong> Correcting severe thinning in the lower cornea.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Corneal Scarring:</strong> Bypassing visual distortions caused by physical corneal trauma or infection scars.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Extreme Refractive Errors:</strong> Very high astigmatism or severe nearsightedness/farsightedness.</span>
                  </li>
                </ul>
              </section>

              {/* Section 4: The Process */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  Our Custom Fitting Process
                </h2>
                <div className="relative border-l border-blue-100 ml-3 pl-6 space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Ocular Health & Scan Evaluation",
                      desc: "We perform digital mapping scans to evaluate corneal thickness, astigmatism axes, and health baselines."
                    },
                    {
                      step: "2",
                      title: "Diagnostic Modality Selection",
                      desc: "We evaluate different lens styles (RGP, hybrid, or scleral) on your eye to see which material and design provides the best visual comfort."
                    },
                    {
                      step: "3",
                      title: "Precision Design & Manufacture",
                      desc: "We customize lens dimensions and optical curves down to the decimal point and send the specifications to a premium manufacturer."
                    },
                    {
                      step: "4",
                      title: "Delivery, Insertion Training & Checks",
                      desc: "We verify the fit on-eye, teach you how to insert, remove, and disinfect the lenses, and schedule follow-ups to ensure your corneas remain healthy."
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
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">What is the difference between RGP and hybrid lenses?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      Rigid Gas Permeable (RGP) lenses are made entirely of a rigid, oxygen-permeable plastic. Hybrid lenses have an RGP center for sharp vision, but have an outer skirt made of a soft hydrogel or silicone hydrogel material. This soft skirt helps center the lens and makes it feel as comfortable as a soft lens from day one.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">Can I sleep in my specialty contact lenses?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      No. Unless specifically prescribed for overnight orthokeratology, specialty lenses must be removed, cleaned, and disinfected every night before you go to sleep. Sleeping in lenses increases the risk of corneal infections and deprives the eyes of oxygen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">How long does it take to get used to specialty lenses?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      It varies by lens type. Hybrid and custom soft lenses are usually comfortable right away. RGP (hard) lenses require an adaptation period where you slowly increase wear time over 1 to 2 weeks while your eyelids adjust to the lens edge.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

            </div>

            {/* Right Column - Side Banner Info */}
            <div className="lg:col-span-4">
              <aside className="sticky top-28 space-y-6">
                <Card className="p-6 border-slate-100 bg-gradient-to-br from-blue-50/50 to-teal-50/50">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Tailored Options</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    There is no single "best" lens for keratoconus. By offering hybrid, piggyback, RGP, and custom soft options, our clinical team works patiently to find the precise balance of visual acuity and comfort that suits your lifestyle.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>Multiple lens modalities</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>Optimal oxygen permeability</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>Custom-manufactured curves</span>
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

export default SpecialtyContactLenses;
