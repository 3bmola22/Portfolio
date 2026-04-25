// ============================================
// App.tsx - نقطة الدخول الرئيسية للتطبيق
// Ahmed Abdlmawla Portfolio
// ============================================

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Toast Notifications */}
      <ToastContainer
        theme="dark"
        toastStyle={{
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(139, 92, 246, 0.2)",
          color: "#e2e8f0",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}
