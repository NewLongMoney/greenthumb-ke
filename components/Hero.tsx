'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [activeVideo, setActiveVideo] = useState<'video1' | 'video2'>('video1')
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const switchTimerRef = useRef<NodeJS.Timeout | null>(null)

  const videos = useMemo(() => [
    '/videos/Greenthumb Website Shot 1.mp4',
    '/videos/Greenthumb Website Shot 2.mp4',
    '/videos/Greenthumb Website Shot 3.mp4',
    '/videos/Greenthumb Website Shot 4.mp4',
  ], [])

  // Preload all videos immediately using link elements for faster loading
  useEffect(() => {
    // Create link elements for preloading videos
    const preloadLinks: HTMLLinkElement[] = []
    videos.forEach((videoSrc, index) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'video'
      link.href = videoSrc
      link.type = 'video/mp4'
      if (index === 0) {
        link.setAttribute('fetchpriority', 'high')
      }
      document.head.appendChild(link)
      preloadLinks.push(link)
    })

    return () => {
      preloadLinks.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link)
        }
      })
    }
  }, [videos])

  // Continuous monitoring to ensure videos never pause
  useEffect(() => {
    const monitorVideos = () => {
      const video1 = video1Ref.current
      const video2 = video2Ref.current
      
      const forcePlay = async (video: HTMLVideoElement | null) => {
        if (!video) return
        if (video.paused && !video.ended) {
          try {
            video.muted = true
            video.volume = 0
            await video.play()
          } catch (error) {
            // Retry immediately
            setTimeout(() => forcePlay(video), 100)
          }
        }
      }
      
      forcePlay(video1)
      forcePlay(video2)
    }

    // Check every 100ms to ensure videos never pause
    const monitorInterval = setInterval(monitorVideos, 100)
    
    return () => {
      clearInterval(monitorInterval)
    }
  }, [])

  // Initialize first video with aggressive preloading
  useEffect(() => {
    const currentVideo = video1Ref.current
    if (!currentVideo) return

    currentVideo.muted = true
    currentVideo.volume = 0
    currentVideo.playsInline = true
    currentVideo.setAttribute('playsinline', 'true')
    currentVideo.setAttribute('webkit-playsinline', 'true')
    currentVideo.preload = 'auto'
    // Set loading priority
    if ('fetchPriority' in currentVideo) {
      (currentVideo as any).fetchPriority = 'high'
    }
    currentVideo.src = videos[0]
    // Start loading immediately
    currentVideo.load()
    
    // Preload next video in background
    const nextVideo = video2Ref.current
    if (nextVideo) {
      nextVideo.preload = 'auto'
      nextVideo.src = videos[1]
      nextVideo.load()
    }

    const playVideo = async () => {
      try {
        currentVideo.muted = true
        currentVideo.volume = 0
        if (currentVideo.paused) {
          await currentVideo.play()
        }
      } catch (error) {
        // Retry immediately
        setTimeout(() => playVideo(), 100)
      }
    }

    const handleCanPlay = () => {
      playVideo()
        }

    const handlePause = () => {
      // Immediately resume if paused
      playVideo()
    }

    const handleWaiting = () => {
      // Resume when buffering completes
      const resumeOnCanPlay = () => {
        playVideo()
        currentVideo.removeEventListener('canplay', resumeOnCanPlay)
      }
      currentVideo.addEventListener('canplay', resumeOnCanPlay, { once: true })
    }

    currentVideo.addEventListener('canplay', handleCanPlay, { once: true })
    currentVideo.addEventListener('loadeddata', handleCanPlay, { once: true })
    currentVideo.addEventListener('pause', handlePause)
    currentVideo.addEventListener('waiting', handleWaiting)
    
    if (currentVideo.readyState >= 2) {
      playVideo()
    }

    return () => {
      currentVideo.removeEventListener('canplay', handleCanPlay)
      currentVideo.removeEventListener('loadeddata', handleCanPlay)
      currentVideo.removeEventListener('pause', handlePause)
      currentVideo.removeEventListener('waiting', handleWaiting)
    }
  }, [videos])

  // Handle seamless video transitions
  useEffect(() => {
    const currentVideo = activeVideo === 'video1' ? video1Ref.current : video2Ref.current
    const nextVideo = activeVideo === 'video1' ? video2Ref.current : video1Ref.current
    if (!currentVideo || !nextVideo) return

    let isMounted = true
    let hasSwitched = false

    // Ensure current video never pauses
    const forceCurrentPlay = async () => {
      if (!isMounted || !currentVideo || hasSwitched) return
      if (currentVideo.paused && !currentVideo.ended) {
        try {
          currentVideo.muted = true
          currentVideo.volume = 0
          await currentVideo.play()
        } catch (error) {
          setTimeout(() => forceCurrentPlay(), 100)
        }
      }
    }

    const handleCurrentPause = () => {
      forceCurrentPlay()
    }

    const handleCurrentWaiting = () => {
      const resumeOnCanPlay = () => {
        forceCurrentPlay()
        currentVideo.removeEventListener('canplay', resumeOnCanPlay)
      }
      currentVideo.addEventListener('canplay', resumeOnCanPlay, { once: true })
    }

    currentVideo.addEventListener('pause', handleCurrentPause)
    currentVideo.addEventListener('waiting', handleCurrentWaiting)

    // Preload next video
    const nextIndex = (currentVideoIndex + 1) % videos.length
    nextVideo.muted = true
    nextVideo.volume = 0
    nextVideo.playsInline = true
    nextVideo.setAttribute('playsinline', 'true')
    nextVideo.setAttribute('webkit-playsinline', 'true')
    nextVideo.preload = 'auto'
    nextVideo.src = videos[nextIndex]
    nextVideo.load()

    // Ensure next video is ready to play
    const ensureNextVideoReady = async () => {
      if (!isMounted || !nextVideo) return
      if (nextVideo.readyState < 3) {
        const waitForReady = () => {
          return new Promise<void>((resolve) => {
            if (nextVideo.readyState >= 3) {
              resolve()
            } else {
              const onCanPlay = () => {
                nextVideo.removeEventListener('canplay', onCanPlay)
                resolve()
              }
              nextVideo.addEventListener('canplay', onCanPlay, { once: true })
            }
          })
        }
        await waitForReady()
      }
    }

    const switchToNextVideo = async () => {
      if (!isMounted || hasSwitched) return
      hasSwitched = true

      // Prepare next video
      nextVideo.currentTime = 0
      await ensureNextVideoReady()

      // Play next video immediately
      try {
        nextVideo.muted = true
        nextVideo.volume = 0
        await nextVideo.play()
      } catch (error) {
        // Retry immediately
        setTimeout(() => {
          if (isMounted && nextVideo) {
            nextVideo.play().catch(() => {})
      }
        }, 100)
      }

      // Switch active video
      setActiveVideo(prev => prev === 'video1' ? 'video2' : 'video1')
      setCurrentVideoIndex(nextIndex)
    }

    // Monitor current video time and switch before it ends
    const checkTime = () => {
      if (!isMounted || !currentVideo || hasSwitched) return
      
      const duration = currentVideo.duration
      const currentTime = currentVideo.currentTime
      
      // Switch 0.3 seconds before the video ends for seamless transition
      if (duration > 0 && currentTime > 0 && (duration - currentTime) <= 0.3) {
        switchToNextVideo()
      }
    }

    const handleTimeUpdate = () => {
      checkTime()
      // Also check if paused during time update
      forceCurrentPlay()
    }

    const handleVideoEnd = () => {
      if (isMounted && !hasSwitched) {
        switchToNextVideo()
      }
    }

    // Add event listeners
    currentVideo.addEventListener('timeupdate', handleTimeUpdate)
    currentVideo.addEventListener('ended', handleVideoEnd)

    // Fallback timer
    switchTimerRef.current = setTimeout(() => {
      if (isMounted && currentVideo && !currentVideo.ended && !hasSwitched) {
        switchToNextVideo()
      }
    }, 7000)

    // Cleanup
    return () => {
      isMounted = false
      if (switchTimerRef.current) {
        clearTimeout(switchTimerRef.current)
      }
      currentVideo.removeEventListener('timeupdate', handleTimeUpdate)
      currentVideo.removeEventListener('ended', handleVideoEnd)
      currentVideo.removeEventListener('pause', handleCurrentPause)
      currentVideo.removeEventListener('waiting', handleCurrentWaiting)
    }
  }, [currentVideoIndex, activeVideo, videos])

  // Handle user interaction for autoplay - ensure videos play on any interaction
  useEffect(() => {
    const handleInteraction = async () => {
      const video1 = video1Ref.current
      const video2 = video2Ref.current
      
      const playVideo = async (video: HTMLVideoElement | null) => {
        if (!video) return
        if (video.paused) {
          try {
          video.muted = true
          video.volume = 0
          await video.play()
        } catch (error) {
            // Retry
            setTimeout(() => playVideo(video), 100)
          }
        }
      }
      
      playVideo(video1)
      playVideo(video2)
    }

    const events = ['touchstart', 'click', 'scroll', 'mousemove', 'keydown']
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true, passive: true })
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction)
      })
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background - Dual videos for seamless transitions */}
        <div className="absolute inset-0 z-[1]">
        {/* Primary Video */}
          <video
          ref={video1Ref}
            autoPlay
            muted
            playsInline
            preload="auto"
            loop={false}
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
            activeVideo === 'video1' ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
            aria-label="Hero background video"
            style={{ pointerEvents: 'none' }}
            onPause={(e) => {
            // Immediately resume if paused
              const video = e.currentTarget
            video.play().catch(() => {
              setTimeout(() => video.play(), 100)
            })
          }}
          onWaiting={(e) => {
            // Resume when buffering completes
              const video = e.currentTarget
            const resumeOnCanPlay = () => {
              video.play().catch(() => {})
              video.removeEventListener('canplay', resumeOnCanPlay)
            }
            video.addEventListener('canplay', resumeOnCanPlay, { once: true })
          }}
        />
        
        {/* Secondary Video for seamless switching */}
        <video
          ref={video2Ref}
          autoPlay
          muted
          playsInline
          preload="auto"
          loop={false}
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
            activeVideo === 'video2' ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          aria-label="Hero background video"
          style={{ pointerEvents: 'none' }}
          onPause={(e) => {
            // Immediately resume if paused
            const video = e.currentTarget
            video.play().catch(() => {
              setTimeout(() => video.play(), 100)
            })
          }}
          onWaiting={(e) => {
            // Resume when buffering completes
            const video = e.currentTarget
            const resumeOnCanPlay = () => {
              video.play().catch(() => {})
              video.removeEventListener('canplay', resumeOnCanPlay)
            }
            video.addEventListener('canplay', resumeOnCanPlay, { once: true })
            }}
          />
        
        <div className="absolute inset-0 video-overlay z-20" />
        </div>

      {/* Fallback gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500">
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

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Professional lawn care services, smart irrigation systems, and garden maintenance 
              across Kenya and East Africa. Trusted by hundreds of homeowners and businesses in Nairobi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-brand-green text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl hover:bg-primary-600 hover:shadow-brand-green/50 flex items-center space-x-2 min-w-[280px] justify-center"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

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
