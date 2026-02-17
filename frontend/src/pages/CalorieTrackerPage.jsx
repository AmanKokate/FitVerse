import { useState, useEffect } from 'react'
import { Plus, Trash2, Calculator, TrendingUp, Flame, Apple, Search, X } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { foodDatabase } from '../data/foodDatabase'

const CalorieTrackerPage = () => {
  // User profile state for maintenance calories
  const [profile, setProfile] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activityLevel: 'moderate'
  })

  // Maintenance calories
  const [maintenanceCalories, setMaintenanceCalories] = useState(0)

  // Food tracking state
  const [foods, setFoods] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const [selectedFood, setSelectedFood] = useState(null)
  const [servingSize, setServingSize] = useState(100)
  const [totalCalories, setTotalCalories] = useState(0)
  const [totalMacros, setTotalMacros] = useState({ protein: 0, carbs: 0, fats: 0, fiber: 0 })

  // Search for food
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([])
      return
    }
    
    const results = foodDatabase.filter(food =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSearchResults(results)
  }, [searchQuery])

  // Calculate maintenance calories using Mifflin-St Jeor Equation
  const calculateMaintenance = () => {
    const { age, gender, weight, height, activityLevel } = profile
    
    if (!age || !weight || !height) {
      alert('Please fill in all fields')
      return
    }

    // BMR calculation
    let bmr
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161
    }

    // Activity multipliers
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    }

    const maintenance = Math.round(bmr * activityMultipliers[activityLevel])
    setMaintenanceCalories(maintenance)
  }

  // Add food item
  const addFood = () => {
    if (!selectedFood) {
      alert('Please select a food from the search results')
      return
    }

    const multiplier = servingSize / 100

    const foodItem = {
      id: Date.now(),
      name: selectedFood.name,
      servingSize: servingSize,
      calories: Math.round(selectedFood.calories * multiplier),
      protein: Math.round(selectedFood.protein * multiplier * 10) / 10,
      carbs: Math.round(selectedFood.carbs * multiplier * 10) / 10,
      fats: Math.round(selectedFood.fats * multiplier * 10) / 10,
      fiber: Math.round(selectedFood.fiber * multiplier * 10) / 10,
      timestamp: new Date().toLocaleTimeString()
    }

    setFoods([...foods, foodItem])
    setSelectedFood(null)
    setSearchQuery('')
    setServingSize(100)
    setShowSearch(false)
  }

  // Select food from search
  const selectFood = (food) => {
    setSelectedFood(food)
    setShowSearch(false)
  }

  // Delete food item
  const deleteFood = (id) => {
    setFoods(foods.filter(food => food.id !== id))
  }

  // Calculate total calories and macros
  useEffect(() => {
    const totalCals = foods.reduce((sum, food) => sum + food.calories, 0)
    const totalProtein = foods.reduce((sum, food) => sum + food.protein, 0)
    const totalCarbs = foods.reduce((sum, food) => sum + food.carbs, 0)
    const totalFats = foods.reduce((sum, food) => sum + food.fats, 0)
    const totalFiber = foods.reduce((sum, food) => sum + food.fiber, 0)
    
    setTotalCalories(totalCals)
    setTotalMacros({
      protein: Math.round(totalProtein * 10) / 10,
      carbs: Math.round(totalCarbs * 10) / 10,
      fats: Math.round(totalFats * 10) / 10,
      fiber: Math.round(totalFiber * 10) / 10
    })
  }, [foods])

  // Calculate remaining calories
  const remainingCalories = maintenanceCalories - totalCalories
  const percentageConsumed = maintenanceCalories > 0 ? (totalCalories / maintenanceCalories) * 100 : 0

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-16 sm:pt-20 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
              Calorie <span className="text-green-600">Tracker</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              Track your daily food intake and monitor your maintenance calories
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Maintenance Calorie Calculator */}
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                  <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Maintenance Calories</h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {/* Age */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Age (years)
                  </label>
                  <input
                    type="number"
                    value={profile.age}
                    onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                    placeholder="25"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Gender
                  </label>
                  <select
                    value={profile.gender}
                    onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 text-sm sm:text-base bg-white"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={profile.weight}
                    onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                    placeholder="70"
                  />
                </div>

                {/* Height */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={profile.height}
                    onChange={(e) => setProfile({ ...profile, height: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="175"
                  />
                </div>

                {/* Activity Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Activity Level
                  </label>
                  <select
                    value={profile.activityLevel}
                    onChange={(e) => setProfile({ ...profile, activityLevel: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  >
                    <option value="sedentary">Sedentary (little/no exercise)</option>
                    <option value="light">Light (1-3 days/week)</option>
                    <option value="moderate">Moderate (3-5 days/week)</option>
                    <option value="active">Active (6-7 days/week)</option>
                    <option value="veryActive">Very Active (twice per day)</option>
                  </select>
                </div>

                <button
                  onClick={calculateMaintenance}
                  className="btn-primary w-full"
                >
                  Calculate Maintenance Calories
                </button>

                {/* Result */}
                {maintenanceCalories > 0 && (
                  <div className="bg-red-50 border-2 border-red-600 rounded-lg p-6 text-center">
                    <p className="text-gray-700 font-semibold mb-2">Your Maintenance Calories</p>
                    <p className="text-4xl font-bold text-red-600">{maintenanceCalories}</p>
                    <p className="text-sm text-gray-600 mt-2">calories/day</p>
                  </div>
                )}
              </div>
            </div>

            {/* Food Tracker */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 p-3 rounded-full">
                  <Apple className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold">Food Tracker</h2>
              </div>

              {/* Food Search */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Search Food
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value)
                        setShowSearch(true)
                      }}
                      onFocus={() => setShowSearch(true)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Search for food... (e.g., Chicken, Rice, Apple)"
                    />
                  </div>

                  {/* Search Results Dropdown */}
                  {showSearch && searchResults.length > 0 && (
                    <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-80 overflow-y-auto">
                      {searchResults.map((food) => (
                        <button
                          key={food.id}
                          onClick={() => selectFood(food)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-gray-900">{food.name}</p>
                              <p className="text-xs text-gray-500">{food.category}</p>
                            </div>
                            <span className="text-sm font-semibold text-red-600">{food.calories} cal</span>
                          </div>
                          <div className="flex gap-3 mt-1 text-xs text-gray-600">
                            <span>P: {food.protein}g</span>
                            <span>C: {food.carbs}g</span>
                            <span>F: {food.fats}g</span>
                            <span>Fiber: {food.fiber}g</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Selected Food Card */}
                {selectedFood && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-gray-900">{selectedFood.name}</h4>
                        <p className="text-sm text-gray-600">{selectedFood.category}</p>
                      </div>
                      <button
                        onClick={() => setSelectedFood(null)}
                        className="text-gray-500 hover:text-red-600"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Nutritional Info Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-white rounded p-2 text-center">
                        <p className="text-xs text-gray-600">Calories</p>
                        <p className="font-bold text-red-600">{Math.round(selectedFood.calories * servingSize / 100)}</p>
                      </div>
                      <div className="bg-white rounded p-2 text-center">
                        <p className="text-xs text-gray-600">Protein</p>
                        <p className="font-bold text-blue-600">{Math.round(selectedFood.protein * servingSize / 100 * 10) / 10}g</p>
                      </div>
                      <div className="bg-white rounded p-2 text-center">
                        <p className="text-xs text-gray-600">Carbs</p>
                        <p className="font-bold text-orange-600">{Math.round(selectedFood.carbs * servingSize / 100 * 10) / 10}g</p>
                      </div>
                      <div className="bg-white rounded p-2 text-center">
                        <p className="text-xs text-gray-600">Fats</p>
                        <p className="font-bold text-yellow-600">{Math.round(selectedFood.fats * servingSize / 100 * 10) / 10}g</p>
                      </div>
                      <div className="bg-white rounded p-2 text-center">
                        <p className="text-xs text-gray-600">Fiber</p>
                        <p className="font-bold text-green-600">{Math.round(selectedFood.fiber * servingSize / 100 * 10) / 10}g</p>
                      </div>
                    </div>

                    {/* Serving Size */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Serving Size (grams)
                      </label>
                      <input
                        type="number"
                        value={servingSize}
                        onChange={(e) => setServingSize(parseFloat(e.target.value) || 0)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="100"
                      />
                      <p className="text-xs text-gray-500 mt-1">Values shown per 100g. Adjust serving size as needed.</p>
                    </div>
                  </div>
                )}

                <button
                  onClick={addFood}
                  disabled={!selectedFood}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedFood 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Plus className="h-5 w-5" />
                  Add to Log
                </button>
              </div>

              {/* Food List */}
              <div className="space-y-3 mb-6">
                <h3 className="font-bold text-gray-900">Today's Food Log</h3>
                
                {foods.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No food added yet. Start tracking!</p>
                ) : (
                  <div className="max-h-96 overflow-y-auto space-y-2">
                    {foods.map((food) => (
                      <div
                        key={food.id}
                        className="bg-gray-50 p-4 rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{food.name}</p>
                            <p className="text-sm text-gray-600">{food.servingSize}g • {food.calories} calories</p>
                            <p className="text-xs text-gray-500">{food.timestamp}</p>
                          </div>
                          <button
                            onClick={() => deleteFood(food.id)}
                            className="text-red-600 hover:text-red-700 p-2"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        
                        {/* Macros */}
                        <div className="grid grid-cols-4 gap-2 text-xs">
                          <div className="bg-white rounded px-2 py-1 text-center">
                            <span className="text-gray-600">P:</span> <span className="font-semibold text-blue-600">{food.protein}g</span>
                          </div>
                          <div className="bg-white rounded px-2 py-1 text-center">
                            <span className="text-gray-600">C:</span> <span className="font-semibold text-orange-600">{food.carbs}g</span>
                          </div>
                          <div className="bg-white rounded px-2 py-1 text-center">
                            <span className="text-gray-600">F:</span> <span className="font-semibold text-yellow-600">{food.fats}g</span>
                          </div>
                          <div className="bg-white rounded px-2 py-1 text-center">
                            <span className="text-gray-600">Fiber:</span> <span className="font-semibold text-green-600">{food.fiber}g</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Statistics */}
              <div className="space-y-4 pt-6 border-t">
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Flame className="h-6 w-6 text-orange-600" />
                    <span className="font-semibold">Total Calories</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{totalCalories}</span>
                </div>

                {/* Macros Summary */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-blue-700 mb-1">Protein</p>
                    <p className="text-xl font-bold text-blue-600">{totalMacros.protein}g</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-xs text-orange-700 mb-1">Carbs</p>
                    <p className="text-xl font-bold text-orange-600">{totalMacros.carbs}g</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-xs text-yellow-700 mb-1">Fats</p>
                    <p className="text-xl font-bold text-yellow-600">{totalMacros.fats}g</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-green-700 mb-1">Fiber</p>
                    <p className="text-xl font-bold text-green-600">{totalMacros.fiber}g</p>
                  </div>
                </div>

                {maintenanceCalories > 0 && (
                  <>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-6 w-6 text-blue-600" />
                        <span className="font-semibold">Remaining</span>
                      </div>
                      <span className={`text-2xl font-bold ${remainingCalories >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {remainingCalories}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold">Progress</span>
                        <span className="font-semibold">{Math.round(percentageConsumed)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${
                            percentageConsumed > 100 ? 'bg-red-600' : 'bg-green-600'
                          }`}
                          style={{ width: `${Math.min(percentageConsumed, 100)}%` }}
                        ></div>
                      </div>
                      {percentageConsumed > 100 && (
                        <p className="text-red-600 text-sm mt-2 font-semibold">
                          ⚠️ You've exceeded your maintenance calories!
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CalorieTrackerPage
