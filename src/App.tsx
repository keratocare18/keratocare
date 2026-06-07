import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const Admin = lazy(() => import("./pages/Admin"));
const Policies = lazy(() => import("./pages/Policies"));
const CornealMapping = lazy(() => import("./pages/CornealMapping"));
const GlareReduction = lazy(() => import("./pages/GlareReduction"));
const ScleralLenses = lazy(() => import("./pages/ScleralLenses"));
const SpecialtyContactLenses = lazy(() => import("./pages/SpecialtyContactLenses"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/corneal-mapping" element={<CornealMapping />} />
            <Route path="/glare-reduction" element={<GlareReduction />} />
            <Route path="/scleral-lenses" element={<ScleralLenses />} />
            <Route path="/specialty-contact-lenses" element={<SpecialtyContactLenses />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
