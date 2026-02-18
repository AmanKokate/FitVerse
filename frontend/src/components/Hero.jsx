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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="bg-green-100 text-green-600 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                #1 Fitness Platform
              </span>
            </div>
            
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
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">Members</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">Programs</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">15+</h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">Trainers</p>
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
            
            {/* Floating Card */}
            <div className="absolute -bottom-3 -left-5 bg-white p-2 rounded-3xl shadow-xl">
              <div className="flex items-center gap-2">
                <div className="bg-red-400 p-2 rounded-full">
                  
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">15+</p>
                  <p className="text-gray-700 italic">Happy Clients</p>
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
