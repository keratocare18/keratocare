import {
  ArrowUp,
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Instagram,
  MapPin,
  Phone,
} from "lucide-react";
import { openAssessmentBooking } from "@/lib/whatsapp";

const serviceLinks = [
  {
    href: "/#keratoconus-treatment",
    label: "Keratoconus Treatment",
    title: "Explore keratoconus treatment at KeratoCare",
  },
  {
    href: "/corneal-mapping",
    label: "Corneal Mapping",
    title: "Learn about corneal mapping in Pune",
  },
  {
    href: "/glare-reduction",
    label: "Glare Reduction",
    title: "See glare reduction eye care solutions",
  },
  {
    href: "/scleral-lenses",
    label: "Scleral Lenses",
    title: "Discover scleral lenses for keratoconus",
  },
  {
    href: "/specialty-contact-lenses",
    label: "Specialty Contact Lenses",
    title: "Discover specialty contact lenses for corneal care",
  },
] as const;

const whyLinks = [
  {
    href: "/#about",
    label: "Best Eye Clinic in Pune",
    title: "Learn why KeratoCare is a leading eye clinic in Pune",
  },
  {
    href: "/#specialists",
    label: "Keratoconus Specialists",
    title: "Meet KeratoCare keratoconus specialists",
  },
  {
    href: "/#testimonials",
    label: "Patient Success Stories",
    title: "Read KeratoCare patient success stories",
  },
  {
    href: "/#services",
    label: "Advanced Corneal Care",
    title: "Explore advanced corneal care services",
  },
] as const;

const resourceLinks = [
  {
    href: "/policies#privacy-policy",
    label: "Privacy Policy",
    title: "Read KeratoCare privacy policy",
  },
  {
    href: "/policies#terms-of-service",
    label: "Terms of Service",
    title: "Read KeratoCare terms of service",
  },
  {
    href: "/policies#hipaa-notice",
    label: "HIPAA Notice",
    title: "Learn about KeratoCare HIPAA notice",
  },
  {
    href: "/policies#cookie-policy",
    label: "Cookie Policy",
    title: "Read KeratoCare cookie policy",
  },
  {
    href: "/policies#medical-disclaimer",
    label: "Medical Disclaimer",
    title: "Read the KeratoCare medical disclaimer",
  },
  {
    href: "/policies#contact-complaints",
    label: "Contact & Complaints",
    title: "View KeratoCare contact and complaints information",
  },
  {
    href: "/#contact",
    label: "Contact Us",
    title: "Contact KeratoCare in Pune",
  },
] as const;

const socialLinks = [
  {
    href: "https://www.instagram.com/kerato_care?igsh=am0xbjZoYTYwbjds",
    label: "Instagram",
    title: "Follow KeratoCare on Instagram",
    icon: Instagram,
    hoverClass:
      "hover:border-transparent hover:bg-[linear-gradient(135deg,#F58529_0%,#DD2A7B_52%,#8134AF_100%)] hover:text-white",
  },
] as const;

type FooterLinkProps = {
  href: string;
  label: string;
  title: string;
};

const FooterNavLink = ({ href, label, title }: FooterLinkProps) => (
  <a
    href={href}
    title={title}
    className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-[#173B8D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/90 focus-visible:ring-offset-0"
  >
    <ChevronRight className="h-3.5 w-3.5 text-[#25B4B3] transition-transform duration-300 group-hover:translate-x-0.5" />

    <span className="relative pb-1">
      {label}
      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
    </span>
  </a>
);

const FooterBrandLogo = () => (
  <div className="flex min-h-[72px] w-[280px] flex-col items-start justify-start overflow-visible pt-1 pb-1 sm:min-h-[80px] sm:w-[310px]">
    <img
      src="/logo.png"
      alt="KeratoCare Advanced Contact Lens Care and Support"
      className="block h-auto w-full object-contain object-left drop-shadow-[0_10px_22px_rgba(37,180,179,0.10)]"
    />
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#edf9ff_42%,#e8fdff_100%)] pb-32 pt-24 text-slate-800 md:pb-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -translate-y-[98%]"
      >
        <svg
          viewBox="0 0 1440 120"
          className="h-[92px] w-full fill-[#f7fbff]"
          preserveAspectRatio="none"
        >
          <path d="M0,64L60,69.3C120,75,240,85,360,85.3C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,172,254,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,242,254,0.18),transparent_30%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(79,172,254,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(37,180,179,0.14)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <address className="sr-only not-italic">
        KeratoCare, Pune, Maharashtra, India. Phone: +91 84328 61131.
      </address>

      <div className="container relative z-10 mx-auto px-4">
        <div className="rounded-[30px] border border-white/70 bg-[linear-gradient(135deg,rgba(79,172,254,0.94)_0%,rgba(64,191,248,0.94)_45%,rgba(0,217,231,0.92)_100%)] p-6 text-white shadow-[0_30px_80px_-36px_rgba(79,172,254,0.6)] backdrop-blur-xl sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/78">
              Book Your Appointment
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to Transform Your Vision?
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/84 sm:text-base">
              Join 500+ patients who regained clarity with KeratoCare.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openAssessmentBooking()}
            title="Book your eye assessment with KeratoCare on WhatsApp"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/65 bg-white px-6 text-sm font-semibold text-[#173B8D] shadow-lg shadow-cyan-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/55 focus-visible:ring-offset-0 lg:mt-0"
          >
            Book Assessment
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-12 rounded-[32px] border border-white/70 bg-white/66 p-6 shadow-[0_24px_60px_-30px_rgba(79,172,254,0.35)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-10 border-b border-sky-100/90 pb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="max-w-2xl pt-1 lg:pt-2">
              <FooterBrandLogo />

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-7 sm:text-base">
                KeratoCare focuses on keratoconus treatment, scleral and RGP
                lenses, irregular cornea cases and detailed corneal mapping —
                with a calm, patient-first approach to clearer, more
                comfortable vision.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:pt-2">
              <a
                href="tel:+918432861131"
                title="Call KeratoCare at +91 84328 61131"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/80 bg-white/82 px-4 py-3 text-sm text-slate-700 shadow-[0_16px_38px_-24px_rgba(79,172,254,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:text-[#173B8D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/90 focus-visible:ring-offset-0"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-[#173B8D]">
                  <Phone className="h-4 w-4" />
                </span>
                <span>+91 84328 61131</span>
              </a>

              <a
                href="https://maps.google.com/?q=Pune,Maharashtra,India"
                target="_blank"
                rel="noopener noreferrer"
                title="View KeratoCare location in Pune, Maharashtra, India"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/80 bg-white/82 px-4 py-3 text-sm text-slate-700 shadow-[0_16px_38px_-24px_rgba(79,172,254,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:text-[#173B8D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/90 focus-visible:ring-offset-0"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-[#25B4B3]">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Pune, Maharashtra, India</span>
              </a>

              <div className="inline-flex items-center gap-3 rounded-2xl border border-white/80 bg-white/82 px-4 py-3 text-sm text-slate-700 shadow-[0_16px_38px_-24px_rgba(79,172,254,0.45)] sm:col-span-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-[#173B8D]">
                  <Clock3 className="h-4 w-4" />
                </span>
                <span>Mon-Sun : 10:00 AM - 7:00 PM | By Appointment</span>
              </div>
            </div>
          </div>

          <div className="grid gap-10 py-10 sm:grid-cols-2 xl:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#173B8D]">
                Eye Care Services
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <FooterNavLink {...link} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#173B8D]">
                Why KeratoCare
              </h3>
              <ul className="space-y-3">
                {whyLinks.map((link) => (
                  <li key={link.label}>
                    <FooterNavLink {...link} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#173B8D]">
                Resources
              </h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <FooterNavLink {...link} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#173B8D]">
                  Connect
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">
                  Stay connected with KeratoCare for updates, consultation
                  support, and patient success stories.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      title={social.title}
                      aria-label={social.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/82 text-slate-600 shadow-[0_16px_38px_-24px_rgba(79,172,254,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/90 focus-visible:ring-offset-0 ${social.hoverClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 border-t border-sky-100/90 pt-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <p className="text-sm leading-6 text-slate-600">
                &copy; {currentYear} KeratoCare. All rights reserved.
                Keratoconus treatment, scleral lens fitting, corneal mapping,
                and advanced vision correction - KeratoCare, Pune, Maharashtra.
              </p>
              <p className="text-xs leading-6 text-slate-500">
                <strong>Medical Disclaimer:</strong> Information provided is
                educational. Consult our specialists for personalized eye care
                advice and vision correction options.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              title="Back to the top of the KeratoCare website"
              className="group inline-flex h-11 w-fit items-center gap-2 rounded-full border border-white/85 bg-white/90 px-4 text-sm font-semibold text-[#173B8D] shadow-[0_16px_38px_-24px_rgba(79,172,254,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/90 focus-visible:ring-offset-0"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
