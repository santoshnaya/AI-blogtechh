import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, User, Calendar, Search, Filter } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence in 2024',
    description: 'Exploring the latest developments in AI technology and what they mean for the future of humanity and technology.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI Research',
    featured: true
  },
  {
    id: 2,
    title: 'Machine Learning in Healthcare: Revolutionary Changes',
    description: 'How ML is transforming medical diagnosis and treatment planning across the globe.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    author: 'Prof. Michael Rodriguez',
    date: '2024-01-12',
    readTime: '12 min read',
    category: 'Healthcare AI',
    featured: false
  },
  {
    id: 3,
    title: 'Natural Language Processing: Breaking Language Barriers',
    description: 'The evolution of NLP and its impact on global communication and accessibility.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
    author: 'Emma Thompson',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'NLP',
    featured: false
  },
  {
    id: 4,
    title: 'Computer Vision: Seeing the World Through AI Eyes',
    description: 'How computer vision is revolutionizing industries from autonomous vehicles to medical imaging.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    author: 'Dr. Alex Kim',
    date: '2024-01-08',
    readTime: '10 min read',
    category: 'Computer Vision',
    featured: false
  },
  {
    id: 5,
    title: 'Ethics in AI: Building Responsible Technology',
    description: 'Exploring the moral implications and guidelines for developing ethical AI systems.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    author: 'Prof. Lisa Wang',
    date: '2024-01-05',
    readTime: '15 min read',
    category: 'AI Ethics',
    featured: false
  },
  {
    id: 6,
    title: 'Quantum Computing Meets AI: The Next Frontier',
    description: 'Understanding how quantum computing could accelerate AI development and solve complex problems.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
    author: 'Dr. James Park',
    date: '2024-01-03',
    readTime: '11 min read',
    category: 'Quantum AI',
    featured: true
  }
]

const categories = ['All', 'AI Research', 'Healthcare AI', 'NLP', 'Computer Vision', 'AI Ethics', 'Quantum AI']

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            AI Blog & Insights
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest research, trends, and breakthroughs in artificial intelligence and machine learning.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className={category === 'All' ? 'bg-purple-600 hover:bg-purple-700' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-purple-500/50">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={600}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-purple-400 transition-colors text-xl">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-base">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
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
                  <Link href={`/blog/${post.id}`}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Read Full Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
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
                    <span className="bg-purple-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
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
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full hover:bg-purple-600 hover:text-white hover:border-purple-600">
                      Read Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-purple-600 hover:text-white hover:border-purple-600">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}