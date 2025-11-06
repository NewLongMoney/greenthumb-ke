import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { viewport } from './viewport'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export { viewport }

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://greenthumb-ke.vercel.app'),
  title: 'Best Irrigation & Lawn Care Company in Kenya | GreenThumb KE',
  description: 'Best irrigation systems and lawn care company in Kenya and East Africa. Professional lawn care services, smart irrigation installation, garden maintenance, and hydroponic systems in Nairobi. Top-rated lawn care and irrigation experts serving Kenya and East Africa.',
  keywords: [
    'best irrigation company Kenya',
    'best lawn care company Kenya',
    'irrigation systems Kenya',
    'lawn care services Kenya',
    'irrigation installation Nairobi',
    'lawn care Nairobi',
    'smart irrigation systems Kenya',
    'drip irrigation Kenya',
    'garden services Kenya',
    'hydroponic systems Kenya',
    'irrigation company East Africa',
    'lawn care East Africa',
    'best irrigation company Nairobi',
    'professional lawn care Kenya',
    'automated irrigation Kenya',
    'irrigation experts Kenya',
    'lawn maintenance Kenya',
    'garden irrigation Kenya',
    'irrigation contractors Kenya',
    'lawn care experts Nairobi'
  ],
  icons: {
    icon: [
      { url: '/logos/Green Thumb Logo Round.png', sizes: '192x192', type: 'image/png' },
      { url: '/logos/Green Thumb Logo Round.png', sizes: '96x96', type: 'image/png' },
      { url: '/logos/Green Thumb Logo Round.png', sizes: '64x64', type: 'image/png' },
      { url: '/logos/Green Thumb Logo Round.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/logos/Green Thumb Logo Round.png',
    apple: [
      { url: '/logos/Green Thumb Logo Round.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Best Irrigation & Lawn Care Company in Kenya | GreenThumb KE',
    description: 'Best irrigation systems and lawn care company in Kenya and East Africa. Professional lawn care services, smart irrigation installation, and garden maintenance in Nairobi.',
    type: 'website',
    locale: 'en_KE',
    siteName: 'GreenThumb KE',
    images: [
      {
        url: '/logos/Green Thumb Logo Round.png',
        width: 1200,
        height: 630,
        alt: 'GreenThumb KE - Best Irrigation and Lawn Care Company in Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Irrigation & Lawn Care Company in Kenya | GreenThumb KE',
    description: 'Best irrigation systems and lawn care company in Kenya and East Africa.',
    images: ['/logos/Green Thumb Logo Round.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://greenthumb-ke.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload hero videos for instant playback */}
        <link rel="preload" href="/videos/Greenthumb Website Shot 1.mp4" as="video" type="video/mp4" fetchPriority="high" />
        <link rel="preload" href="/videos/Greenthumb Website Shot 2.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/Greenthumb Website Shot 3.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/Greenthumb Website Shot 4.mp4" as="video" type="video/mp4" />
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.tiktok.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p16-sign-va.tiktokcdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.facebook.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.instagram.com" crossOrigin="anonymous" />
        {/* DNS prefetch for faster external resource loading */}
        <link rel="dns-prefetch" href="https://www.tiktok.com" />
        <link rel="dns-prefetch" href="https://p16-sign-va.tiktokcdn.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}

