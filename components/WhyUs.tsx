'use client'

import { motion } from 'framer-motion'
import { Leaf, Users, Lightbulb } from 'lucide-react'

export default function WhyUs() {
  const pillars = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Sustainability-Driven',
      description:
        'We use water-wise technology and eco-conscious methods to reduce your footprint and ours. Every solution is designed with the planet in mind.',
      color: 'from-brand-green to-primary-600',
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Whole-System Experts',
      description:
        'We master the science of both traditional landscapes and innovative hydroponic systems. Our expertise spans the full spectrum of green solutions.',
      color: 'from-brand-green to-primary-500',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'People-First Design',
      description:
        'Your space is designed to inspire you, whether it\'s for play, food, or peace of mind. We create environments that enhance your quality of life.',
      color: 'from-primary-600 to-brand-green',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose GreenThumb KE?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just landscapers—we're environmental stewards, innovators, and partners in your vision.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon with gradient background */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pillar.color} text-white mb-6 shadow-lg`}
              >
                {pillar.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>

              {/* Decorative element */}
              <div className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${pillar.color}`} />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '1000+', label: 'Projects Completed' },
            { number: '50%', label: 'Water Savings' },
            { number: '15+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-green mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

