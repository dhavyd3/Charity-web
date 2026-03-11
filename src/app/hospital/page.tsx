'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Stethoscope, Users, Clock, MapPin, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function HospitalPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: t.hospital.primaryCare,
      description: t.hospital.primaryCareDesc,
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t.hospital.pediatric,
      description: t.hospital.pediatricDesc,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t.hospital.maternal,
      description: t.hospital.maternalDesc,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t.hospital.emergency,
      description: t.hospital.emergencyDesc,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hospital-care.jpg"
            alt="Hospital"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />
        <div className="relative z-20 container-custom text-center text-white">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t.hospital.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            {t.hospital.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-6">
              {t.hospital.introTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              {t.hospital.introText}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hospital-care.jpg"
                alt="Hospital facility"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900 mb-4">
                {t.hospital.facilityTitle}
              </h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                {t.hospital.facilityText}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{t.hospital.modernEquipment}</h4>
                    <p className="text-neutral-600 text-sm">{t.hospital.modernEquipmentDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{t.hospital.qualifiedStaff}</h4>
                    <p className="text-neutral-600 text-sm">{t.hospital.qualifiedStaffDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{t.hospital.affordableCare}</h4>
                    <p className="text-neutral-600 text-sm">{t.hospital.affordableCareDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-4">
              {t.hospital.servicesTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              {t.hospital.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
              {t.hospital.impactTitle}
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              {t.hospital.impactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-lg sm:text-xl">{t.hospital.consultations}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg sm:text-xl">{t.hospital.deliveries}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg sm:text-xl">{t.hospital.emergencyServices}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-neutral-900 mb-8 text-center">
              {t.hospital.visitTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t.hospital.location}</h3>
                  <p className="text-neutral-600">{t.hospital.locationValue}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t.hospital.emergencyLabel}</h3>
                  <p className="text-neutral-600">{t.hospital.emergencyValue}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t.hospital.hours}</h3>
                  <p className="text-neutral-600">{t.hospital.hoursValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-6">
            {t.hospital.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            {t.hospital.ctaSubtitle}
          </p>
          <Link href="/donate" className="btn-secondary text-lg group inline-flex items-center">
            {t.common.donateNow}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
