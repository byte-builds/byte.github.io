import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.title': 'Building Digital Excellence',
    'hero.subtitle': 'We transform ideas into powerful digital solutions that drive innovation and growth.',
    'hero.cta': 'Get Started',
    'hero.cta.secondary': 'Learn More',
    'about.title': 'About Byte',
    'about.description': 'We are a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences.',
    'services.title': 'Our Services',
    'services.development': 'Development',
    'services.development.desc': 'Custom software solutions built with cutting-edge technologies.',
    'services.design': 'Design',
    'services.design.desc': 'Beautiful, intuitive interfaces that users love.',
    'services.strategy': 'Strategy',
    'services.strategy.desc': 'Data-driven approaches to digital transformation.',
    'contact.title': 'Get In Touch',
    'contact.cta': 'Contact Us',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.contact': 'تواصل معنا',
    'hero.title': 'نبني التميز الرقمي',
    'hero.subtitle': 'نحول الأفكار إلى حلول رقمية قوية تدفع الابتكار والنمو.',
    'hero.cta': 'ابدأ الآن',
    'hero.cta.secondary': 'اعرف المزيد',
    'about.title': 'عن بايت',
    'about.description': 'نحن فريق من المطورين والمصممين والاستراتيجيين المتحمسين لإنشاء تجارب رقمية استثنائية.',
    'services.title': 'خدماتنا',
    'services.development': 'التطوير',
    'services.development.desc': 'حلول برمجية مخصصة مبنية بأحدث التقنيات.',
    'services.design': 'التصميم',
    'services.design.desc': 'واجهات جميلة وسهلة الاستخدام يحبها المستخدمون.',
    'services.strategy': 'الاستراتيجية',
    'services.strategy.desc': 'مناهج قائمة على البيانات للتحول الرقمي.',
    'contact.title': 'تواصل معنا',
    'contact.cta': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
