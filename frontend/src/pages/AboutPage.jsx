import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Target, Heart, Users, Award, Zap, Shield } from 'lucide-react'

function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results through proven training methods and personalized programs."
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Building a supportive community where everyone feels welcome, motivated, and empowered to succeed."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our certified trainers bring years of experience and stay updated with the latest fitness science."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We leverage cutting-edge technology and training techniques to optimize your fitness journey."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Prioritizing proper form, injury prevention, and sustainable training practices for long-term health."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to maintaining the highest standards in fitness training, nutrition guidance, and customer service."
    }
  ]

  const team = [
    {
      name: "Alex Martinez",
      role: "Lead Developer & Fitness Coach",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400",
      bio: "Full-stack developer and certified personal trainer. Combines tech expertise with fitness knowledge to create innovative training solutions."
    },
    {
      name: "Jordan Smith",
      role: "Developer & Nutrition Coach",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400",
      bio: "Software engineer and registered nutritionist. Specializes in building nutrition tracking tools and personalized meal planning systems."
    },
    {
      name: "Taylor Chen",
      role: "Developer & Wellness Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      bio: "Frontend developer and certified wellness coach. Passionate about creating user-friendly fitness platforms and holistic health approaches."
    }
  ]

  const stats = [
    { number: "1000+", label: "Active Members" },
    { number: "3", label: "Expert Team" },
    { number: "2", label: "Years Experience" },
    { number: "98%", label: "Success Rate" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 sm:py-16 lg:py-20 mt-16 sm:mt-20">
        <div className="container mx-auto px-3 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">About FitVerse</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-100 max-w-3xl mx-auto">
            Empowering individuals to achieve their fitness goals through personalized training, expert guidance, and a supportive community
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 sm:py-12 shadow-md">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-3 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Our Story</h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              FitVerse was born from a unique vision: combining technology expertise with fitness coaching to create an accessible, intelligent platform for everyone's fitness journey. Our team of 3 passionate individuals brings together both development skills and certified coaching expertise.
            </p>
            <p>
              What makes us different is that we're not just developers or just coaches—we're both. This unique perspective allows us to build tools that truly understand what users need, backed by real fitness knowledge and technical innovation.
            </p>
            <p>
              From calorie tracking and personalized meal plans to comprehensive workout programs, every feature we build is informed by both our coding expertise and our hands-on coaching experience. We know what works because we've lived it, both in the gym and in the code.
            </p>
            <p>
              Our mission is to make professional fitness coaching accessible through smart technology. We're building more than just an app—we're creating a comprehensive fitness ecosystem that empowers people to take control of their health with the right tools, guidance, and support.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-12 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
            To empower individuals worldwide to achieve their fitness goals through personalized coaching, innovative technology, and a supportive community that celebrates every victory along the journey.
          </p>
          <a href="/coaching" className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Journey
          </a>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join the FitVerse Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're just starting out or looking to take your fitness to the next level, we're here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/coaching" className="btn-primary px-8 py-3">
              Get Started Today
            </a>
            <a href="/workout-plans" className="bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Explore Programs
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
