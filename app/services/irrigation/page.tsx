import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Check, Phone, Mail, Droplet, Gauge, Smartphone, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Smart Irrigation Systems Installation in Kenya - GreenThumb KE',
  description: 'Professional irrigation system design and installation. Save up to 50% water with smart controllers and efficient drip systems.',
}

export default function IrrigationPage() {
  const services = [
    'Custom irrigation system design',
    'Drip irrigation installation',
    'Smart sprinkler systems',
    'Micro-spray systems',
    'Weather-based smart controllers',
    'Soil moisture sensors',
    'Rainwater harvesting integration',
    'System maintenance and repairs',
    'Water audit and efficiency analysis',
    'Automated scheduling setup',
  ]

  const systems = [
    {
      name: 'Drip Irrigation',
      icon: <Droplet className="w-8 h-8" />,
      savings: 'Up to 70% water savings',
      bestFor: 'Gardens, vegetables, trees',
      price: 'From KSh 5,000 per 100m²',
    },
    {
      name: 'Smart Sprinklers',
      icon: <Smartphone className="w-8 h-8" />,
      savings: '30-50% water savings',
      bestFor: 'Lawns, large areas',
      price: 'From KSh 10,000',
    },
    {
      name: 'Micro-Spray',
      icon: <Gauge className="w-8 h-8" />,
      savings: '40-60% water savings',
      bestFor: 'Flower beds, ground covers',
      price: 'From KSh 7,000',
    },
  ]

  const packages = [
    {
      name: 'Basic System',
      price: 'From KSh 25,000',
      features: [
        'System design and layout',
        'Basic drip or sprinkler installation',
        'Manual timer control',
        'Basic components',
        '1-year warranty',
        'Installation included',
      ],
    },
    {
      name: 'Smart System',
      price: 'From KSh 45,000',
      features: [
        'Everything in Basic',
        'Weather-based smart controller',
        'Rain sensor integration',
        'Mobile app control',
        'Multiple zone control',
        '2-year warranty',
      ],
    },
    {
      name: 'Premium System',
      price: 'From KSh 75,000',
      features: [
        'Everything in Smart',
        'Soil moisture sensors',
        'Rainwater tank integration',
        'Professional-grade components',
        'Priority maintenance',
        '3-year warranty',
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
            Smart Irrigation Systems
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Save water, save money, and keep your landscape thriving with our advanced irrigation solutions.
            Reduce water consumption by up to 50% while maintaining a healthier, greener landscape.
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

      {/* System Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Irrigation System Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect system for your landscape and water needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {systems.map((system, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-brand-green/10 w-16 h-16 rounded-xl flex items-center justify-center text-brand-green mb-6">
                  {system.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{system.name}</h3>
                <p className="text-brand-green font-semibold mb-2">{system.savings}</p>
                <p className="text-gray-600 mb-4">Best for: {system.bestFor}</p>
                <p className="text-2xl font-bold text-gray-900">{system.price}</p>
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
              Our Irrigation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete irrigation solutions from design to maintenance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-50 p-6 rounded-xl">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Installation Packages
            </h2>
            <p className="text-xl text-gray-600">
              Professional installation with warranty included
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Upgrade to Smart Irrigation?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Droplet className="w-8 h-8" />, title: '50% Water Savings', desc: 'Significantly reduce water bills' },
              { icon: <Smartphone className="w-8 h-8" />, title: 'Remote Control', desc: 'Manage from anywhere via app' },
              { icon: <Leaf className="w-8 h-8" />, title: 'Healthier Plants', desc: 'Optimal watering every time' },
              { icon: <Gauge className="w-8 h-8" />, title: 'Time Savings', desc: 'Automated scheduling' },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-green/10 w-16 h-16 rounded-xl flex items-center justify-center text-brand-green mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
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
              Our Installations
            </h2>
            <p className="text-xl text-gray-600">
              Professional irrigation systems across Kenya
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
            Ready to Save Water and Money?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free water audit and custom irrigation system design
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

