import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { viewport } from './viewport'
import './globals.css'

export { viewport }

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://greenthumb-ke.vercel.app'),
  title: 'GreenThumb KE - Transforming Landscapes, Inspiring Lives',
  description: 'Professional lawn care, irrigation systems, garden services, and hydroponics in Kenya. Sustainable landscape solutions for your home or business.',
  keywords: ['lawn care Kenya', 'irrigation systems', 'hydroponics', 'garden services', 'landscape design'],
  icons: {
    icon: [
      { url: '/logos/Green Thumb Logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logos/Green Thumb Logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logos/Green Thumb Logo.png',
    apple: '/logos/Green Thumb Logo.png',
  },
  openGraph: {
    title: 'GreenThumb KE - Transforming Landscapes, Inspiring Lives',
    description: 'Professional lawn care, irrigation systems, garden services, and hydroponics in Kenya.',
    type: 'website',
    locale: 'en_KE',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

