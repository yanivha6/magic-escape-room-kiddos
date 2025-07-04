import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Stage5 from "./pages/Stage5";
import Stage6 from "./pages/Stage6";
import Stage1 from "./pages/Stage1";
import Stage2 from "./pages/Stage2";
import Stage3 from "./pages/Stage3";
import Stage4 from "./pages/Stage4";
import Victory from "./pages/Victory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/stage/1" element={<Stage1 />} />
          <Route path="/stage/2" element={<Stage2 />} />
          <Route path="/stage/3" element={<Stage3 />} />
          <Route path="/stage/4" element={<Stage4 />} />
          <Route path="/stage/5" element={<Stage5 />} />
          <Route path="/stage/6" element={<Stage6 />} />
          <Route path="/victory" element={<Victory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
