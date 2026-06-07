import { useEffect, useState } from "react";
import {
  AlertCircle,
  Clock3,
  FileText,
  Layers,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const sections = [
  "privacy-policy",
  "medical-disclaimer",
  "terms-of-service",
  "cookie-policy",
  "hipaa-notice",
  "contact-complaints",
] as const;

const Policies = () => {
  const [activeSection, setActiveSection] = useState("privacy-policy");

  useEffect(() => {
    document.title = "Policies & Disclaimers | KeratoCare Pune";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Read KeratoCare's Privacy Policy, Medical Disclaimer, Terms of Service, HIPAA Notice, and Cookie Policy. Transparent healthcare in Pune.",
      );
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) {
      return undefined;
    }

    let firstFrameId = 0;
    let secondFrameId = 0;

    // PERF: A double rAF waits for the route/layout paint without a fixed timer,
    // so hash scrolling stays responsive across fast and slow devices alike.
    firstFrameId = window.requestAnimationFrame(() => {
      secondFrameId = window.requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      });
    });

    return () => {
      if (firstFrameId) {
        window.cancelAnimationFrame(firstFrameId);
      }
      if (secondFrameId) {
        window.cancelAnimationFrame(secondFrameId);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />

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
            <span className="text-xs font-semibold tracking-wide">
              Legal & Compliance
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Policies & Disclaimers
          </h1>
          <p className="mb-6 text-lg text-white/80">
            Transparency in every aspect of your care
          </p>
          <div className="inline-block rounded-lg border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <p className="text-sm text-white/70">Last updated: May 20, 2026</p>
          </div>
        </div>
      </div>

      <div className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="gap-12 lg:grid lg:grid-cols-[220px_1fr]">
            <aside className="hidden lg:block">
              <nav className="sticky top-24 space-y-2 rounded-lg bg-gradient-to-b from-gray-50 to-transparent p-4">
                {[
                  { id: "privacy-policy", label: "Privacy Policy" },
                  { id: "medical-disclaimer", label: "Medical Disclaimer" },
                  { id: "terms-of-service", label: "Terms of Service" },
                  { id: "cookie-policy", label: "Cookie Policy" },
                  { id: "hipaa-notice", label: "HIPAA Notice" },
                  { id: "contact-complaints", label: "Contact & Complaints" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full rounded-md py-2 px-3 text-left transition-all duration-300 ${
                      activeSection === item.id
                        ? "border-l-2 border-blue-500 bg-blue-50 pl-3 font-semibold text-blue-600"
                        : "pl-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>

            <main className="max-w-3xl">
              <section id="privacy-policy" className="mb-12 scroll-mt-24">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Privacy Policy
                  </h2>
                </div>
                <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Information We Collect
                    </h3>
                    <p>
                      KeratoCare collects personal information you voluntarily
                      provide when booking appointments or submitting contact
                      forms, including your name, email address, phone number,
                      and details about your eye condition. We may also collect
                      non-personally identifiable usage data to improve our
                      website experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      How We Use Your Information
                    </h3>
                    <p>Your information is used solely to:</p>
                    <ul className="mt-2 list-inside list-disc space-y-1">
                      <li>
                        Respond to your inquiries and schedule consultations
                      </li>
                      <li>
                        Send appointment reminders and follow-up care
                        information
                      </li>
                      <li>Improve our services and website functionality</li>
                      <li>
                        Comply with applicable legal and medical obligations
                      </li>
                    </ul>
                    <p className="mt-2">
                      We do not sell, rent, or trade your personal information
                      to any third party for commercial purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      WhatsApp Communication
                    </h3>
                    <p>
                      When you submit our contact form, you may be redirected to
                      WhatsApp to continue your conversation with our care team.
                      By initiating this communication, you consent to receiving
                      messages via WhatsApp from KeratoCare regarding your
                      inquiry and appointment.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Data Storage & Security
                    </h3>
                    <p>
                      Contact form submissions are temporarily stored locally on
                      your device to facilitate our admin review process and
                      may also be sent to our Google Sheets lead log for
                      internal tracking. We implement reasonable technical
                      safeguards to protect your information. However, no
                      method of electronic transmission or storage is 100%
                      secure.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Third-Party Services
                    </h3>
                    <p>
                      Our website uses Google Maps for location display and
                      Google Sheets via a Google Apps Script web app for contact
                      form storage. Google&apos;s privacy policy governs any data
                      collected through those services. We are not responsible
                      for the privacy practices of third-party platforms.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Analytics & Website Usage Monitoring
                    </h3>
                    <p>
                      KeratoCare uses Microsoft Clarity to better understand how
                      visitors interact with the website. Microsoft Clarity may
                      collect information such as:
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1">
                      <li>Pages visited</li>
                      <li>Clicks and taps</li>
                      <li>Scroll behavior</li>
                      <li>Device and browser information</li>
                      <li>General interaction patterns</li>
                      <li>Anonymous session recordings</li>
                      <li>Heatmap data</li>
                    </ul>
                    <p className="mt-2">
                      The purpose is website improvement, usability analysis,
                      performance optimization, and service enhancement. The
                      clinic does not use this information to identify individual
                      visitors. No medical records, diagnosis information,
                      treatment information, or sensitive health information is
                      intentionally collected through Microsoft Clarity. Data
                      collected is limited to website interaction and analytics
                      purposes.
                    </p>
                    <p className="mt-2">
                      By continuing to use this website, users acknowledge that
                      anonymized website interaction data may be collected for
                      analytics and service improvement purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Your Rights
                    </h3>
                    <p>
                      You have the right to access, correct, or request deletion
                      of your personal information. To exercise these rights,
                      contact us at keratocare.contact@gmail.com or call +91
                      84328 61131.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-10 border-gray-100" />

              <section id="medical-disclaimer" className="mb-12 scroll-mt-24">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Medical Disclaimer
                  </h2>
                </div>
                <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Educational Purpose Only
                    </h3>
                    <p>
                      The content published on this website - including
                      descriptions of keratoconus, corneal conditions, specialty
                      contact lenses, and treatment approaches - is provided for
                      general informational and educational purposes only. It is
                      not intended as, and does not constitute, professional
                      medical advice, diagnosis, or treatment.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Consult a Qualified Specialist
                    </h3>
                    <p>
                      Always seek the advice of a qualified eye care
                      professional or ophthalmologist regarding any questions
                      you may have about a medical condition, symptoms, or
                      treatment options. Never disregard or delay seeking
                      professional medical advice based on information you have
                      read on this website.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Individual Results May Vary
                    </h3>
                    <p>
                      Testimonials, before/after images, and outcome
                      descriptions featured on this website represent individual
                      patient experiences. Results are not guaranteed and may
                      vary significantly depending on the nature and severity of
                      your condition, your overall eye health, and your
                      adherence to prescribed care protocols.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      No Doctor-Patient Relationship
                    </h3>
                    <p>
                      Submitting a contact form, initiating a WhatsApp
                      conversation, or interacting with this website does not
                      create a doctor-patient relationship. A formal
                      relationship is established only upon an in-person
                      consultation with a KeratoCare specialist.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Emergency Situations
                    </h3>
                    <p>
                      If you are experiencing a sudden change in vision, severe
                      eye pain, or any other ocular emergency, do not rely on
                      this website. Seek immediate emergency medical care.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Website Analytics Tools
                    </h3>
                    <p>
                      Analytics tools used on the website are intended solely for
                      website performance monitoring and user experience
                      improvement. These tools are not used for medical diagnosis,
                      treatment decisions, clinical evaluation, or collection of
                      patient medical records.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-10 border-gray-100" />

              <section id="terms-of-service" className="mb-12 scroll-mt-24">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Terms of Service
                  </h2>
                </div>
                <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Acceptance of Terms
                    </h3>
                    <p>
                      By accessing or using the KeratoCare website, you agree to
                      be bound by these Terms of Service. If you do not agree,
                      please discontinue use of the website immediately.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Use of Website
                    </h3>
                    <p>
                      This website is intended for lawful, personal, and
                      non-commercial use only. You may not:
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1">
                      <li>
                        Copy, reproduce, or distribute website content without
                        written permission
                      </li>
                      <li>
                        Use automated tools to scrape, crawl, or extract data
                        from the site
                      </li>
                      <li>
                        Attempt to gain unauthorized access to any part of the
                        website
                      </li>
                      <li>
                        Use the website for any unlawful or fraudulent purpose
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Intellectual Property
                    </h3>
                    <p>
                      All content on this website, including text, images,
                      logos, graphics, and service descriptions, is the property
                      of KeratoCare and is protected by applicable copyright and
                      trademark laws. Unauthorized use is strictly prohibited.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Appointment Policy
                    </h3>
                    <p>
                      Appointments booked through our website or WhatsApp are
                      subject to availability. We reserve the right to
                      reschedule or cancel appointments due to unforeseen
                      circumstances. We request at least 24 hours notice for
                      cancellations.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Limitation of Liability
                    </h3>
                    <p>
                      KeratoCare shall not be liable for any indirect,
                      incidental, or consequential damages arising from your use
                      of this website or reliance on its content. Our total
                      liability for any claim arising from use of this website
                      shall not exceed the consultation fee paid, if any.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Website Analytics
                    </h3>
                    <p>
                      This website uses analytics tools, including Microsoft
                      Clarity, to understand how visitors interact with website
                      content and improve overall website performance. Users
                      acknowledge that anonymous interaction information may be
                      collected while using the website.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Changes to Terms
                    </h3>
                    <p>
                      We reserve the right to update these Terms at any time.
                      Continued use of the website following any changes
                      constitutes your acceptance of the revised Terms.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-10 border-gray-100" />

              <section id="cookie-policy" className="mb-12 scroll-mt-24">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Cookie Policy
                  </h2>
                </div>
                <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      What Are Cookies
                    </h3>
                    <p>
                      Cookies are small text files stored on your device when
                      you visit a website. They help websites remember your
                      preferences and improve your browsing experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Cookies We Use
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <strong className="text-gray-900">
                          Functional cookies:
                        </strong>{" "}
                        Required for core website functionality such as form
                        state and navigation preferences
                      </li>
                      <li>
                        <strong className="text-gray-900">
                          Analytics cookies:
                        </strong>{" "}
                        The website may use analytics technologies including
                        Microsoft Clarity to understand visitor behavior, improve
                        user experience, identify usability issues, and optimize
                        website performance. These tools may use cookies or similar
                        technologies to function properly.
                      </li>
                      <li>
                        <strong className="text-gray-900">
                          Third-party cookies:
                        </strong>{" "}
                        Google Maps embeds may place cookies governed by
                        Google&apos;s cookie policy
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Managing Cookies
                    </h3>
                    <p>
                      You can control and delete cookies through your browser
                      settings. Disabling certain cookies may affect the
                      functionality of the website. Most browsers allow you to
                      refuse cookies or alert you when cookies are being sent.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-10 border-gray-100" />

              <section id="hipaa-notice" className="mb-12 scroll-mt-24">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <Lock className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    HIPAA Notice
                  </h2>
                </div>
                <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Important Notice Regarding Health Information
                    </h3>
                    <p>
                      KeratoCare is an eye care clinic based in Pune, India. We
                      operate under applicable Indian healthcare privacy
                      regulations. While we reference HIPAA (Health Insurance
                      Portability and Accountability Act) as a global standard
                      for healthcare data protection, please note that HIPAA is
                      a United States federal law and may not directly apply to
                      our operations.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Our Commitment to Health Data Privacy
                    </h3>
                    <p>Regardless of jurisdiction, KeratoCare is committed to:</p>
                    <ul className="mt-2 list-inside list-disc space-y-1">
                      <li>
                        Collecting only the health information necessary to
                        provide care
                      </li>
                      <li>
                        Using health information exclusively for treatment and
                        clinic administration purposes
                      </li>
                      <li>
                        Not disclosing your health information to third parties
                        without your explicit consent, except as required by law
                      </li>
                      <li>
                        Implementing reasonable safeguards to protect your
                        health data
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Health Information in Contact Forms
                    </h3>
                    <p>
                      Any health-related information you share in our contact
                      form (such as your eye condition) is used only to route
                      your inquiry to the appropriate specialist and prepare for
                      your consultation.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-10 border-gray-100" />

              <section id="contact-complaints" className="mb-12 scroll-mt-24">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Contact & Complaints
                  </h2>
                </div>
                <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Questions About These Policies
                    </h3>
                    <p className="mb-4">
                      If you have questions about any of our policies or how we
                      handle your information, please contact us:
                    </p>

                    <div className="rounded-xl border border-blue-100/50 bg-gradient-to-br from-blue-50 to-teal-50 p-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="rounded-full bg-white p-2 text-[#173B8D] shadow-sm">
                            <MapPin className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="font-semibold text-gray-900">
                              Address
                            </p>
                            <p className="text-sm text-gray-600">
                              KeratoCare Eye Clinic, Pune, Maharashtra, India
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="rounded-full bg-white p-2 text-[#173B8D] shadow-sm">
                            <Phone className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="font-semibold text-gray-900">Phone</p>
                            <a
                              href="tel:+918432861131"
                              className="text-sm text-blue-600 hover:underline"
                            >
                              +91 84328 61131
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="rounded-full bg-white p-2 text-[#173B8D] shadow-sm">
                            <Mail className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="font-semibold text-gray-900">Email</p>
                            <a
                              href="mailto:keratocare.contact@gmail.com"
                              className="text-sm text-blue-600 hover:underline"
                            >
                              keratocare.contact@gmail.com
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="rounded-full bg-white p-2 text-[#173B8D] shadow-sm">
                            <Clock3 className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="font-semibold text-gray-900">Hours</p>
                            <p className="text-sm text-gray-600">
                              Monday to Saturday: 10:00 AM - 7:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      Filing a Complaint
                    </h3>
                    <p>
                      If you believe your privacy rights have been violated or
                      you have a complaint regarding our services, please
                      contact us directly. We aim to respond to all complaints
                      within 5 business days. If you are unsatisfied with our
                      response, you may escalate to the relevant regulatory
                      authority in your jurisdiction.
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#012A4A] to-[#25B4B3] px-4 py-12">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h3 className="mb-2 text-xl font-bold">
            Have a question about your care?
          </h3>
          <p className="mb-6 text-sm text-white/80">
            Our team is available Mon-Sat, 10:00 AM - 7:00 PM
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+918432861131"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-blue-900 transition-transform hover:scale-105"
            >
              Call Us
            </a>
            <a
              href="/"
              className="rounded-full border border-white/40 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Policies;
