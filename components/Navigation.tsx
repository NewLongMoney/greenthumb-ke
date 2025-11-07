'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Menu, X, ChevronDown } from 'lucide-react'

// Lazy load Logo component
const Logo = dynamic(() => import('./Logo'), { ssr: true })

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
      className={`sticky top-0 z-50 transition-all duration-300 ${hasScrolled ? 'py-2' : 'py-4'} backdrop-blur`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative overflow-hidden rounded-full border px-6 py-3 shadow-[0_20px_45px_-18px_rgba(15,23,42,0.45)] backdrop-blur-2xl transition-colors duration-300 ${
            hasScrolled ? 'border-black/10 bg-white/95' : 'border-white/40 bg-white/80'
          }`}
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/70 via-white/40 to-white/30 opacity-80" />
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <div className="rounded-full bg-white overflow-hidden shadow-sm ring-1 ring-black/10" style={{ width: '50px', height: '50px' }}>
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
                <button className="flex items-center space-x-1 font-medium text-slate-900 transition-colors hover:text-brand-green">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 overflow-hidden rounded-2xl border border-black/5 bg-white/90 py-2 shadow-xl backdrop-blur"
                    >
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-slate-700 transition-colors hover:bg-primary-50 hover:text-brand-green"
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
                className="font-medium text-slate-800 transition-colors hover:text-brand-green"
              >
                About Us
              </a>
              <a
                href="#gallery"
                className="font-medium text-slate-800 transition-colors hover:text-brand-green"
              >
                Gallery
              </a>
              <a
                href="/blog"
                className="font-medium text-slate-800 transition-colors hover:text-brand-green"
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
              className="md:hidden flex min-h-[44px] min-w-[44px] items-center justify-center rounded-2xl border border-black/10 bg-white p-3 text-slate-800 shadow-sm transition-colors"
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
            className="relative z-50 mx-4 mt-2 overflow-hidden rounded-3xl border border-black/5 bg-white/95 shadow-[0_25px_50px_-25px_rgba(15,23,42,0.25)] backdrop-blur md:hidden"
          >
            <div className="space-y-3 px-4 py-4 text-slate-800">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-500">Services</p>
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block pl-4 py-2 text-slate-600 transition-colors hover:text-brand-green"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              <a
                href="#about"
                className="block py-2 text-slate-700 transition-colors hover:text-brand-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#gallery"
                className="block py-2 text-slate-700 transition-colors hover:text-brand-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="/blog"
                className="block py-2 text-slate-700 transition-colors hover:text-brand-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog/Resources
              </a>
              <a
                href="#contact"
                className="block w-full rounded-2xl border border-brand-green/30 bg-brand-green px-6 py-3 text-center font-semibold text-white shadow-lg"
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

