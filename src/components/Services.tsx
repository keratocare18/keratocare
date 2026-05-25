import type { SVGProps } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight, CalendarDays, CheckCircle2, Eye, ScanSearch } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
);

const serviceCards = [
  {
    id: "keratoconus-treatment",
    icon: Eye,
    badge: "MOST POPULAR",
    badgeClass: "bg-[#25B4B3]/12 text-[#0f766e] border border-[#25B4B3]/25",
    title: "Specialty Contact Lenses",
    description:
      "Scleral lenses custom-fitted for your exact cornea shape. If regular glasses or lenses stopped working for you — this is your answer.",
    keyPoints: [
      "98% of our patients achieve clear, comfortable vision",
      "Clear improvement visible from your very first fitting",
      "Adjusted anytime as your eye or prescription changes",
    ],
    whatsappFlow: "scheduleFitting" as const,
    actionLabel: "Book Your Scleral Lens Fitting",
    learnMoreTarget: "treatment-journey",
  },
  {
    id: "corneal-mapping",
    icon: ScanSearch,
    badge: "FIRST STEP",
    badgeClass: "bg-[#4facfe]/14 text-[#1d4ed8] border border-[#4facfe]/25",
    title: "Corneal Topography & Keratoconus Assessment",
    description:
      "Before we fit any lens, we map your cornea in detail. This is how we understand your keratoconus — and why our fittings are so accurate.",
    keyPoints: [
      "Detailed corneal topography scan",
      "Keratoconus grading & cone location mapping",
      "Honest explanation of your condition in simple language",
    ],
    whatsappFlow: "bookMapping" as const,
    actionLabel: "Start With a Corneal Assessment",
    learnMoreTarget: "treatment-journey",
  },
  {
    id: "scleral-monthly-plan",
    icon: CalendarDays,
    badge: "FLEXIBLE PLAN",
    badgeClass: "bg-[#22c55e]/12 text-[#166534] border border-[#22c55e]/25",
    title: "Scleral Lenses - Starting ₹3,500/Month",
    description:
      "Clear vision for both eyes — without a large upfront cost. Most patients are surprised by how accessible this is.",
    keyPoints: [
      "Both eyes covered in one plan",
      "No large one-time payment",
      "Adjust or upgrade anytime",
    ],
    whatsappFlow: "consultation" as const,
    actionLabel: "Check If This Plan Works for You",
    learnMoreTarget: "treatment-journey",
  },
] as const;

const journeySteps = [
  {
    step: "1",
    title: "Corneal Mapping & Keratoconus Assessment",
    desc: "We start by understanding your cornea — its exact shape, keratoconus stage, and how it's affecting your vision. No rush. We explain everything clearly.",
    duration: "Detailed Scan",
  },
  {
    step: "2",
    title: "Personalised Scleral & RGP Lens Selection",
    desc: "Based on your corneal map, we select and customise the exact scleral or RGP lens parameters for your eye. Every detail is matched to your cornea — not a standard size.",
    duration: "Custom Fit",
  },
  {
    step: "3",
    title: "Lens Ordered & Prepared for You",
    desc: "We fit the lens, check your vision, and make sure you are comfortable wearing it. We show you how to insert and remove it with confidence — at your own pace.",
    duration: "Comfort Training",
  },
  {
    step: "4",
    title: "Ongoing Care & Keratoconus Monitoring",
    desc: "Keratoconus changes over time. We monitor your cornea regularly, adjust your lenses when needed, and make sure your vision stays stable — year after year.",
    duration: "Long-Term Care",
  },
] as const;

const Services = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What We Do at KeratoCare
          </h2>
          <p className="mx-auto mb-14 max-w-3xl text-center text-muted-foreground">
            We don't offer everything. We offer exactly what keratoconus patients need.
            Most of our patients visited 2-3 other clinics before finding us. This is where the answers finally come.
          </p>

          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.id}
                  id={service.id}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/95 shadow-[0_16px_38px_-26px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200/70 hover:shadow-[0_26px_56px_-34px_rgba(31,78,121,0.32)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#4facfe] via-[#25B4B3] to-[#27AE60] opacity-85" />

                  <div className="flex h-full flex-col p-6 sm:p-7">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${service.badgeClass}`}>
                        {service.badge}
                      </span>
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-gradient-to-br from-white to-sky-50 text-primary shadow-[0_10px_24px_-16px_rgba(15,23,42,0.35)]">
                        <Icon className="h-7 w-7" />
                      </span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold leading-tight text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    <div className="mb-7 flex-grow">
                      <ul className="space-y-3">
                        {service.keyPoints.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-secondary" />
                            <span className="text-slate-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex flex-col gap-2.5">
                      <button
                        type="button"
                        onClick={() => openWhatsApp(service.whatsappFlow)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(37,211,102,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20c65f] hover:shadow-[0_16px_32px_rgba(37,211,102,0.24)] active:scale-[0.99]"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                        <span>{service.actionLabel}</span>
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div
            id="treatment-journey"
            className="scroll-mt-24 rounded-3xl bg-white/95 p-8 shadow-xl ring-1 ring-slate-100 md:p-10"
          >
            <h3
              id="treatment-journey-heading"
              className="scroll-mt-24 text-2xl font-bold text-center mb-12"
            >
              What Happens When You Visit Us — Step by Step
            </h3>

            <div className="relative grid gap-6 md:grid-cols-4 md:gap-5">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 z-0">
                <div className="h-full bg-gradient-to-r from-[#4facfe] via-[#25B4B3] to-[#27AE60] opacity-30 rounded-full" />
                <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#4facfe] shadow-md shadow-blue-200" />
                <span className="absolute left-1/3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#25B4B3] shadow-md shadow-cyan-200" />
                <span className="absolute left-2/3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#27AE60] shadow-md shadow-green-200" />
                <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#173B8D] shadow-md shadow-blue-200" />
              </div>

              {journeySteps.map((item) => (
                <div key={item.step} className="relative z-10">
                  <Card className="relative overflow-hidden rounded-2xl border-white/70 bg-white/90 p-6 text-center shadow-md">
                    <span className="absolute -top-4 -right-2 text-8xl font-black text-blue-50 select-none pointer-events-none z-0">
                      {item.step}
                    </span>

                    <div className="relative z-10">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-lg font-bold text-white shadow-lg">
                        {item.step}
                      </div>
                      <h4 className="mb-2 font-bold text-foreground">{item.title}</h4>
                      <p className="mb-4 text-sm text-muted-foreground">{item.desc}</p>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                        {item.duration}
                      </span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-slate-600">
              Most patients feel completely guided throughout. You'll never feel lost or rushed at KeratoCare.
            </p>

            <div className="mt-12 text-center reveal">
              <a
                href="#contact"
                className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-lg bg-gradient-to-r from-[#4facfe] to-[#25B4B3] shadow-xl shadow-blue-400/25 hover:scale-105 hover:shadow-blue-400/45 active:scale-95 transition-all duration-200"
              >
                Book Your First Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
