'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Star, X } from 'lucide-react';
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

        {/* Cards grid — no horizontal scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {t.testimonials.items.map((item, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <div
                onClick={() => setExpandedIndex(index)}
                className="bg-white rounded-xl p-5 sm:p-7 border border-black/[0.03] h-full flex flex-col cursor-pointer group hover:shadow-lg hover:shadow-blush/10 hover:border-blush/20 transition-all duration-300"
              >
                {/* Service + Rating */}
                <div className="flex items-center justify-between mb-3 sm:mb-5">
                  <span className="text-[9px] sm:text-[10px] text-blush-dark/70 font-medium uppercase tracking-wider">
                    {item.service[lang]}
                  </span>
                  <StarRating rating={5} />
                </div>

                {/* Quote — truncated */}
                <p className="text-text-secondary text-[12px] sm:text-[13px] leading-[1.7] sm:leading-[1.8] mb-3 sm:mb-6 flex-1 line-clamp-3">
                  &ldquo;{lang === 'en' ? item.textEn : item.textAr}&rdquo;
                </p>

                {/* Read more hint */}
                <p className="text-[10px] sm:text-[11px] text-blush-dark/60 font-medium mb-3 sm:mb-4 group-hover:text-blush-dark transition-colors">
                  {lang === 'en' ? 'Tap to read more →' : '← اضغط لقراءة المزيد'}
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

      {/* Expanded Review Modal */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-5 sm:p-8"
            onClick={() => setExpandedIndex(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-text-primary/40 backdrop-blur-sm" />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative bg-white rounded-2xl p-6 sm:p-10 max-w-lg w-full shadow-2xl border border-blush/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setExpandedIndex(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 rounded-full bg-cream/60 hover:bg-blush/20 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X size={14} className="text-text-secondary" />
              </button>

              {/* Service + Rating */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-[11px] text-blush-dark/70 font-medium uppercase tracking-wider">
                  {t.testimonials.items[expandedIndex].service[lang]}
                </span>
                <StarRating rating={5} />
              </div>

              {/* Full Quote */}
              <p className="text-text-secondary text-sm sm:text-[15px] leading-[1.8] sm:leading-[1.9] mb-6 sm:mb-8">
                &ldquo;{lang === 'en'
                  ? t.testimonials.items[expandedIndex].textEn
                  : t.testimonials.items[expandedIndex].textAr}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-black/[0.04]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blush/40 to-rose-light/40 flex items-center justify-center">
                  <span className="text-text-secondary text-xs sm:text-sm font-medium">
                    {t.testimonials.items[expandedIndex].name[lang].charAt(0)}
                  </span>
                </div>
                <p className="text-text-primary text-sm sm:text-base font-medium">
                  {t.testimonials.items[expandedIndex].name[lang]}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
