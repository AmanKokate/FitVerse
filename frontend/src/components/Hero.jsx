import { ArrowRight } from 'lucide-react'

const Hero = () => {
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
          
          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-500 to-gray-600 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000" 
                alt="Fitness Training" 
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-red-00" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">2000+</p>
                  <p className="text-gray-600">Calories Burned</p>
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
