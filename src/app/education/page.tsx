'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function EducationPage() {
  const { t } = useLanguage();

  const programs = [
    {
      title: t.education.primaryTitle,
      description: t.education.primaryDesc,
      students: t.education.primaryStudents,
      features: t.education.primaryFeatures,
    },
    {
      title: t.education.secondaryTitle,
      description: t.education.secondaryDesc,
      students: t.education.secondaryStudents,
      features: t.education.secondaryFeatures,
    },
    {
      title: t.education.vocationalTitle,
      description: t.education.vocationalDesc,
      students: t.education.vocationalStudents,
      features: t.education.vocationalFeatures,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/school-children.jpg"
            alt="Education"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />
        <div className="relative z-20 container-custom text-center text-white px-4">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t.education.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            {t.education.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-6">
              {t.education.introTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-4">
              {t.education.introP1}
            </p>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              {t.education.introP2}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/school-children.jpg"
                alt="Students learning"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900 mb-4">
                {t.education.missionTitle}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {t.education.missionText}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{t.education.fullScholarships}</h4>
                    <p className="text-neutral-600 text-sm">{t.education.fullScholarshipsDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{t.education.learningMaterials}</h4>
                    <p className="text-neutral-600 text-sm">{t.education.learningMaterialsDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{t.education.academicSupport}</h4>
                    <p className="text-neutral-600 text-sm">{t.education.academicSupportDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{t.education.nutritionalSupport}</h4>
                    <p className="text-neutral-600 text-sm">{t.education.nutritionalSupportDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-4">
              {t.education.programsTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              {t.education.programsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card">
                <div className="p-6 md:p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-neutral-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{program.description}</p>
                  <div className="bg-secondary/10 text-secondary font-bold text-xl md:text-2xl py-3 px-4 rounded-lg mb-4 text-center">
                    {program.students} {t.education.students}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-neutral-900 text-sm mb-2">{t.education.includes}</h4>
                    {program.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
              {t.education.impactTitle}
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              {t.education.impactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{t.education.enrolledNum}</div>
              <div className="text-sm sm:text-base md:text-lg">{t.education.enrolled}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{t.education.passRateNum}</div>
              <div className="text-sm sm:text-base md:text-lg">{t.education.passRate}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{t.education.attendanceNum}</div>
              <div className="text-sm sm:text-base md:text-lg">{t.education.attendance}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{t.education.graduatesNum}</div>
              <div className="text-sm sm:text-base md:text-lg">{t.education.graduates}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-4">
              {t.education.successTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              {t.education.successSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-neutral-50 rounded-xl p-6 md:p-8">
              <div className="text-5xl mb-4">&ldquo;</div>
              <p className="text-neutral-600 mb-6 italic">
                {t.education.testimonial1}
              </p>
              <div className="font-semibold text-neutral-900">{t.education.testimonial1Author}</div>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 md:p-8">
              <div className="text-5xl mb-4">&ldquo;</div>
              <p className="text-neutral-600 mb-6 italic">
                {t.education.testimonial2}
              </p>
              <div className="font-semibold text-neutral-900">{t.education.testimonial2Author}</div>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 md:p-8">
              <div className="text-5xl mb-4">&ldquo;</div>
              <p className="text-neutral-600 mb-6 italic">
                {t.education.testimonial3}
              </p>
              <div className="font-semibold text-neutral-900">{t.education.testimonial3Author}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-6">
            {t.education.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            {t.education.ctaSubtitle}
          </p>
          <Link href="/donate" className="btn-secondary text-lg group inline-flex items-center">
            {t.education.ctaButton}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
