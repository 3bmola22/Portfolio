// ============================================
// About Section - قسم "عن أحمد"
// ============================================

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Briefcase, CheckCircle2, Download } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { cn } from "../utils/cn";
import { CV_LINK } from "./Navbar";
import { SiReaddotcv } from "react-icons/si";

// إحصائيات
const STATS = [
  { value: "2+", key: "projects", emoji: "🚀" },
  { value: "10+", key: "skills", emoji: "⚡" },
  { value: "98+", key: "lighthouse", emoji: "🏆" },
  { value: "∞", key: "coffee", emoji: "☕" },
];

export default function About() {
  const { dict, isRTL } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const infoCards = [
    {
      icon: GraduationCap,
      label: dict.about.education.label,
      title: dict.about.education.degree,
      subtitle: dict.about.education.school,
      color: "from-violet-500/20 to-purple-500/20 border-violet-500/30",
      iconColor: "text-violet-400",
    },
    {
      icon: MapPin,
      label: dict.about.location.label,
      title: dict.about.location.value,
      subtitle: "",
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
      iconColor: "text-cyan-400",
    },
    {
      icon: Briefcase,
      label: dict.about.available.label,
      title: dict.about.available.value,
      subtitle: "",
      color: "from-emerald-500/20 to-green-500/20 border-emerald-500/30",
      iconColor: "text-emerald-400",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={cn("text-center mb-16 lg:mb-20", isRTL && "text-center")}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-4">
            ✦ {dict.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {dict.about.title}{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {dict.about.titleHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className={cn("grid lg:grid-cols-2 gap-12 lg:gap-16 items-start")}>
          {/* Left - Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-900/30 to-purple-900/20 border border-violet-500/20 p-8">
              <div
                className={cn(
                  "flex items-center gap-6",
                  isRTL && "flex-row-reverse",
                )}
              >
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-violet-500/40">
                    <img
                      src="/images/profile.jpg"
                      alt="Ahmed Abdlmawla"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background =
                            "linear-gradient(135deg, #7c3aed, #0891b2)";
                          parent.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:40px;">👨‍💻</div>`;
                        }
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-950" />
                </div>

                <div className={cn(isRTL && "text-right")}>
                  <h3 className="text-xl font-bold text-white">
                    Ahmed Abdlmawla
                  </h3>
                  <p className="text-violet-400 text-sm font-medium">
                    {dict.hero.title}
                  </p>
                  <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                    <MapPin size={11} />
                    {dict.about.location.value}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                className={cn(
                  "mt-6 text-gray-300 text-sm leading-relaxed",
                  isRTL && "text-right",
                )}
              >
                {dict.about.description}
              </p>

              {/* Status Badge */}
              <div
                className={cn(
                  "mt-4 flex items-center gap-2",
                  isRTL && "flex-row-reverse",
                )}
              >
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span className="text-emerald-400 text-xs font-semibold">
                  {dict.about.available.value}
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
                >
                  <div className="text-2xl mb-1">{stat.emoji}</div>
                  <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    {
                      dict.about.stats[
                        stat.key as keyof typeof dict.about.stats
                      ]
                    }
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            {infoCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className={cn(
                    "flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br border backdrop-blur-sm hover:scale-[1.02] transition-all duration-300",
                    card.color,
                    isRTL && "flex-row-reverse text-right",
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0",
                      card.iconColor,
                    )}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mb-1">
                      {card.label}
                    </p>
                    <p className="text-white font-semibold text-sm">
                      {card.title}
                    </p>
                    {card.subtitle && (
                      <p className="text-gray-400 text-xs mt-0.5">
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Tech highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10"
            >
              <p
                className={cn(
                  "text-gray-400 text-xs font-medium uppercase tracking-widest mb-3",
                  isRTL && "text-right",
                )}
              >
                {isRTL ? "أبرز التقنيات" : "Core Expertise"}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React 19",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-violet-500/15 border border-violet-500/25 text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.a
              target="_blank"
              href={CV_LINK}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-4 py-6 justify-center text-xl font-semibold rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
            >
              <Download size={22} />
              {dict.nav.downloadCV}
              <SiReaddotcv />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
