import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, MessageCircle, Image, Code, FileText, Zap, ExternalLink, Star } from 'lucide-react'

const aiTools = [
  {
    id: 1,
    name: 'GPT-4 Assistant',
    description: 'Advanced language model for text generation, analysis, and conversation.',
    icon: MessageCircle,
    category: 'Language Models',
    pricing: 'Free tier available',
    rating: 4.9,
    features: ['Text Generation', 'Code Assistance', 'Analysis', 'Q&A'],
    url: 'https://openai.com/gpt-4',
    popular: true
  },
  {
    id: 2,
    name: 'DALL-E 3',
    description: 'Create stunning images from text descriptions with advanced AI.',
    icon: Image,
    category: 'Image Generation',
    pricing: '$20/month',
    rating: 4.8,
    features: ['Text-to-Image', 'High Resolution', 'Style Transfer', 'Editing'],
    url: 'https://openai.com/dall-e-3',
    popular: false
  },
  {
    id: 3,
    name: 'Claude AI',
    description: 'Constitutional AI assistant for safe and helpful conversations.',
    icon: Brain,
    category: 'Language Models',
    pricing: 'Free tier available',
    rating: 4.7,
    features: ['Long Context', 'Safety First', 'Analysis', 'Writing'],
    url: 'https://claude.ai',
    popular: true
  },
  {
    id: 4,
    name: 'GitHub Copilot',
    description: 'AI-powered code completion and programming assistant.',
    icon: Code,
    category: 'Developer Tools',
    pricing: '$10/month',
    rating: 4.6,
    features: ['Code Completion', 'Documentation', 'Bug Fixes', 'Refactoring'],
    url: 'https://github.com/features/copilot',
    popular: false
  },
  {
    id: 5,
    name: 'Midjourney',
    description: 'Create artistic images and illustrations with AI.',
    icon: Image,
    category: 'Image Generation',
    pricing: '$10/month',
    rating: 4.8,
    features: ['Artistic Style', 'High Quality', 'Community', 'Variations'],
    url: 'https://midjourney.com',
    popular: true
  },
  {
    id: 6,
    name: 'Notion AI',
    description: 'AI writing assistant integrated into your workspace.',
    icon: FileText,
    category: 'Productivity',
    pricing: '$10/month',
    rating: 4.5,
    features: ['Writing Help', 'Summarization', 'Translation', 'Brainstorming'],
    url: 'https://notion.so/ai',
    popular: false
  }
]

const categories = [
  { name: 'All Tools', count: aiTools.length, active: true },
  { name: 'Language Models', count: 2, active: false },
  { name: 'Image Generation', count: 2, active: false },
  { name: 'Developer Tools', count: 1, active: false },
  { name: 'Productivity', count: 1, active: false }
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            AI Tools & Resources
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and explore the latest AI tools that are transforming how we work and create.
          </p>
        </div>

        {/* Hero Card */}
        <Card className="mb-12 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Supercharge Your Workflow</CardTitle>
            <CardDescription className="text-base">
              From content creation to code generation, these AI tools will revolutionize your productivity.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Categories Filter */}
        <div className="mb-12 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? 'default' : 'outline'}
              size="sm"
              className={category.active ? 'bg-purple-600 hover:bg-purple-700' : 'hover:bg-purple-600 hover:text-white'}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {aiTools.map((tool) => (
            <Card key={tool.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-purple-500/50 relative">
              {tool.popular && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Popular
                  </div>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-foreground">{tool.rating}</span>
                  </div>
                </div>
                
                <CardTitle className="group-hover:text-purple-400 transition-colors">
                  {tool.name}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {tool.description}
                </CardDescription>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-secondary px-2 py-1 rounded text-secondary-foreground">
                    {tool.category}
                  </span>
                  <span className="text-muted-foreground font-medium">
                    {tool.pricing}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {tool.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Try {tool.name}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Submit Tool CTA */}
        <Card className="mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">Know a Great AI Tool?</CardTitle>
            <CardDescription className="text-base mb-6">
              Help us build the most comprehensive AI tools directory. Submit your favorite tools for review.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Submit a Tool
              </Button>
              <Button variant="outline">
                Request a Review
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Newsletter */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated on New AI Tools</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get weekly updates on the latest AI tools, reviews, and tutorials delivered to your inbox.
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
    </div>
  )
}