import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Eye, RefreshCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { openAssessmentBooking } from "@/lib/whatsapp";

type AssessmentOption = {
  label: string;
  points: number;
  helper: string;
};

type AssessmentQuestion = {
  question: string;
  options: AssessmentOption[];
};

const questions: AssessmentQuestion[] = [
  {
    question: "How often do straight lines appear bent, shadowed, or doubled?",
    options: [
      { label: "Never", points: 0, helper: "My vision is stable." },
      { label: "Sometimes", points: 2, helper: "I notice this occasionally." },
      { label: "Often", points: 3, helper: "It affects many activities." },
      { label: "Almost always", points: 4, helper: "It is present most of the day." },
    ],
  },
  {
    question: "How difficult is night driving due to glare, halos, or starbursts?",
    options: [
      { label: "No difficulty", points: 0, helper: "Lights look normal." },
      { label: "Mild", points: 1, helper: "Only in heavy traffic." },
      { label: "Moderate", points: 3, helper: "I avoid some routes." },
      { label: "Severe", points: 4, helper: "I avoid night driving." },
    ],
  },
  {
    question: "How frequently has your eye power changed in the last 18 months?",
    options: [
      { label: "No major changes", points: 0, helper: "Power is mostly stable." },
      { label: "Once", points: 1, helper: "One noticeable update." },
      { label: "Twice", points: 2, helper: "Multiple adjustments needed." },
      { label: "Three+ times", points: 4, helper: "Changes happen frequently." },
    ],
  },
  {
    question: "Do you have a habit of frequent eye rubbing or severe eye allergies?",
    options: [
      { label: "No", points: 0, helper: "Rarely rub eyes." },
      { label: "Occasionally", points: 1, helper: "During irritation episodes." },
      { label: "Frequently", points: 3, helper: "Often due to itchiness." },
      { label: "Very frequently", points: 4, helper: "Daily and hard to control." },
    ],
  },
  {
    question: "Does anyone in your family have keratoconus or similar corneal problems?",
    options: [
      { label: "No", points: 0, helper: "No known family history." },
      { label: "Not sure", points: 1, helper: "History is unclear." },
      { label: "One relative", points: 3, helper: "Known diagnosis in family." },
      { label: "Multiple relatives", points: 4, helper: "Strong family pattern." },
    ],
  },
  {
    question: "How often do you squint or strain to read distant text (boards/signs)?",
    options: [
      { label: "Rarely", points: 0, helper: "Distance vision is comfortable." },
      { label: "Sometimes", points: 1, helper: "Only in low contrast." },
      { label: "Often", points: 3, helper: "Regular strain or squinting." },
      { label: "Always", points: 4, helper: "Distance vision is consistently difficult." },
    ],
  },
];

const maxScore = questions.reduce((total, q) => total + Math.max(...q.options.map((option) => option.points)), 0);

const AssessmentSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));

  const answeredCount = answers.filter((answer) => answer >= 0).length;
  const isComplete = answeredCount === questions.length;
  const score = useMemo(() => answers.filter((answer) => answer >= 0).reduce((sum, value) => sum + value, 0), [answers]);
  const scorePercent = Math.round((score / maxScore) * 100);

  const riskBand = useMemo(() => {
    if (scorePercent <= 24) {
      return {
        title: "Low probability",
        tone: "text-emerald-700",
        badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
        barClass: "from-emerald-500 to-teal-500",
        summary: "Current responses show fewer classic warning patterns.",
        guidance: "Keep routine annual checkups and monitor for new symptoms.",
      };
    }

    if (scorePercent <= 49) {
      return {
        title: "Mild risk",
        tone: "text-cyan-700",
        badgeClass: "bg-cyan-100 text-cyan-700 border-cyan-200",
        barClass: "from-cyan-500 to-sky-500",
        summary: "You have a few early indicators that are worth screening.",
        guidance: "A corneal topography scan can help rule out early progression.",
      };
    }

    if (scorePercent <= 74) {
      return {
        title: "Moderate risk",
        tone: "text-amber-700",
        badgeClass: "bg-amber-100 text-amber-700 border-amber-200",
        barClass: "from-amber-500 to-orange-500",
        summary: "Your pattern suggests multiple symptoms linked with keratoconus.",
        guidance: "Consider booking a detailed corneal mapping assessment soon.",
      };
    }

    return {
      title: "Higher risk",
      tone: "text-rose-700",
      badgeClass: "bg-rose-100 text-rose-700 border-rose-200",
      barClass: "from-rose-500 to-red-500",
      summary: "Responses show a strong cluster of risk indicators.",
      guidance: "A prompt clinic assessment is strongly recommended.",
    };
  }, [scorePercent]);

  const progressPercent = Math.round((answeredCount / questions.length) * 100);
  const activeQuestion = questions[currentStep];
  const selectedResponses = useMemo(
    () =>
      questions
        .map((question, index) => {
          const selectedOption = question.options.find(
            (option) => option.points === answers[index],
          );

          if (!selectedOption) {
            return null;
          }

          return `${question.question} - ${selectedOption.label}`;
        })
        .filter((response): response is string => response !== null),
    [answers],
  );

  const handleSelect = (optionPoints: number) => {
    setAnswers((previous) => {
      const next = [...previous];
      next[currentStep] = optionPoints;
      return next;
    });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  const restart = () => {
    setAnswers(Array(questions.length).fill(-1));
    setCurrentStep(0);
  };

  return (
    <div id="assessment" className="scroll-mt-28 mb-12">
      <Card className="relative overflow-hidden rounded-3xl border-white/70 bg-white/95 p-6 shadow-[0_24px_70px_-34px_rgba(14,116,144,0.5)] sm:p-8">
        <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-48 w-48 rounded-full bg-teal-200/50 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                <Sparkles className="h-3.5 w-3.5" />
                Interactive Keratoconus Self-Check
              </div>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Free Vision Risk Assessment</h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                Answer 6 quick questions to estimate your risk profile. This score is an awareness tool, not a diagnosis.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm">
              <div className="font-semibold text-slate-900">Progress</div>
              <div className="text-slate-600">{answeredCount} of {questions.length} answered</div>
            </div>
          </div>

          <div className="mb-6 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
            {/* PERF: Scaling a full-width bar avoids width animation reflow while the quiz progresses. */}
            <div
              className="h-full origin-left rounded-full bg-gradient-to-r from-[#4facfe] to-[#25B4B3] transition-transform duration-500 transform-gpu will-change-transform"
              style={{ transform: `scaleX(${progressPercent / 100})` }}
            />
          </div>

          {!isComplete ? (
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50/80 to-white p-5 sm:p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-sky-700">
                  Question {currentStep + 1} of {questions.length}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 sm:text-xl">{activeQuestion.question}</h4>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {activeQuestion.options.map((option) => {
                  const isSelected = answers[currentStep] === option.points;

                  return (
                    <button
                      key={`${option.label}-${option.points}`}
                      type="button"
                      onClick={() => handleSelect(option.points)}
                      className={cn(
                        "group rounded-2xl border px-4 py-4 text-left transition-all duration-200",
                        isSelected
                          ? "border-cyan-400 bg-cyan-50 shadow-[0_10px_28px_-16px_rgba(14,116,144,0.9)]"
                          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md",
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-semibold text-slate-900">{option.label}</div>
                          <div className="mt-1 text-sm text-slate-600">{option.helper}</div>
                        </div>
                        {isSelected ? (
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                        ) : (
                          <Eye className="mt-0.5 h-5 w-5 shrink-0 text-slate-300 transition-colors group-hover:text-sky-500" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="rounded-full"
                >
                  Previous
                </Button>

                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={answers[currentStep] < 0 || currentStep === questions.length - 1}
                  className="rounded-full bg-slate-900 text-white hover:bg-slate-800"
                >
                  Next Question
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">Assessment Result</div>
                  <div className={cn("mt-1 text-3xl font-bold", riskBand.tone)}>{riskBand.title}</div>
                  <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">{riskBand.summary}</p>
                </div>
                <div className={cn("rounded-full border px-3 py-1 text-sm font-semibold", riskBand.badgeClass)}>
                  Score: {score}/{maxScore}
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
                  <span>Risk Index</span>
                  <span>{scorePercent}%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                  {/* PERF: The result meter now animates with transform so score updates stay on the compositor. */}
                  <div
                    className={cn(
                      "h-full origin-left bg-gradient-to-r transition-transform duration-500 transform-gpu will-change-transform",
                      riskBand.barClass,
                    )}
                    style={{ transform: `scaleX(${scorePercent / 100})` }}
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4 text-sm text-slate-700">
                <div className="mb-1 flex items-center gap-2 font-semibold text-slate-900">
                  <AlertTriangle className="h-4 w-4 text-sky-600" />
                  Recommendation
                </div>
                {riskBand.guidance}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  type="button"
                  className="btn-shimmer btn-medical-primary rounded-full px-5 text-white"
                  onClick={() =>
                    openAssessmentBooking({
                      recommendation: riskBand.guidance,
                      responses: selectedResponses,
                      riskScorePercent: scorePercent,
                      riskTitle: riskBand.title,
                    })
                  }
                >
                  Book Free Vision Assessment
                </Button>
                <Button type="button" variant="outline" className="rounded-full" onClick={restart}>
                  <RefreshCcw className="h-4 w-4" />
                  Retake Quiz
                </Button>
              </div>

              <p className="text-xs text-slate-500">
                This digital score is for education only and does not replace a clinical diagnosis by an eye specialist.
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default AssessmentSection;
