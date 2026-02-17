import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mealPlans } from '../data/mealPlans'
import { ChevronDown, ChevronUp, Flame, Target, Scale, ShoppingCart } from 'lucide-react'

function MealPlansPage() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [expandedMeals, setExpandedMeals] = useState({})

  const toggleMeal = (mealIndex) => {
    setExpandedMeals(prev => ({
      ...prev,
      [mealIndex]: !prev[mealIndex]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 mt-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meal Plans & Nutrition</h1>
          <p className="text-xl text-green-100">Fuel your fitness journey with expertly crafted meal plans</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Meal Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {mealPlans.map(plan => (
            <div key={plan.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={plan.image} alt={plan.title} className="w-full h-32 sm:h-40 object-cover" />
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    {plan.goal}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">{plan.description}</p>

                {/* Macros Overview */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="flex items-center gap-1 mb-1">
                      <Flame className="w-3 h-3 text-red-600" />
                      <span className="text-xs font-medium text-gray-700">Calories</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{plan.calories}</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="flex items-center gap-1 mb-1">
                      <Target className="w-3 h-3 text-red-600" />
                      <span className="text-xs font-medium text-gray-700">Protein</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{plan.macros.protein}g</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="flex items-center gap-1 mb-1">
                      <Scale className="w-3 h-3 text-red-600" />
                      <span className="text-xs font-medium text-gray-700">Carbs</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{plan.macros.carbs}g</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="flex items-center gap-1 mb-1">
                      <Scale className="w-3 h-3 text-red-600" />
                      <span className="text-xs font-medium text-gray-700">Fats</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{plan.macros.fats}g</p>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  {selectedPlan === plan.id ? (
                    <>
                      <ChevronUp className="w-5 h-5" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5" />
                      View Full Plan
                    </>
                  )}
                </button>

                {/* Expanded Details */}
                {selectedPlan === plan.id && (
                  <div className="mt-6 border-t pt-6">
                    {/* Daily Meals */}
                    <h4 className="text-xl font-bold mb-4">Daily Meal Schedule</h4>
                    <div className="space-y-3">
                      {plan.meals.map((meal, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleMeal(idx)}
                            className="w-full bg-gray-50 px-4 py-3 flex items-center justify-between hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {meal.type}
                              </div>
                              <span className="font-semibold text-gray-900">{meal.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-gray-600">{meal.calories} cal</span>
                              {expandedMeals[idx] ? (
                                <ChevronUp className="w-5 h-5 text-gray-600" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-600" />
                              )}
                            </div>
                          </button>

                          {expandedMeals[idx] && (
                            <div className="p-4 bg-white">
                              {/* Macros */}
                              <div className="grid grid-cols-3 gap-3 mb-4">
                                <div className="text-center bg-blue-50 rounded p-2">
                                  <div className="text-xs text-gray-600">Protein</div>
                                  <div className="font-bold text-blue-600">{meal.protein}g</div>
                                </div>
                                <div className="text-center bg-green-50 rounded p-2">
                                  <div className="text-xs text-gray-600">Carbs</div>
                                  <div className="font-bold text-green-600">{meal.carbs}g</div>
                                </div>
                                <div className="text-center bg-yellow-50 rounded p-2">
                                  <div className="text-xs text-gray-600">Fats</div>
                                  <div className="font-bold text-yellow-600">{meal.fats}g</div>
                                </div>
                              </div>

                              {/* Ingredients */}
                              <div className="mb-4">
                                <h5 className="font-semibold text-gray-900 mb-2">Ingredients:</h5>
                                <ul className="list-disc list-inside space-y-1">
                                  {meal.ingredients.map((ingredient, i) => (
                                    <li key={i} className="text-gray-700 text-sm">{ingredient}</li>
                                  ))}
                                </ul>
                              </div>

                              {/* Instructions */}
                              <div>
                                <h5 className="font-semibold text-gray-900 mb-2">Preparation:</h5>
                                <p className="text-gray-700 text-sm">{meal.instructions}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Shopping List */}
                    <div className="mt-8 bg-green-50 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <ShoppingCart className="w-6 h-6 text-green-600" />
                        <h4 className="text-xl font-bold text-gray-900">Weekly Shopping List</h4>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {plan.shoppingList.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>



        {/* Nutrition Tips */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-white">>
          <h3 className="text-2xl font-bold mb-6">Nutrition Tips for Success</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-lg">Meal Prep Strategy</h4>
              <p className="text-red-100">Prepare meals in advance on weekends. Cook proteins, grains, and vegetables in bulk to save time during the week.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">Stay Hydrated</h4>
              <p className="text-red-100">Drink at least 8-10 glasses of water daily. Increase intake during workouts and hot weather.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">Flexible Substitutions</h4>
              <p className="text-red-100">Feel free to swap similar ingredients based on preference or availability while maintaining similar macro profiles.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">Timing Matters</h4>
              <p className="text-red-100">Eat protein and carbs within 2 hours post-workout for optimal recovery and muscle growth.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MealPlansPage
