import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  )
}

