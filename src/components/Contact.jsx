import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MapPin, Phone, Mail, Instagram, Send, CheckCircle, AlertCircle, Clock, Users } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
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
      title: 'Training Location',
      content: ['[Your Wrestling Facility]', '[Street Address]', '[Burbank, CA 91502]'],
      link: null,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['(555) 123-4567'],
      link: 'tel:+15551234567',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['info@mountainvalleywrestling.com'],
      link: 'mailto:info@mountainvalleywrestling.com',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Instagram,
      title: 'Follow Us',
      content: ['@mountainfreestylewrestling'],
      link: 'https://www.instagram.com/mountainfreestylewrestling',
      gradient: 'from-pink-500 to-pink-600'
    }
  ]

  const quickInfo = [
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'We respond within 24 hours'
    },
    {
      icon: Users,
      title: 'Trial Sessions',
      description: 'First session available'
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
        setFormData({ name: '', email: '', phone: '', program: '', message: '' })
        
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
    <section id="contact" className="section-padding bg-section-pattern">
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
              Start Your Wrestling Journey
            </h2>
            <p className="section-subtitle mt-6">
              Ready to experience Olympic-level training and North Caucasus wrestling tradition? 
              Get in touch and take the first step toward excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              {/* Main Contact Card */}
              <div className="card-elevated bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500 to-transparent rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary-500 to-transparent rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex-shrink-0">
                          <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <info.icon className="h-7 w-7" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl mb-2 group-hover:text-primary-400 transition-colors duration-300">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.content.join(' ')}
                            </a>
                          ) : (
                            <div className="text-gray-300 text-lg">
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

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                {quickInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="card-feature text-center group"
                    variants={itemVariants}
                    transition={{ delay: 1.0 + index * 0.1 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h5 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {info.title}
                    </h5>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {info.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div 
              className="card-elevated relative overflow-hidden"
              variants={itemVariants}
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
                  <p className="text-lg text-gray-600">
                    Ready to get started? Tell us about your wrestler and we'll get back to you within 24 hours.
                  </p>
                </div>

                {/* Success Message */}
                {formStatus.isSuccess && (
                  <motion.div 
                    className="status-success mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 font-bold text-lg">Message sent successfully!</p>
                      <p className="text-green-700">We'll get back to you within 24 hours to discuss next steps.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {formStatus.error && (
                  <motion.div 
                    className="status-error mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                    <p className="text-red-800 font-semibold">{formStatus.error}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Program Interest */}
                  <div>
                    <label htmlFor="program" className="block text-sm font-bold text-gray-700 mb-3">
                      Program Interest
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select a program</option>
                      <option value="kids-youth">Kids & Youth Program (Ages 7-13)</option>
                      <option value="high-school">High School Elite (Ages 14-18)</option>
                      <option value="both">Both Programs</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder="Tell us about your wrestler's experience level, goals, and any questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="w-full btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 py-5"
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-6 w-6" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Form Footer */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to be contacted about our wrestling programs. 
                    We respect your privacy and won't share your information.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact