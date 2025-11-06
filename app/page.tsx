import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ServiceGrid from '@/components/ServiceGrid'
import WhyUs from '@/components/WhyUs'
import BeforeAfter from '@/components/BeforeAfter'
import Gallery from '@/components/Gallery'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ServiceGrid />
      <WhyUs />
      <BeforeAfter />
      <Gallery />
      <FinalCTA />
      <Footer />
    </main>
  )
}

