import { Dumbbell, Heart, Users, Trophy } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="h-12 w-12" />,
      title: "Strength Training",
      description: "Build muscle and increase your strength with our expert-designed programs and state-of-the-art equipment.",
      price: "$49/month"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Cardio Fitness",
      description: "Improve your cardiovascular health and endurance with high-energy cardio workouts.",
      price: "$39/month"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Personal Training",
      description: "Get one-on-one attention from certified trainers to achieve your specific fitness goals.",
      price: "$99/month"
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      title: "Group Classes",
      description: "Join energetic group sessions including yoga, Pilates, HIIT, and more.",
      price: "$29/month"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Choose from our wide range of fitness programs designed to meet your unique needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-green-400 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-green-600 group-hover:text-white transition-colors mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 group-hover:text-green-100 transition-colors mb-6">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">
                  {service.price}
                </span>
                <button className="text-green-600 group-hover:text-white font-semibold hover:underline transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
