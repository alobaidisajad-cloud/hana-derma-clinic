'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations as t } from '@/lib/translations';

export default function Contact() {
  const { lang, isArabic } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.contact.thankYou[lang]);
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-14 sm:py-28 lg:py-36 bg-warm-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-20">
            <p className="text-[10px] sm:text-[11px] text-blush-dark/70 uppercase tracking-[0.25em] font-medium mb-3 sm:mb-4">
              {lang === 'en' ? 'Get in touch' : 'تواصل معنا'}
            </p>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary mb-3 sm:mb-5">
              {t.contact.heading[lang]}
            </h2>
            <div className="w-8 h-px bg-blush-dark/20 mx-auto mb-3 sm:mb-5" />
            <p className="text-text-secondary text-xs sm:text-sm max-w-md mx-auto">
              {t.contact.subheading[lang]}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Form */}
          <ScrollReveal direction={isArabic ? 'right' : 'left'}>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-5 sm:p-8 border border-black/[0.03]">
              <h3 className="font-playfair text-base sm:text-lg font-semibold text-text-primary mb-5 sm:mb-7">
                {t.contact.formTitle[lang]}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {/* Name + Phone side by side on mobile */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-text-secondary text-[10px] sm:text-[12px] font-medium mb-1 sm:mb-1.5 uppercase tracking-wider">
                      {t.contact.nameLabel[lang]}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder={t.contact.namePlaceholder[lang]}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-black/[0.06] bg-transparent text-text-primary placeholder:text-text-light/50 text-xs sm:text-sm focus:outline-none focus:border-blush-dark/30 focus:ring-1 focus:ring-blush-dark/10 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-text-secondary text-[10px] sm:text-[12px] font-medium mb-1 sm:mb-1.5 uppercase tracking-wider">
                      {t.contact.phoneLabel[lang]}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+964"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-black/[0.06] bg-transparent text-text-primary placeholder:text-text-light/50 text-xs sm:text-sm focus:outline-none focus:border-blush-dark/30 focus:ring-1 focus:ring-blush-dark/10 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-secondary text-[10px] sm:text-[12px] font-medium mb-1 sm:mb-1.5 uppercase tracking-wider">
                    {t.contact.serviceLabel[lang]}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-black/[0.06] bg-transparent text-text-primary text-xs sm:text-sm focus:outline-none focus:border-blush-dark/30 focus:ring-1 focus:ring-blush-dark/10 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">{t.contact.servicePlaceholder[lang]}</option>
                    {t.contact.serviceOptions[lang].map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-text-secondary text-[10px] sm:text-[12px] font-medium mb-1 sm:mb-1.5 uppercase tracking-wider">
                    {t.contact.messageLabel[lang]}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={2}
                    placeholder={t.contact.messagePlaceholder[lang]}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-black/[0.06] bg-transparent text-text-primary placeholder:text-text-light/50 text-xs sm:text-sm focus:outline-none focus:border-blush-dark/30 focus:ring-1 focus:ring-blush-dark/10 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-text-primary text-white py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-md mt-1 sm:mt-2"
                >
                  <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {t.contact.submit[lang]}
                </button>
              </div>
            </form>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction={isArabic ? 'left' : 'right'}>
            <div className="space-y-3 sm:space-y-5">
              {/* Contact Grid — always 2×2 */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { icon: Phone, label: t.contact.phone[lang], value: '+964 770 000 0000' },
                  { icon: Mail, label: t.contact.email[lang], value: 'info@hanadermaclinic.com' },
                  { icon: MapPin, label: t.contact.location[lang], value: isArabic ? 'بغداد، العراق' : 'Baghdad, Iraq' },
                  { icon: Clock, label: t.contact.hours[lang], value: t.contact.hoursValue[lang] },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-5 border border-black/[0.03]">
                    <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blush-dark/50 mb-2 sm:mb-3" strokeWidth={1.5} />
                    <p className="text-text-primary text-[10px] sm:text-xs font-medium mb-0.5">{item.label}</p>
                    <p className="text-text-light text-[10px] sm:text-[12px] break-all sm:break-normal">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-1.5 sm:gap-2">
                <a
                  href="https://instagram.com/dr.hana.dermaclinic1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-white border border-black/[0.03] py-2 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-medium text-text-secondary hover:border-blush/20 hover:text-text-primary transition-all duration-300"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-white border border-black/[0.03] py-2 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-medium text-text-secondary hover:border-blush/20 hover:text-text-primary transition-all duration-300"
                >
                  Facebook
                </a>
                <a
                  href="https://wa.me/9647700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 bg-white border border-black/[0.03] py-2 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-medium text-text-secondary hover:border-blush/20 hover:text-text-primary transition-all duration-300"
                >
                  <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  WhatsApp
                </a>
              </div>

              {/* Map — shorter on mobile */}
              <div className="bg-cream/60 rounded-lg sm:rounded-xl h-32 sm:h-52 flex items-center justify-center border border-black/[0.03]">
                <div className="text-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-text-light/40 mx-auto mb-1.5 sm:mb-2" strokeWidth={1.5} />
                  <p className="text-text-light text-[10px] sm:text-xs">{t.contact.mapLabel[lang]}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
