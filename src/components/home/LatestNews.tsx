'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const LatestNews = () => {
  const { t } = useLanguage();

  const news = [
    {
      title: t.home.news.article1Title,
      excerpt: t.home.news.article1Excerpt,
      date: t.home.news.article1Date,
      image: '/images/school-children.jpg',
      category: t.home.news.article1Category,
    },
    {
      title: t.home.news.article2Title,
      excerpt: t.home.news.article2Excerpt,
      date: t.home.news.article2Date,
      image: '/images/children-group.jpg',
      category: t.home.news.article2Category,
    },
    {
      title: t.home.news.article3Title,
      excerpt: t.home.news.article3Excerpt,
      date: t.home.news.article3Date,
      image: '/images/community.jpg',
      category: t.home.news.article3Category,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12">
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-3 sm:mb-4">
              {t.home.news.heading}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600">
              {t.home.news.subtitle}
            </p>
          </div>
          <Link
            href="/news"
            className="mt-4 md:mt-0 btn-outline group inline-flex items-center text-sm sm:text-base"
          >
            {t.home.news.viewAll}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {news.map((article, index) => (
            <article key={index} className="card group">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-neutral-500 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  {article.date}
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link
                  href="/news"
                  className="inline-flex items-center text-primary font-semibold hover:translate-x-2 transition-transform text-sm sm:text-base"
                >
                  {t.common.readMore}
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
