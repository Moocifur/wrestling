import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mountain, Trophy, Users, Target, Star, Award, Zap, Shield } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const achievements = [
    {
      icon: Trophy,
      title: 'Olympic Training',
      description: 'Coached at prestigious Olympic academy',
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Mountain,
      title: 'North Caucasus',
      description: 'Authentic mountain wrestling tradition',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: Star,
      title: 'Elite Athletes',
      description: 'Trained with world champions',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      icon: Users,
      title: 'Youth Focus',
      description: 'Specialized in developing young talent',
      gradient: 'from-green-400 to-green-600'
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

  const itemVariants = {
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

  const achievementVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="about" className="section-padding bg-white">
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
            variants={itemVariants}
          >
            <h2 className="section-title">
              Our Wrestling Legacy
            </h2>
            <p className="section-subtitle mt-6">
              Discover the authentic North Caucasus wrestling tradition and Olympic-level expertise 
              that sets our training apart from conventional programs.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Content */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              {/* Wrestling Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full shadow-lg">
                <Mountain className="h-5 w-5 mr-2" />
                Legendary Wrestling Heritage
              </div>

              <div className="space-y-6">
                <motion.div 
                  className="relative"
                  variants={itemVariants}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Olympic-Level <span className="text-primary-600">Expertise</span>
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Welcome to Mountain Freestyle Wrestling Club, where Olympic-level expertise meets 
                    passionate youth development. Our coaching comes directly from a prestigious Olympic-level 
                    wrestling academy, where we trained alongside <span className="font-bold text-primary-600">Olympic champions, 
                    world medalists, and European champions</span>.
                  </p>
                </motion.div>

                <motion.div 
                  className="relative"
                  variants={itemVariants}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    The <span className="text-secondary-600">Mountain Tradition</span>
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our wrestling methodology originates from the legendary{' '}
                    <span className="font-bold text-secondary-600 bg-secondary-50 px-2 py-1 rounded-lg">
                      North Caucasus Mountains
                    </span> – a region renowned worldwide as producing the strongest freestyle wrestlers 
                    on the planet. This unique geographical and cultural wrestling heritage has shaped our 
                    specialized training approach that sets us completely apart from conventional programs.
                  </p>
                </motion.div>

                <motion.div 
                  className="relative"
                  variants={itemVariants}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    <span className="text-accent-600">Character</span> & Excellence
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We bring this world-class, mountain-forged wrestling tradition to develop young athletes 
                    through our distinctive style and specialized training methodology. Beyond building 
                    physical strength and technique, we instill the <span className="font-bold text-accent-600">character, 
                    discipline, and mental toughness</span> that have made North Caucasus wrestlers legendary across the globe.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              {/* Main Achievement Card */}
              <div className="card-elevated bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500 to-transparent rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary-500 to-transparent rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">Olympic Academy Training</h4>
                      <p className="text-gray-300">Prestigious International Experience</p>
                    </div>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    Our head coach's training at an elite Olympic academy provides authentic, 
                    world-class methodology that you won't find anywhere else in the region.
                  </p>
                </div>
              </div>

              {/* Achievement Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="card-feature group cursor-pointer"
                    variants={achievementVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <h5 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {achievement.title}
                    </h5>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced CTA Section */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 rounded-3xl p-12 shadow-custom-lg border border-gray-100 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full -translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary-500/10 to-transparent rounded-full translate-x-16 translate-y-16"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Zap className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">
                    Experience the <span className="text-primary-600">Mountain Difference</span>
                  </h3>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                    Join our community of young athletes and experience the legendary North Caucasus 
                    wrestling tradition. Discover what makes our Olympic-level training methodology 
                    truly unique.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button 
                      onClick={() => {
                        const element = document.querySelector('#programs')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="btn-primary text-lg group"
                    >
                      <span>Explore Our Programs</span>
                      <Target className="h-5 w-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                    </button>
                    <button 
                      onClick={() => {
                        const element = document.querySelector('#contact')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="btn-secondary text-lg"
                    >
                      Get Started Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About