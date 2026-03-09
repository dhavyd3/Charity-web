import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

const LatestNews = () => {
  const news = [
    {
      title: 'New Education Center Opens',
      excerpt: 'We are thrilled to announce the opening of our newest education center, providing learning opportunities for 150 more children.',
      date: 'December 1, 2024',
      image: '/images/school-children.jpg',
      category: 'Education',
    },
    {
      title: 'Annual Health Campaign Success',
      excerpt: 'Our recent health campaign reached over 1,000 families, providing essential medical care and health education.',
      date: 'November 15, 2024',
      image: '/images/children-group.jpg',
      category: 'Healthcare',
    },
    {
      title: 'Community Garden Project Launch',
      excerpt: 'Empowering communities through sustainable agriculture and nutrition education for a healthier future.',
      date: 'October 28, 2024',
      image: '/images/community.jpg',
      category: 'Development',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-lg text-neutral-600">
              Stay informed about our projects and their impact
            </p>
          </div>
          <Link
            href="/news"
            className="mt-4 md:mt-0 btn-outline group inline-flex items-center"
          >
            View All News
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <article key={index} className="card group">
              <div className="relative h-56 overflow-hidden">
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
              <div className="p-6">
                <div className="flex items-center text-neutral-500 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  {article.date}
                </div>
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link
                  href="/news"
                  className="inline-flex items-center text-primary font-semibold hover:translate-x-2 transition-transform"
                >
                  Read More
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
