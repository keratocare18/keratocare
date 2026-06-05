import { useState } from "react";
import { AlertCircle, Eye, Lightbulb, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import blurryVisionAfter from "@/assets/treatments/blurry-vision/after.jpg";
import blurryVisionBefore from "@/assets/treatments/blurry-vision/before.jpg";
import lightSensitivityAfter from "@/assets/treatments/light-sensitivity/after.jpg";
import lightSensitivityBefore from "@/assets/treatments/light-sensitivity/before.jpg";
import nightGlareAfter from "@/assets/treatments/night-glare/after.jpg";
import nightGlareBefore from "@/assets/treatments/night-glare/before.jpg";

const comparisonStates = ["before", "after"] as const;
type ComparisonState = (typeof comparisonStates)[number];

const treatmentOrder = [
  "visionClarity",
  "glareReduction",
  "lightSensitivity",
] as const;
type TreatmentKey = (typeof treatmentOrder)[number];

type TreatmentImage = {
  src: string;
  alt: string;
  label: string;
  summary: string;
};

type TreatmentOption = {
  icon: LucideIcon;
  title: string;
  description: string;
  images: Record<ComparisonState, TreatmentImage>;
};

const treatmentData = {
  visionClarity: {
    icon: Eye,
    title: "Blurry Vision",
    description: "Keratoconus blurs and distorts everything. After treatment, patients describe it like someone cleaned the lens of life",
    images: {
      before: {
        src: blurryVisionBefore,
        alt: "Blurred eye chart simulating vision clarity before keratoconus treatment",
        label: "Before Treatment - Blurred Vision",
        summary: "This is how a keratoconus patient reads an eye chart. Familiar?",
      },
      after: {
        src: blurryVisionAfter,
        alt: "Clear eye chart showing improved vision clarity after keratoconus treatment",
        label: "After Treatment - Improved Clarity",
        summary: "After treatment: sharper focus supports more confident reading and daily sight.",
      },
    },
  },
  glareReduction: {
    icon: AlertCircle,
    title: "Night Glare & Halos",
    description: "Night driving becomes a nightmare with keratoconus — every light explodes into a starburst. After treatment, patients can drive confidently again.",
    images: {
      before: {
        src: nightGlareBefore,
        alt: "Night street scene with excessive glare before treatment",
        label: "Before Treatment - Excessive Glare",
        summary: "Night driving with keratoconus. Our patients call this their biggest fear.",
      },
      after: {
        src: nightGlareAfter,
        alt: "Night street scene with reduced glare after treatment",
        label: "After Treatment - Reduced Glare",
        summary: "After treatment: light flare is calmer, making edges and contrast easier to read.",
      },
    },
  },
  lightSensitivity: {
    icon: Lightbulb,
    title: "Light Sensitivity / Photophobia",
    description: "Bright rooms, screens, sunlight - all painful before treatment. Patients tell us: 'I stopped going out.' After treatment, that changes.",
    images: {
      before: {
        src: lightSensitivityBefore,
        alt: "Over-bright city scene simulating strong light sensitivity before treatment",
        label: "Before Treatment - Severe Sensitivity",
        summary: "Even indoor light felt unbearable. Sound familiar? You're not alone.",
      },
      after: {
        src: lightSensitivityAfter,
        alt: "Balanced city scene showing improved light comfort after treatment",
        label: "After Treatment - Improved Comfort",
        summary: "After treatment: brightness feels more controlled, with better comfort in daily environments.",
      },
    },
  },
} as const satisfies Record<TreatmentKey, TreatmentOption>;

const comparisonStateMeta: Record<
  ComparisonState,
  {
    chipClassName: string;
  }
> = {
  before: {
    chipClassName: "bg-red-100 text-red-700 shadow-sm",
  },
  after: {
    chipClassName: "bg-green-100 text-green-700 shadow-sm",
  },
};

const VisionSlider = () => {
  const [selectedTreatmentKey, setSelectedTreatmentKey] =
    useState<TreatmentKey>("visionClarity");
  const [selectedState, setSelectedState] = useState<ComparisonState>("before");
  const activeTreatment = treatmentData[selectedTreatmentKey];
  const targetImage = activeTreatment.images[selectedState];
  const isBlurryVision = selectedTreatmentKey === "visionClarity";

  return (
    <section className="reveal py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">See What Changes After Treatment — Through a Patient's Eyes</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              Our patients describe 3 things that bothered them most — blurry vision, glare at night, and sensitivity to light. See the difference treatment made.
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="flex flex-wrap justify-center gap-2 p-1 bg-gray-100/80 rounded-full backdrop-blur-sm">
              {treatmentOrder.map((treatmentKey) => {
                const option = treatmentData[treatmentKey];
                const Icon = option.icon;
                const isActive = treatmentKey === selectedTreatmentKey;

                return (
                  <button
                    key={treatmentKey}
                    type="button"
                    onClick={() => {
                      setSelectedTreatmentKey(treatmentKey);
                      setSelectedState("before");
                    }}
                    className={cn(
                      "relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer",
                      isActive
                        ? "bg-gradient-to-r from-[#4facfe] to-[#25B4B3] text-white shadow-md"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {option.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="max-w-3xl mx-auto rounded-[28px] border border-border/60 bg-card/95 p-4 sm:p-6 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.45)]">
            <div className="flex flex-col gap-5 mb-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{activeTreatment.title}</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">{activeTreatment.description}</p>
              </div>

              <div className="flex justify-center">
                <div className="flex p-1 bg-gray-100 rounded-full w-fit mx-auto">
                  {comparisonStates.map((stateKey) => {
                    const isActive = stateKey === selectedState;
                    const stateMeta = comparisonStateMeta[stateKey];

                    return (
                      <button
                        key={stateKey}
                        type="button"
                        onClick={() => setSelectedState(stateKey)}
                        className={cn(
                          "px-6 py-2 rounded-full text-sm font-semibold transition-all [transition-duration:250ms]",
                          isActive
                            ? stateMeta.chipClassName
                            : "text-slate-600 hover:text-slate-900"
                        )}
                      >
                        {stateKey === "before" ? "Before Treatment" : "After Treatment"}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mx-auto w-full flex flex-col items-center gap-4">
              <div
  className={cn(
    "w-full overflow-hidden rounded-2xl border border-border/50 bg-slate-50 shadow-lg",
    isBlurryVision ? "max-w-xs" : "max-w-xl"
  )}
>




                <img
                  key={`${selectedTreatmentKey}-${selectedState}`}
                  src={targetImage.src}
                  alt={targetImage.alt}
                  className="w-full h-auto block rounded-xl"
                  draggable={false}
                  decoding="async"
                  loading="lazy"
                />
              </div>

              <p className="text-sm text-center text-slate-600 italic">
                {targetImage.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSlider;
