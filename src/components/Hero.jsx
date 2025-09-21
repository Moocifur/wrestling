import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Trophy, Award, Target, Users, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/class.jpeg',
      caption: 'Olympic-Level Training Methodology'
    },
    {
      image: '/class2.jpeg',
      caption: 'Youth Development Focus'
    },
    {
      image: '/class3.jpeg',
      caption: 'Competition Preparation'
    },
    {
      image: '/class4.jpeg',
      caption: 'Expert Coaching & Mentorship'
    }
  ]

  const highlights = [
    {
      icon: Trophy,
      text: 'Olympic-level coaching and methodology'
    },
    {
      icon: Award,
      text: 'North Caucasus Mountains wrestling tradition'
    },
    {
      icon: Target,
      text: 'Trained with Olympic champions & world medalists'
    },
    {
      icon: Zap,
      text: 'Specialized techniques from legendary wrestling region'
    },
    {
      icon: Users,
      text: 'Elite-level development for youth athletes'
    }
  ]

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen bg-hero-pattern bg-cover bg-center bg-fixed">
      <div className="gradient-overlay"></div>
      
      <div className="relative z-10 container-custom min-h-screen flex items-center py-20 pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Hero Text */}
          <motion.div 
            className="text-white space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mountain Freestyle Wrestling
            </motion.h1>
            
            <motion.p 
              className="text-lg lg:text-xl leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Learn from Olympic-level expertise. Our coach trained at a prestigious Olympic academy 
              alongside world champions and European medalists, bringing authentic North Caucasus 
              wrestling methodology directly to young athletes.
            </motion.p>

            {/* Highlights */}
            <motion.div 
              className="bg-black/70 backdrop-blur-sm rounded-2xl p-6 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl lg:text-2xl font-bold mb-4">World-Class Training</h3>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <highlight.icon className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm lg:text-base">{highlight.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <button 
                onClick={scrollToContact}
                className="btn-primary text-lg"
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Slideshow */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-semibold">
                      {slides[currentSlide].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero