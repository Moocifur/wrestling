import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-black'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/logo.png" 
              alt="Mountain Freestyle Wrestling Club"
              className="h-12 sm:h-16 lg:h-18 w-auto filter brightness-100 hover:brightness-110 transition-all duration-300"
            />
            <span className="hidden sm:block text-white font-bold text-lg lg:text-xl">
              Mountain Freestyle Wrestling
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="text-white font-medium hover:text-gray-300 transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-gray-300 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-black shadow-2xl z-50"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex justify-end p-6">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white hover:text-gray-300 transition-colors"
                    aria-label="Close mobile menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 px-6">
                  <ul className="space-y-4">
                    {navigationItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            scrollToSection(item.href)
                          }}
                          className="block py-3 text-lg text-white hover:text-gray-300 transition-colors duration-300 border-b border-gray-700"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header