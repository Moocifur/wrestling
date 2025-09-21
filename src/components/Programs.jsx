import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Users, Target, Zap, Award, CheckCircle } from 'lucide-react'

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const programs = [
    {
      id: 'kids',
      title: 'Kids and Youth',
      ageGroup: 'Ages 7+',
      icon: Users,
      description: 'Complete wrestling program for kids and young athletes starting from 7 years old. We focus on building fundamental skills, discipline, and confidence through freestyle wrestling techniques.',
      features: [
        'Fundamental wrestling techniques',
        'Basic stance and movement',
        'Takedowns and escapes',
        'Character and discipline development',
        'Age-appropriate conditioning',
        'Tournament preparation'
      ],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'highschool',
      title: 'High School Practice',
      ageGroup: 'High School',
      icon: Target,
      description: 'Intensive training program designed for high school wrestlers looking to compete at the highest level. Advanced techniques, conditioning, and mental preparation.',
      features: [
        'Advanced freestyle wrestling techniques',
        'Competition-level training',
        'Strength and conditioning',
        'Mental toughness development',
        'Tournament and match preparation',
        'Individual skill development'
      ],
      gradient: 'from-red-500 to-red-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="section-title"
            variants={cardVariants}
          >
            Our Programs
          </motion.h2>

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                className="card card-hover group"
                variants={cardVariants}
              >
                {/* Program Header */}
                <div className="mb-6">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${program.gradient} text-white font-bold text-sm mb-4`}>
                    <program.icon className="h-4 w-4 mr-2" />
                    {program.ageGroup}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.8 + index * 0.2 + featureIndex * 0.1 
                      }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Program CTA */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button 
                    onClick={() => {
                      const element = document.querySelector('#contact')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="w-full btn-secondary group-hover:bg-black group-hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div 
            className="mt-16 text-center bg-white rounded-2xl p-8 shadow-custom-lg"
            variants={cardVariants}
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Wrestling Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Join our community of young athletes and experience the legendary North Caucasus 
                wrestling tradition. Contact us today to learn more about our programs and 
                schedule a trial session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="btn-primary"
                >
                  Get Started Today
                </button>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#schedule')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="btn-secondary"
                >
                  View Schedule
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs