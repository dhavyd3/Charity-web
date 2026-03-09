import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-children.jpg"
          alt="Children smiling"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />

      {/* Content */}
      <div className="relative z-20 container-custom text-center text-white">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          Together, We Build
          <br />
          <span className="text-accent">Brighter Futures</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Supporting orphans and vulnerable children through education, healthcare,
          and sustainable development programs. Every child deserves a chance to thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/donate"
            className="btn-secondary text-lg group inline-flex items-center"
          >
            Make a Donation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            href="/about"
            className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary text-lg"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
            <div className="text-sm md:text-base">Children Supported</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <div className="text-3xl md:text-4xl font-bold mb-2">15</div>
            <div className="text-sm md:text-base">Years of Service</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
            <div className="text-sm md:text-base">Active Programs</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
            <div className="text-sm md:text-base">Transparency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
