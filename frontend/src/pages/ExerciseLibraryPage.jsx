import { useState } from 'react'
import { Search, Dumbbell, Target, Award, Info, X } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { exerciseDatabase, categories, difficulties, equipmentTypes } from '../data/exerciseDatabase'

const ExerciseLibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedEquipment, setSelectedEquipment] = useState('All')
  const [selectedExercise, setSelectedExercise] = useState(null)

  // Filter exercises
  const filteredExercises = exerciseDatabase.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exercise.muscleGroups.some(muscle => muscle.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || exercise.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'All' || exercise.difficulty === selectedDifficulty
    const matchesEquipment = selectedEquipment === 'All' || exercise.equipment === selectedEquipment

    return matchesSearch && matchesCategory && matchesDifficulty && matchesEquipment
  })

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700'
      case 'Advanced': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Exercise <span className="text-red-600">Library</span>
            </h1>
            <p className="text-xl text-gray-600">
              Explore our comprehensive database of exercises with detailed instructions
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Search exercises or muscle groups..."
                />
              </div>
            </div>

            {/* Filter Pills */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                >
                  {difficulties.map(diff => (
                    <option key={diff} value={diff}>{diff}</option>
                  ))}
                </select>
              </div>

              {/* Equipment Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Equipment</label>
                <select
                  value={selectedEquipment}
                  onChange={(e) => setSelectedEquipment(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                >
                  {equipmentTypes.map(eq => (
                    <option key={eq} value={eq}>{eq}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Showing <span className="font-bold text-red-600">{filteredExercises.length}</span> exercises
              </p>
            </div>
          </div>

          {/* Exercise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise) => (
              <div
                key={exercise.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                onClick={() => setSelectedExercise(exercise)}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{exercise.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(exercise.difficulty)}`}>
                      {exercise.difficulty}
                    </span>
                  </div>

                  {/* Category & Equipment */}
                  <div className="flex gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                      <Dumbbell className="h-3 w-3" />
                      {exercise.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {exercise.equipment}
                    </span>
                  </div>

                  {/* Muscle Groups */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <Target className="inline h-4 w-4 mr-1" />
                      Targets:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exercise.muscleGroups.map((muscle, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full btn-primary flex items-center justify-center gap-2">
                    <Info className="h-4 w-4" />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredExercises.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No exercises found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Exercise Detail Modal */}
      {selectedExercise && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="relative">
              <img
                src={selectedExercise.image}
                alt={selectedExercise.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedExercise(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">{selectedExercise.name}</h2>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getDifficultyColor(selectedExercise.difficulty)}`}>
                  {selectedExercise.difficulty}
                </span>
              </div>

              {/* Info Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold">
                  <Dumbbell className="h-5 w-5" />
                  {selectedExercise.category}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold">
                  <Award className="h-5 w-5" />
                  {selectedExercise.equipment}
                </span>
              </div>

              {/* Muscle Groups */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-red-600" />
                  Targeted Muscles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExercise.muscleGroups.map((muscle, idx) => (
                    <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold">
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Instructions</h3>
                <ol className="space-y-3">
                  {selectedExercise.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700 pt-1">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tips */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h3 className="font-bold text-yellow-800 mb-2">💡 Pro Tip</h3>
                <p className="text-yellow-700">{selectedExercise.tips}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default ExerciseLibraryPage
