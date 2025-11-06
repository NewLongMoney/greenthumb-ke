'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const videos = [
    '/videos/Greenthumb Website Shot 1.mp4',
    '/videos/Greenthumb Website Shot 2.mp4',
    '/videos/Greenthumb Website Shot 3.mp4',
    '/videos/Greenthumb Website Shot 4.mp4',
  ]

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const handleVideoEnd = () => {
      // Move to next video after 7 seconds or when video ends
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }

    // Auto-switch video every 7 seconds
    const timer = setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }, 7000) // 7 seconds per video

    videoElement.addEventListener('ended', handleVideoEnd)

    return () => {
      clearTimeout(timer)
      videoElement.removeEventListener('ended', handleVideoEnd)
    }
  }, [currentVideoIndex, videos.length])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-[1]">
        <video
          ref={videoRef}
          key={currentVideoIndex}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover transition-opacity duration-500"
          poster="/pictures/Hero Poster Image.png"
          aria-label="Hero background video showing lawn care and irrigation services in Kenya"
          onError={(e) => {
            console.error('Video failed to load:', e)
            // Hide video element if it fails
            const video = e.currentTarget
            video.style.display = 'none'
          }}
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>
        {/* Video overlay for text readability */}
        <div className="absolute inset-0 video-overlay" />
      </div>

      {/* Alternative: Beautiful gradient background as fallback */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500">
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-green rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Best Irrigation & Lawn Care
              <br />
              <span className="text-brand-green">Company in Kenya</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Professional lawn care services, smart irrigation systems, and garden maintenance 
              across Kenya and East Africa. Trusted by hundreds of homeowners and businesses in Nairobi.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              {/* Primary CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-brand-green text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl hover:bg-primary-600 hover:shadow-brand-green/50 flex items-center space-x-2 min-w-[280px] justify-center"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group text-white font-semibold text-lg flex items-center space-x-2 hover:text-brand-green"
              >
                <span>Explore Our Mission</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/80"
            >
              <a
                href="tel:0702005560"
                className="flex items-center space-x-2 hover:text-brand-green"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">0702 005 560</span>
              </a>
              <span className="hidden sm:block">|</span>
              <a
                href="tel:0704096417"
                className="flex items-center space-x-2 hover:text-brand-green"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">0704 096 417</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

