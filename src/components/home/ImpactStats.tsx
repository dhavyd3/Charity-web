import { Users, GraduationCap, Heart, Building } from 'lucide-react';

const ImpactStats = () => {
  const stats = [
    {
      icon: <Users className="w-10 h-10" />,
      number: '500+',
      label: 'Children Supported',
      description: 'Orphans and vulnerable children receiving care',
      color: 'bg-primary',
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      number: '350+',
      label: 'Students Educated',
      description: 'Children enrolled in our education programs',
      color: 'bg-secondary',
    },
    {
      icon: <Heart className="w-10 h-10" />,
      number: '10,000+',
      label: 'Medical Consultations',
      description: 'Healthcare services provided annually',
      color: 'bg-accent',
    },
    {
      icon: <Building className="w-10 h-10" />,
      number: '5',
      label: 'Active Centers',
      description: 'Reception and care facilities operational',
      color: 'bg-primary-light',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Together, we're creating real change in the lives of children and communities.
            Here's what we've accomplished so far.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className={`${stat.color} text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-white/80">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl mb-6">
            Join us in making a lasting difference in children's lives
          </p>
          <a
            href="/donate"
            className="btn-secondary inline-flex items-center text-lg"
          >
            Support Our Mission
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
