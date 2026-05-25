export const WHATSAPP_PHONE_NUMBER = "918432861131";

const WHATSAPP_WINDOW_FEATURES = "noopener,noreferrer";

export const whatsappMessages = {
  scheduleFitting: `Hi! I would like to schedule a specialty contact lens fitting for keratoconus treatment.

Could you please help me with:
- Available appointment slots
- What to bring for the fitting
- Duration of the appointment
- Consultation fees

Thank you!`,

  bookMapping: `Hello! I'm interested in booking an advanced corneal mapping session.

I would like to know:
- Available dates and times
- Preparation required
- Cost of the mapping session
- How long the session takes

Looking forward to hearing from you!`,

  startProgram: `Hi there! I'm interested in starting your vision therapy program for keratoconus.

Please provide information about:
- Program duration and schedule
- What exercises are included
- Cost and payment options
- How to get started

Thank you for your time!`,

  generalInquiry: `Hi! I'd like to know more about keratoconus treatment and specialty contact lenses.

Could you please share:
- Treatment options available
- Success rates and outcomes
- Consultation process
- Pricing information

I look forward to your response!`,

  assessment: `Hello! I just completed the vision assessment on your website and would like to discuss my results.

Please let me know:
- Next steps based on my assessment
- Appointment availability
- What to expect during consultation
- Required documents or tests

Thank you!`,

  consultation: `Hi! I would like to book a free consultation for keratoconus treatment.

Please help me with:
- Available consultation slots
- What the consultation includes
- Duration of the appointment
- Location details

Looking forward to hearing from you!`,
} as const;

type AssessmentBookingContext = {
  recommendation?: string;
  responses?: string[];
  riskScorePercent?: number;
  riskTitle?: string;
};

export const createAssessmentBookingMessage = ({
  recommendation,
  responses = [],
  riskScorePercent,
  riskTitle,
}: AssessmentBookingContext = {}): string => {
  const summaryLines: string[] = [];

  if (riskTitle) {
    summaryLines.push(`- Online assessment result: ${riskTitle}`);
  }

  if (typeof riskScorePercent === "number") {
    summaryLines.push(`- Risk score shown on the website: ${riskScorePercent}%`);
  }

  if (responses.length > 0) {
    summaryLines.push("- My selected responses:");
    responses.forEach((response, index) => {
      summaryLines.push(`  ${index + 1}. ${response}`);
    });
  }

  if (recommendation) {
    summaryLines.push(`- Website recommendation: ${recommendation}`);
  }

  return [
    "Hello Doctor,",
    "",
    "I would like to book a Free Vision Risk Assessment / keratoconus consultation with KeratoCare.",
    "",
    summaryLines.length > 0
      ? "I have already completed the website assessment, and here is my summary:"
      : "Please help me book the assessment and guide me on the next steps.",
    ...summaryLines,
    "",
    "Please help me with:",
    "- The earliest available appointment slot",
    "- Whether I should bring my previous eye reports or prescription",
    "- Consultation fees and expected duration",
    "- The recommended next steps after the assessment",
    "",
    "Thank you.",
  ].join("\n");
};

export const createWhatsAppUrl = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;
};

export const openWhatsAppWithMessage = (message: string): void => {
  window.open(createWhatsAppUrl(message), "_blank", WHATSAPP_WINDOW_FEATURES);
};

export const openWhatsApp = (
  messageType: keyof typeof whatsappMessages,
): void => {
  openWhatsAppWithMessage(whatsappMessages[messageType]);
};

export const openAssessmentBooking = (
  context: AssessmentBookingContext = {},
): void => {
  openWhatsAppWithMessage(createAssessmentBookingMessage(context));
};
