import { Award, CheckCircle, Dumbbell, Heart, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const Trainers = () => {
  const trainer = {
    name: "Sarah Johnson",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400",
    experience: "8 Years",
    certifications: "NASM-CPT, CSCS",
    clientsTransformed: "20+"
  }

  return (
    <section id="trainers" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Your Coach
          </span>
          <h2 className="section-title">Meet Your Coach</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Work with a certified professional who is passionate about helping you reach your goals.
          </p>
        </div>

        {/* Coach Card + Info Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Coach Card (smaller) */}
          <div className="group border-2 border-gray-200 rounded-2xl p-5 hover:border-green-600 transition-colors max-w-sm mx-auto w-full">
            <div className="relative mb-4 overflow-hidden rounded-xl">
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                <Award className="h-4 w-4" />
                <span className="text-sm font-medium">{trainer.experience} Experience</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">{trainer.name}</h3>
              <p className="text-green-600 font-medium text-sm">{trainer.specialty}</p>
              <p className="text-gray-600 text-sm">Certified: {trainer.certifications}</p>
              <p className="text-green-600 font-semibold text-sm">{trainer.clientsTransformed} Clients Transformed</p>
            </div>
          </div>

          {/* Coach Info */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Hi, I'm Sarah 👋
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With over 8 years of experience in strength & conditioning, I've dedicated my career to helping people transform their bodies and build lasting healthy habits. Every program I create is tailored specifically to you.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">NASM Certified Personal Trainer & CSCS</span>
              </div>
              <div className="flex items-start gap-3">
                <Dumbbell className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Specialized in body transformations & strength training</span>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Personalized nutrition & workout plans for every client</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">20+ successful client transformations and counting</span>
              </div>
            </div>

            <Link
              to="/coaching"
              className="inline-block px-6 py-2.5 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Work With Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trainers
