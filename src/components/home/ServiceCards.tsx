'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, BookOpen, Building2, Sprout, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const ServiceCards = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Building2 className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: t.home.services.hospitalTitle,
      description: t.home.services.hospitalDesc,
      image: '/images/hospital-care.jpg',
      href: '/hospital',
      color: 'bg-primary',
    },
    {
      icon: <Heart className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: t.home.services.centersTitle,
      description: t.home.services.centersDesc,
      image: '/images/children-group.jpg',
      href: '/centers',
      color: 'bg-secondary',
    },
    {
      icon: <BookOpen className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: t.home.services.educationTitle,
      description: t.home.services.educationDesc,
      image: '/images/school-children.jpg',
      href: '/education',
      color: 'bg-accent',
    },
    {
      icon: <Sprout className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: t.home.services.developmentTitle,
      description: t.home.services.developmentDesc,
      image: '/images/community.jpg',
      href: '/projects',
      color: 'bg-primary-light',
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-4">
            {t.home.services.heading}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            {t.home.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group card hover:scale-105"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-4 left-4 ${service.color} text-white p-2.5 sm:p-3 rounded-lg shadow-lg`}>
                  {service.icon}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-neutral-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                  {t.common.learnMore}
                  <ArrowRight className="ml-2" size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
