import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const images = [
    "/images/hero1.png",
    "/images/hero2.png",
    "/images/hero3.png",
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
              <Link to="/coaching" className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                Start Your Journey
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
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
          <div className="relative w-full max-w-md mx-auto lg:max-w-full">
            <div className="aspect-square rounded-3xl bg-gray-200 overflow-hidden shadow-2xl relative">
              {/* Images */}
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`Fitness Training ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    index === currentImageIndex 
                      ? 'translate-x-0 opacity-100' 
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
