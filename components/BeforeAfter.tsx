'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', () => setIsDragging(false))
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', () => setIsDragging(false))
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', () => setIsDragging(false))
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', () => setIsDragging(false))
    }
  }, [isDragging])

  return (
    <section id="gallery" className="py-20 bg-gray-50">
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
            Real Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the incredible difference our expertise makes. Drag the slider to reveal the transformation.
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-primary-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-2xl font-bold bg-black/20 px-8 py-4 rounded-lg backdrop-blur-sm">
                  AFTER: Lush Green Paradise
                </div>
              </div>
            </div>

            {/* Before Image (Overlay) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-amber-200 to-yellow-600"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-2xl font-bold bg-black/20 px-8 py-4 rounded-lg backdrop-blur-sm">
                  BEFORE: Dry & Patchy
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex space-x-1">
                  <div className="w-1 h-6 bg-brand-green rounded" />
                  <div className="w-1 h-6 bg-brand-green rounded" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg font-semibold backdrop-blur-sm">
              BEFORE
            </div>
            <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg font-semibold backdrop-blur-sm">
              AFTER
            </div>
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative"
          >
            <Quote className="w-12 h-12 text-brand-green/30 absolute top-8 left-8 opacity-50" />
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed mb-6 italic">
                "They didn't just fix our lawn; they gave us a backyard we can finally live in. 
                The entire process was seamless, and the results exceeded our expectations."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MK
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">The Kariuki Family</p>
                  <p className="text-gray-600">Karen, Nairobi</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Testimonials */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Professional, efficient, and the results are stunning!",
                name: "James O.",
                location: "Westlands"
              },
              {
                text: "Our hydroponic system is producing amazing vegetables!",
                name: "Sarah M.",
                location: "Lavington"
              },
              {
                text: "Best investment we've made in our property.",
                name: "David K.",
                location: "Runda"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

