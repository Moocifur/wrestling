import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MapPin, Phone, Mail, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null
  })

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: ['[Your Wrestling Facility]', '[Street Address]', '[Burbank, CA 91502]'],
      link: null
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['(555) 123-4567'],
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['info@mountainvalleywrestling.com'],
      link: 'mailto:info@mountainvalleywrestling.com'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: ['@mountainfreestylewrestling'],
      link: 'https://www.instagram.com/mountainfreestylewrestling'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    // Format phone number
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '')
      let formatted = digits
      
      if (digits.length >= 6) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
      } else if (digits.length >= 3) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`
      }
      
      setFormData(prev => ({ ...prev, [name]: formatted }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ isSubmitting: true, isSuccess: false, error: null })

    try {
      const response = await fetch('https://formspree.io/f/xpwrgvyq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Mountain Freestyle Wrestling Website'
        }),
      })

      if (response.ok) {
        setFormStatus({ isSubmitting: false, isSuccess: true, error: null })
        setFormData({ name: '', email: '', phone: '', message: '' })
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, isSuccess: false }))
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setFormStatus({ 
        isSubmitting: false, 
        isSuccess: false, 
        error: 'Failed to send message. Please try again.' 
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="contact" className="section-padding bg-gray-50">
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
            Get In Touch
          </motion.h2>

          <div className="mt-16 grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-3xl p-8 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                            <info.icon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-gray-300 hover:text-white transition-colors duration-300"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.content.join(' ')}
                            </a>
                          ) : (
                            <div className="text-gray-300">
                              {info.content.map((line, i) => (
                                <div key={i}>{line}</div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-custom-lg relative overflow-hidden"
              variants={itemVariants}
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-gray-600 to-black"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                {/* Success Message */}
                {formStatus.isSuccess && (
                  <motion.div 
                    className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center space-x-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-green-800 font-semibold">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {formStatus.error && (
                  <motion.div 
                    className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center space-x-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="text-red-800">{formStatus.error}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:ring-0 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:ring-0 transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:ring-0 transition-colors duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:ring-0 transition-colors duration-300 resize-y"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact