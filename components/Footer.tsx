'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Mail, Phone, MapPin, Music } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Logo variant="full" light={false} width={200} height={60} className="mb-4" />
              <p className="text-gray-400 text-lg mb-4">
                Transforming landscapes, inspiring lives.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We specialize in lawn care, irrigation systems, garden services, and innovative hydroponics solutions. 
                Building sustainable, beautiful spaces across Kenya.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:0702005560" className="flex items-center space-x-2 hover:text-accent-lime transition-colors">
                <Phone className="w-5 h-5" />
                <span>0702 005 560</span>
              </a>
              <a href="tel:0704096417" className="flex items-center space-x-2 hover:text-accent-lime transition-colors">
                <Phone className="w-5 h-5" />
                <span>0704 096 417</span>
              </a>
              <a href="mailto:254greenthumb@gmail.com" className="flex items-center space-x-2 hover:text-accent-lime transition-colors">
                <Mail className="w-5 h-5" />
                <span>254greenthumb@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Kalimoni, Nairobi</p>
                  <p className="text-sm text-gray-500">Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="hover:text-brand-green transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-brand-green transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#gallery" className="hover:text-brand-green transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-brand-green transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-brand-green transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services/lawn-care" className="hover:text-brand-green transition-colors">
                  Lawn Care
                </a>
              </li>
              <li>
                <a href="/services/irrigation" className="hover:text-brand-green transition-colors">
                  Irrigation Systems
                </a>
              </li>
              <li>
                <a href="/services/garden" className="hover:text-brand-green transition-colors">
                  Garden Services
                </a>
              </li>
              <li>
                <a href="/services/hydroponics" className="hover:text-brand-green transition-colors">
                  Hydroponics
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-brand-green transition-colors">
                  Consultations
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex space-x-6">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/share/1BiBATzodF/?mibextid=wwXIfr', label: 'Facebook' },
                { icon: Instagram, href: 'https://www.instagram.com/greenthumb_254?igsh=NHl5OHRhZm1iZWwx', label: 'Instagram' },
                { icon: Music, href: 'https://www.tiktok.com/@greenthumbkenya?_r=1&_t=ZM-91AQoayz14u', label: 'TikTok' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-brand-green transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} GreenThumb KE. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed with 💚 for a greener Kenya
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed by{' '}
                <a 
                  href="https://www.captivart.art" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-green hover:text-primary-400 transition-colors underline"
                >
                  Captivart Agency
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

