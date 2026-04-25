// ============================================
// Skills Section - قسم المهارات التقنية
// ============================================

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiFramer,
  SiZod,
} from "react-icons/si";
import { Globe, Zap, Smartphone } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { cn } from "../utils/cn";

// ⚠️ يا أحمد: يمكنك تعديل المهارات ونسب الإتقان هنا
const SKILLS = [
  // Core Technologies
  {
    name: "React 19",
    icon: SiReact,

    color: "from-cyan-400 to-cyan-600",
    glow: "shadow-cyan-500/30",
    category: "core",
    iconColor: "#61DAFB",
  },
  {
    name: "Next.js 16",
    icon: SiNextdotjs,

    color: "from-gray-300 to-white",
    glow: "shadow-white/20",
    category: "core",
    iconColor: "#ffffff",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,

    color: "from-blue-400 to-blue-600",
    glow: "shadow-blue-500/30",
    category: "core",
    iconColor: "#3178C6",
  },
  // Styling
  {
    name: "Tailwind CSS v4",
    icon: SiTailwindcss,

    color: "from-teal-400 to-cyan-500",
    glow: "shadow-teal-500/30",
    category: "styling",
    iconColor: "#06B6D4",
  },
  {
    name: "Framer Motion 12",
    icon: SiFramer,

    color: "from-pink-400 to-purple-500",
    glow: "shadow-pink-500/30",
    category: "styling",
    iconColor: "#FF0080",
  },
  {
    name: "Responsive Design",
    icon: Smartphone,

    color: "from-violet-400 to-purple-500",
    glow: "shadow-violet-500/30",
    category: "styling",
    iconColor: "#8B5CF6",
    isLucide: true,
  },
  // Tools
  {
    name: "React Hook Form + Zod",
    icon: SiZod,

    color: "from-indigo-400 to-blue-500",
    glow: "shadow-indigo-500/30",
    category: "tools",
    iconColor: "#6C47FF",
  },
  {
    name: "Git & GitHub",
    icon: SiGithub,
    color: "from-gray-400 to-gray-600",
    glow: "shadow-gray-500/30",
    category: "tools",
    iconColor: "#ffffff",
  },
  {
    name: "SEO & Performance",
    icon: Globe,
    color: "from-emerald-400 to-green-500",
    glow: "shadow-emerald-500/30",
    category: "tools",
    iconColor: "#10B981",
    isLucide: true,
  },
  {
    name: "Web Performance",
    icon: Zap,
    glow: "shadow-yellow-500/30",
    category: "tools",
    iconColor: "#F59E0B",
    isLucide: true,
  },
];

interface Skill {
  name: string;
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  level: number;
  color: string;
  glow: string;
  category: string;
  iconColor: string;
  isLucide?: boolean;
}

function SkillCard({
  skill,
  index,
  isInView,
}: {
  skill: Skill;
  index: number;
  isInView: boolean;
}) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={cn(
        "group relative p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm",
        "hover:bg-white/8 hover:border-violet-500/30 transition-all duration-300",
        `hover:shadow-lg ${skill.glow}`,
      )}
    >
      {/* Icon */}
      <div className="flex items-center justify-center mb-4">
        <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {skill.isLucide ? (
            <Icon size={22} color={skill.iconColor} />
          ) : (
            <Icon size={22} color={skill.iconColor} />
          )}
        </div>
      </div>

      {/* Name */}
      <p className="text-white text-sm font-semibold mb-3 text-center">
        {skill.name}
      </p>

      {/* Progress Bar */}
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.08 + 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={cn("h-full rounded-full bg-gradient-to-r", skill.color)}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { dict, isRTL } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32 overflow-hidden bg-slate-950"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
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
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-4">
            ✦ {dict.skills.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {dict.skills.title}{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {dict.skills.titleHighlight}
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base lg:text-lg max-w-2xl mx-auto">
            {dict.skills.description}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
          {SKILLS.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-6 lg:p-8 rounded-3xl bg-gradient-to-r from-violet-900/30 via-purple-900/20 to-cyan-900/30 border border-violet-500/20 text-center"
        >
          <p
            className={cn(
              "text-gray-300 text-sm lg:text-base leading-relaxed",
              isRTL && "text-right sm:text-center",
            )}
          >
            {isRTL
              ? "🎓 خرّيج دبلوم احترافي في تطوير الواجهات الأمامية من Route Academy · بنيت منصة تجارة إلكترونية بتقييم ⚡ 98-100 في Lighthouse"
              : "🎓 Front-End Web Development Professional Diploma · Route Academy · Built an e-commerce platform with ⚡ 98-100 Lighthouse scores"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
