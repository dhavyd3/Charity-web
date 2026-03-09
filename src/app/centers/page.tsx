import Image from 'next/image';
import Link from 'next/link';
import { Home, Heart, Users, Utensils, GraduationCap, ArrowRight } from 'lucide-react';

export default function CentersPage() {
  const centers = [
    {
      name: 'Main Reception Center',
      location: 'Hope City',
      capacity: '50 children',
      services: ['Shelter', 'Meals', 'Education', 'Counseling'],
    },
    {
      name: 'Transit Care Facility',
      location: 'Unity Town',
      capacity: '30 children',
      services: ['Emergency Care', 'Medical Support', 'Family Reunification'],
    },
    {
      name: 'Youth Development Center',
      location: 'Future Village',
      capacity: '40 adolescents',
      services: ['Vocational Training', 'Life Skills', 'Job Placement'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/children-group.jpg"
            alt="Reception Centers"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />
        <div className="relative z-20 container-custom text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Reception & Transit Centers
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Safe havens providing care, shelter, and hope for children in crisis
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
              A Place of Safety and Care
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              Our reception and transit centers serve as temporary homes for orphaned and 
              vulnerable children, providing them with a safe, nurturing environment while 
              we work towards permanent solutions for their care.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Each center is staffed with trained caregivers, social workers, and counselors 
              who ensure that every child receives the physical, emotional, and psychological 
              support they need during this critical time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-4">
                Our Approach
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                We believe every child deserves a loving, stable environment. Our centers 
                provide immediate relief while we work on long-term solutions such as family 
                reunification, foster care placement, or adoption when appropriate.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Individual Care Plans</h4>
                    <p className="text-neutral-600 text-sm">Personalized support tailored to each child's needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Family Tracing</h4>
                    <p className="text-neutral-600 text-sm">Working to reunite children with extended family when possible</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Educational Continuity</h4>
                    <p className="text-neutral-600 text-sm">Ensuring children continue their education without interruption</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/children-group.jpg"
                alt="Children at center"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              Services We Provide
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive care addressing all aspects of a child's wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                Safe Shelter
              </h3>
              <p className="text-neutral-600">
                Clean, comfortable accommodation with age-appropriate facilities and security.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Utensils className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                Nutritious Meals
              </h3>
              <p className="text-neutral-600">
                Three balanced meals daily plus snacks, addressing nutritional needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                Healthcare
              </h3>
              <p className="text-neutral-600">
                Regular medical check-ups, vaccinations, and access to hospital services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                Education
              </h3>
              <p className="text-neutral-600">
                School enrollment, tutoring support, and educational materials.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                Counseling
              </h3>
              <p className="text-neutral-600">
                Professional psychological support to help children process trauma.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                Recreation
              </h3>
              <p className="text-neutral-600">
                Play areas, sports activities, and creative programs for healthy development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Centers */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              Our Centers
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Multiple facilities serving different communities and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {centers.map((center, index) => (
              <div key={index} className="card">
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-neutral-900 mb-4">
                    {center.name}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-neutral-600">
                      <Home className="w-5 h-5 mr-2 text-primary" />
                      <span>{center.location}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      <span>{center.capacity}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-neutral-900 mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {center.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
            Help Us Provide Safe Homes
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Your support ensures we can continue providing shelter and care to children in need
          </p>
          <Link href="/donate" className="btn-secondary text-lg group inline-flex items-center">
            Support Our Centers
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
