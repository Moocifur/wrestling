import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Phone, Calendar, Clock, Info } from 'lucide-react'

const Schedule = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

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

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="schedule" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Training Schedule
          </motion.h2>

          <div className="mt-16 flex justify-center">
            <div className="max-w-2xl w-full">
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-custom-lg text-center relative overflow-hidden"
                variants={itemVariants}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-black/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-black/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Calendar className="h-8 w-8 text-white" />
                  </motion.div>

                  <motion.h3 
                    className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
                    variants={itemVariants}
                  >
                    Current Practice Times
                  </motion.h3>

                  <motion.p 
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                    variants={itemVariants}
                  >
                    We offer training sessions for both our youth and high school programs. 
                    Practice times are designed to accommodate different age groups and skill levels.
                  </motion.p>

                  {/* Contact Notice */}
                  <motion.div 
                    className="bg-gray-100 rounded-2xl p-6 mb-8 text-left"
                    variants={itemVariants}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                          <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          Contact Us for Schedule Details
                        </h4>
                        <p className="text-gray-600">
                          For current practice times and availability, please reach out to us directly. 
                          We'll provide you with all the information you need to get started.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Additional Info Cards */}
                  <motion.div 
                    className="grid sm:grid-cols-2 gap-4 mb-8"
                    variants={itemVariants}
                  >
                    <div className="bg-white rounded-xl p-4 shadow-custom border">
                      <div className="flex items-center space-x-3 mb-2">
                        <Clock className="h-5 w-5 text-green-600" />
                        <h5 className="font-semibold text-gray-900">Flexible Times</h5>
                      </div>
                      <p className="text-sm text-gray-600">
                        Multiple session times available to fit your schedule
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-custom border">
                      <div className="flex items-center space-x-3 mb-2">
                        <Info className="h-5 w-5 text-blue-600" />
                        <h5 className="font-semibold text-gray-900">Trial Sessions</h5>
                      </div>
                      <p className="text-sm text-gray-600">
                        First session available to see if our program is right for you
                      </p>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    variants={itemVariants}
                  >
                    <button 
                      onClick={scrollToContact}
                      className="btn-primary text-lg"
                    >
                      Get Schedule Info
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Schedule