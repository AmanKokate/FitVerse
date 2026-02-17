import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessica Williams",
      role: "Marketing Executive",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
      rating: 5,
      text: "FitVerse transformed my life! I've lost 30 pounds and gained so much confidence. The trainers are amazing and the community is incredibly supportive."
    },
    {
      name: "David Martinez",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
      rating: 5,
      text: "Best gym I've ever joined. The personalized training programs helped me achieve my strength goals faster than I thought possible. Highly recommend!"
    },
    {
      name: "Amanda Lee",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      rating: 5,
      text: "The yoga and wellness programs at FitVerse are top-notch. I feel more balanced, energized, and healthy than ever before. Thank you FitVerse!"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Members Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied members.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-green-600 text-white p-3 rounded-full">
                <Quote className="h-6 w-6" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-600"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            Join Our Community Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
