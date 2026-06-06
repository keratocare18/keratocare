import { memo, Suspense, type ComponentType, type LazyExoticComponent } from "react";

type LazySectionProps = {
  component: LazyExoticComponent<ComponentType>;
  className?: string;
};

const LazySection = memo(
  ({ component: Component, className }: LazySectionProps) => {
    return (
      <div className={className}>
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      </div>
    );
  },
);

LazySection.displayName = "LazySection";

export default LazySection;
