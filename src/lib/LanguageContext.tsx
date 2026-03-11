'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { en } from '@/lib/translations/en';
import { fr } from '@/lib/translations/fr';
import type { Translations } from '@/lib/translations';

export type Language = 'EN' | 'FR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const defaultContext: LanguageContextType = {
  language: 'EN',
  setLanguage: () => {},
  t: en,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

const STORAGE_KEY = 'tfo-language';

const translationMap: Record<Language, Translations> = { EN: en, FR: fr };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === 'EN' || stored === 'FR') {
      setLanguageState(stored);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  const t = translationMap[language];

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
