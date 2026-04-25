// ============================================
// Projects Section - قسم المشاريع
// ============================================

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";
import { cn } from "../utils/cn";

// ألوان المشاريع
const PROJECT_COLORS = [
  {
    gradient: "from-violet-500/20 via-purple-500/10 to-pink-500/20",
    border: "border-violet-500/30",
    badge: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    glow: "shadow-violet-500/20",
    accent: "from-violet-500 to-purple-600",
  },
  {
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
    border: "border-cyan-500/30",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    glow: "shadow-cyan-500/20",
    accent: "from-cyan-500 to-blue-600",
  },
];

export default function Projects() {
  const { dict, isRTL } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4">
            ✦ {dict.projects.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {dict.projects.title}{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {dict.projects.titleHighlight}
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base lg:text-lg max-w-2xl mx-auto">
            {dict.projects.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {dict.projects.items.map((project, i) => {
            const colors = PROJECT_COLORS[i % PROJECT_COLORS.length];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -8 }}
                className={cn(
                  "group relative rounded-3xl overflow-hidden border backdrop-blur-sm",
                  `bg-gradient-to-br ${colors.gradient}`,
                  colors.border,
                  `hover:shadow-2xl ${colors.glow} transition-all duration-500`
                )}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className={cn("absolute top-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border", colors.badge, isRTL ? "right-4" : "left-4")}>
                    <Star size={10} fill="currentColor" />
                    {isRTL ? "مميز" : "Featured"}
                  </div>
                )}

                {/* Project Number */}
                <div className={cn(
                  "absolute top-4 text-6xl font-black text-white/5 select-none pointer-events-none",
                  isRTL ? "left-4" : "right-4"
                )}>
                  0{project.id}
                </div>

                {/* Content */}
                <div className="p-7 lg:p-8 pt-12">
                  {/* Title */}
                  <h3 className={cn("text-xl lg:text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300", `group-hover:${colors.accent}`, isRTL && "text-right")}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={cn("text-gray-300 text-sm lg:text-base leading-relaxed mb-6", isRTL && "text-right")}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className={cn("flex flex-wrap gap-2 mb-7", isRTL && "flex-row-reverse")}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/10 border border-white/15 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className={cn("flex gap-3", isRTL && "flex-row-reverse")}>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r shadow-lg transition-all duration-300",
                        colors.accent,
                        "hover:shadow-xl"
                      )}
                    >
                      <ExternalLink size={14} />
                      {dict.projects.liveDemo}
                    </motion.a>

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-gray-300 border border-white/15 hover:bg-white/10 hover:text-white hover:border-white/25 transition-all duration-300"
                    >
                      <Github size={14} />
                      {dict.projects.sourceCode}
                    </motion.a>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className={cn("h-1 w-full bg-gradient-to-r", colors.accent)} />
              </motion.div>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/3bmola22"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-violet-400 border border-violet-500/30 hover:bg-violet-500/10 hover:border-violet-500/50 transition-all duration-300"
          >
            <Github size={16} />
            {isRTL ? "عرض جميع المشاريع على GitHub" : "View All Projects on GitHub"}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
