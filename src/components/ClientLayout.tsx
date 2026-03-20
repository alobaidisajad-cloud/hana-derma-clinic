'use client';

import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';

function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { isArabic } = useLanguage();

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} lang={isArabic ? 'ar' : 'en'}>
      {children}
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LanguageWrapper>{children}</LanguageWrapper>
    </LanguageProvider>
  );
}
