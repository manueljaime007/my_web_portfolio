import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Experiences from "./pages/Experiences";
import ExperienceDetail from "./pages/ExperienceDetail";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen]">
            <Header />
            <main className="flex-1 pt-[4rem]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projects />} />
                <Route path="/projetos/:id" element={<ProjectDetail />} />
                <Route path="/experiencias" element={<Experiences />} />
                <Route path="/experiencias/:id" element={<ExperienceDetail />} />
                <Route path="/galeria" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cv" element={<CV />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
