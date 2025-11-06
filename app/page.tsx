import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'

// Lazy load all below-the-fold components
const ServiceGrid = dynamic(() => import('@/components/ServiceGrid'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
})

const WhyUs = dynamic(() => import('@/components/WhyUs'), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true,
})

const Gallery = dynamic(() => import('@/components/Gallery'), {
  loading: () => <div className="min-h-[600px]" />,
  ssr: false, // TikTok embed doesn't need SSR
})

const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="min-h-[300px]" />,
  ssr: true,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
  ssr: true,
})

// Optimize for performance - use static generation where possible
export const revalidate = 3600 // Revalidate every hour

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ServiceGrid />
      <WhyUs />
      <Gallery />
      <FinalCTA />
      <Footer />
    </main>
  )
}

