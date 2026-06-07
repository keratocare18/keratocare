import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import MobileNav from "@/components/MobileNav";
import FloatingButtons from "@/components/FloatingButtons";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ScanSearch, ShieldAlert, Zap, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CornealMapping = () => {
  useEffect(() => {
    document.title = "Corneal Mapping & Topography | KeratoCare Pune";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Experience advanced corneal topography and mapping in Pune. Precise diagnosis and monitoring for keratoconus to help fit custom scleral lenses.",
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
            <ScanSearch className="h-4 w-4 text-teal-300" />
            <span className="text-xs font-semibold tracking-wide">
              Diagnostic Excellence
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Corneal Mapping & Topography
          </h1>
          <p className="mb-6 text-lg text-white/80 max-w-2xl mx-auto">
            Advanced corneal imaging for accurate keratoconus diagnosis and monitoring.
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
                  <ScanSearch className="h-6 w-6 text-blue-600" />
                  What is Corneal Mapping?
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  Corneal mapping, also known as corneal topography, is a state-of-the-art non-invasive medical imaging technique. It produces a detailed three-dimensional map of the surface curvature of the cornea—the clear outer window of your eye. Just as a topographic map shows the hills and valleys of a landscape, a corneal topography scan projects thousands of light rings onto the eye's surface to detect microscopic irregularities.
                </p>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  For individuals with keratoconus, the cornea slowly thins and bulges outwards into a cone-like shape. Standard eye exams can easily miss the early stages of this thinning. A corneal map provides our specialists with the exact shape, slope, elevation, and progression points of your cornea, which is essential to designing custom-fit specialty contact lenses.
                </p>
              </section>

              {/* Section 2: Benefits */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-amber-500" />
                  Benefits of Corneal Topography
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-600 mb-4">
                  Detailed corneal imaging is the gold standard for irregular corneal care. Key benefits include:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Early Detection: Spots keratoconus progression years before standard vision checkups.",
                    "Microscopic Precision: Maps shape variations down to the micron level.",
                    "Custom Fitting: Vital for designing scleral and rigid gas permeable (RGP) contact lenses.",
                    "Stability Tracking: Compares scans over time to see if cross-linking (C3R) is needed.",
                    "Painless & Safe: Takes less than a minute per eye without any physical contact.",
                    "Comprehensive: Analyzes anterior and posterior corneal profiles."
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
                  <ShieldAlert className="h-6 w-6 text-red-500" />
                  Who Needs Corneal Mapping?
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  This diagnostic scan is essential for patients in several specific categories:
                </p>
                <ul className="space-y-3 pl-1">
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Keratoconus Suspects:</strong> Anyone experiencing progressive astigmatism or frequent prescription changes.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Lens Candidates:</strong> Essential for mapping parameters when custom-designing scleral lenses.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>Post-Surgery Patients:</strong> Patients monitoring cornea stability after C3R (cross-linking), INTACS, or corneal transplants.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span><strong>High Astigmatism:</strong> Patients whose vision cannot be fully corrected with regular eyeglasses.</span>
                  </li>
                </ul>
              </section>

              {/* Section 4: The Process */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  The Diagnostic Process
                </h2>
                <div className="relative border-l border-blue-100 ml-3 pl-6 space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Patient Alignment",
                      desc: "You sit comfortably in front of the topography machine and rest your chin and forehead against a stable support frame."
                    },
                    {
                      step: "2",
                      title: "Light Ring Projection",
                      desc: "The system projects a series of concentric illuminated rings (Placido discs) onto your cornea surface."
                    },
                    {
                      step: "3",
                      title: "Rapid Scanning",
                      desc: "You blink and focus on a small central target. The camera captures thousands of data points within 2 to 3 seconds. The process is completely painless and non-contact."
                    },
                    {
                      step: "4",
                      title: "3D Map Generation & Expert Explanation",
                      desc: "Our specialists generate color-coded topographic maps. We sit down with you to explain the results in clear, patient-friendly language."
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
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">Is corneal mapping painful?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      No, not at all. The scan is completely non-contact, which means nothing touches your eye. There are no injections, eye drops, or radiation. It is simply a specialized light mapping camera.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">How long does the mapping session take?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      The actual scan takes only about 2 to 3 seconds per eye. The entire session—including setting up the system, capturing multiple scans for accuracy, and explaining your maps—takes around 15 to 20 minutes.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">How often do I need a corneal map?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      If your keratoconus is stable or if you are getting fitted for lenses, a scan is typically performed at least once a year. If we are active in monitoring progression or planning cross-linking surgery, scans may be scheduled every 3 to 6 months.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="text-sm font-semibold text-slate-800">Should I remove my contact lenses before the scan?</AccordionTrigger>
                    <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                      Yes, contact lenses temporarily change the shape of your cornea. For the most accurate diagnostic baseline, you must remove soft contact lenses at least 24-48 hours before, and rigid (RGP/scleral) lenses at least 48-72 hours before the scan, or as advised by our specialists.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

            </div>

            {/* Right Column - Side Banner Info */}
            <div className="lg:col-span-4">
              <aside className="sticky top-28 space-y-6">
                <Card className="p-6 border-slate-100 bg-gradient-to-br from-blue-50/50 to-teal-50/50">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Diagnostic Equipment</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    At KeratoCare, we utilize advanced computerized topography mapping to design our specialty scleral contact lenses. By matching your custom lens parameters to the exact microscopic elevation profile of your cornea, we achieve a stable fit and clear vision.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>Elevation-based analysis</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>Early cone bulge detection</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>Custom-fit data output</span>
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

export default CornealMapping;
