'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const switchTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isMobileRef = useRef(false)

  const videos = [
    '/videos/Greenthumb Website Shot 1.mp4',
    '/videos/Greenthumb Website Shot 2.mp4',
    '/videos/Greenthumb Website Shot 3.mp4',
    '/videos/Greenthumb Website Shot 4.mp4',
  ]

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
        (window.innerWidth <= 768 && 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle user interaction to enable video playback
  useEffect(() => {
    const handleUserInteraction = async () => {
      if (!hasUserInteracted && videoRef.current) {
        setHasUserInteracted(true)
        try {
          const video = videoRef.current
          video.muted = true
          video.volume = 0
          await video.play()
        } catch (error) {
          console.log('Video play on user interaction:', error)
        }
      }
    }

    // Listen for any user interaction
    const events = ['touchstart', 'touchend', 'mousedown', 'click', 'scroll', 'keydown']
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true })
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction)
      })
    }
  }, [hasUserInteracted])

  // Video playback and switching logic
  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    // Set all mobile-specific attributes
    videoElement.setAttribute('playsinline', 'true')
    videoElement.setAttribute('webkit-playsinline', 'true')
    videoElement.setAttribute('x5-playsinline', 'true')
    videoElement.muted = true
    videoElement.volume = 0
    videoElement.playsInline = true
    videoElement.controls = false
    videoElement.disablePictureInPicture = true
    videoElement.style.pointerEvents = 'none'

    let isMounted = true

    // Simple video play function - always try to play
    const playVideo = async () => {
      if (!videoElement || !isMounted) return

      try {
        videoElement.muted = true
        videoElement.volume = 0
        videoElement.controls = false
        
        // Always try to play - browser will handle it
        if (videoElement.paused) {
          await videoElement.play()
          if (isMounted) {
            setIsVideoReady(true)
          }
        }
      } catch (error) {
        // Autoplay was prevented - video will play on user interaction
        if (isMounted) {
          setIsVideoReady(false)
        }
      }
    }

    // Handle video can play - try to play
    const handleCanPlay = () => {
      if (isMounted && videoElement && videoElement.paused) {
        playVideo()
      }
    }

    // Handle video end - switch to next video
    const handleVideoEnd = () => {
      if (isMounted) {
        // Clear any existing timer
        if (switchTimerRef.current) {
          clearTimeout(switchTimerRef.current)
        }
        // Switch to next video
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
      }
    }

    // Handle video errors
    const handleError = (e: Event) => {
      console.error('Video error:', e)
    }

    // Add event listeners
    videoElement.addEventListener('canplay', handleCanPlay)
    videoElement.addEventListener('canplaythrough', handleCanPlay)
    videoElement.addEventListener('loadeddata', handleCanPlay)
    videoElement.addEventListener('ended', handleVideoEnd)
    videoElement.addEventListener('error', handleError)

    // Load the video source
    videoElement.load()

    // Try to play when video loads - use multiple attempts
    const tryPlay = async () => {
      if (videoElement && isMounted) {
        if (videoElement.readyState >= 2) {
          await playVideo()
        } else {
          // Wait a bit and try again
          setTimeout(async () => {
            if (videoElement && isMounted && videoElement.readyState >= 2) {
              await playVideo()
            }
          }, 300)
        }
      }
    }

    // Try immediately if already loaded
    if (videoElement.readyState >= 2) {
      playVideo()
    } else {
      // Wait for video to load
      tryPlay()
    }

    // Also try after a delay to ensure video is ready
    const playTimeout = setTimeout(() => {
      if (isMounted && videoElement && videoElement.paused) {
        playVideo()
      }
    }, 500)

    // Keep trying to play if video is paused - ensure continuous playback
    const retryPlayInterval = setInterval(() => {
      if (isMounted && videoElement) {
        if (videoElement.paused && !videoElement.ended) {
          playVideo()
        }
      }
    }, 1000)

    // Auto-switch video every 7 seconds as fallback (only if video hasn't ended)
    switchTimerRef.current = setTimeout(() => {
      if (isMounted && videoElement && !videoElement.ended) {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
      }
    }, 7000)

    // Cleanup
    return () => {
      isMounted = false
      clearTimeout(playTimeout)
      if (retryPlayInterval) {
        clearInterval(retryPlayInterval)
      }
      if (switchTimerRef.current) {
        clearTimeout(switchTimerRef.current)
      }
      videoElement.removeEventListener('canplay', handleCanPlay)
      videoElement.removeEventListener('canplaythrough', handleCanPlay)
      videoElement.removeEventListener('loadeddata', handleCanPlay)
      videoElement.removeEventListener('ended', handleVideoEnd)
      videoElement.removeEventListener('error', handleError)
    }
  }, [currentVideoIndex, videos.length])

  // Handle video play when user interacts (after initial load)
  useEffect(() => {
    if (hasUserInteracted && videoRef.current) {
      const video = videoRef.current
      if (video.paused) {
        video.muted = true
        video.volume = 0
        video.play()
          .then(() => {
            setIsVideoReady(true)
          })
          .catch(() => {
            // Ignore errors
          })
      }
    }
  }, [hasUserInteracted])

  return (
    <section className="relative h-screen w-full overflow-hidden pt-24 md:pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-[1]">
        <video
          ref={videoRef}
          key={currentVideoIndex}
          autoPlay
          muted
          playsInline
          preload="auto"
          loop={false}
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover transition-opacity duration-500"
          poster="/pictures/Hero Poster Image.png"
          aria-label="Hero background video showing lawn care and irrigation services in Kenya"
          style={{ pointerEvents: 'none' }}
          onLoadedData={async (e) => {
            const video = e.currentTarget
            try {
              video.muted = true
              video.volume = 0
              video.controls = false
              if (video.paused) {
                await video.play()
                setIsVideoReady(true)
              }
            } catch (error) {
              // Autoplay blocked - will play on user interaction
            }
          }}
          onCanPlay={async (e) => {
            const video = e.currentTarget
            try {
              video.muted = true
              video.volume = 0
              video.controls = false
              if (video.paused) {
                await video.play()
                setIsVideoReady(true)
              }
            } catch (error) {
              // Autoplay blocked - will play on user interaction
            }
          }}
          onPlay={() => {
            setIsVideoReady(true)
          }}
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
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
      <div className="relative z-10 h-full flex items-center pt-8 md:pt-0">
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
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80"
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <a
                  href="tel:+254702005560"
                  className="flex items-center space-x-2 hover:text-brand-green transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Call: 0702 005 560</span>
                </a>
                <a
                  href="https://wa.me/254702005560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-brand-green transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
              <span className="hidden sm:block text-white/40">|</span>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <a
                  href="tel:+254704096417"
                  className="flex items-center space-x-2 hover:text-brand-green transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Call: 0704 096 417</span>
                </a>
                <a
                  href="https://wa.me/254704096417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-brand-green transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
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
