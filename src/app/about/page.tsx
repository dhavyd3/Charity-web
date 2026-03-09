import Image from 'next/image';
import Link from 'next/link';
import { Heart, Target, Users, Award, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/community.jpg"
            alt="Our mission"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />
        <div className="relative z-20 container-custom text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            About Our Mission
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering orphans and vulnerable children to build brighter futures
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                Together For Orphans was founded in 2009 with a vision to transform the lives 
                of orphaned and vulnerable children. What started as a small initiative has 
                grown into a comprehensive organization serving hundreds of children across 
                multiple communities.
              </p>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                We are a non-governmental, non-political, and non-denominational organization 
                dedicated to supporting vulnerable individuals, with a special focus on children. 
                Our mission extends beyond immediate aid to create sustainable, long-term solutions.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Through partnerships with local communities, international donors, and dedicated 
                volunteers, we continue to expand our reach and impact, ensuring every child has 
                the opportunity to thrive.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Together-For-Orphans.jpg"
                alt="Our story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">Compassion</h3>
              <p className="text-neutral-600">
                We approach every child with empathy, understanding, and unconditional love.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">Integrity</h3>
              <p className="text-neutral-600">
                We maintain transparency and accountability in all our operations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">Community</h3>
              <p className="text-neutral-600">
                We believe in building strong partnerships with local communities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">Excellence</h3>
              <p className="text-neutral-600">
                We strive for the highest standards in all our programs and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary text-white rounded-2xl p-8 md:p-12">
              <h2 className="font-heading font-bold text-3xl mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-4">
                To provide comprehensive support to orphaned and vulnerable children through:
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Protection and defense of children's rights</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Universal access to quality education</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Healthcare services for all</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Sustainable development programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary text-white rounded-2xl p-8 md:p-12">
              <h2 className="font-heading font-bold text-3xl mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                We envision a world where every child, regardless of their circumstances, 
                has the opportunity to grow up in a safe, nurturing environment with access 
                to education, healthcare, and the resources they need to build a successful, 
                independent life. We strive to create lasting change that breaks the cycle 
                of poverty and empowers future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Your support can transform lives and create lasting change for children in need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-secondary text-lg group inline-flex items-center">
              Make a Donation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link href="/contact" className="btn-outline text-lg">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
