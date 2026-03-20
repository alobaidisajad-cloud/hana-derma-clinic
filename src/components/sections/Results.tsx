'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/lib/LanguageContext';
import { translations as t } from '@/lib/translations';

const gradients = [
  'from-[#F5E6E8] to-[#E8D0D3]',
  'from-[#F0E0D0] to-[#E8D0C0]',
  'from-[#F0E8F0] to-[#E0D0E0]',
  'from-[#E8E0D8] to-[#D8D0C8]',
  'from-[#F0E0E0] to-[#E0D0D0]',
  'from-[#E8DCD0] to-[#D8CCC0]',
];

export default function Results() {
  const { lang } = useLanguage();

  return (
    <section id="results" className="py-14 sm:py-28 lg:py-36 bg-warm-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-20">
            <p className="text-[10px] sm:text-[11px] text-blush-dark/70 uppercase tracking-[0.25em] font-medium mb-3 sm:mb-4">
              {lang === 'en' ? 'Gallery' : 'المعرض'}
            </p>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary mb-3 sm:mb-5">
              {t.results.heading[lang]}
            </h2>
            <div className="w-8 h-px bg-blush-dark/20 mx-auto mb-3 sm:mb-5" />
            <p className="text-text-secondary text-xs sm:text-sm max-w-md mx-auto">
              {t.results.subheading[lang]}
            </p>
          </div>
        </ScrollReveal>

        {/* Grid — 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
          {t.results.items.map((item, index) => (
            <ScrollReveal key={index} delay={0.05 * index}>
              <div className="group rounded-lg sm:rounded-xl overflow-hidden cursor-pointer">
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${gradients[index]}`}>
                  {/* Split labels */}
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 flex items-center justify-center">
                      <span className="bg-white/50 backdrop-blur-sm text-text-primary text-[8px] sm:text-[10px] font-medium px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full tracking-wide uppercase">
                        {t.results.before[lang]}
                      </span>
                    </div>
                    <div className="w-px bg-white/20" />
                    <div className="flex-1 flex items-center justify-center">
                      <span className="bg-white/50 backdrop-blur-sm text-text-primary text-[8px] sm:text-[10px] font-medium px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full tracking-wide uppercase">
                        {t.results.after[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Treatment badge */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <span className="bg-text-primary/70 backdrop-blur-sm text-white text-[8px] sm:text-[10px] font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      {item[lang]}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
