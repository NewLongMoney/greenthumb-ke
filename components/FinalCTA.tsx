'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-green rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your Transformation?
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss your vision. Get a no-obligation consultation from our experts today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <motion.a
              href="mailto:254greenthumb@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-white/30 flex items-center space-x-3 min-w-[260px] justify-center transition-all"
            >
              <Mail className="w-6 h-6" />
              <span>Get a Free Quote</span>
            </motion.a>

            <motion.a
              href="tel:0702005560"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-brand-green text-white px-8 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-brand-green/30 flex items-center space-x-3 min-w-[260px] justify-center transition-all"
            >
              <Phone className="w-6 h-6" />
              <span>Call: 0702 005 560</span>
            </motion.a>
          </div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {/* Phone 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all">
              <Phone className="w-8 h-8 text-brand-green mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Call Us</h3>
              <a href="tel:0702005560" className="text-white/90 hover:text-brand-green transition-colors text-lg font-medium">
                0702 005 560
              </a>
              <p className="text-white/70 text-sm mt-1">or</p>
              <a href="tel:0704096417" className="text-white/90 hover:text-brand-green transition-colors text-lg font-medium">
                0704 096 417
              </a>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all">
              <Mail className="w-8 h-8 text-brand-green mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Email Us</h3>
              <a
                href="mailto:254greenthumb@gmail.com"
                className="text-white/90 hover:text-brand-green transition-colors break-all"
              >
                254greenthumb@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all">
              <MessageCircle className="w-8 h-8 text-brand-green mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/254702005560"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-brand-green transition-colors"
              >
                Chat with us instantly
              </a>
            </div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-white/80 text-sm"
          >
            <p>🌟 Trusted by hundreds of homeowners and businesses across Kenya</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

