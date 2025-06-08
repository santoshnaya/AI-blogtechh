import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Founder & Chief AI Researcher',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b332c1e4?w=300&h=300&fit=crop&crop=face',
    bio: 'Former Google AI researcher with 15+ years of experience in machine learning and neural networks.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Prof. Michael Rodriguez',
    role: 'Head of Research',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: 'Stanford professor specializing in deep learning and computer vision with 200+ published papers.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Emma Thompson',
    role: 'Content Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    bio: 'Award-winning tech journalist and author with expertise in translating complex AI concepts.',
    social: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Dr. Alex Kim',
    role: 'AI Ethics Advisor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    bio: 'Leading expert in AI ethics and responsible technology development at MIT.',
    social: {
      twitter: '#',
      linkedin: '#'
    }
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            About AI BlogTech
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to democratize AI knowledge and make cutting-edge research accessible to everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-6">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6 text-center">
                In an era where artificial intelligence is reshaping every aspect of our lives, we believe that understanding AI shouldn't be limited to researchers and engineers. Our mission is to bridge the gap between complex AI research and practical understanding.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">E</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Educate</h3>
                  <p className="text-muted-foreground">
                    Provide clear, accessible explanations of complex AI concepts and breakthroughs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">I</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Inspire</h3>
                  <p className="text-muted-foreground">
                    Showcase real-world applications and inspire the next generation of AI innovators.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Connect</h3>
                  <p className="text-muted-foreground">
                    Build a community of AI enthusiasts, researchers, and practitioners.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Expert researchers and communicators passionate about AI education
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {team.map((member) => (
              <Card key={member.name} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-purple-500/50">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="group-hover:text-purple-400 transition-colors">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-purple-300 font-medium">
                        {member.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.social.twitter && (
                      <Button variant="outline" size="sm">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.linkedin && (
                      <Button variant="outline" size="sm">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.github && (
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center border-border hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We believe in open, honest communication about AI capabilities and limitations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Making AI knowledge accessible to people from all backgrounds and skill levels.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Staying at the forefront of AI developments and emerging technologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-border hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Promoting responsible AI development and addressing ethical considerations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">Get In Touch</CardTitle>
            <CardDescription className="text-base mb-6">
              Have questions, suggestions, or want to collaborate? We'd love to hear from you.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
              <Button variant="outline">
                Join Our Community
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}