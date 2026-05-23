import { useEffect, useState } from "react";
import { AlertCircle, Eye, Lightbulb, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import glareReductionAfter from "@/assets/treatments/glare-reduction-after.jpg";
import glareReductionBefore from "@/assets/treatments/glare-reduction-before.jpg";
import lightSensitivityAfter from "@/assets/treatments/light-sensitivity-after.jpg";
import lightSensitivityBefore from "@/assets/treatments/light-sensitivity-before.jpg";
import visionClarityAfter from "@/assets/treatments/vision-clarity-after.jpg";
import visionClarityBefore from "@/assets/treatments/vision-clarity-before.jpg";

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
  imageClassName?: string;
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
    title: "Vision Clarity",
    description: "See how specialty lenses shift sight from blurred and distorted to sharper, more confident daily vision.",
    images: {
      before: {
        src: visionClarityBefore,
        alt: "Blurred eye chart simulating vision clarity before keratoconus treatment",
        label: "Before Treatment - Blurred Vision",
        summary: "Before treatment: letters can appear soft, doubled, and difficult to separate.",
      },
      after: {
        src: visionClarityAfter,
        alt: "Clear eye chart showing improved vision clarity after keratoconus treatment",
        label: "After Treatment - Improved Clarity",
        summary: "After treatment: sharper focus supports more confident reading and daily sight.",
      },
    },
  },
  glareReduction: {
    icon: AlertCircle,
    title: "Glare Reduction",
    description: "Switch views to demonstrate how treatment can calm harsh reflections and reduce visual discomfort in bright environments.",
    images: {
      before: {
        src: glareReductionBefore,
        alt: "Night street scene with excessive glare before treatment",
        label: "Before Treatment - Excessive Glare",
        summary: "Before treatment: bright light sources can bloom heavily and wash out surrounding detail.",
      },
      after: {
        src: glareReductionAfter,
        alt: "Night street scene with reduced glare after treatment",
        label: "After Treatment - Reduced Glare",
        summary: "After treatment: light flare is calmer, making edges and contrast easier to read.",
      },
    },
  },
  lightSensitivity: {
    icon: Lightbulb,
    title: "Light Sensitivity",
    description: "Show the difference between overwhelming brightness and a more relaxed, manageable view after treatment support.",
    images: {
      before: {
        src: lightSensitivityBefore,
        alt: "Over-bright city scene simulating strong light sensitivity before treatment",
        label: "Before Treatment - Severe Sensitivity",
        summary: "Before treatment: overall brightness can feel harsh and visually overwhelming.",
        imageClassName: "object-cover scale-[1.12] sm:scale-[1.16]",
      },
      after: {
        src: lightSensitivityAfter,
        alt: "Balanced city scene showing improved light comfort after treatment",
        label: "After Treatment - Improved Comfort",
        summary: "After treatment: brightness feels more controlled, with better comfort in daily environments.",
        imageClassName: "object-cover scale-[1.12] sm:scale-[1.16]",
      },
    },
  },
} as const satisfies Record<TreatmentKey, TreatmentOption>;

const comparisonStateMeta: Record<
  ComparisonState,
  {
    badge: string;
    badgeClassName: string;
    chipClassName: string;
    viewLabel: string;
  }
> = {
  before: {
    badge: "Before",
    badgeClassName: "bg-red-500 text-white",
    chipClassName: "bg-red-100 text-red-700 shadow-sm",
    viewLabel: "Before View",
  },
  after: {
    badge: "After",
    badgeClassName: "bg-green-500 text-white",
    chipClassName: "bg-green-100 text-green-700 shadow-sm",
    viewLabel: "After View",
  },
};

const VisionSlider = () => {
  const [selectedTreatmentKey, setSelectedTreatmentKey] =
    useState<TreatmentKey>("visionClarity");
  const [selectedState, setSelectedState] = useState<ComparisonState>("before");
  const activeTreatment = treatmentData[selectedTreatmentKey];
  const targetImage = activeTreatment.images[selectedState];
  const [displayedImage, setDisplayedImage] =
    useState<TreatmentImage>(targetImage);
  const [incomingImage, setIncomingImage] = useState<TreatmentImage | null>(
    null,
  );
  const [isIncomingVisible, setIsIncomingVisible] = useState(false);

  useEffect(() => {
    treatmentOrder.forEach((key) => {
      comparisonStates.forEach((stateKey) => {
        const image = new window.Image();
        image.src = treatmentData[key].images[stateKey].src;
      });
    });
  }, []);

  useEffect(() => {
    if (displayedImage.src === targetImage.src) {
      return;
    }

    setIncomingImage(null);
    setIsIncomingVisible(false);

    let cancelled = false;
    let frameId = 0;
    let settleTimer = 0;
    const preloadedImage = new window.Image();

    const beginTransition = () => {
      if (cancelled) {
        return;
      }

      setIncomingImage(targetImage);
      setIsIncomingVisible(false);

      frameId = window.requestAnimationFrame(() => {
        setIsIncomingVisible(true);
      });

      settleTimer = window.setTimeout(() => {
        if (cancelled) {
          return;
        }

        setDisplayedImage(targetImage);
        setIncomingImage(null);
        setIsIncomingVisible(false);
      }, 360);
    };

    preloadedImage.onload = beginTransition;
    preloadedImage.onerror = beginTransition;
    preloadedImage.src = targetImage.src;

    if (preloadedImage.complete) {
      preloadedImage.onload = null;
      preloadedImage.onerror = null;
      beginTransition();
    }

    return () => {
      cancelled = true;
      preloadedImage.onload = null;
      preloadedImage.onerror = null;
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      if (settleTimer) {
        window.clearTimeout(settleTimer);
      }
    };
  }, [displayedImage.src, targetImage]);

  return (
    <section className="reveal py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vision Transformation with Keratoconus Treatment</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              Explore three treatment outcomes in one section. Choose a concern first, then switch between the before and after views to see how the image changes.
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

            <div className="mx-auto w-full max-w-sm flex flex-col items-center gap-4">
              <div className="relative w-full overflow-hidden rounded-2xl border border-border/50 bg-slate-50 shadow-lg aspect-[5/4] sm:aspect-[4/3]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,172,254,0.08),transparent_55%)]" />
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={displayedImage.src}
                    alt={displayedImage.alt}
                    className={cn(
                      "h-full w-full transition-transform duration-500 ease-out",
                      displayedImage.imageClassName ?? "object-contain",
                      incomingImage ? "scale-[1.01]" : "scale-100",
                    )}
                    draggable={false}
                    decoding="async"
                  />
                  {incomingImage ? (
                    <img
                      src={incomingImage.src}
                      alt=""
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-0 h-full w-full transition-all duration-500 ease-out",
                        incomingImage.imageClassName ?? "object-contain",
                        isIncomingVisible
                          ? "scale-100 opacity-100"
                          : "scale-[1.015] opacity-0",
                      )}
                      draggable={false}
                      decoding="async"
                    />
                  ) : null}
                </div>

                <div
                  className={cn(
                    "absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold",
                    comparisonStateMeta[selectedState].badgeClassName,
                  )}
                >
                  {comparisonStateMeta[selectedState].badge}
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-4 sm:p-5">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-white/70 mb-1">
                        {comparisonStateMeta[selectedState].viewLabel}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-white">{targetImage.label}</p>
                    </div>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      {activeTreatment.title}
                    </span>
                  </div>
                </div>
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
