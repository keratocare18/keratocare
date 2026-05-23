import type { SVGProps } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, CheckCircle2, Eye, Search } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
);

const serviceCards = [
  {
    id: "keratoconus-treatment",
    extraAnchors: ["scleral-lenses", "contact-lenses"],
    icon: Eye,
    badge: "MOST POPULAR",
    badgeColor: "bg-secondary text-white",
    title: "Specialty Contact Lenses",
    description:
      "Custom engineered contact lenses designed specifically for keratoconus and corneal irregularities with advanced vision correction.",
    keyPoints: [
      "98% success rate in vision improvement",
      "Results visible within 24-48 hours",
      "Reversible and adjustable lens design",
    ],
    accentClass: "from-[#4facfe] to-[#00d9e7]",
    whatsappFlow: "scheduleFitting" as const,
    actionLabel: "Schedule Fitting",
  },
  {
    id: "corneal-mapping",
    icon: Search,
    badge: "AI-POWERED",
    badgeColor: "bg-primary text-white",
    title: "Advanced Corneal Mapping",
    description:
      "Precision 3D corneal mapping using AI technology to understand corneal shape and design optimal eye treatment.",
    keyPoints: [
      "High-resolution 3D corneal imaging",
      "AI-optimized lens parameter design",
      "Real-time vision assessment monitoring",
    ],
    accentClass: "from-[#25B4B3] to-[#27AE60]",
    whatsappFlow: "bookMapping" as const,
    actionLabel: "Book Mapping",
  },
  {
    id: "glare-reduction",
    icon: Activity,
    badge: "INNOVATIVE",
    badgeColor: "bg-orange text-white",
    title: "Glare & Light Sensitivity Therapy",
    description:
      "Comprehensive treatment programs to reduce glare, manage light sensitivity, and maximize vision improvement.",
    keyPoints: [
      "Glare reduction treatment protocols",
      "Light sensitivity management",
      "Enhanced daily vision performance",
    ],
    accentClass: "from-[#173B8D] to-[#4facfe]",
    whatsappFlow: "startProgram" as const,
    actionLabel: "Start Program",
  },
] as const;

const journeySteps = [
  {
    step: "1",
    title: "Vision Assessment",
    desc: "Comprehensive eye exam and advanced corneal mapping analysis.",
    duration: "1-2 hours",
  },
  {
    step: "2",
    title: "Custom Lens Design",
    desc: "AI-powered specialty contact lens design for your corneal shape.",
    duration: "3-5 business days",
  },
  {
    step: "3",
    title: "Professional Fitting",
    desc: "Expert lens fitting with vision correction training and refinement.",
    duration: "1-2 hours",
  },
  {
    step: "4",
    title: "Ongoing Eye Health",
    desc: "Monitoring, adjustments, and comprehensive follow-up care.",
    duration: "Ongoing",
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
            Advanced Eye Care Solutions
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            KeratoCare offers premium keratoconus treatment and advanced eye
            health services tailored to your specific vision needs.
          </p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-16">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              const isFeatured = service.id === "keratoconus-treatment";

              return (
                <Card
                  key={service.id}
                  id={service.id}
                  className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border transform-gpu transition-all [transition-duration:350ms] [transition-timing-function:ease] will-change-transform ${
                    isFeatured
                      ? "border-sky-100/80 bg-gradient-to-br from-[#4facfe]/20 via-white to-[#27AE60]/18 shadow-[0_14px_34px_rgba(79,172,254,0.14)] hover:-translate-y-1.5 hover:scale-[1.005] hover:shadow-[0_24px_48px_rgba(31,78,121,0.16)]"
                      : "border-slate-200/80 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.08)] hover:-translate-y-2 hover:scale-[1.01] hover:border-[rgba(34,197,94,0.25)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 transform-gpu bg-gradient-to-r from-[#22c55e] to-[#06b6d4] transition-transform [transition-duration:350ms] [transition-timing-function:ease] group-hover:scale-x-100"
                  />

                  {service.extraAnchors?.map((anchorId) => (
                    <span
                      key={anchorId}
                      id={anchorId}
                      aria-hidden="true"
                      className="absolute -top-24 h-0 w-0"
                    />
                  ))}

                  <div className="p-6 flex h-full flex-col">
                    <div className="mb-4 text-center">
                      <div className="relative mb-4 inline-flex">
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-full border shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all [transition-duration:350ms] [transition-timing-function:ease] group-hover:scale-[1.04] group-hover:shadow-[0_18px_36px_rgba(34,197,94,0.16)] ${
                            isFeatured
                              ? "border-white/70 bg-gradient-to-br from-white/95 via-[#f1f9ff] to-[#edfdf4]"
                              : "border-slate-100 bg-gradient-to-br from-white via-slate-50 to-emerald-50"
                          }`}
                        >
                          <Icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-105" />
                        </div>
                        <span className={`absolute -right-1 -top-1 rounded-full px-2 py-1 text-[10px] font-bold ${service.badgeColor} shadow-sm`}>
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-6 flex-grow">
                      <ul className="space-y-2.5">
                        {service.keyPoints.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex flex-col gap-3">
                      <button
                        type="button"
                        onClick={() => openWhatsApp(service.whatsappFlow)}
                        className="flex w-full transform-gpu items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-semibold text-white shadow-[0_10px_24px_rgba(37,211,102,0.18)] transition-all duration-300 [transition-timing-function:ease] group-hover:bg-[#2ad968] group-hover:shadow-[0_16px_32px_rgba(37,211,102,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(37,211,102,0.28)] active:scale-[0.98]"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                        <span>{service.actionLabel}</span>
                      </button>

                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => scrollToSection("contact")}
                        className="w-full rounded-xl border-slate-200 py-3 text-sm font-semibold"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div
            id="assessment"
            className="scroll-mt-24 rounded-3xl bg-white/95 p-8 shadow-xl ring-1 ring-slate-100 md:p-10"
          >
            <h3
              id="vision-assessment"
              className="scroll-mt-24 text-2xl font-bold text-center mb-12"
            >
              Your Eye Care Treatment Journey
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

            <div className="mt-12 text-center reveal">
              <a
                href="#contact"
                className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-lg bg-gradient-to-r from-[#4facfe] to-[#25B4B3] shadow-xl shadow-blue-400/25 hover:scale-105 hover:shadow-blue-400/45 active:scale-95 transition-all duration-200"
              >
                Start Your Journey Today
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
