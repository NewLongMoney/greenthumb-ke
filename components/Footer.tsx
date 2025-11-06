'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
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
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'About Us', 'Gallery', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-brand-green transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {['Lawn Care', 'Irrigation Systems', 'Garden Services', 'Hydroponics', 'Consultations'].map((service) => (
                <li key={service}>
                  <a
                    href={`#${service.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-brand-green transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex space-x-6">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-accent-lime transition-colors"
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

