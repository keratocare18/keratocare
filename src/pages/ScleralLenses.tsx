import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import MobileNav from "@/components/MobileNav";
import FloatingButtons from "@/components/FloatingButtons";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Eye, RefreshCw, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ScleralLenses = () => {
  useEffect(() => {
    document.title = "Custom Scleral Lenses | KeratoCare Pune";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Experience clear, comfortable vision with custom scleral lenses for keratoconus at KeratoCare Pune. Perfect vault design to bypass irregular corneas.",
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
            <ShieldCheck className="h-4 w-4 text-teal-300" />
            <span className="text-xs font-semibold tracking-wide">
              Advanced Vision Care
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Custom Scleral Lenses
          </h1>
          <p className="mb-6 text-lg text-white/80 max-w-2xl mx-auto">
            Custom-designed lenses that provide clear, comfortable vision for keratoconus patients.
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
                  What are Scleral Lenses?
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  Scleral lenses are large-diameter, rigid gas-permeable (GP) contact lenses designed specifically to treat keratoconus and other irregular corneal conditions. Unlike standard contact lenses that sit directly on the highly sensitive cornea, a scleral lens arches completely over the cornea and rests gently on the sclera—the white, less-sensitive part of the eye.
                </p>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  By "vaulting" over the irregular cornea, the lens creates a small chamber that is filled with a sterile, preservative-free saline solution prior to insertion. This liquid reservoir cushions the lens, constantly hydrates the eye, and neutralizes corneal distortions, acting as a new, perfectly smooth optical surface that restores clear vision.
                </p>
              </section>

              {/* Section 2: Benefits */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-teal-600" />
                  Benefits of Scleral Lenses
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-600 mb-4">
                  Scleral lenses offer distinct visual and physical advantages over traditional lenses:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Unmatched Comfort: Resting on the sclera avoids contact with sensitive corneal nerves.",
                    "Exceptional Clarity: Corrects irregular astigmatism, double vision, and distortions.",
                    "Dry Eye Relief: The saline reservoir continuously moisturizes the cornea all day long.",
                    "Superb Fit Stability: Large diameter keeps lenses centered, preventing them from popping out.",
                    "Debris Protection: Dust and wind particles cannot get trapped underneath the vaulted lens.",
                    "Long-Term Durability: Premium GP materials last longer than disposable soft lenses."
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
                  <RefreshCw className="h-6 w-6 text-emerald-600" />
                  Who is a Candidate for Scleral Lenses?
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  Scleral lenses are the preferred correction method for:
                </p>
                <ul className="space-y-3 pl-1">
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Keratoconus Patients:</strong> Individuals with moderate-to-severe bulging who can no longer get clear vision with glasses.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Severe Dry Eye Syndrome:</strong> Patients seeking a therapeutic moisture chamber to protect the corneal surface.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Corneal Transplant Patients:</strong> Restoring uniform refractive power after transplant surgeries.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Irregular Corneas:</strong> Caused by physical trauma, INTACS implants, or past laser surgical complications.</span>
                  </li>
                </ul>
              </section>

              {/* Section 4: The Process */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  Fitting Process & Steps
                </h2>
                <div className="relative border-l border-blue-100 ml-3 pl-6 space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Initial Mapping & Evaluation",
                      desc: "We perform high-resolution corneal topography to understand your eye's shape and determine appropriate lens parameters."
                    },
                    {
                      step: "2",
                      title: "Diagnostic Fitting",
                      desc: "We place a diagnostic trial scleral lens on your eye to measure the vault height and inspect alignment with the sclera."
                    },
                    {
                      step: "3",
                      title: "Custom Order & Manufacture",
                      desc: "We customize parameters like vault height, landing zone angles, and optical prescription, then submit the details for specialized manufacturing."
                    },
                    {
                      step: "4",
                      title: "Training, Delivery & Verification",
                      desc: "We guide you through the insertion, removal, and cleaning processes. After verification and subsequent checkups, you leave with comfortable, sharp vision."
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
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">Are scleral lenses comfortable to wear?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      Yes, they are generally much more comfortable than standard hard contact lenses. Because they rest on the sclera, which contains very few pain-sensing nerves, and float over the highly sensitive cornea on a cushion of sterile saline, most patients describe them as feeling like soft lenses.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">How long do scleral lenses last?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      With proper cleaning and handling, a pair of scleral lenses typically lasts 1 to 2 years. They are made from durable, premium materials that resist scratching and deposit buildup compared to soft lenses.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">How many hours a day can I wear scleral lenses?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      Most patients can wear their scleral lenses comfortably for 10 to 14 hours a day. Some patients with severe dry eyes may need to remove, refresh with fresh saline, and reinsert their lenses midway through the day.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">Is it difficult to insert and remove scleral lenses?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      Inserting and removing scleral lenses does require some practice since they are larger than standard lenses. We use small, specialized suction plungers to make the process simple. During your fitting session, our clinical team will work with you patiently until you are completely confident in handling them at home.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

            </div>

            {/* Right Column - Side Banner Info */}
            <div className="lg:col-span-4">
              <aside className="sticky top-28 space-y-6">
                <Card className="p-6 border-slate-100 bg-gradient-to-br from-blue-50/50 to-teal-50/50">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Custom-Fit Comfort</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Unlike mass-manufactured contact lenses, scleral lenses are entirely custom-crafted based on your topographic corneal measurements. They offer the optical clarity of a rigid lens coupled with the comfortable, irritation-free wear of a soft lens.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>Bypasses corneal contact</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>Built-in moisturizing saline chamber</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>Stable centering & custom optics</span>
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

export default ScleralLenses;
