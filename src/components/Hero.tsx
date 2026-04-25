// ============================================
// Hero Section - القسم الرئيسي
// Full-screen مع Glassmorphism + Animations
// ============================================

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLang } from "../context/LanguageContext";
import { cn } from "../utils/cn";

// ⚠️ يا أحمد: عدّل روابط التواصل الاجتماعي هنا
const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/3bmola22", label: "GitHub", color: "hover:text-gray-300" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/ahmed-abdlmawla-9a2750329", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: FaWhatsapp, href: "https://wa.me/201017633101", label: "WhatsApp", color: "hover:text-green-400" },
  { icon: MdEmail, href: "mailto:3bmola22@gmail.com", label: "Email", color: "hover:text-red-400" },
];

// متغيرات أنيميشن
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 } as never,
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const { dict, isRTL } = useLang();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 dark:bg-slate-950"
    >
      {/* ---- Animated Orbs ---- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* ---- Grid Pattern ---- */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(139 92 246) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ---- Main Content ---- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className={cn(
          "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
        )}>

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={cn("space-y-6 lg:space-y-8", isRTL && "text-right")}
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <Sparkles size={12} className="animate-pulse" />
                {dict.hero.subtitle}
              </span>
            </motion.div>

            {/* Greeting + Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-gray-400 text-lg lg:text-xl font-medium">
                {dict.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {dict.hero.name}
                </span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-200">
                {dict.hero.title}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl"
            >
              {dict.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className={cn("flex flex-wrap gap-4", isRTL && "flex-row-reverse")}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow duration-300"
              >
                <ExternalLink size={16} />
                {dict.hero.cta}
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-violet-400 border border-violet-500/40 hover:bg-violet-500/10 hover:border-violet-500/60 transition-all duration-300 backdrop-blur-sm"
              >
                {dict.hero.contact}
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className={cn("flex items-center gap-4 pt-2", isRTL && "flex-row-reverse")}
            >
              <span className="text-xs text-gray-500 font-medium uppercase tracking-widest whitespace-nowrap">
                {isRTL ? "تابعني" : "Follow Me"}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
              <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      "w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-gray-400 transition-all duration-300",
                      color,
                      "hover:border-white/20 hover:bg-white/10"
                    )}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={cn("flex justify-center lg:justify-end", isRTL && "lg:justify-start")}
          >
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 blur-2xl opacity-30 scale-110" />

              {/* Rotating Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/30"
                style={{ margin: "-8px" }}
              />

              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-violet-500/30 shadow-2xl shadow-violet-500/20">
                {/*
                  ⚠️ يا أحمد: ضع صورتك الشخصية في public/images/profile.jpg
                */}
                <img
                  src="/images/profile.jpg"
                  alt="Ahmed Abdlmawla - Junior Front-End Developer Cairo Egypt"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background =
                        "linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #0891b2 100%)";
                      parent.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;gap:8px;"><span style="font-size:80px;">👨‍💻</span><span style="color:white;font-size:14px;opacity:0.8;font-weight:600;">Ahmed Abdlmawla</span></div>`;
                    }
                  }}
                />
              </div>

              {/* Floating Badge - Available */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={cn(
                  "absolute -bottom-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-2 text-sm font-semibold text-white shadow-xl whitespace-nowrap",
                  isRTL ? "-left-4" : "-right-4"
                )}
              >
                🚀 {isRTL ? "متاح للعمل" : "Available for Work"}
              </motion.div>

              {/* Floating Badge - Lighthouse */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={cn(
                  "absolute -top-2 bg-violet-500/20 backdrop-blur-xl border border-violet-500/30 rounded-2xl px-3 py-1.5 text-xs font-semibold text-violet-300 shadow-xl whitespace-nowrap",
                  isRTL ? "-right-4" : "-left-4"
                )}
              >
                ⚡ 98-100 Lighthouse
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---- Scroll Down ---- */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">{dict.hero.scrollDown}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
