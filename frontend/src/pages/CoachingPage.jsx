import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Target, Calendar, CheckCircle } from 'lucide-react'

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('http://localhost:8000/api/coaching-consultation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
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
      } else {
        setError(data.error || 'Failed to submit form. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 pt-28 pb-20 mt-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Personal Coaching & <span className="text-green-600">Consultation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Take your fitness journey to the next level with personalized coaching from our expert trainers
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Personal Coaching?</h2>
            
            <div className="space-y-5">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Personalized Programs</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Custom workout and nutrition plans tailored to your specific goals, fitness level, and lifestyle.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Expert Guidance</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Work with certified trainers who provide ongoing support, motivation, and accountability.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Flexible Scheduling</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Choose between online and in-person sessions that fit your schedule and preferences.</p>
                </div>
              </div>
            </div>

            {/* Coaching Types */}
            <div className="mt-10 border border-gray-200 rounded-xl p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Coaching Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm"><strong className="text-gray-900">1-on-1 Training:</strong> Individual attention and customized workouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm"><strong className="text-gray-900">Online Coaching:</strong> Train from anywhere with virtual guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm"><strong className="text-gray-900">Nutrition Coaching:</strong> Personalized meal plans and dietary guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm"><strong className="text-gray-900">Group Sessions:</strong> Train with others for motivation and fun</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Consultation</h2>
              
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-sm">Your consultation request has been submitted. Our team will contact you shortly!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      placeholder="+91 98765 43210"
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
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
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
                      Primary Fitness Goal *
                    </label>
                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
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
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
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
                      Preferred Time for Contact
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
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
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow resize-none"
                      placeholder="Tell us about any specific concerns, injuries, or questions..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    We'll get back to you within 24 hours to schedule your free consultation
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-green-600 pl-5">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">How much does coaching cost?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Pricing varies based on the type of coaching and frequency. We'll discuss options during your free consultation call.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-5">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Can I switch between online and in-person?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Yes! Our hybrid coaching option allows flexibility to combine both online and in-person sessions.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-5">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">What if I have injuries or limitations?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our trainers are experienced in working with various limitations and will create a safe, effective program for you.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-5">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">How long are coaching sessions?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Typical sessions are 45-60 minutes, but we can customize duration based on your needs and goals.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CoachingPage
