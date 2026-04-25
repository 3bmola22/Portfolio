// ============================================
// Contact Section - قسم التواصل
// React Hook Form + Zod + EmailJS
// ============================================

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLang } from "../context/LanguageContext";
import { cn } from "../utils/cn";

// ============================================================
// ⚠️ يا أحمد: ضع بيانات EmailJS الخاصة بك هنا
// 1. روح على https://www.emailjs.com/ واعمل حساب مجاني
// 2. أضف Email Service (Gmail)
// 3. أنشئ Email Template
// 4. احتل الـ Service ID و Template ID و Public Key
// ============================================================
const EMAILJS_CONFIG = {
  serviceId: "service_abdlmawla", // ⚠️ غيّر هذا
  templateId: "template_abdlmawla", // ⚠️ غيّر هذا
  publicKey: "ysWx6gclbf7N-Acul", // ⚠️ غيّر هذا
};

// ⚠️ يا أحمد: بيانات التواصل
const CONTACT_INFO = {
  email: "3bmola22@gmail.com",
  phone: "+20 1017633101",
  whatsapp: "https://wa.me/201017633101",
  location: "Cairo, Egypt",
  github: "https://github.com/3bmola22",
  linkedin: "https://www.linkedin.com/in/ahmed-abdlmawla-9a2750329",
};

// Zod validation schema
const createSchema = (isRTL: boolean) =>
  z.object({
    name: z
      .string()
      .min(2, isRTL ? "الاسم يجب أن يكون أكثر من حرفين" : "Name must be at least 2 characters"),
    email: z
      .string()
      .email(isRTL ? "بريد إلكتروني غير صالح" : "Invalid email address"),
    subject: z
      .string()
      .min(3, isRTL ? "الموضوع يجب أن يكون أكثر من 3 أحرف" : "Subject must be at least 3 characters"),
    message: z
      .string()
      .min(10, isRTL ? "الرسالة يجب أن تكون أكثر من 10 أحرف" : "Message must be at least 10 characters"),
  });

type FormData = z.infer<ReturnType<typeof createSchema>>;

export default function Contact() {
  const { dict, isRTL } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const schema = createSchema(isRTL);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: data.name,
          email: data.email,
          title: data.subject,
          message: data.message,
          to_email: CONTACT_INFO.email,
        },
        EMAILJS_CONFIG.publicKey,
      );
      toast.success(dict.contact.form.success, {
        position: isRTL ? "bottom-left" : "bottom-right",
        style: { fontFamily: isRTL ? "Cairo, sans-serif" : "Inter, sans-serif" },
      });
      reset();
    } catch {
      toast.error(dict.contact.form.error, {
        position: isRTL ? "bottom-left" : "bottom-right",
        style: { fontFamily: isRTL ? "Cairo, sans-serif" : "Inter, sans-serif" },
      });
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: CONTACT_INFO.github, label: "GitHub", color: "hover:text-white hover:bg-white/10" },
    { icon: FaLinkedin, href: CONTACT_INFO.linkedin, label: "LinkedIn", color: "hover:text-blue-400 hover:bg-blue-500/10" },
    { icon: FaWhatsapp, href: CONTACT_INFO.whatsapp, label: "WhatsApp", color: "hover:text-green-400 hover:bg-green-500/10" },
    { icon: MdEmail, href: `mailto:${CONTACT_INFO.email}`, label: "Email", color: "hover:text-red-400 hover:bg-red-500/10" },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-4">
            ✦ {dict.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {dict.contact.title}{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {dict.contact.titleHighlight}
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base lg:text-lg max-w-2xl mx-auto">
            {dict.contact.description}
          </p>
        </motion.div>

        <div className={cn("grid lg:grid-cols-5 gap-10 lg:gap-12")}>

          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Info Cards */}
            {[
              {
                icon: Mail,
                label: dict.contact.info.email,
                value: CONTACT_INFO.email,
                href: `mailto:${CONTACT_INFO.email}`,
                color: "text-violet-400",
                bg: "bg-violet-500/10 border-violet-500/20",
              },
              {
                icon: Phone,
                label: dict.contact.info.phone,
                value: CONTACT_INFO.phone,
                href: CONTACT_INFO.whatsapp,
                color: "text-green-400",
                bg: "bg-green-500/10 border-green-500/20",
              },
              {
                icon: MapPin,
                label: dict.contact.info.location,
                value: CONTACT_INFO.location,
                href: "https://maps.google.com/?q=Cairo,Egypt",
                color: "text-cyan-400",
                bg: "bg-cyan-500/10 border-cyan-500/20",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: isRTL ? -4 : 4, scale: 1.01 }}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:brightness-110",
                    item.bg,
                    isRTL && "flex-row-reverse text-right"
                  )}
                >
                  <div className={cn("w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0", item.color)}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
                    <p className="text-white text-sm font-semibold">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div className={cn("p-5 rounded-2xl bg-white/5 border border-white/10")}>
              <p className={cn("text-gray-400 text-xs font-medium uppercase tracking-widest mb-4", isRTL && "text-right")}>
                {dict.contact.info.social}
              </p>
              <div className={cn("flex gap-3", isRTL && "flex-row-reverse")}>
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      "w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 transition-all duration-300",
                      color
                    )}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-7 lg:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-5"
              noValidate
            >
              {/* Name + Email Row */}
              <div className={cn("grid sm:grid-cols-2 gap-4")}>
                {/* Name */}
                <div className="space-y-1.5">
                  <label className={cn("text-gray-400 text-xs font-medium", isRTL && "block text-right")}>
                    {dict.contact.form.name} *
                  </label>
                  <input
                    {...register("name")}
                    placeholder={dict.contact.form.namePlaceholder}
                    dir={isRTL ? "rtl" : "ltr"}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm",
                      "focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-300",
                      errors.name && "border-red-500/60"
                    )}
                  />
                  {errors.name && (
                    <p className={cn("text-red-400 text-xs", isRTL && "text-right")}>{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className={cn("text-gray-400 text-xs font-medium", isRTL && "block text-right")}>
                    {dict.contact.form.email} *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder={dict.contact.form.emailPlaceholder}
                    dir="ltr"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm",
                      "focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-300",
                      errors.email && "border-red-500/60"
                    )}
                  />
                  {errors.email && (
                    <p className={cn("text-red-400 text-xs", isRTL && "text-right")}>{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className={cn("text-gray-400 text-xs font-medium", isRTL && "block text-right")}>
                  {dict.contact.form.subject} *
                </label>
                <input
                  {...register("subject")}
                  placeholder={dict.contact.form.subjectPlaceholder}
                  dir={isRTL ? "rtl" : "ltr"}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm",
                    "focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-300",
                    errors.subject && "border-red-500/60"
                  )}
                />
                {errors.subject && (
                  <p className={cn("text-red-400 text-xs", isRTL && "text-right")}>{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className={cn("text-gray-400 text-xs font-medium", isRTL && "block text-right")}>
                  {dict.contact.form.message} *
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder={dict.contact.form.messagePlaceholder}
                  dir={isRTL ? "rtl" : "ltr"}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm resize-none",
                    "focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-300",
                    errors.message && "border-red-500/60"
                  )}
                />
                {errors.message && (
                  <p className={cn("text-red-400 text-xs", isRTL && "text-right")}>{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-sm",
                  "bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg shadow-violet-500/25",
                  "hover:shadow-violet-500/40 transition-shadow duration-300",
                  "disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {dict.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send size={16} className={isRTL ? "rotate-180" : ""} />
                    {dict.contact.form.send}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
