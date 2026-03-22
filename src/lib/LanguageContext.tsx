'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useTransition,
  type ReactNode,
} from 'react';
import { en, es, fr, pt, type Translations } from '@/lib/translations';

export type Language = 'EN' | 'FR' | 'ES' | 'PT';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isLanguagePending: boolean;
  t: Translations;
}

const defaultContext: LanguageContextType = {
  language: 'EN',
  setLanguage: () => {},
  isLanguagePending: false,
  t: en,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

const STORAGE_KEY = 'tfo-language';

const translationMap: Record<Language, Translations> = {
  EN: en,
  FR: fr,
  ES: es,
  PT: pt,
};

function isLanguage(value: string | null): value is Language {
  return value === 'EN' || value === 'FR' || value === 'ES' || value === 'PT';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');
  const [mounted, setMounted] = useState(false);
  const [isLanguagePending, startLanguageTransition] = useTransition();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) {
      setLanguageState(stored);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    localStorage.setItem(STORAGE_KEY, lang);
    if (lang === language) {
      return;
    }

    startLanguageTransition(() => {
      setLanguageState(lang);
    });
  };

  const t = translationMap[language];

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, isLanguagePending, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
