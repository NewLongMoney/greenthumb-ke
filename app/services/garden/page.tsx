import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Check, Phone, Mail, Flower2, TreeDeciduous, Palette, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Garden Services in Kenya | Garden Design & Maintenance - GreenThumb KE',
  description: 'Professional garden services in Kenya and East Africa. Expert garden design, garden maintenance, and garden care services in Nairobi. Trusted garden services company serving Kenya.',
  keywords: [
    'garden services Kenya',
    'garden design Kenya',
    'garden maintenance Kenya',
    'garden care Nairobi',
    'garden services East Africa',
    'professional garden services Kenya',
    'garden landscaping Kenya',
    'garden installation Kenya'
  ],
}

export default function GardenPage() {
  const services = [
    'Custom garden design and planning',
    'Landscape installation',
    'Flower bed design and planting',
    'Tree and shrub installation',
    'Garden renovation and redesign',
    'Mulching and edging',
    'Seasonal color planning',
    'Native plant landscaping',
    'Vegetable garden setup',
    'Regular garden maintenance',
    'Pruning and trimming',
    'Soil preparation and amendment',
  ]

  const designStyles = [
    {
      name: 'Modern Minimalist',
      icon: <Palette className="w-8 h-8" />,
      desc: 'Clean lines, geometric shapes, low-maintenance plants',
      features: ['Architectural plants', 'Hardscaping', 'Water features'],
    },
    {
      name: 'Tropical Paradise',
      icon: <Flower2 className="w-8 h-8" />,
      desc: 'Lush, colorful, vibrant plant combinations',
      features: ['Bold foliage', 'Bright flowers', 'Layered planting'],
    },
    {
      name: 'Native Kenyan',
      icon: <TreeDeciduous className="w-8 h-8" />,
      desc: 'Drought-tolerant, sustainable, wildlife-friendly',
      features: ['Native species', 'Water-wise', 'Low maintenance'],
    },
    {
      name: 'Edible Landscape',
      icon: <Wrench className="w-8 h-8" />,
      desc: 'Beautiful and productive fruit trees, herbs, vegetables',
      features: ['Fruit trees', 'Herb gardens', 'Raised beds'],
    },
  ]

  const packages = [
    {
      name: 'Garden Refresh',
      price: 'From KSh 35,000',
      features: [
        'Site consultation',
        'Basic design plan',
        'Soil preparation',
        'Plant selection (10-15 plants)',
        'Installation',
        'Mulching',
      ],
    },
    {
      name: 'Complete Garden',
      price: 'From KSh 80,000',
      features: [
        'Everything in Garden Refresh',
        'Detailed 3D design',
        'Comprehensive planting (30+ plants)',
        'Hardscaping elements',
        'Irrigation system',
        '3 months maintenance',
      ],
    },
    {
      name: 'Premium Landscape',
      price: 'From KSh 150,000',
      features: [
        'Everything in Complete Garden',
        'Full landscape transformation',
        'Custom water features',
        'Lighting design',
        'Outdoor living spaces',
        '6 months maintenance',
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
            Garden Design & Maintenance
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Transform your outdoor space into a beautiful, sustainable garden that reflects your style.
            From concept to completion, we create landscapes that inspire and endure.
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

      {/* Design Styles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Garden Design Styles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a style that matches your vision and lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {designStyles.map((style, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-brand-green/10 w-16 h-16 rounded-xl flex items-center justify-center text-brand-green mb-6">
                  {style.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{style.name}</h3>
                <p className="text-gray-600 mb-4">{style.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {style.features.map((feature, idx) => (
                    <span key={idx} className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Garden Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete garden solutions from design to ongoing care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl">
                <div className="bg-brand-green/10 p-2 rounded-full flex-shrink-0">
                  <Check className="w-4 h-4 text-brand-green" />
                </div>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Garden Design Packages
            </h2>
            <p className="text-xl text-gray-600">
              Professional design and installation packages
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
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your vision, needs, and budget' },
              { step: '02', title: 'Design', desc: 'Create custom plan with 3D visualization' },
              { step: '03', title: 'Installation', desc: 'Professional planting and construction' },
              { step: '04', title: 'Maintenance', desc: 'Ongoing care to keep it beautiful' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-brand-green/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
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
              Garden Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Beautiful gardens we&apos;ve created across Kenya
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
            Ready to Create Your Dream Garden?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a free consultation and site visit today
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

