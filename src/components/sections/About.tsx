'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { useLanguage } from '@/lib/LanguageContext';
import { translations as t } from '@/lib/translations';

export default function About() {
  const { lang, isArabic } = useLanguage();

  return (
    <section id="about" className="py-14 sm:py-28 lg:py-36 bg-cream/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Mobile: stacked compact / Desktop: side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Avatar — smaller on mobile */}
          <ScrollReveal direction={isArabic ? 'right' : 'left'}>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full p-[2px] sm:p-[3px] bg-gradient-to-br from-blush-dark/20 via-blush/30 to-rose/25">
                  <div className="w-full h-full rounded-full overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #F5E6E8 0%, #E8C9CD 40%, #E8899A 100%)',
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-playfair text-white/90 text-2xl sm:text-4xl font-semibold">Dr.</p>
                        <p className="font-playfair text-white/60 text-xs sm:text-base mt-1">Hana</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-sm px-4 sm:px-5 py-1.5 sm:py-2 border border-black/[0.04]">
                  <p className="text-text-primary text-[10px] sm:text-xs font-medium whitespace-nowrap">
                    {t.about.experience[lang]}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction={isArabic ? 'left' : 'right'}>
            <div>
              <p className="text-[10px] sm:text-[11px] text-blush-dark/70 uppercase tracking-[0.25em] font-medium mb-3 sm:mb-4">
                {t.about.label[lang]}
              </p>

              <h2 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-semibold text-text-primary mb-1.5 sm:mb-2">
                {t.about.doctorName[lang]}
              </h2>
              <p className="text-blush-dark/70 text-xs sm:text-sm mb-5 sm:mb-8">
                {t.about.specialty[lang]}
              </p>

              <div className="space-y-3 sm:space-y-4 text-text-secondary text-[12px] sm:text-[14px] leading-[1.7] sm:leading-[1.8] mb-5 sm:mb-8">
                <p>{t.about.bio1[lang]}</p>
                <p className="hidden sm:block">{t.about.bio2[lang]}</p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-10">
                {t.about.badges[lang].map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 sm:px-3 py-1 rounded-full bg-blush-light/40 text-text-secondary text-[10px] sm:text-[11px] font-medium tracking-wide"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Stats — compact row on mobile */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-5 sm:pt-8 border-t border-black/[0.04]">
                <div>
                  <p className="font-playfair text-lg sm:text-2xl font-semibold text-text-primary">
                    <AnimatedCounter target={52} suffix="K+" />
                  </p>
                  <p className="text-text-light text-[10px] sm:text-xs mt-0.5 sm:mt-1">{t.about.stats.followers[lang]}</p>
                </div>
                <div>
                  <p className="font-playfair text-lg sm:text-2xl font-semibold text-text-primary">
                    <AnimatedCounter target={589} />
                  </p>
                  <p className="text-text-light text-[10px] sm:text-xs mt-0.5 sm:mt-1">{t.about.stats.posts[lang]}</p>
                </div>
                <div>
                  <p className="font-playfair text-lg sm:text-2xl font-semibold text-text-primary">
                    <AnimatedCounter target={10} suffix="M+" />
                  </p>
                  <p className="text-text-light text-[10px] sm:text-xs mt-0.5 sm:mt-1">{t.about.stats.views[lang]}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
