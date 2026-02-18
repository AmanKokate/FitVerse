import { Award, Instagram, Linkedin } from 'lucide-react'

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
    <section id="trainers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Meet Our Trainers</h2>
          <p className="section-subtitle">
            Our certified trainers are dedicated to helping you achieve your fitness goals.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-3 gap-9">
          {trainers.map((trainer, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <Award className="inline h-4 w-4 mr-1" />
                  {trainer.experience}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {trainer.name}
                </h3>
                
                <p className="text-green-600 font-semibold mb-3">
                  {trainer.specialty}
                </p>
                
                <p className="text-gray-600 text-sm mb-4">
                  {trainer.certifications}
                </p>
                
                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t">
                  <button className="flex-1 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700 py-2 rounded-lg transition-colors">
                    <Instagram className="inline h-5 w-5" />
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 py-2 rounded-lg transition-colors">
                    <Linkedin className="inline h-5 w-5" />
                  </button>
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors font-semibold">
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
