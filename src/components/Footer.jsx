import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo and Name */}
          <div className="mb-6">
            <img 
              src="/logo.png" 
              alt="Mountain Freestyle Wrestling Club"
              className="h-16 w-auto mx-auto mb-4 filter brightness-100"
            />
            <h3 className="text-xl font-bold">Mountain Freestyle Wrestling Club</h3>
          </div>

          {/* Tagline */}
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            Building champions on and off the mat through Olympic-level training 
            and North Caucasus wrestling tradition.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              About
            </a>
            <a 
              href="#programs" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Programs
            </a>
            <a 
              href="#schedule" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Schedule
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-sm text-gray-400">
              <span>&copy; {currentYear} Mountain Freestyle Wrestling Club. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>for our wrestling community</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer