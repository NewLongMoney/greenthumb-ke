import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Resources - GreenThumb KE',
  description: 'Expert insights on lawn care, irrigation, gardening, and hydroponics in Kenya. Tips, guides, and industry knowledge.',
}

const blogPosts = [
  {
    slug: 'complete-guide-lawn-care-kenya',
    title: 'The Complete Guide to Lawn Care in Kenya',
    excerpt: 'Discover the best practices for maintaining a lush, green lawn in Kenya\'s unique climate. From watering schedules to pest control.',
    date: 'November 2024',
    author: 'GreenThumb KE Team',
    category: 'Lawn Care',
    readTime: '8 min read',
  },
  {
    slug: 'water-efficient-irrigation-systems',
    title: 'Water-Efficient Irrigation Systems: A Complete Guide',
    excerpt: 'Learn how modern irrigation systems can save up to 50% water while keeping your landscape thriving. Perfect for Kenyan climate.',
    date: 'November 2024',
    author: 'GreenThumb KE Team',
    category: 'Irrigation',
    readTime: '10 min read',
  },
  {
    slug: 'hydroponics-beginners-guide-kenya',
    title: 'Hydroponics for Beginners: Growing Food Without Soil in Kenya',
    excerpt: 'Start your hydroponic journey with this comprehensive guide. Learn systems, crops, and tips for successful soilless farming.',
    date: 'November 2024',
    author: 'GreenThumb KE Team',
    category: 'Hydroponics',
    readTime: '12 min read',
  },
  {
    slug: 'sustainable-garden-design-tips',
    title: 'Sustainable Garden Design: Creating Eco-Friendly Outdoor Spaces',
    excerpt: 'Transform your garden into an eco-friendly oasis. Native plants, water conservation, and sustainable practices for Kenya.',
    date: 'November 2024',
    author: 'GreenThumb KE Team',
    category: 'Garden Design',
    readTime: '7 min read',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Expert insights, tips, and guides for maintaining beautiful, sustainable landscapes in Kenya
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-brand-green to-primary-600 h-48 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-20">GT</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-brand-green font-semibold">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

