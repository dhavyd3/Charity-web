'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Home, Heart, Users, Utensils, GraduationCap, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function CentersPage() {
  const { t } = useLanguage();

  const centers = [
    {
      name: t.centers.center1Name,
      location: t.centers.center1Location,
      capacity: t.centers.center1Capacity,
      services: t.centers.center1Services,
    },
    {
      name: t.centers.center2Name,
      location: t.centers.center2Location,
      capacity: t.centers.center2Capacity,
      services: t.centers.center2Services,
    },
    {
      name: t.centers.center3Name,
      location: t.centers.center3Location,
      capacity: t.centers.center3Capacity,
      services: t.centers.center3Services,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/children-group.jpg"
            alt="Reception Centers"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />
        <div className="relative z-20 container-custom text-center text-white">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t.centers.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            {t.centers.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-6">
              {t.centers.introTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-4">
              {t.centers.introP1}
            </p>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              {t.centers.introP2}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900 mb-4">
                {t.centers.approachTitle}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {t.centers.approachText}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{t.centers.individualCare}</h4>
                    <p className="text-neutral-600 text-sm">{t.centers.individualCareDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{t.centers.familyTracing}</h4>
                    <p className="text-neutral-600 text-sm">{t.centers.familyTracingDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{t.centers.educationalContinuity}</h4>
                    <p className="text-neutral-600 text-sm">{t.centers.educationalContinuityDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/children-group.jpg"
                alt="Children at center"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-4">
              {t.centers.servicesTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              {t.centers.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                {t.centers.safeShelter}
              </h3>
              <p className="text-neutral-600">
                {t.centers.safeShelterDesc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Utensils className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                {t.centers.nutritiousMeals}
              </h3>
              <p className="text-neutral-600">
                {t.centers.nutritiousMealsDesc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                {t.centers.healthcare}
              </h3>
              <p className="text-neutral-600">
                {t.centers.healthcareDesc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                {t.centers.education}
              </h3>
              <p className="text-neutral-600">
                {t.centers.educationDesc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                {t.centers.counseling}
              </h3>
              <p className="text-neutral-600">
                {t.centers.counselingDesc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                {t.centers.recreation}
              </h3>
              <p className="text-neutral-600">
                {t.centers.recreationDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Centers */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-4">
              {t.centers.ourCentersTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              {t.centers.ourCentersSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {centers.map((center, index) => (
              <div key={index} className="card">
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-neutral-900 mb-4">
                    {center.name}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-neutral-600">
                      <Home className="w-5 h-5 mr-2 text-primary" />
                      <span>{center.location}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      <span>{center.capacity}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-neutral-900 mb-2">{t.centers.servicesLabel}</h4>
                    <div className="flex flex-wrap gap-2">
                      {center.services.map((service: string, idx: number) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-6">
            {t.centers.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            {t.centers.ctaSubtitle}
          </p>
          <Link href="/donate" className="btn-secondary text-lg group inline-flex items-center">
            {t.centers.ctaButton}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
