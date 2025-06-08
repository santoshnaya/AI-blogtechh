import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, User, Calendar, ArrowLeft, Share2, Heart, Bookmark, Eye } from 'lucide-react'

// This would typically come from a database or CMS
const getBlogPost = (id: string) => {
  const posts = {
    '1': {
      id: 1,
      title: 'The Future of Artificial Intelligence in 2024',
      description: 'Exploring the latest developments in AI technology and what they mean for the future of humanity and technology.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop',
      author: 'Dr. Sarah Chen',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b332c1e4?w=100&h=100&fit=crop&crop=face',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI Research',
      views: '12.5k',
      likes: 342,
      content: `
        <p class="text-lg text-muted-foreground mb-6">Artificial Intelligence continues to evolve at an unprecedented pace, reshaping industries and redefining the boundaries of what's possible. As we navigate through 2024, we're witnessing breakthroughs that seemed like science fiction just a few years ago.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Current Landscape</h2>
        <p class="mb-4">The AI landscape in 2024 is characterized by several key trends that are driving innovation across multiple sectors. From large language models to computer vision, the technology is becoming more sophisticated and accessible.</p>

        <p class="mb-4">Major tech companies are investing billions of dollars in AI research and development, while startups are finding innovative ways to apply AI solutions to everyday problems. This convergence of investment and innovation is accelerating the pace of discovery.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Key Developments in 2024</h2>
        <p class="mb-4">This year has brought us several significant milestones:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Enhanced multimodal AI systems that can process text, images, and audio simultaneously</li>
          <li>Improved reasoning capabilities in large language models</li>
          <li>More efficient training methods reducing computational costs</li>
          <li>Better integration of AI into existing workflows and systems</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Impact on Industries</h2>
        <p class="mb-4">Healthcare, finance, education, and manufacturing are experiencing transformative changes driven by AI adoption. These industries are not just using AI as a tool, but fundamentally reimagining their processes and capabilities.</p>

        <p class="mb-4">In healthcare, AI is enabling earlier disease detection and personalized treatment plans. Financial institutions are using AI for fraud detection and algorithmic trading. Educational platforms are providing personalized learning experiences at scale.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>
        <p class="mb-4">As we look toward the future, the potential applications of AI seem limitless. However, with great power comes great responsibility. The development of ethical AI frameworks and regulatory guidelines will be crucial for ensuring that AI benefits humanity as a whole.</p>

        <p class="mb-4">The next few years will likely bring us even more sophisticated AI systems, but the key will be ensuring they are developed and deployed responsibly, with careful consideration of their impact on society.</p>
      `
    }
  }
  return posts[id as keyof typeof posts] || null
}

const relatedPosts = [
  {
    id: 2,
    title: 'Machine Learning in Healthcare: Revolutionary Changes',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    category: 'Healthcare AI',
    readTime: '12 min read'
  },
  {
    id: 3,
    title: 'Natural Language Processing: Breaking Language Barriers',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop',
    category: 'NLP',
    readTime: '6 min read'
  },
  {
    id: 6,
    title: 'Quantum Computing Meets AI: The Next Frontier',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
    category: 'Quantum AI',
    readTime: '11 min read'
  }
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <div className="mb-4">
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">{post.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center justify-between mb-8 p-6 bg-secondary/50 rounded-lg">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <Image
                src={post.authorImage}
                alt={post.author}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">{post.author}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.views} views</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                {post.likes}
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest AI insights and research updates.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Subscribe Now
            </Button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-purple-500/50">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {relatedPost.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-purple-400 transition-colors">
                    {relatedPost.title}
                  </CardTitle>
                  <CardDescription>
                    {relatedPost.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/${relatedPost.id}`}>
                    <Button variant="outline" className="w-full hover:bg-purple-600 hover:text-white hover:border-purple-600">
                      Read Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}