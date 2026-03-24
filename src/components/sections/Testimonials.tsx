'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import { Star } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations as t } from '@/lib/translations';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < rating ? 'text-rose fill-rose' : 'text-black/[0.06]'}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { lang } = useLanguage();

  return (
    <section id="testimonials" className="py-14 sm:py-28 lg:py-36 bg-cream/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-20">
            <p className="text-[10px] sm:text-[11px] text-blush-dark/70 uppercase tracking-[0.25em] font-medium mb-3 sm:mb-4">
              {lang === 'en' ? 'Testimonials' : 'شهادات'}
            </p>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary mb-3 sm:mb-5">
              {t.testimonials.heading[lang]}
            </h2>
            <div className="w-8 h-px bg-blush-dark/20 mx-auto" />
          </div>
        </ScrollReveal>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-3 sm:gap-5 overflow-x-auto sm:overflow-visible sm:grid sm:grid-cols-3 pb-3 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:snap-none">
          {t.testimonials.items.map((item, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <div className="bg-white rounded-xl p-5 sm:p-7 border border-black/[0.03] h-full flex flex-col min-w-[260px] sm:min-w-0 snap-start">
                {/* Service + Rating */}
                <div className="flex items-center justify-between mb-3 sm:mb-5">
                  <span className="text-[9px] sm:text-[10px] text-blush-dark/70 font-medium uppercase tracking-wider">
                    {item.service[lang]}
                  </span>
                  <StarRating rating={5} />
                </div>

                {/* Quote */}
                <p className="text-text-secondary text-[12px] sm:text-[13px] leading-[1.7] sm:leading-[1.8] mb-4 sm:mb-6 flex-1 line-clamp-4 sm:line-clamp-none">
                  &ldquo;{lang === 'en' ? item.textEn : item.textAr}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-5 border-t border-black/[0.04]">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blush/40 to-rose-light/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-text-secondary text-[10px] sm:text-[11px] font-medium">
                      {item.name[lang].charAt(0)}
                    </span>
                  </div>
                  <p className="text-text-primary text-xs sm:text-sm font-medium">
                    {item.name[lang]}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
