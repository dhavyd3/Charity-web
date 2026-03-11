'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    { title: t.home.about.feature1Title, desc: t.home.about.feature1Desc },
    { title: t.home.about.feature2Title, desc: t.home.about.feature2Desc },
    { title: t.home.about.feature3Title, desc: t.home.about.feature3Desc },
    { title: t.home.about.feature4Title, desc: t.home.about.feature4Desc },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Together-For-Orphans.jpg"
                alt="Our mission"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 bg-white p-4 sm:p-6 rounded-xl shadow-2xl max-w-[200px] sm:max-w-xs border-4 border-accent/30 hover:border-accent transition-colors duration-300">
              <div className="text-secondary font-bold text-3xl sm:text-4xl mb-1 sm:mb-2">{t.home.about.floatingYears}</div>
              <div className="text-neutral-700 font-medium text-sm sm:text-base">
                {t.home.about.floatingDesc}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="mt-8 lg:mt-0">
            <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-2 rounded-full mb-4">
              {t.home.about.badge}
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-4 sm:mb-6">
              {t.home.about.heading}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
              {t.home.about.p1}
            </p>
            <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
              {t.home.about.p2}
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1 text-sm sm:text-base">{feature.title}</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center btn-primary group text-sm sm:text-base"
            >
              {t.home.about.cta}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
