import { Dumbbell, Heart, Users, Trophy } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="h-10 w-10" />,
      title: "Strength Training",
      description: "Build muscle and increase your strength with our expert-designed programs and state-of-the-art equipment.",
      price: "$49/month"
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Cardio Fitness",
      description: "Improve your cardiovascular health and endurance with high-energy cardio workouts.",
      price: "$39/month"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Personal Training",
      description: "Get one-on-one attention from certified trainers to achieve your specific fitness goals.",
      price: "$99/month"
    },
    {
      icon: <Trophy className="h-10 w-10" />,
      title: "Group Classes",
      description: "Join energetic group sessions including yoga, Pilates, HIIT, and more.",
      price: "$29/month"
    }
  ]

  return (
    <section id="services" className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Choose from our wide range of fitness programs designed to meet your unique needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-green-500 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-green-50 text-green-600">
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Pricing */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {service.price}
                  </span>
                  <button className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors">
                    Learn More →
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

export default Services
