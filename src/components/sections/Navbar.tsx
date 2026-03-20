'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations as t } from '@/lib/translations';

const navLinks = [
  { href: '#home', key: 'home' as const },
  { href: '#services', key: 'services' as const },
  { href: '#about', key: 'about' as const },
  { href: '#results', key: 'results' as const },
  { href: '#testimonials', key: 'reviews' as const },
  { href: '#contact', key: 'contact' as const },
];

export default function Navbar() {
  const { lang, toggle, isArabic } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-blush-dark/20 flex items-center justify-center bg-white/60 group-hover:border-blush-dark/40 transition-colors duration-300">
              <span className="font-playfair text-blush-dark text-base font-semibold">H</span>
            </div>
            <span className="font-playfair text-text-primary text-[15px] font-medium tracking-wide hidden sm:block">
              {isArabic ? 'هناء ديرما' : 'Hana Derma'}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-text-secondary hover:text-text-primary transition-colors duration-300 tracking-wide uppercase"
              >
                {t.nav[link.key][lang]}
              </a>
            ))}
          </div>

          {/* Right side: Lang toggle + CTA + Mobile */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-text-secondary hover:text-text-primary border border-transparent hover:border-blush/30 transition-all duration-300"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              <span>{isArabic ? 'EN' : 'ع'}</span>
            </button>

            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 bg-text-primary hover:bg-text-primary/90 text-white px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 hover:shadow-md"
            >
              <Phone size={12} />
              <span>{t.nav.bookNow[lang]}</span>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-primary"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-black/[0.04]"
          >
            <div className="px-6 py-8 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-text-secondary hover:text-text-primary transition-colors py-3 text-[15px]"
                >
                  {t.nav[link.key][lang]}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-text-primary text-white px-6 py-3 rounded-full text-sm font-medium"
                >
                  <Phone size={14} />
                  {t.nav.bookNow[lang]}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
