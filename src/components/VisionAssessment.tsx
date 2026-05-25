import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, AlertCircle, Lightbulb } from "lucide-react";
import { openAssessmentBooking } from "@/lib/whatsapp";

const VisionAssessment = () => {
  const assessmentCategories = [
    {
      id: "vision",
      icon: Eye,
      title: "Vision Clarity",
      description: "Transformation from distorted vision to crystal-clear sight",
      beforeLabel: "Before Treatment",
      afterLabel: "After Treatment",
      beforeImage: "https://images.unsplash.com/photo-1576091160530-2173dba999ef?w=400&h=300&fit=crop&auto=format&fm=webp&q=80",
      afterImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&auto=format&fm=webp&q=80",
    },
    {
      id: "glare",
      icon: AlertCircle,
      title: "Glare Reduction",
      description: "Effective glare reduction treatment for light-sensitive eyes",
      beforeLabel: "Excessive Glare",
      afterLabel: "Reduced Glare",
      beforeImage: "https://images.unsplash.com/photo-1606525572519-a4ec16a8c728?w=400&h=300&fit=crop&auto=format&fm=webp&q=80",
      afterImage: "https://images.unsplash.com/photo-1606525572519-a4ec16a8c728?w=400&h=300&fit=crop&auto=format&fm=webp&q=80",
    },
    {
      id: "light-sensitivity",
      icon: Lightbulb,
      title: "Light Sensitivity",
      description: "Advanced treatment for photophobia and light sensitivity",
      beforeLabel: "Severe Sensitivity",
      afterLabel: "Improved Tolerance",
      beforeImage: "https://images.unsplash.com/photo-1576091160399-1c6dccbc3192?w=400&h=300&fit=crop&auto=format&fm=webp&q=80",
      afterImage: "https://images.unsplash.com/photo-1576091160399-1c6dccbc3192?w=400&h=300&fit=crop&auto=format&fm=webp&q=80",
    }
  ];

  return (
    <section id="assessment-preview" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vision Transformation Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            </p>
          </div>

          {/* Assessment Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {assessmentCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="overflow-hidden card-hover transform transition-all hover:scale-105">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Before/After Images */}
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground text-center mb-4">{category.description}</p>
                    
                    {/* Image Comparison */}
                    <div className="space-y-4">
                      {/* Before Image */}
                      <div className="group">
                        <div className="relative overflow-hidden rounded-lg shadow-md aspect-video bg-gray-100 mb-2">
                          {/* PERF: Explicit dimensions and lazy loading prevent layout shifts and defer off-screen image work. */}
                          <img 
                            src={category.beforeImage}
                            alt={category.beforeLabel}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-red-500/10 group-hover:bg-red-500/0 transition-all duration-300"></div>
                        </div>
                        <p className="text-xs font-semibold text-gray-600 text-center">{category.beforeLabel}</p>
                      </div>

                      {/* Arrow Indicator */}
                      <div className="flex justify-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold text-lg">
                          →
                        </div>
                      </div>

                      {/* After Image */}
                      <div className="group">
                        <div className="relative overflow-hidden rounded-lg shadow-md aspect-video bg-gray-100 mb-2">
                          {/* PERF: Explicit dimensions and lazy loading prevent layout shifts and defer off-screen image work. */}
                          <img 
                            src={category.afterImage}
                            alt={category.afterLabel}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-green-500/10 group-hover:bg-green-500/0 transition-all duration-300"></div>
                        </div>
                        <p className="text-xs font-semibold text-gray-600 text-center">{category.afterLabel}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Assessment Info */}
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-secondary/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                <p className="text-muted-foreground">Success Rate in Vision Improvement</p>
              </div>
              <div className="text-center border-l border-r border-secondary/20">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <p className="text-muted-foreground">Patients Successfully Treated</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">6+</div>
                <p className="text-muted-foreground">Years of Experience in Eye Care</p>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Vision?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get a personalized vision assessment and discover how KeratoCare can help you achieve clearer, more comfortable sight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => openAssessmentBooking()}
                className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6"
              >
                Book Free Vision Assessment
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="tel:+918432861131">Call Now: +91 84328 61131</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionAssessment;
