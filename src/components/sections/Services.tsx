'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/lib/LanguageContext';
import { translations as t } from '@/lib/translations';
import {
  Zap,
  Sparkles,
  Sun,
  Baby,
  Scissors,
  Syringe,
} from 'lucide-react';

const icons = [Zap, Sparkles, Sun, Baby, Scissors, Syringe];

export default function Services() {
  const { lang } = useLanguage();
  const items = t.services.items;

  return (
    <section id="services" className="py-14 sm:py-28 lg:py-36 bg-warm-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-20">
            <p className="text-[10px] sm:text-[11px] text-blush-dark/70 uppercase tracking-[0.25em] font-medium mb-3 sm:mb-4">
              {lang === 'en' ? 'What we offer' : 'ما نقدمه'}
            </p>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary mb-3 sm:mb-5">
              {t.services.heading[lang]}
            </h2>
            <div className="w-8 h-px bg-blush-dark/20 mx-auto mb-3 sm:mb-5" />
            <p className="text-text-secondary text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              {t.services.subheading[lang]}
            </p>
          </div>
        </ScrollReveal>

        {/* Cards — 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {items.map((service, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={index} delay={0.05 * index}>
                <div className="group bg-white rounded-xl p-4 sm:p-7 transition-all duration-500 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] border border-black/[0.03] hover:border-blush/20 h-full">
                  {/* Icon */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blush-light/50 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-blush/30 transition-colors duration-300">
                    <Icon className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-blush-dark/70" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-[13px] sm:text-base font-semibold text-text-primary mb-1.5 sm:mb-2.5">
                    {lang === 'en' ? service.titleEn : service.titleAr}
                  </h3>

                  {/* Description — hidden on very small screens to reduce scroll */}
                  <p className="text-text-secondary text-[11px] sm:text-[13px] leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {lang === 'en' ? service.descEn : service.descAr}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
