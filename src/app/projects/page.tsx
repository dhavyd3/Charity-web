import Image from 'next/image';
import Link from 'next/link';
import { Sprout, Droplet, Sun, Recycle, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      icon: <Sprout className="w-10 h-10" />,
      title: 'Community Gardens',
      description: 'Teaching sustainable agriculture and providing fresh produce for families',
      status: 'Active',
      beneficiaries: '500+ families',
      color: 'bg-primary',
    },
    {
      icon: <Droplet className="w-10 h-10" />,
      title: 'Clean Water Access',
      description: 'Installing wells and water purification systems in underserved communities',
      status: 'Active',
      beneficiaries: '2,000+ people',
      color: 'bg-secondary',
    },
    {
      icon: <Sun className="w-10 h-10" />,
      title: 'Solar Energy',
      description: 'Providing renewable energy solutions for schools and health centers',
      status: 'In Progress',
      beneficiaries: '10 facilities',
      color: 'bg-accent',
    },
    {
      icon: <Recycle className="w-10 h-10" />,
      title: 'Waste Management',
      description: 'Environmental education and recycling initiatives for cleaner communities',
      status: 'Active',
      beneficiaries: '5 communities',
      color: 'bg-primary-light',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/community.jpg"
            alt="Projects"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />
        <div className="relative z-20 container-custom text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Sustainable Development Projects
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Building long-term solutions for healthier, more resilient communities
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
              Investing in Sustainable Futures
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              Our sustainable development projects address the root causes of poverty and 
              vulnerability by creating long-term solutions that benefit entire communities.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We focus on environmental sustainability, economic empowerment, and community 
              resilience, ensuring that our impact lasts for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              Our Active Projects
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Making a lasting impact through innovative and sustainable initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card hover:scale-105">
                <div className="p-8">
                  <div className={`${project.color} text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                    {project.icon}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-bold text-2xl text-neutral-900">
                      {project.title}
                    </h3>
                    <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="border-t pt-4">
                    <div className="text-sm text-neutral-500">Beneficiaries</div>
                    <div className="text-lg font-semibold text-neutral-900">{project.beneficiaries}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/community.jpg"
                alt="Community garden project"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-2 rounded-full mb-4">
                Featured Project
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
                Community Garden Initiative
              </h2>
              <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                Our community garden project empowers families to grow their own fresh, 
                nutritious produce while learning sustainable farming techniques.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Participants receive training in organic farming, composting, water conservation, 
                and crop rotation. The gardens not only provide food security but also create 
                opportunities for income generation through the sale of surplus produce.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-neutral-700">15 community gardens established</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-neutral-700">500+ families trained in sustainable agriculture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-neutral-700">2,000+ kg of produce harvested monthly</span>
                </div>
              </div>
              <Link href="/donate" className="btn-primary group inline-flex items-center">
                Support This Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Approach to Development
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              We believe in community-led, sustainable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Community Assessment</h3>
              <p className="text-white/90">
                We work with communities to identify their most pressing needs and priorities
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Collaborative Planning</h3>
              <p className="text-white/90">
                Together, we design solutions that are culturally appropriate and sustainable
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Capacity Building</h3>
              <p className="text-white/90">
                We provide training and resources so communities can maintain projects long-term
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              Environmental & Social Impact
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Creating positive change for people and planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">3,500+</div>
              <div className="text-neutral-600">People with Clean Water Access</div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">50 tons</div>
              <div className="text-neutral-600">CO2 Emissions Reduced Annually</div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">15</div>
              <div className="text-neutral-600">Community Gardens Thriving</div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary-light mb-2">100%</div>
              <div className="text-neutral-600">Renewable Energy in Facilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
            Support Sustainable Development
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Your contribution helps us build lasting solutions that transform communities
          </p>
          <Link href="/donate" className="btn-secondary text-lg group inline-flex items-center">
            Make an Impact
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
