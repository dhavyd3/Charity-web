'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-children.jpg"
          alt="Children smiling"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />

      {/* Content */}
      <div className="relative z-20 container-custom text-center text-white px-4">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
          {t.home.hero.title1}
          <br />
          <span className="text-accent">{t.home.hero.title2}</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.home.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            href="/donate"
            className="btn-secondary text-base sm:text-lg group inline-flex items-center"
          >
            {t.home.hero.ctaDonate}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            href="/about"
            className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary text-base sm:text-lg"
          >
            {t.home.hero.ctaLearnMore}
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{t.home.hero.statChildrenNum}</div>
            <div className="text-xs sm:text-sm md:text-base">{t.home.hero.statChildren}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{t.home.hero.statYearsNum}</div>
            <div className="text-xs sm:text-sm md:text-base">{t.home.hero.statYears}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{t.home.hero.statProgramsNum}</div>
            <div className="text-xs sm:text-sm md:text-base">{t.home.hero.statPrograms}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{t.home.hero.statTransparencyNum}</div>
            <div className="text-xs sm:text-sm md:text-base">{t.home.hero.statTransparency}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
