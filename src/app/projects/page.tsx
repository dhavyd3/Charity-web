'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sprout, Droplet, Sun, Recycle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function ProjectsPage() {
  const { t } = useLanguage();

  const projects = [
    {
      icon: <Sprout className="w-10 h-10" />,
      title: t.projects.gardensTitle,
      description: t.projects.gardensDesc,
      status: t.projects.gardensStatus,
      beneficiaries: t.projects.gardensBeneficiaries,
      color: 'bg-primary',
    },
    {
      icon: <Droplet className="w-10 h-10" />,
      title: t.projects.waterTitle,
      description: t.projects.waterDesc,
      status: t.projects.waterStatus,
      beneficiaries: t.projects.waterBeneficiaries,
      color: 'bg-secondary',
    },
    {
      icon: <Sun className="w-10 h-10" />,
      title: t.projects.solarTitle,
      description: t.projects.solarDesc,
      status: t.projects.solarStatus,
      beneficiaries: t.projects.solarBeneficiaries,
      color: 'bg-accent',
    },
    {
      icon: <Recycle className="w-10 h-10" />,
      title: t.projects.wasteTitle,
      description: t.projects.wasteDesc,
      status: t.projects.wasteStatus,
      beneficiaries: t.projects.wasteBeneficiaries,
      color: 'bg-primary-light',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/community.jpg"
            alt="Projects"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />
        <div className="relative z-20 container-custom text-center text-white px-4">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t.projects.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            {t.projects.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-6">
              {t.projects.introTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-4">
              {t.projects.introP1}
            </p>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              {t.projects.introP2}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-4">
              {t.projects.activeTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              {t.projects.activeSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card hover:scale-105">
                <div className="p-6 md:p-8">
                  <div className={`${project.color} text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                    {project.icon}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-neutral-900">
                      {project.title}
                    </h3>
                    <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full w-fit">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="border-t pt-4">
                    <div className="text-sm text-neutral-500">{t.projects.beneficiaries}</div>
                    <div className="text-lg font-semibold text-neutral-900">{project.beneficiaries}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/community.jpg"
                alt="Community garden project"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-2 rounded-full mb-4">
                {t.projects.featuredBadge}
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-6">
                {t.projects.featuredTitle}
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 mb-4 leading-relaxed">
                {t.projects.featuredP1}
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {t.projects.featuredP2}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-neutral-700">{t.projects.featuredStat1}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-neutral-700">{t.projects.featuredStat2}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-neutral-700">{t.projects.featuredStat3}</span>
                </div>
              </div>
              <Link href="/donate" className="btn-primary group inline-flex items-center">
                {t.projects.featuredCta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
              {t.projects.approachTitle}
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              {t.projects.approachSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl md:text-3xl font-bold">1</span>
              </div>
              <h3 className="font-heading font-bold text-lg md:text-xl mb-3">{t.projects.step1}</h3>
              <p className="text-white/90">
                {t.projects.step1Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl md:text-3xl font-bold">2</span>
              </div>
              <h3 className="font-heading font-bold text-lg md:text-xl mb-3">{t.projects.step2}</h3>
              <p className="text-white/90">
                {t.projects.step2Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl md:text-3xl font-bold">3</span>
              </div>
              <h3 className="font-heading font-bold text-lg md:text-xl mb-3">{t.projects.step3}</h3>
              <p className="text-white/90">
                {t.projects.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-4">
              {t.projects.impactTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              {t.projects.impactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-neutral-50 rounded-xl p-4 md:p-6 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">3,500+</div>
              <div className="text-sm sm:text-base text-neutral-600">{t.projects.impactWater}</div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 md:p-6 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-2">50 tons</div>
              <div className="text-sm sm:text-base text-neutral-600">{t.projects.impactCO2}</div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 md:p-6 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">15</div>
              <div className="text-sm sm:text-base text-neutral-600">{t.projects.impactGardens}</div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 md:p-6 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-light mb-2">100%</div>
              <div className="text-sm sm:text-base text-neutral-600">{t.projects.impactRenewable}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-6">
            {t.projects.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            {t.projects.ctaSubtitle}
          </p>
          <Link href="/donate" className="btn-secondary text-lg group inline-flex items-center">
            {t.projects.ctaButton}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
