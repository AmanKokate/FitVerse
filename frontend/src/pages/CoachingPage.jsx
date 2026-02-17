import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { User, Mail, Phone, Target, MessageSquare, Calendar, CheckCircle } from 'lucide-react'

function CoachingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fitnessLevel: '',
    goal: '',
    coachingType: '',
    preferredTime: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        fitnessLevel: '',
        goal: '',
        coachingType: '',
        preferredTime: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 sm:py-16 lg:py-20 mt-16 sm:mt-20">
        <div className="container mx-auto px-3 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Personal Coaching & Consultation</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-100 max-w-2xl mx-auto">
            Take your fitness journey to the next level with personalized coaching from our expert trainers
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Personal Coaching?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Programs</h3>
                  <p className="text-gray-600">Custom workout and nutrition plans tailored to your specific goals, fitness level, and lifestyle.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                  <p className="text-gray-600">Work with certified trainers who provide ongoing support, motivation, and accountability.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">Choose between online and in-person sessions that fit your schedule and preferences.</p>
                </div>
              </div>
            </div>

            {/* Coaching Types */}
            <div className="mt-8 bg-gradient-to-br from-green-50 to-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Coaching Options</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700"><strong>1-on-1 Training:</strong> Individual attention and customized workouts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700"><strong>Online Coaching:</strong> Train from anywhere with virtual guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700"><strong>Nutrition Coaching:</strong> Personalized meal plans and dietary guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700"><strong>Group Sessions:</strong> Train with others for motivation and fun</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Consultation</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">Your consultation request has been submitted. Our team will contact you shortly!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Fitness Level */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Fitness Level *
                    </label>
                    <select
                      name="fitnessLevel"
                      value={formData.fitnessLevel}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Beginner - New to fitness</option>
                      <option value="intermediate">Intermediate - Regular exerciser</option>
                      <option value="advanced">Advanced - Experienced athlete</option>
                    </select>
                  </div>

                  {/* Goal */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Target className="w-4 h-4 inline mr-1" />
                      Primary Fitness Goal *
                    </label>
                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select your goal</option>
                      <option value="weight-loss">Weight Loss</option>
                      <option value="muscle-building">Muscle Building</option>
                      <option value="endurance">Improve Endurance</option>
                      <option value="strength">Increase Strength</option>
                      <option value="general-fitness">General Fitness</option>
                      <option value="sports-performance">Sports Performance</option>
                    </select>
                  </div>

                  {/* Coaching Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Coaching Type *
                    </label>
                    <select
                      name="coachingType"
                      value={formData.coachingType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select coaching type</option>
                      <option value="online">Online Coaching</option>
                      <option value="in-person">In-Person Training</option>
                      <option value="hybrid">Hybrid (Online + In-Person)</option>
                      <option value="nutrition">Nutrition Consultation Only</option>
                    </select>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Preferred Time for Contact
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (8am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 5pm)</option>
                      <option value="evening">Evening (5pm - 8pm)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-1" />
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Tell us about any specific concerns, injuries, or questions..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Submit Consultation Request
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We'll get back to you within 24 hours to schedule your free consultation
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How much does coaching cost?</h3>
              <p className="text-gray-600 text-sm">Pricing varies based on the type of coaching and frequency. We'll discuss options during your free consultation call.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I switch between online and in-person?</h3>
              <p className="text-gray-600 text-sm">Yes! Our hybrid coaching option allows flexibility to combine both online and in-person sessions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What if I have injuries or limitations?</h3>
              <p className="text-gray-600 text-sm">Our trainers are experienced in working with various limitations and will create a safe, effective program for you.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How long are coaching sessions?</h3>
              <p className="text-gray-600 text-sm">Typical sessions are 45-60 minutes, but we can customize duration based on your needs and goals.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CoachingPage
