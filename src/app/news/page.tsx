import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: 'New Education Center Opens Its Doors',
      excerpt: 'We are thrilled to announce the opening of our newest education center, providing learning opportunities for 150 more children in our community.',
      date: 'December 1, 2024',
      author: 'Sarah Johnson',
      category: 'Education',
      image: '/images/school-children.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'Annual Health Campaign Reaches 1,000 Families',
      excerpt: 'Our recent health campaign was a tremendous success, providing essential medical care and health education to over 1,000 families.',
      date: 'November 15, 2024',
      author: 'Dr. Michael Chen',
      category: 'Healthcare',
      image: '/images/hospital-care.jpg',
      featured: false,
    },
    {
      id: 3,
      title: 'Community Garden Project Shows Impressive Results',
      excerpt: 'Six months after launch, our community garden initiative has exceeded expectations, with families harvesting nutritious produce.',
      date: 'October 28, 2024',
      author: 'Grace Mutoni',
      category: 'Development',
      image: '/images/community.jpg',
      featured: false,
    },
    {
      id: 4,
      title: 'Partnership with Local University Benefits Students',
      excerpt: 'We have formed an exciting partnership with State University to provide mentorship and scholarship opportunities.',
      date: 'October 10, 2024',
      author: 'James Williams',
      category: 'Education',
      image: '/images/school-children.jpg',
      featured: false,
    },
    {
      id: 5,
      title: 'Solar Panel Installation Brings Clean Energy',
      excerpt: 'Our facilities are now powered by renewable energy thanks to the installation of solar panels across all buildings.',
      date: 'September 22, 2024',
      author: 'Sarah Johnson',
      category: 'Development',
      image: '/images/community.jpg',
      featured: false,
    },
    {
      id: 6,
      title: "Children's Art Exhibition Showcases Talent",
      excerpt: 'Our annual art exhibition featured incredible works from our talented young artists, celebrating their creativity.',
      date: 'September 5, 2024',
      author: 'Emma Thompson',
      category: 'Events',
      image: '/images/children-group.jpg',
      featured: false,
    },
  ];

  const featuredArticle = newsArticles.find((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            News & Updates
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Stay informed about our latest projects, achievements, and impact stories
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-custom">
          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-16">
              <div className="bg-accent/10 text-primary font-semibold px-4 py-2 rounded-full inline-block mb-4">
                Featured Story
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center card">
                <div className="relative h-[400px] lg:h-[500px]">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover rounded-l-xl"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    {featuredArticle.category}
                  </div>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-neutral-500 text-sm mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-2" />
                      {featuredArticle.author}
                    </div>
                  </div>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <Link
                    href={`/news/${featuredArticle.id}`}
                    className="btn-primary group inline-flex items-center"
                  >
                    Read Full Story
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Article Grid */}
          <div className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-8">
              Latest News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <article key={article.id} className="card group">
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
                    <div className="flex items-center space-x-4 text-neutral-500 text-sm mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/news/${article.id}`}
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

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading font-bold text-3xl mb-4">
              Stay Updated
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news and impact stories directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn-secondary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 text-white/80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
