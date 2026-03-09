import Link from 'next/link';
import Image from 'next/image';
import { Heart, BookOpen, Building2, Sprout, ArrowRight } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Our Hospital',
      description: 'Providing quality healthcare services to children and families in need, ensuring access to medical care for all.',
      image: '/images/hospital-care.jpg',
      href: '/hospital',
      color: 'bg-primary',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Reception Centers',
      description: 'Safe havens offering shelter, care, and support for orphaned and vulnerable children in crisis.',
      image: '/images/children-group.jpg',
      href: '/centers',
      color: 'bg-secondary',
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Education for All',
      description: 'Ensuring every child has access to quality education, school supplies, and learning opportunities.',
      image: '/images/school-children.jpg',
      href: '/education',
      color: 'bg-accent',
    },
    {
      icon: <Sprout className="w-12 h-12" />,
      title: 'Sustainable Development',
      description: 'Building long-term solutions through community development and environmental sustainability programs.',
      image: '/images/community.jpg',
      href: '/projects',
      color: 'bg-primary-light',
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
            How We Help
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Through our comprehensive programs, we provide holistic support to orphaned
            and vulnerable children, giving them hope for a brighter future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group card hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-4 left-4 ${service.color} text-white p-3 rounded-lg shadow-lg`}>
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
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
