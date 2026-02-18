import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000",
    "https://images.unsplash.com/photo-1558017487-06bf9f82613a?q=80&w=1000",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000"
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <section id="home" className="pt-16 sm:pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
    
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Transform Your
              <span className="text-green-600"> Body & Mind</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-1000 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Join FitVerse and experience personalized training programs designed to help you achieve your fitness goals faster than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                Start Your Journey
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            
            {/* Brand Slogan */}
            <div className="pt-8 sm:pt-12">
              <div className="border-l-4 border-green-600 pl-4 sm:pl-6">
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                  <span className="text-gray-900">Explore</span>
                  <span className="text-green-600">→</span>
                  <span className="text-gray-900">Train</span>
                  <span className="text-green-600">→</span>
                  <span className="text-gray-900">Transform</span>
                </div>
                <p className="text-center lg:text-left mt-3 text-sm sm:text-base font-bold text-gray-700 tracking-wider">
                  IN THE <span className="text-green-600">FITVERSE</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image Slideshow */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-500 to-gray-600 overflow-hidden shadow-2xl relative">
              {/* Images */}
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`Fitness Training ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80 transition-all duration-700 ${
                    index === currentImageIndex 
                      ? 'translate-x-0 opacity-80' 
                      : index < currentImageIndex 
                        ? '-translate-x-full opacity-0' 
                        : 'translate-x-full opacity-0'
                  }`}
                />
              ))}

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 text-gray-800" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 text-gray-800" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'w-8 bg-white' 
                        : 'w-2 bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-4 p-5">
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-green-500 rounded-full w-3 h-3 border-2 border-white animate-pulse"></div>
                </div>
                <div className="pr-2">
                  <p className="text-3xl font-extrabold text-gray-900 leading-none">15+</p>
                  <p className="text-sm font-medium text-gray-600 mt-1">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
