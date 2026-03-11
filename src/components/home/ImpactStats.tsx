'use client';

import { Users, GraduationCap, Heart, Building } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const ImpactStats = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
      number: t.home.impact.stat1Num,
      label: t.home.impact.stat1Label,
      description: t.home.impact.stat1Desc,
      color: 'bg-primary',
    },
    {
      icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />,
      number: t.home.impact.stat2Num,
      label: t.home.impact.stat2Label,
      description: t.home.impact.stat2Desc,
      color: 'bg-secondary',
    },
    {
      icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10" />,
      number: t.home.impact.stat3Num,
      label: t.home.impact.stat3Label,
      description: t.home.impact.stat3Desc,
      color: 'bg-accent',
    },
    {
      icon: <Building className="w-8 h-8 sm:w-10 sm:h-10" />,
      number: t.home.impact.stat4Num,
      label: t.home.impact.stat4Label,
      description: t.home.impact.stat4Desc,
      color: 'bg-primary-light',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            {t.home.impact.heading}
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            {t.home.impact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className={`${stat.color} text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{stat.label}</div>
              <div className="text-xs sm:text-sm text-white/80">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-base sm:text-xl mb-4 sm:mb-6">
            {t.home.impact.cta}
          </p>
          <a
            href="/donate"
            className="btn-secondary inline-flex items-center text-base sm:text-lg"
          >
            {t.home.impact.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
