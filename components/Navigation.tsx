'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Lawn Care Services', href: '/services/lawn-care' },
    { name: 'Irrigation Systems', href: '/services/irrigation' },
    { name: 'Garden Services', href: '/services/garden' },
    { name: 'Hydroponics', href: '/services/hydroponics' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-sm'
          : 'bg-white/10 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className={`rounded-full ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'} overflow-hidden`} style={{ width: '60px', height: '60px' }}>
              <Logo variant="icon" light={false} width={60} height={60} />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-brand-green' : 'text-white hover:text-brand-green'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2"
                  >
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-brand-green transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#about"
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-lime'
              }`}
            >
              About Us
            </a>
            <a
              href="#gallery"
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-lime'
              }`}
            >
              Gallery
            </a>
            <a
              href="/blog"
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-lime'
              }`}
            >
              Blog/Resources
            </a>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-green text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-primary-600 hover:shadow-xl"
            >
              Get a Free Quote
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            } transition-colors`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 relative z-50"
          >
            <div className="px-4 py-4 space-y-3">
              <div className="space-y-2">
                <p className="font-semibold text-gray-900 text-sm">Services</p>
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block pl-4 py-2 text-gray-600 hover:text-brand-green"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              <a
                href="#about"
                className="block py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#gallery"
                className="block py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="/blog"
                className="block py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog/Resources
              </a>
              <a
                href="#contact"
                className="block w-full text-center bg-brand-green text-white px-6 py-3 rounded-lg font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

