"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Coffee, Users, Database, CheckCircle, AlertCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: null, message: '' })

    try {
      // Initialize EmailJS with your public key
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')

      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Siddharth Magesh',
        }
      )

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
        })
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly via email.'
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing research opportunities, collaborations, or innovative AI projects. Let's
            connect and explore possibilities together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:siddharthmagesh007@gmail.com" className="text-primary hover:underline">
                      siddharthmagesh007@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+919150504050" className="text-primary hover:underline">
                      +91 9150504050
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Connect Online</h3>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://github.com/Siddharth-Magesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://linkedin.com/in/siddharth-magesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://buymeacoffee.com/Siddharth_Magesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="Buy Me a Coffee"
                >
                  <Coffee className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://huggingface.co/siddharth-magesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="Hugging Face"
                >
                  <Users className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://www.kaggle.com/siddharthmagesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="Kaggle"
                >
                  <Database className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://devfolio.co/@SiddharthMagesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="Devfolio"
                >
                  <Users className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Research Collaborations</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Available</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Consulting Projects</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Available</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Speaking Engagements</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                {status.type && (
                  <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    status.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {status.type === 'success' ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <p className="text-sm">{status.message}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Research Collaboration Opportunity" 
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, research idea, or how we can collaborate..."
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
