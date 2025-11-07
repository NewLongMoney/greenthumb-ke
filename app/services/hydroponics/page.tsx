import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Check, Phone, Mail, Sprout, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hydroponic Systems Installation in Kenya | Hydroponics Company - GreenThumb KE',
  description: 'Professional hydroponic systems installation in Kenya and East Africa. Hydroponic farming systems for homes and businesses in Nairobi. Grow fresh vegetables year-round with 90% less water.',
  keywords: [
    'hydroponic systems Kenya',
    'hydroponics company Kenya',
    'hydroponic installation Nairobi',
    'hydroponic farming Kenya',
    'soilless farming Kenya',
    'hydroponics East Africa',
    'hydroponic systems Nairobi',
    'hydroponic experts Kenya'
  ],
}

export default function HydroponicsPage() {
  const services = [
    'Custom hydroponic system design',
    'Residential system installation',
    'Commercial farm setup',
    'NFT (Nutrient Film Technique) systems',
    'Deep Water Culture (DWC) systems',
    'Vertical tower systems',
    'Drip hydroponic systems',
    'Greenhouse integration',
    'Training and support',
    'Nutrient management',
    'System maintenance',
    'Market linkage assistance',
  ]

  const systemTypes = [
    {
      name: 'Home System',
      icon: <Sprout className="w-8 h-8" />,
      capacity: '20-40 plants',
      space: '2-4 m²',
      ideal: 'Balcony, backyard, rooftop',
      roi: 'Fresh vegetables for family',
    },
    {
      name: 'Small Commercial',
      icon: <TrendingUp className="w-8 h-8" />,
      capacity: '100-200 plants',
      space: '10-20 m²',
      ideal: 'Small-scale farming, side business',
      roi: '3-6 months payback',
    },
    {
      name: 'Commercial Farm',
      icon: <Users className="w-8 h-8" />,
      capacity: '500+ plants',
      space: '50+ m²',
      ideal: 'Full-time farming, supply contracts',
      roi: '6-12 months payback',
    },
  ]

  const packages = [
    {
      name: 'Starter Kit',
      price: 'From KSh 25,000',
      features: [
        'Basic NFT or DWC system',
        '20-30 plant capacity',
        'Basic nutrients (3 months)',
        'Growing medium',
        'pH & EC meters',
        'Setup and training',
      ],
    },
    {
      name: 'Home Grower',
      price: 'From KSh 60,000',
      features: [
        'Everything in Starter Kit',
        '50-80 plant capacity',
        'Automated timer system',
        'Premium components',
        'Nutrients (6 months)',
        'Ongoing support',
      ],
    },
    {
      name: 'Commercial System',
      price: 'From KSh 150,000',
      features: [
        'Professional-grade system',
        '200+ plant capacity',
        'Fully automated',
        'Greenhouse structure',
        'Business training',
        '1-year support',
      ],
    },
  ]

  const createWhatsappLink = (packageName: string) => {
    const message = `Hi GreenThumb KE, I'm interested in the ${packageName} hydroponics package.`
    return `https://wa.me/254702005560?text=${encodeURIComponent(message)}`
  }

  const crops = [
    { name: 'Lettuce', time: '3-4 weeks', profit: 'High' },
    { name: 'Spinach', time: '4-5 weeks', profit: 'High' },
    { name: 'Kales', time: '4-6 weeks', profit: 'Very High' },
    { name: 'Herbs (Basil, Mint)', time: '3-4 weeks', profit: 'Very High' },
    { name: 'Tomatoes', time: '8-10 weeks', profit: 'High' },
    { name: 'Peppers', time: '8-12 weeks', profit: 'High' },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-white/80 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hydroponics Systems
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Grow fresh, healthy vegetables without soil using 90% less water.
            Perfect for homes, restaurants, and commercial farms. Year-round production with higher yields.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="tel:0702005560"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a 
              href="mailto:254greenthumb@gmail.com"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/40">
            <Image
              src="/pictures/Hydroponics Services.png"
              alt="Hydroponic systems installed by GreenThumb KE"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1080px"
            />
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your System Size
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hobby growing to commercial farming
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {systemTypes.map((system, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-brand-green/10 w-16 h-16 rounded-xl flex items-center justify-center text-brand-green mb-6">
                  {system.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{system.name}</h3>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p><strong>Capacity:</strong> {system.capacity}</p>
                  <p><strong>Space:</strong> {system.space}</p>
                  <p><strong>Ideal for:</strong> {system.ideal}</p>
                  <p className="text-brand-green font-semibold"><strong>ROI:</strong> {system.roi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Hydroponics?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💧', title: '90% Less Water', desc: 'Extremely water-efficient' },
              { icon: '📈', title: '3-10x Yields', desc: 'More productive per m²' },
              { icon: '🚀', title: 'Faster Growth', desc: '30-50% quicker harvests' },
              { icon: '🌍', title: 'Year-Round', desc: 'Not season-dependent' },
              { icon: '🚫', title: 'No Weeds', desc: 'No soil means no weeds' },
              { icon: '🛡️', title: 'Less Pests', desc: 'Cleaner growing environment' },
              { icon: '💰', title: 'High Profit', desc: 'Premium prices for fresh produce' },
              { icon: '🏙️', title: 'Space Efficient', desc: 'Perfect for urban areas' },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Crops */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Crops for Hydroponics
            </h2>
            <p className="text-xl text-gray-600">
              High-value crops perfect for Kenyan market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crops.map((crop, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{crop.name}</h3>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>Growth Time:</strong> {crop.time}</p>
                  <p className="text-brand-green font-semibold"><strong>Profit Potential:</strong> {crop.profit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hydroponic Packages
            </h2>
            <p className="text-xl text-gray-600">
              Complete systems with training and support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border-2 ${
                  index === 1 
                    ? 'border-brand-green bg-primary-50 transform scale-105' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {index === 1 && (
                  <div className="bg-brand-green text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-brand-green mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={createWhatsappLink(pkg.name)}
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    index === 1
                      ? 'bg-brand-green text-white hover:bg-primary-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Hydroponic Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-md">
                <div className="bg-brand-green/10 p-2 rounded-full flex-shrink-0">
                  <Check className="w-4 h-4 text-brand-green" />
                </div>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              System Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Hydroponic systems we&apos;ve installed
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="aspect-square bg-gradient-to-br from-brand-green to-primary-600 rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-white/20 text-6xl font-bold group-hover:scale-110 transition-transform">
                  GT
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Your Hydroponic Journey
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a free consultation and site assessment today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0702005560" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Call: 0702 005 560
            </a>
            <a href="tel:0704096417" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Call: 0704 096 417
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

