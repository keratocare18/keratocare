import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { toast } from "sonner";
import { createWhatsAppUrl, openWhatsApp } from "@/lib/whatsapp";
import {
  ContactFormData,
  storeMessageSilently,
} from "@/lib/admin-storage";
import { submitContactToGoogleSheets } from "@/lib/google-sheets";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
    message: "",
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      condition: "",
      message: "",
      agreed: false,
    });
  };

  const validateForm = (): string | null => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const condition = formData.condition.trim();
    const message = formData.message.trim();
    const phoneDigits = phone.replace(/\D/g, "");

    if (!name) return "Please enter your full name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
    if (phoneDigits.length < 10 || phoneDigits.length > 15) return "Please enter a valid phone number.";
    if (!condition) return "Please select your condition.";
    if (!message) return "Please add a message.";
    if (!formData.agreed) return "Please agree to the privacy policy.";

    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setIsSubmitting(true);

    const contactData: ContactFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      condition: formData.condition.trim(),
      message: formData.message.trim(),
    };

    const whatsappMessage = `Hello KeratoCare,
I would like to book a consultation.

Name: ${contactData.name}
Phone: ${contactData.phone}
Condition: ${contactData.condition}

Message:
${contactData.message}`;

    const whatsappWindow = window.open("about:blank", "_blank");

    try {
      storeMessageSilently(contactData);

      const savedToSheets = await submitContactToGoogleSheets(contactData);

      if (!savedToSheets) {
        throw new Error("Unable to save the contact form to Google Sheets.");
      }

      toast.success("Message received.", {
        description: "Opening WhatsApp with your consultation message...",
        duration: 2500,
      });

      resetForm();

      const whatsappUrl = createWhatsAppUrl(whatsappMessage);
      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappUrl;
      } else {
        window.open(whatsappUrl, "_blank");
      }

      toast.info("WhatsApp opened.", {
        description: "Send the message there to continue the conversation.",
        duration: 4000,
      });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error handling form submission:", error);
      }

      whatsappWindow?.close();

      toast.error("We couldn't save your message right now.", {
        description: "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 bg-gradient-subtle">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get in Touch with KeratoCare
            </h2>
            <p className="text-muted-foreground">
              Connect with our eye care specialists for keratoconus treatment
              and vision consultation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <Card className="group relative glass-card rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-blue-200/60 hover:shadow-xl border-l-4 border-l-blue-400">
                <a href="tel:+918432861131" className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100/60 text-blue-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">Phone Consultation</h3>
                    <p className="mb-2 text-2xl font-bold text-blue-600">+91 84328 61131</p>
                    <p className="text-sm text-muted-foreground">
                      Available for keratoconus consultations and eye health inquiries.
                    </p>
                  </div>
                </a>
              </Card>

              <Card className="group relative glass-card rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-green-200/60 hover:shadow-xl border-l-4 border-l-green-400">
                <button
                  type="button"
                  onClick={() => openWhatsApp("generalInquiry")}
                  className="flex w-full items-start gap-4 text-left"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100/70 text-green-600">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">WhatsApp Support</h3>
                    <p className="mb-2 text-sm font-semibold text-green-700">
                      Fast responses for assessment and follow-up questions
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Chat directly with our team for quick answers and scheduling help.
                    </p>
                  </div>
                </button>
              </Card>

              <Card className="group relative glass-card rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-teal-200/60 hover:shadow-xl border-l-4 border-l-teal-400">
                <a
                  href="https://maps.google.com/?q=Pune,Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-100/70 text-teal-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">Clinic Location</h3>
                    <p className="text-foreground mb-1">Premium Vision Care Clinic</p>
                    <p className="text-muted-foreground mb-2">Pune, Maharashtra</p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Sat, 10:00 AM - 7:00 PM | Sun: By Appointment
                    </p>
                  </div>
                </a>
              </Card>

              <Card className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="p-6 pb-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Find Us on Map
                  </h3>
                </div>
                <div className="h-64 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.78285788757!2d73.72262025!3d18.52460675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699385760000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="KeratoCare Consulting Location - Pune, Maharashtra"
                  />
                </div>
              </Card>
            </div>

            <Card className="rounded-3xl border-white/70 p-8 shadow-xl">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Send Us a Message</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We will capture your details securely, then move the conversation to WhatsApp.
                  </p>
                </div>
                <div className="hidden items-center gap-2 rounded-full bg-green-50 px-3 py-2 text-sm font-medium text-green-700 sm:flex">
                  <CheckCircle2 className="h-4 w-4" />
                  WhatsApp Ready
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    id="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="peer w-full rounded-xl border border-gray-200 bg-white/80 px-4 pt-5 pb-2 backdrop-blur-sm placeholder-transparent transition-all duration-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Full Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-1 text-xs font-medium text-blue-500 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="peer w-full rounded-xl border border-gray-200 bg-white/80 px-4 pt-5 pb-2 backdrop-blur-sm placeholder-transparent transition-all duration-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-1 text-xs font-medium text-blue-500 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="phone"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="peer w-full rounded-xl border border-gray-200 bg-white/80 px-4 pt-5 pb-2 backdrop-blur-sm placeholder-transparent transition-all duration-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Phone"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 top-1 text-xs font-medium text-blue-500 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500"
                  >
                    Phone
                  </label>
                </div>

                <div className="space-y-2">
                  <label htmlFor="condition" className="text-sm font-medium text-slate-700">
                    Condition
                  </label>
                  <Select
                    value={formData.condition}
                    onValueChange={(value) => setFormData({ ...formData, condition: value })}
                  >
                    <SelectTrigger
                      id="condition"
                      className="w-full rounded-xl border-gray-200 bg-white/80 backdrop-blur-sm"
                    >
                      <SelectValue placeholder="Select your condition" />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      sideOffset={8}
                      className="z-[9999] rounded-md border bg-white shadow-lg"
                    >
                      <SelectItem value="keratoconus">Keratoconus</SelectItem>
                      <SelectItem value="post-surgery">Post-Surgery</SelectItem>
                      <SelectItem value="irregular-cornea">Irregular Cornea</SelectItem>
                      <SelectItem value="other">Other Corneal Issue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="peer w-full rounded-xl border border-gray-200 bg-white/80 px-4 pt-6 pb-3 backdrop-blur-sm placeholder-transparent transition-all duration-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-1 text-xs font-medium text-blue-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500"
                  >
                    Message
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    id="privacy"
                    type="checkbox"
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="cursor-pointer text-sm text-muted-foreground">
                    I agree to the privacy policy and consent to being contacted.
                  </label>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shimmer h-auto w-full items-center justify-center gap-3 rounded-xl py-4 font-bold text-white shadow-lg shadow-green-300/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-green-300/50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:flex-1 bg-gradient-to-r from-[#25D366] to-[#25B4B3]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <WhatsAppIcon className="h-5 w-5" />
                        Send via WhatsApp
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <Button type="button" variant="outline" onClick={resetForm} className="w-full sm:w-auto">
                    Clear Form
                  </Button>
                </div>

                <div className="pt-2 text-center text-xs text-muted-foreground">
                  You'll be redirected to WhatsApp to complete your message.
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
