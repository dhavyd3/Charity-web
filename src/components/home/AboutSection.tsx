import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Together-For-Orphans.jpg"
                alt="Our mission"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl max-w-xs border-4 border-accent/30 hover:border-accent transition-colors duration-300">
              <div className="text-secondary font-bold text-4xl mb-2">15+</div>
              <div className="text-neutral-700 font-medium">
                Years of making a difference in children's lives
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-2 rounded-full mb-4">
              About Us
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
              Building Hope, Creating Futures
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Together For Orphans was founded with a simple yet powerful mission: 
              to provide every child with the opportunity to thrive, regardless of 
              their circumstances.
            </p>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              We are a non-governmental, non-political, and non-denominational 
              organization dedicated to supporting vulnerable children. Through our 
              comprehensive programs in healthcare, education, and community development, 
              we work tirelessly to create lasting change.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Child Protection & Rights</h4>
                  <p className="text-neutral-600 text-sm">Defending and advocating for every child's fundamental rights</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Education for All</h4>
                  <p className="text-neutral-600 text-sm">Fighting for universal access to quality education</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Healthcare Access</h4>
                  <p className="text-neutral-600 text-sm">Providing quality medical care to those in need</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Sustainable Development</h4>
                  <p className="text-neutral-600 text-sm">Building eco-friendly solutions for future generations</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center btn-primary group"
            >
              Learn More About Our Mission
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
