'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Menu, X, ChevronDown } from 'lucide-react'

// Lazy load Logo component
const Logo = dynamic(() => import('./Logo'), { ssr: true })

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { name: 'Lawn Care Services', href: '/services/lawn-care' },
    { name: 'Irrigation Systems', href: '/services/irrigation' },
    { name: 'Garden Services', href: '/services/garden' },
    { name: 'Hydroponics', href: '/services/hydroponics' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-50 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-6 py-3 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.45)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/10 to-white/5 opacity-60" />
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <div className="rounded-full bg-white/80 backdrop-blur overflow-hidden shadow-inner" style={{ width: '50px', height: '50px' }}>
                <Logo variant="icon" light={false} width={50} height={50} />
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center space-x-1 font-medium text-white/90 transition-colors hover:text-white">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 overflow-hidden rounded-2xl border border-white/15 bg-white/10 py-2 shadow-xl backdrop-blur-xl z-50"
                    >
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
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
                className="font-medium text-white/80 transition-colors hover:text-white"
              >
                About Us
              </a>
              <a
                href="#gallery"
                className="font-medium text-white/80 transition-colors hover:text-white"
              >
                Gallery
              </a>
              <a
                href="/blog"
                className="font-medium text-white/80 transition-colors hover:text-white"
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
              className="md:hidden flex min-h-[44px] min-w-[44px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-3 text-white/90 shadow-inner backdrop-blur-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="relative z-50 mx-4 mt-2 overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_25px_50px_-25px_rgba(15,23,42,0.45)] backdrop-blur-2xl md:hidden"
          >
            <div className="space-y-3 px-4 py-4 text-white">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white/80">Services</p>
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block pl-4 py-2 text-white/70 transition-colors hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              <a
                href="#about"
                className="block py-2 text-white/80 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#gallery"
                className="block py-2 text-white/80 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="/blog"
                className="block py-2 text-white/80 transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog/Resources
              </a>
              <a
                href="#contact"
                className="block w-full rounded-2xl border border-white/20 bg-brand-green/80 px-6 py-3 text-center font-semibold text-white shadow-lg backdrop-blur"
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

