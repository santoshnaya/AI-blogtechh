import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { VideoEmbed } from '@/components/video-embed'
import { ArrowRight, Brain, Cpu, Zap, Clock, User, Calendar, Play } from 'lucide-react'

const featuredPosts = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence in 2024',
    description: 'Exploring the latest developments in AI technology and what they mean for the future.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI Research'
  },
  {
    id: 2,
    title: 'Machine Learning in Healthcare: Revolutionary Changes',
    description: 'How ML is transforming medical diagnosis and treatment planning.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    author: 'Prof. Michael Rodriguez',
    date: '2024-01-12',
    readTime: '12 min read',
    category: 'Healthcare AI'
  },
  {
    id: 3,
    title: 'Natural Language Processing: Breaking Language Barriers',
    description: 'The evolution of NLP and its impact on global communication.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
    author: 'Emma Thompson',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'NLP'
  }
]

const categories = [
  { name: 'Machine Learning', icon: Brain, count: 24 },
  { name: 'Deep Learning', icon: Cpu, count: 18 },
  { name: 'AI Ethics', icon: Zap, count: 12 },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Discover cutting-edge insights, research breakthroughs, and practical applications 
              that are shaping the world of AI and machine learning.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Explore Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Articles</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Latest insights from our AI research community
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-purple-500/50">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={600}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`} className="mt-4 inline-block">
                    <Button variant="ghost" className="p-0 h-auto text-purple-400 hover:text-purple-300">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Topics</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore different areas of AI and machine learning
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border hover:border-purple-500/50">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-purple-400 transition-colors">
                    {category.name}
                  </CardTitle>
                  <CardDescription>
                    {category.count} articles available
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Watch: The Future of AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how artificial intelligence is reshaping industries and creating new possibilities for innovation.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <VideoEmbed 
                videoId="JMLsHI8aV0g" 
                title="The Future of Artificial Intelligence"
                className="w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Understanding AI's Impact</h3>
              <p className="text-muted-foreground mb-6">
                From machine learning breakthroughs to neural network innovations, explore how AI 
                technologies are transforming everything from healthcare to autonomous vehicles. 
                This comprehensive overview covers the latest developments and future possibilities 
                in artificial intelligence.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Machine Learning Fundamentals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Real-world AI Applications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Future Technology Trends</span>
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Play className="mr-2 h-4 w-4" />
                Watch More Videos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Stay Updated with AI Trends
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest AI research, insights, and breakthrough news delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}