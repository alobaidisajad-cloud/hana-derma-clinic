'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { useLanguage } from '@/lib/LanguageContext';
import { translations as t } from '@/lib/translations';

const treatments = [
  {
    beforeGradient: 'linear-gradient(135deg, #F5E0E2 0%, #E8C8CC 100%)',
    afterGradient: 'linear-gradient(135deg, #FDF0F1 0%, #F4B5C1 100%)',
  },
  {
    beforeGradient: 'linear-gradient(135deg, #F0D8DA 0%, #E0C0C4 100%)',
    afterGradient: 'linear-gradient(135deg, #FBE8EC 0%, #E8899A 100%)',
  },
  {
    beforeGradient: 'linear-gradient(135deg, #F0E0E4 0%, #D8C0C8 100%)',
    afterGradient: 'linear-gradient(135deg, #F9D9DC 0%, #F4B5C1 100%)',
  },
  {
    beforeGradient: 'linear-gradient(135deg, #ECD8DC 0%, #D8C0C4 100%)',
    afterGradient: 'linear-gradient(135deg, #FDF0F1 0%, #E8899A 100%)',
  },
  {
    beforeGradient: 'linear-gradient(135deg, #F0D4D8 0%, #E0BCC0 100%)',
    afterGradient: 'linear-gradient(135deg, #FBE4E8 0%, #F4B5C1 100%)',
  },
  {
    beforeGradient: 'linear-gradient(135deg, #ECD0D8 0%, #D0B8C0 100%)',
    afterGradient: 'linear-gradient(135deg, #F9D9DC 0%, #E8899A 100%)',
  },
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
              <BeforeAfterSlider
                beforeGradient={treatments[index].beforeGradient}
                afterGradient={treatments[index].afterGradient}
                beforeLabel={t.results.before[lang]}
                afterLabel={t.results.after[lang]}
                treatmentLabel={item[lang]}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
