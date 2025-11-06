'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Droplets, Sprout, Scissors, Leaf } from 'lucide-react'

interface Service {
  id: string
  title: string
  icon: React.ReactNode
  image: string
  pitch: string
  description: string
}

export default function ServiceGrid() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const services: Service[] = [
    {
      id: 'lawn-care',
      title: 'Lawn Care Services',
      icon: <Scissors className="w-12 h-12" />,
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      pitch: 'Perfection in Every Blade',
      description: 'Professional lawn maintenance that transforms your outdoor space into a pristine, healthy green oasis.',
    },
    {
      id: 'irrigation',
      title: 'Irrigation Systems',
      icon: <Droplets className="w-12 h-12" />,
      image: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      pitch: 'Smart Water, Smarter Gardens',
      description: 'Advanced irrigation solutions that save water, reduce costs, and keep your landscape thriving year-round.',
    },
    {
      id: 'garden',
      title: 'Garden Services',
      icon: <Sprout className="w-12 h-12" />,
      image: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      pitch: 'Where Beauty Meets Nature',
      description: 'Complete garden design and maintenance services that create stunning outdoor spaces tailored to your vision.',
    },
    {
      id: 'hydroponics',
      title: 'Hydroponics',
      icon: <Leaf className="w-12 h-12" />,
      image: 'linear-gradient(135deg, #84cc16 0%, #22c55e 100%)',
      pitch: 'Future Growth',
      description: 'Revolutionary soilless food production systems for your home or business—sustainable, efficient, and innovative.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive landscape solutions designed to transform your space
          </p>
        </motion.div>
      </div>

      {/* Interactive Service Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
            >
              {/* Background with gradient (placeholder for images) */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{ background: service.image }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                  hoveredService && hoveredService !== service.id
                    ? 'opacity-60'
                    : 'opacity-100'
                }`}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-white mb-4"
                >
                  {service.icon}
                </motion.div>

                {/* Title - Always visible */}
                <h3 className="text-3xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description - Shows on hover */}
                <AnimatePresence>
                  {hoveredService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-accent-lime text-xl font-semibold mb-3">
                        {service.pitch}
                      </p>
                      <p className="text-white/90 text-base mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <motion.a
                        href={`#${service.id}`}
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center space-x-2 text-white font-semibold hover:text-accent-lime transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: hoveredService === service.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-accent-lime origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

