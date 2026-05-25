import { memo, Suspense, type ComponentType, type LazyExoticComponent } from "react";
import { useInView } from "react-intersection-observer";

type LazySectionProps = {
  component: LazyExoticComponent<ComponentType>;
  className?: string;
  placeholderHeight?: number;
  rootMargin?: string;
};

const LazySection = memo(
  ({
    component: Component,
    className,
    placeholderHeight = 480,
    rootMargin = "600px 0px",
  }: LazySectionProps) => {
    // PERF: This delays downloading and rendering below-the-fold sections until
    // they are near the viewport, which reduces main-thread work on first load.
    const { ref, inView } = useInView({
      triggerOnce: true,
      rootMargin,
    });

    return (
      <div ref={ref} className={className}>
        {inView ? (
          <Suspense
            fallback={
              <div
                aria-hidden="true"
                className="w-full"
                style={{ minHeight: `${placeholderHeight}px` }}
              />
            }
          >
            <Component />
          </Suspense>
        ) : (
          <div
            aria-hidden="true"
            className="w-full"
            style={{ minHeight: `${placeholderHeight}px` }}
          />
        )}
      </div>
    );
  },
);

LazySection.displayName = "LazySection";

export default LazySection;
