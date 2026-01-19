import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Venues from "./pages/Venues";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Team from "./pages/Team";
import BookNow from "./pages/BookNow";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/team" element={<Team />} />
            <Route path="/book" element={<BookNow />} />
            <Route path="/vendors" element={<Portfolio />} />
            <Route path="/planning-process" element={<Services />} />
            <Route path="/blog" element={<Portfolio />} />
            <Route path="/gallery" element={<Portfolio />} />
            <Route path="/real-weddings" element={<Portfolio />} />
            <Route path="/inspiration" element={<Portfolio />} />
            <Route path="/destination-weddings" element={<Venues />} />
            <Route path="/corporate-events" element={<Services />} />
            <Route path="/gallery-videos" element={<Portfolio />} />
            <Route path="/privacy-policy" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
