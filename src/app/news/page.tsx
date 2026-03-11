'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function NewsPage() {
  const { t } = useLanguage();

  const newsArticles = [
    {
      id: 1,
      title: t.news.article1Title,
      excerpt: t.news.article1Excerpt,
      date: t.news.article1Date,
      author: t.news.article1Author,
      category: t.news.article1Category,
      image: '/images/school-children.jpg',
      featured: true,
    },
    {
      id: 2,
      title: t.news.article2Title,
      excerpt: t.news.article2Excerpt,
      date: t.news.article2Date,
      author: t.news.article2Author,
      category: t.news.article2Category,
      image: '/images/hospital-care.jpg',
      featured: false,
    },
    {
      id: 3,
      title: t.news.article3Title,
      excerpt: t.news.article3Excerpt,
      date: t.news.article3Date,
      author: t.news.article3Author,
      category: t.news.article3Category,
      image: '/images/community.jpg',
      featured: false,
    },
    {
      id: 4,
      title: t.news.article4Title,
      excerpt: t.news.article4Excerpt,
      date: t.news.article4Date,
      author: t.news.article4Author,
      category: t.news.article4Category,
      image: '/images/school-children.jpg',
      featured: false,
    },
    {
      id: 5,
      title: t.news.article5Title,
      excerpt: t.news.article5Excerpt,
      date: t.news.article5Date,
      author: t.news.article5Author,
      category: t.news.article5Category,
      image: '/images/community.jpg',
      featured: false,
    },
    {
      id: 6,
      title: t.news.article6Title,
      excerpt: t.news.article6Excerpt,
      date: t.news.article6Date,
      author: t.news.article6Author,
      category: t.news.article6Category,
      image: '/images/children-group.jpg',
      featured: false,
    },
  ];

  const featuredArticle = newsArticles.find((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 sm:py-16">
        <div className="container-custom text-center px-4 sm:px-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t.news.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            {t.news.heroSubtitle}
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-custom px-4 sm:px-6">
          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-12 lg:mb-16">
              <div className="bg-accent/10 text-primary font-semibold px-4 py-2 rounded-full inline-block mb-4">
                {t.news.featuredBadge}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center card">
                <div className="relative h-[250px] sm:h-[350px] lg:h-[500px]">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
                  />
                </div>
                <div className="p-5 sm:p-8">
                  <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    {featuredArticle.category}
                  </div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-neutral-500 text-sm mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-2" />
                      {featuredArticle.author}
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-neutral-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <Link
                    href={`/news/${featuredArticle.id}`}
                    className="btn-primary group inline-flex items-center"
                  >
                    {t.news.readFullStory}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Article Grid */}
          <div className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-8">
              {t.news.latestNews}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {regularArticles.map((article) => (
                <article key={article.id} className="card group">
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
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center space-x-4 text-neutral-500 text-sm mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-primary font-semibold hover:translate-x-2 transition-transform"
                    >
                      {t.common.readMore}
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-4">
              {t.news.stayUpdated}
            </h2>
            <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">
              {t.news.newsletterText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder={t.news.emailPlaceholder}
                className="flex-1 px-6 py-3 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn-secondary whitespace-nowrap">
                {t.news.subscribe}
              </button>
            </div>
            <p className="text-sm mt-4 text-white/80">
              {t.news.privacyNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
