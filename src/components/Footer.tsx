// ============================================
// Footer - التذييل
// ============================================

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLang } from "../context/LanguageContext";
import { cn } from "../utils/cn";

// ⚠️ يا أحمد: عدّل روابط التواصل هنا
const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/3bmola22", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/ahmed-abdlmawla-9a2750329", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/201017633101", label: "WhatsApp" },
  { icon: MdEmail, href: "mailto:3bmola22@gmail.com", label: "Email" },
];

const NAV_LINKS = ["home", "about", "skills", "projects", "contact"] as const;

export default function Footer() {
  const { dict, isRTL } = useLang();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/5 py-12 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Row */}
        <div className={cn("flex flex-col sm:flex-row items-center justify-between gap-8 mb-10", isRTL && "sm:flex-row-reverse")}>

          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            className="text-xl font-black"
          >
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Ahmed
            </span>
            <span className="text-gray-400">.dev</span>
          </motion.button>

          {/* Nav Links */}
          <nav className={cn("flex flex-wrap justify-center gap-1", isRTL && "flex-row-reverse")}>
            {NAV_LINKS.map((key) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-violet-400 hover:bg-violet-500/10 rounded-lg transition-all duration-300"
              >
                {dict.nav[key as keyof typeof dict.nav] as string}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-violet-400 hover:bg-violet-500/10 border border-transparent hover:border-violet-500/20 transition-all duration-300"
              >
                <Icon size={25} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Row */}
        <div className={cn("flex flex-col sm:flex-row items-center justify-between gap-3 text-center", isRTL && "sm:flex-row-reverse")}>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Ahmed Abdlmawla. {dict.footer.rights}
          </p>

          <p className={cn("text-gray-500 text-xs flex items-center gap-1.5", isRTL && "flex-row-reverse")}>
            {dict.footer.madeWith}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={12} className="text-red-500 fill-red-500" />
            </motion.span>
            {dict.footer.by}
          </p>
        </div>
      </div>
    </footer>
  );
}
