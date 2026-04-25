// ============================================
// Navbar - شريط التنقل العلوي
// Glassmorphism + Transparent + RTL Support
// ============================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/cn";

// ⚠️ يا أحمد: عدّل روابط التواصل الاجتماعي هنا
const SOCIAL_LINKS = {
  github: "https://github.com/3bmola22",
  linkedin: "https://www.linkedin.com/in/ahmed-abdlmawla-9a2750329",
  whatsapp: "https://wa.me/201017633101",
  email: "mailto:3bmola22@gmail.com",
};

// ⚠️ يا أحمد: ضع رابط سيرتك الذاتية هنا
export const CV_LINK =
  "https://drive.google.com/file/d/11CVcay_Fm2X2yyIePjjJDRO3hGAOoQum/view?usp=sharing"; // غيّر هذا لرابط CV الفعلي

const navLinks = ["home", "about", "skills", "projects", "contact"] as const;

export default function Navbar() {
  const { dict, toggleLang, isRTL } = useLang();
  const { toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // تتبّع التمرير لتفعيل خلفية الـ Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // تحديد القسم النشط
      const sections = navLinks.map((id) => document.getElementById(id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "backdrop-blur-xl bg-white/10 dark:bg-black/20 border-b border-white/10 dark:border-white/5 shadow-lg shadow-black/5"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* --- Logo --- */}
            <motion.button
              onClick={() => scrollToSection("home")}
              className="text-xl lg:text-2xl font-black tracking-tight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Ahmed
              </span>
              <span className="text-gray-800 dark:text-white">.dev</span>
            </motion.button>

            {/* --- Desktop Nav Links --- */}
            <div
              className={cn(
                "hidden lg:flex items-center gap-1",
                isRTL && "flex-row-reverse",
              )}
            >
              {navLinks.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                    activeSection === key
                      ? "text-violet-500 dark:text-violet-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400",
                  )}
                >
                  {dict.nav[key as keyof typeof dict.nav] as string}
                  {activeSection === key && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-violet-500/10 dark:bg-violet-500/20 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* --- Right Actions --- */}
            <div
              className={cn(
                "flex items-center gap-2",
                isRTL && "flex-row-reverse",
              )}
            >
              {/* Social Icons - Desktop */}
              <div className="hidden lg:flex items-center gap-1.5">
                {[
                  {
                    icon: FaGithub,
                    href: SOCIAL_LINKS.github,
                    label: "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    href: SOCIAL_LINKS.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: FaWhatsapp,
                    href: SOCIAL_LINKS.whatsapp,
                    label: "WhatsApp",
                  },
                  { icon: MdEmail, href: SOCIAL_LINKS.email, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1" />

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? "sun" : "moon"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Language Toggle */}
              <motion.button
                onClick={toggleLang}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 text-xs font-bold rounded-lg border border-violet-500/30 text-violet-600 dark:text-violet-400 hover:bg-violet-500/10 transition-all duration-300"
              >
                {dict.nav.langToggle}
              </motion.button>

              {/* Download CV - Desktop */}
              <motion.a
                target="_blank"
                href={CV_LINK}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
              >
                <Download size={13} />
                {dict.nav.downloadCV}
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-violet-500/10 transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* --- Mobile Menu --- */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-t border-white/10"
            >
              <div className={cn("px-4 py-4 space-y-1", isRTL && "text-right")}>
                {navLinks.map((key, i) => (
                  <motion.button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg text-sm font-medium transition-all text-left",
                      isRTL && "text-right",
                      activeSection === key
                        ? "bg-violet-500/15 text-violet-600 dark:text-violet-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5",
                    )}
                  >
                    {dict.nav[key as keyof typeof dict.nav] as string}
                  </motion.button>
                ))}

                {/* Mobile Social + CV */}
                <div
                  className={cn(
                    "pt-3 flex items-center gap-3 border-t border-gray-200 dark:border-white/10",
                    isRTL && "flex-row-reverse",
                  )}
                >
                  {[
                    {
                      icon: FaGithub,
                      href: SOCIAL_LINKS.github,
                      label: "GitHub",
                    },
                    {
                      icon: FaLinkedin,
                      href: SOCIAL_LINKS.linkedin,
                      label: "LinkedIn",
                    },
                    {
                      icon: FaWhatsapp,
                      href: SOCIAL_LINKS.whatsapp,
                      label: "WhatsApp",
                    },
                    { icon: MdEmail, href: SOCIAL_LINKS.email, label: "Email" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-violet-500 hover:bg-violet-500/10 transition-all"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                  <a
                    target="_blank"
                    href={CV_LINK}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white",
                      isRTL && "flex-row-reverse",
                    )}
                  >
                    <Download size={13} />
                    {dict.nav.downloadCV}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
