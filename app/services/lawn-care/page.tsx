import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Check, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professional Lawn Care Services in Kenya - GreenThumb KE',
  description: 'Expert lawn maintenance, mowing, fertilization, and weed control services in Kenya. Transform your lawn into a lush, healthy paradise.',
}

export default function LawnCarePage() {
  const services = [
    'Regular mowing and edging',
    'Lawn fertilization programs',
    'Weed control and prevention',
    'Pest and disease management',
    'Aeration and dethatching',
    'Overseeding and renovation',
    'Lawn installation (Kikuyu, Buffalo, Paspalum)',
    'Seasonal lawn care plans',
  ]

  const packages = [
    {
      name: 'Basic Care',
      price: 'From KSh 5,000/month',
      features: [
        'Weekly mowing',
        'Edging',
        'Grass collection',
        'Basic weed control',
      ],
    },
    {
      name: 'Premium Care',
      price: 'From KSh 10,000/month',
      features: [
        'Everything in Basic',
        'Monthly fertilization',
        'Pest control',
        'Disease monitoring',
        'Soil testing',
      ],
    },
    {
      name: 'Complete Care',
      price: 'From KSh 15,000/month',
      features: [
        'Everything in Premium',
        'Aeration (quarterly)',
        'Overseeding as needed',
        'Priority service',
        '24/7 support',
      ],
    },
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
            Professional Lawn Care Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Transform your lawn into a lush, healthy paradise with our expert maintenance services.
            Serving homes and businesses across Kenya.
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

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Lawn Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive lawn maintenance tailored to Kenya&apos;s climate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-brand-green/10 p-2 rounded-full flex-shrink-0">
                  <Check className="w-5 h-5 text-brand-green" />
                </div>
                <span className="text-lg text-gray-700">{service}</span>
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
              Lawn Care Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your lawn
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
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    index === 1
                      ? 'bg-brand-green text-white hover:bg-primary-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work Gallery
            </h2>
            <p className="text-xl text-gray-600">
              See the transformation we bring to lawns across Kenya
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

          <p className="text-center text-gray-600 mt-8">
            Add your lawn photos to: <code className="bg-gray-200 px-2 py-1 rounded">public/images/lawn-care/</code>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready for a Perfect Lawn?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free consultation and quote
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

