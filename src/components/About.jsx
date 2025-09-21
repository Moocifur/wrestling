import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const About = () => {
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

  return (
    <section id="about" className="section-padding bg-white">
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
            About Our Club
          </motion.h2>

          <motion.div 
            className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 shadow-custom-lg relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Decorative background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-black/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-black/5 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
              <motion.p 
                className="text-lg lg:text-xl leading-relaxed text-gray-700"
                variants={itemVariants}
              >
                Welcome to Mountain Freestyle Wrestling Club, where Olympic-level expertise meets 
                passionate youth development. Our coaching comes directly from a prestigious Olympic-level 
                wrestling academy, where we trained alongside Olympic champions, world medalists, and 
                European champions.
              </motion.p>

              <motion.p 
                className="text-lg lg:text-xl leading-relaxed text-gray-700"
                variants={itemVariants}
              >
                Our wrestling methodology originates from the legendary{' '}
                <span className="font-bold text-black">North Caucasus Mountains</span> – a region 
                renowned worldwide as producing the strongest freestyle wrestlers on the planet. This 
                unique geographical and cultural wrestling heritage has shaped our specialized training 
                approach that sets us completely apart from conventional programs.
              </motion.p>

              <motion.p 
                className="text-lg lg:text-xl leading-relaxed text-gray-700"
                variants={itemVariants}
              >
                We bring this world-class, mountain-forged wrestling tradition to develop young athletes 
                through our distinctive style and specialized training methodology. Beyond building 
                physical strength and technique, we instill the character, discipline, and mental 
                toughness that have made North Caucasus wrestlers legendary across the globe.
              </motion.p>

              {/* Call to action */}
              <motion.div 
                className="pt-6"
                variants={itemVariants}
              >
                <button 
                  onClick={() => {
                    const element = document.querySelector('#programs')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="btn-secondary"
                >
                  Explore Our Programs
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About