import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PdfTools from "./pages/PdfTools";
import ToolPage from "./pages/ToolPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FormBuilder from "./pages/FormBuilder";
import Templates from "./pages/Templates";
import AITools from "./pages/AITools";
import Pricing from "./pages/Pricing";
import BusinessTools from "./pages/BusinessTools";
import Automations from "./pages/Automations";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    document.title = "FileHub - All-in-One File Solution";
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pdf-tools" element={<PdfTools />} />
              <Route path="/tool/:toolId" element={<ToolPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/form-builder" element={<FormBuilder />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/ai-tools" element={<AITools />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/business-tools" element={<BusinessTools />} />
              <Route path="/automations" element={<Automations />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
