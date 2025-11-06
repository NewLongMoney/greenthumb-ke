import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GreenThumb KE - Transforming Landscapes, Inspiring Lives',
  description: 'Professional lawn care, irrigation systems, garden services, and hydroponics in Kenya. Sustainable landscape solutions for your home or business.',
  keywords: ['lawn care Kenya', 'irrigation systems', 'hydroponics', 'garden services', 'landscape design'],
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

