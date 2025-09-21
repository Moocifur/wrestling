import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Users, Target, Zap, Award, CheckCircle, Star, Trophy, Shield } from 'lucide-react'

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const programs = [
    {
      id: 'kids',
      title: 'Kids & Youth Program',
      ageGroup: 'Ages 7-13',
      icon: Users,
      iconGradient: 'from-blue-500 to-cyan-500',
      cardGradient: 'from-blue-50 to-cyan-50',
      borderGradient: 'from-blue-200 to-cyan-200',
      description: 'Complete wrestling foundation program for young athletes. We focus on building fundamental skills, discipline, and confidence through authentic freestyle wrestling techniques rooted in North Caucasus tradition.',
      features: [
        'Fundamental wrestling stance and movement',
        'Basic takedowns and defensive techniques', 
        'Character building and discipline development',
        'Age-appropriate strength and conditioning',
        'Introduction to wrestling tradition and values',
        'Fun, engaging training environment'
      ],
      highlights: [
        { icon: Shield, text: 'Safe Learning Environment' },
        { icon: Star, text: 'Character Development' },
        { icon: Trophy, text: 'Skill Building Focus' }
      ]
    },
    {
      id: 'highschool',
      title: 'High School Elite',
      ageGroup: 'Ages 14-18',
      icon: Target,
      iconGradient: 'from-red-500 to-orange-500',
      cardGradient: 'from-red-50 to-orange-50',
      borderGradient: 'from-red-200 to-orange-200',
      description: 'Intensive high-performance training for serious young wrestlers. Advanced North Caucasus techniques, elite conditioning, and mental preparation for competition at the highest levels.',
      features: [
        'Advanced freestyle wrestling techniques',
        'Competition-level training intensity',
        'Strength and conditioning protocols',
        'Mental toughness and warrior mindset',
        'Tournament preparation and strategy',
        'Individual technique refinement'
      ],
      highlights: [
        { icon: Zap, text: 'Elite Performance' },
        { icon: Target, text: 'Competition Ready' },
        { icon: Award, text: 'Championship Preparation' }
      ]
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

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="programs" className="section-padding bg-section-pattern">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Enhanced Section Header */}
          <motion.div 
            className="text-center mb-20"
            variants={cardVariants}
          >
            <h2 className="section-title">
              Our Training Programs
            </h2>
            <p className="section-subtitle mt-6">
              Choose the program that matches your wrestler's age and ambition. Both programs are built on 
              authentic North Caucasus wrestling methodology with Olympic-level coaching expertise.
            </p>
          </motion.div>

          {/* Program Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                className="group relative"
                variants={cardVariants}
              >
                {/* Card Background with Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${program.borderGradient} rounded-3xl p-1 opacity-60 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className={`w-full h-full bg-gradient-to-br ${program.cardGradient} rounded-2xl`}></div>
                </div>
                
                {/* Card Content */}
                <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-custom-lg hover:shadow-custom-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  {/* Program Header */}
                  <div className="mb-8">
                    {/* Age Badge */}
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${program.iconGradient} text-white font-bold text-sm mb-6 shadow-lg`}>
                      <program.icon className="h-4 w-4 mr-2" />
                      {program.ageGroup}
                    </div>
                    
                    {/* Title and Description */}
                    <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {program.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Program Highlights */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {program.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlightIndex}
                        className="text-center p-4 bg-gray-50 rounded-xl group-hover:bg-white transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.8 + index * 0.2 + highlightIndex * 0.1 
                        }}
                      >
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${program.iconGradient} text-white mb-2 group-hover:scale-110 transition-transform duration-300`}>
                          <highlight.icon className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-semibold text-gray-700">{highlight.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn:</h4>
                    {program.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start space-x-4 group/feature"
                        variants={featureVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ 
                          delay: 1.0 + index * 0.3 + featureIndex * 0.1 
                        }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="h-5 w-5 text-green-500 group-hover/feature:text-green-600 group-hover/feature:scale-110 transition-all duration-300" />
                        </div>
                        <span className="text-gray-700 group-hover/feature:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Program CTA */}
                  <div className="pt-6 border-t border-gray-100">
                    <button 
                      onClick={() => {
                        const element = document.querySelector('#contact')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className={`w-full py-4 px-6 bg-gradient-to-r ${program.iconGradient} text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95`}
                    >
                      Start This Program
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Bottom CTA Section */}
          <motion.div 
            className="card-elevated text-center bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden"
            variants={cardVariants}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-500 to-transparent rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-secondary-500 to-transparent rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-accent-500 to-transparent rounded-full"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Trophy className="h-10 w-10 text-white" />
              </motion.div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Ready to Join the Legacy?
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the legendary North Caucasus wrestling tradition. Join our community of 
                young athletes and train with Olympic-level methodology that has produced world champions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="btn-primary text-lg group"
                >
                  <span>Start Training Today</span>
                  <Zap className="h-5 w-5 ml-2 group-hover:animate-pulse" />
                </button>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#schedule')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="btn-secondary text-lg bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900"
                >
                  View Training Schedule
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