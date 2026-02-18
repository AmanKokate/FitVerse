import { Award } from 'lucide-react'

const Trainers = () => {
  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400",
      experience: "8 Years",
      certifications: "NASM-CPT, CSCS"
    },
    {
      name: "Mike Chen",
      specialty: "Cardio & HIIT",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400",
      experience: "6 Years",
      certifications: "ACE-CPT, TRX"
    },
    {
      name: "Emily Rodriguez",
      specialty: "Yoga & Wellness",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400",
      experience: "10 Years",
      certifications: "RYT-500, Wellness Coach"
    }
  ]

  return (
    <section id="trainers" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Expert Guidance
          </span>
          <h2 className="section-title">Meet Our Trainers</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Work with certified professionals who are passionate about helping you reach your goals.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {trainers.map((trainer, index) => (
            <div 
              key={index}
              className="group"
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                
                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Award className="h-4 w-4" />
                  <span className="text-sm font-medium">{trainer.experience} Experience</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {trainer.name}
                  </h3>
                  <p className="text-green-600 font-medium text-sm mt-1">
                    {trainer.specialty}
                  </p>
                </div>
                
                <p className="text-gray-600 text-sm">
                  Certified: {trainer.certifications}
                </p>
                
                {/* Action Button */}
                <button className="w-full mt-4 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
                  Book a Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
