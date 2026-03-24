'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Gift, Sparkles, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations as t } from '@/lib/translations';

function CountdownTimer() {
  const { lang } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 14);

    const interval = setInterval(() => {
      const distance = target.getTime() - Date.now();
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: timeLeft.days, label: t.promo.days[lang] },
    { value: timeLeft.hours, label: t.promo.hours[lang] },
    { value: timeLeft.minutes, label: t.promo.min[lang] },
    { value: timeLeft.seconds, label: t.promo.sec[lang] },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {units.map((unit, i) => (
        <div key={i} className="flex items-center gap-2 sm:gap-3">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 min-w-[40px] sm:min-w-[48px]">
              <p className="font-playfair text-base sm:text-xl font-semibold text-white tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </p>
            </div>
            <p className="text-white/50 text-[8px] sm:text-[10px] mt-1 sm:mt-1.5 uppercase tracking-wider">{unit.label}</p>
          </div>
          {i < units.length - 1 && (
            <span className="text-white/20 text-sm sm:text-lg -mt-4 sm:-mt-5">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Promotions() {
  const { lang } = useLanguage();

  return (
    <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #3D2E32 0%, #5A3040 50%, #4A2838 100%)',
        }}
      />

      {/* Subtle decoration */}
      <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-blush/8 blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] rounded-full bg-rose/8 blur-[80px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/8 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-6 sm:mb-10">
            <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-light" />
            <span className="text-white/70 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase">
              {t.promo.badge[lang]}
            </span>
          </div>

          <h2 className="font-playfair text-xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-5">
            {t.promo.heading[lang]}
          </h2>

          <p className="text-white/40 text-xs sm:text-sm max-w-md mx-auto mb-8 sm:mb-12 leading-relaxed">
            {t.promo.description[lang]}
          </p>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/30" />
            <span className="text-white/30 text-[9px] sm:text-[11px] uppercase tracking-wider">{t.promo.endsIn[lang]}</span>
          </div>
          <div className="flex justify-center mb-8 sm:mb-12">
            <CountdownTimer />
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-text-primary px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            {t.promo.cta[lang]}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
