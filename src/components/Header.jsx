import { useState, useEffect } from 'react'
import { Menu, X, Mountain } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-lg shadow-custom-lg border-b border-white/10' 
          : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Enhanced Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="flex items-center space-x-4 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Logo with gradient background */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-2xl">
                <Mountain className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </div>
            </div>
            
            {/* Brand Text */}
            <div className="hidden sm:block">
              <div className="text-white font-black text-lg lg:text-xl leading-none group-hover:text-primary-400 transition-colors duration-300">
                Mountain Freestyle
              </div>
              <div className="text-gray-300 font-semibold text-sm lg:text-base leading-none group-hover:text-white transition-colors duration-300">
                Wrestling Club
              </div>
            </div>
          </motion.a>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="relative px-4 py-3 text-white font-semibold hover:text-primary-400 transition-all duration-300 group rounded-xl"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
                
                {/* Hover Background */}
                <div className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                
                {/* Active Indicator */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"
                  layoutId="activeIndicator"
                />
              </motion.a>
            ))}
            
            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="ml-4 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-3 text-white hover:text-primary-400 transition-colors duration-300 rounded-xl hover:bg-white/10"
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-gradient-to-b from-gray-900 to-black shadow-custom-xl z-50 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-xl">
                      <Mountain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg leading-none">
                        Mountain Freestyle
                      </div>
                      <div className="text-gray-300 text-sm leading-none">
                        Wrestling Club
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white hover:text-primary-400 transition-colors rounded-lg hover:bg-white/10"
                    aria-label="Close mobile menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <ul className="space-y-2">
                    {navigationItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            scrollToSection(item.href)
                          }}
                          className="block py-4 px-4 text-lg text-white hover:text-primary-400 transition-all duration-300 rounded-xl hover:bg-white/10 border-b border-white/5 last:border-b-0"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-white/10">
                  <motion.button
                    onClick={() => {
                      scrollToSection('#contact')
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started Today
                  </motion.button>
                  
                  <p className="text-center text-gray-400 text-sm mt-4">
                    Olympic-Level Wrestling Training
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header