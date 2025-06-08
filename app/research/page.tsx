import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Users, ExternalLink, Download, BookOpen } from 'lucide-react'

const researchPapers = [
  {
    id: 1,
    title: 'Attention Is All You Need: Transformer Architecture Advances',
    authors: ['Dr. Sarah Chen', 'Prof. Michael Kim', 'Dr. Lisa Wang'],
    institution: 'Stanford AI Lab',
    date: '2024-01-20',
    category: 'Deep Learning',
    abstract: 'Recent advances in transformer architecture have shown remarkable improvements in natural language processing tasks. This paper presents novel attention mechanisms that significantly reduce computational complexity while maintaining performance.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    citations: 1247,
    url: '#'
  },
  {
    id: 2,
    title: 'Ethical AI: Frameworks for Responsible Machine Learning',
    authors: ['Prof. Emma Rodriguez', 'Dr. James Park'],
    institution: 'MIT AI Ethics Lab',
    date: '2024-01-18',
    category: 'AI Ethics',
    abstract: 'As AI systems become more prevalent, the need for ethical frameworks becomes crucial. This research proposes comprehensive guidelines for developing responsible AI systems that prioritize fairness and transparency.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    citations: 892,
    url: '#'
  },
  {
    id: 3,
    title: 'Quantum-Enhanced Machine Learning: Breaking Classical Limits',
    authors: ['Dr. Alex Chen', 'Prof. Maria Santos', 'Dr. David Liu'],
    institution: 'Quantum AI Research Center',
    date: '2024-01-15',
    category: 'Quantum Computing',
    abstract: 'This paper demonstrates how quantum computing can enhance machine learning algorithms, achieving exponential speedups for specific optimization problems in neural network training.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
    citations: 654,
    url: '#'
  }
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            AI Research & Papers
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore cutting-edge research papers and studies that are advancing the field of artificial intelligence.
          </p>
        </div>

        {/* Featured Research */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Research</h2>
          <div className="grid gap-8 lg:grid-cols-1">
            {researchPapers.slice(0, 1).map((paper) => (
              <Card key={paper.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-purple-500/50">
                <div className="lg:flex">
                  <div className="lg:w-1/3">
                    <Image
                      src={paper.image}
                      alt={paper.title}
                      width={600}
                      height={400}
                      className="h-64 lg:h-full w-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                    />
                  </div>
                  <div className="lg:w-2/3">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {paper.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {paper.citations} citations
                        </span>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-purple-400 transition-colors">
                        {paper.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{paper.authors.join(', ')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(paper.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground font-medium">{paper.institution}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{paper.abstract}</p>
                      <div className="flex gap-4">
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Read Paper
                          <BookOpen className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline">
                          Download PDF
                          <Download className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Latest Research */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Latest Research</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {researchPapers.slice(1).map((paper) => (
              <Card key={paper.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-purple-500/50">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={paper.image}
                    alt={paper.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {paper.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                      {paper.citations} citations
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-purple-400 transition-colors">
                    {paper.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span className="line-clamp-1">{paper.authors.join(', ')}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{paper.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">{paper.abstract}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(paper.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Read Paper
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">Submit Your Research</CardTitle>
            <CardDescription className="text-base mb-6">
              Share your AI research with our community. We welcome papers, studies, and innovative research findings.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Submit Research
              </Button>
              <Button variant="outline">
                Research Guidelines
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}