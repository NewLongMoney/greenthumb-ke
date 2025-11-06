'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface LogoProps {
  variant?: 'full' | 'icon'
  light?: boolean
  className?: string
  width?: number
  height?: number
}

export default function Logo({ 
  variant = 'full', 
  light = false, 
  className = '',
  width,
  height
}: LogoProps) {
  const [imgSrc, setImgSrc] = useState<string>('')
  const [imgError, setImgError] = useState(false)

  // Determine logo file paths (try multiple formats)
  useEffect(() => {
    if (variant === 'icon') {
      if (light) {
        setImgSrc('/logos/logo-icon-light.svg')
      } else {
        setImgSrc('/logos/logo-icon.svg')
      }
    } else {
      // Full logo
      if (light) {
        setImgSrc('/logos/logo-full-light.svg')
      } else {
        setImgSrc('/logos/logo-full.svg')
      }
    }
  }, [variant, light])

  // Default dimensions
  const defaultWidth = variant === 'icon' ? 40 : 200
  const defaultHeight = variant === 'icon' ? 40 : 60

  // Handle image load errors - try PNG fallback, then text fallback
  const handleError = () => {
    if (imgSrc.endsWith('.svg')) {
      // Try PNG version
      setImgSrc(imgSrc.replace('.svg', '.png'))
    } else {
      // If PNG also fails, use text fallback
      setImgError(true)
    }
  }

  // If image fails to load, fall back to text logo
  if (imgError || !imgSrc) {
    return (
      <div className={`flex items-center ${className}`}>
        {variant === 'full' ? (
          <>
            <span className={`text-2xl font-bold ${light ? 'text-white' : 'text-gray-900'}`}>
              GreenThumb
            </span>
            <span className="text-2xl font-bold text-brand-green"> KE</span>
          </>
        ) : (
          <div 
            className="rounded-full bg-brand-green flex items-center justify-center"
            style={{ width: width || defaultWidth, height: height || defaultHeight }}
          >
            <span className="text-lg font-bold text-white">
              GT
            </span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={className}>
      <Image
        src={imgSrc}
        alt="GreenThumb KE Logo"
        width={width || defaultWidth}
        height={height || defaultHeight}
        className="object-contain"
        priority
        onError={handleError}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>
  )
}

