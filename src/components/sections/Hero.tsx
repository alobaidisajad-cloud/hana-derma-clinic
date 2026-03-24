'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/lib/LanguageContext';
import { translations as t } from '@/lib/translations';

export default function Hero() {
  const { lang, isArabic } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[85dvh] sm:min-h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #FFFAF7 0%, #FDF0F1 30%, #F9D9DC 55%, #F4B5C1 80%, #E8899A20 100%)',
      }}
    >
      {/* Soft blurred accents — contained within section */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-blush/15 blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-rose/10 blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-6 text-center py-20 sm:py-32">
        {/* Floating Logo Badge */}
        <ScrollReveal delay={0.1}>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full mb-8 sm:mb-12 overflow-hidden"
          >
            <Image src="/logo.png" alt="Hana Derma Clinic" width={144} height={144} className="w-full h-full object-cover scale-150" />
          </motion.div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.2}>
          <h1 className={`font-playfair font-semibold text-text-primary mb-4 sm:mb-6 leading-[1.1] ${
            isArabic
              ? 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl'
              : 'text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem]'
          }`}>
            {t.hero.clinicName[lang]}
          </h1>
        </ScrollReveal>

        {/* Doctor Name */}
        <ScrollReveal delay={0.3}>
          <p className="text-blush-dark/80 text-sm sm:text-lg font-medium mb-5 sm:mb-8 tracking-wide">
            {t.hero.doctorName[lang]}
          </p>
        </ScrollReveal>

        {/* Thin rule */}
        <ScrollReveal delay={0.35}>
          <div className="flex items-center justify-center gap-4 mb-5 sm:mb-8">
            <div className="h-px w-12 bg-text-primary/10" />
            <div className="w-1 h-1 rounded-full bg-text-primary/20" />
            <div className="h-px w-12 bg-text-primary/10" />
          </div>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={0.4}>
          <p className="text-text-secondary text-xs sm:text-base max-w-md mx-auto mb-8 sm:mb-12 leading-relaxed">
            {t.hero.subtitle[lang]}
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={0.5}>
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="group bg-text-primary text-white px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-text-primary/20"
            >
              {t.hero.ctaPrimary[lang]}
            </a>
            <a
              href="#services"
              className="border border-text-primary/15 hover:border-text-primary/30 text-text-primary px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300"
            >
              {t.hero.ctaSecondary[lang]}
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-white to-transparent" />
    </section>
  );
}
