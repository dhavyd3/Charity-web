import Image from 'next/image';
import Link from 'next/link';
import { Heart, Stethoscope, Users, Clock, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function HospitalPage() {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Primary Care',
      description: 'Comprehensive medical consultations and preventive care',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Pediatric Services',
      description: 'Specialized care for infants, children, and adolescents',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Maternal Health',
      description: 'Pre-natal, delivery, and post-natal care for mothers',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Emergency Care',
      description: '24/7 emergency medical services and urgent care',
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
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Our Hospital
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Providing quality healthcare to children and families in need
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
              Healthcare for Everyone
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our hospital serves as a beacon of hope, providing essential healthcare services 
              to orphans, vulnerable children, and their communities. With a dedicated team of 
              medical professionals and modern facilities, we ensure that quality healthcare 
              is accessible to all, regardless of their ability to pay.
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
              <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-4">
                Our Medical Facility
              </h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Established to address the critical healthcare needs of our community, our 
                hospital features modern equipment and a compassionate staff committed to 
                providing excellent care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Modern Equipment</h4>
                    <p className="text-neutral-600 text-sm">Up-to-date medical technology and diagnostic tools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Qualified Staff</h4>
                    <p className="text-neutral-600 text-sm">Experienced doctors, nurses, and medical professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Affordable Care</h4>
                    <p className="text-neutral-600 text-sm">Subsidized and free services for those in need</p>
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
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to meet the needs of our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Healthcare Impact
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Making a difference in the lives of thousands each year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl">Annual Consultations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Deliveries Per Year</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl">Emergency Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
            <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-8 text-center">
              Visit Our Hospital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Location</h3>
                  <p className="text-neutral-600">123 Medical Drive, Hope City</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Emergency</h3>
                  <p className="text-neutral-600">+1 (555) 911-HELP</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Hours</h3>
                  <p className="text-neutral-600">Open 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
            Support Our Healthcare Mission
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Your donation helps us provide life-saving medical care to those who need it most
          </p>
          <Link href="/donate" className="btn-secondary text-lg group inline-flex items-center">
            Donate Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
