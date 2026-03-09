import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

export default function EducationPage() {
  const programs = [
    {
      title: 'Primary Education',
      description: 'Foundation learning for children ages 6-12',
      students: '250+',
      features: ['School supplies', 'Uniforms', 'Daily meals', 'Transportation'],
    },
    {
      title: 'Secondary Education',
      description: 'Advanced studies for adolescents ages 13-18',
      students: '100+',
      features: ['Textbooks', 'Lab equipment', 'Exam fees', 'Tutoring'],
    },
    {
      title: 'Vocational Training',
      description: 'Practical skills development for youth',
      students: '75+',
      features: ['Trade skills', 'Apprenticeships', 'Job placement', 'Business skills'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/school-children.jpg"
            alt="Education"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />
        <div className="relative z-20 container-custom text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Education for All
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering children through quality education and lifelong learning
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
              The Power of Education
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              Education is the key to breaking the cycle of poverty and building a brighter 
              future. We believe every child deserves access to quality education, regardless 
              of their circumstances.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our comprehensive education programs support children from primary school through 
              vocational training, ensuring they have the skills and knowledge needed to succeed 
              in life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/school-children.jpg"
                alt="Students learning"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-4">
                Our Educational Mission
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                We provide comprehensive educational support that goes beyond just paying school 
                fees. Our holistic approach ensures children have everything they need to succeed 
                academically and personally.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Full Scholarships</h4>
                    <p className="text-neutral-600 text-sm">Covering tuition, fees, and examination costs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Learning Materials</h4>
                    <p className="text-neutral-600 text-sm">Books, uniforms, and supplies for all students</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Academic Support</h4>
                    <p className="text-neutral-600 text-sm">Tutoring and mentorship programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Nutritional Support</h4>
                    <p className="text-neutral-600 text-sm">Daily meals to ensure children can focus on learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              Our Education Programs
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Supporting students at every stage of their educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card">
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{program.description}</p>
                  <div className="bg-secondary/10 text-secondary font-bold text-2xl py-3 px-4 rounded-lg mb-4 text-center">
                    {program.students} Students
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-neutral-900 text-sm mb-2">Includes:</h4>
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Educational Impact
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Measuring success through student achievement and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10" />
              </div>
              <div className="text-4xl font-bold mb-2">425+</div>
              <div className="text-lg">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10" />
              </div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10" />
              </div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-lg">Attendance Rate</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10" />
              </div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg">Graduates Annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              Student Success
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real stories of transformation through education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-xl p-8">
              <div className="text-5xl mb-4">"</div>
              <p className="text-neutral-600 mb-6 italic">
                Thanks to the scholarship program, I was able to complete my secondary education 
                and now I'm studying to become a teacher. I want to give back to my community.
              </p>
              <div className="font-semibold text-neutral-900">— Sarah, University Student</div>
            </div>

            <div className="bg-neutral-50 rounded-xl p-8">
              <div className="text-5xl mb-4">"</div>
              <p className="text-neutral-600 mb-6 italic">
                The vocational training program taught me carpentry skills. Now I have my own 
                workshop and can support my family.
              </p>
              <div className="font-semibold text-neutral-900">— Michael, Carpenter</div>
            </div>

            <div className="bg-neutral-50 rounded-xl p-8">
              <div className="text-5xl mb-4">"</div>
              <p className="text-neutral-600 mb-6 italic">
                Education changed my life. I never thought I would be able to go to school, 
                but now I'm top of my class and dream of becoming a doctor.
              </p>
              <div className="font-semibold text-neutral-900">— Grace, Secondary Student</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
            Invest in a Child's Future
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Your donation can provide a child with the education they need to break free from poverty
          </p>
          <Link href="/donate" className="btn-secondary text-lg group inline-flex items-center">
            Sponsor a Student
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
