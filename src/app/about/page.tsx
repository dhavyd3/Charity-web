'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Target, Users, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/community.jpg"
            alt="Our mission"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />
        <div className="relative z-20 container-custom text-center text-white">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t.about.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            {t.about.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-6">
                {t.about.storyTitle}
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 mb-4 leading-relaxed">
                {t.about.storyP1}
              </p>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                {t.about.storyP2}
              </p>
              <p className="text-neutral-600 leading-relaxed">
                {t.about.storyP3}
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Together-For-Orphans.jpg"
                alt="Our story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-4">
              {t.about.valuesTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              {t.about.valuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">{t.about.compassion}</h3>
              <p className="text-neutral-600">
                {t.about.compassionDesc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">{t.about.integrity}</h3>
              <p className="text-neutral-600">
                {t.about.integrityDesc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">{t.about.community}</h3>
              <p className="text-neutral-600">
                {t.about.communityDesc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">{t.about.excellence}</h3>
              <p className="text-neutral-600">
                {t.about.excellenceDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary text-white rounded-2xl p-6 sm:p-8 md:p-12">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-6">{t.about.missionTitle}</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                {t.about.missionIntro}
              </p>
              <ul className="space-y-3 text-base sm:text-lg">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t.about.missionItem1}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t.about.missionItem2}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t.about.missionItem3}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t.about.missionItem4}</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary text-white rounded-2xl p-6 sm:p-8 md:p-12">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-6">{t.about.visionTitle}</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-6">
            {t.about.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            {t.about.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-secondary text-lg group inline-flex items-center">
              {t.common.makeADonation}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link href="/contact" className="btn-outline text-lg">
              {t.common.getInvolved}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
