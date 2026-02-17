// Meal Plans and Recipes Database
export const mealPlans = [
  {
    id: 1,
    title: "Muscle Building Meal Plan",
    goal: "Build Muscle",
    calories: 2800,
    macros: { protein: 210, carbs: 350, fats: 80 },
    description: "High-protein, high-calorie meal plan designed to support muscle growth and recovery.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
    meals: [
      {
        type: "Breakfast",
        name: "Protein Power Oats",
        calories: 550,
        protein: 35,
        carbs: 70,
        fats: 15,
        ingredients: [
          "1 cup oatmeal",
          "1 scoop whey protein",
          "1 banana",
          "2 tbsp peanut butter",
          "1 cup milk"
        ],
        instructions: "Cook oatmeal with milk, mix in protein powder, top with sliced banana and peanut butter."
      },
      {
        type: "Snack",
        name: "Greek Yogurt & Berries",
        calories: 300,
        protein: 25,
        carbs: 35,
        fats: 5,
        ingredients: [
          "200g Greek yogurt",
          "1 cup mixed berries",
          "1 tbsp honey"
        ],
        instructions: "Mix yogurt with berries and drizzle honey on top."
      },
      {
        type: "Lunch",
        name: "Chicken & Rice Bowl",
        calories: 700,
        protein: 60,
        carbs: 85,
        fats: 15,
        ingredients: [
          "200g chicken breast",
          "1.5 cups brown rice",
          "1 cup broccoli",
          "2 tbsp olive oil"
        ],
        instructions: "Grill chicken, cook rice, steam broccoli. Drizzle with olive oil and season."
      },
      {
        type: "Snack",
        name: "Protein Shake",
        calories: 400,
        protein: 40,
        carbs: 45,
        fats: 8,
        ingredients: [
          "2 scoops whey protein",
          "1 banana",
          "2 cups milk",
          "1 tbsp almond butter"
        ],
        instructions: "Blend all ingredients until smooth."
      },
      {
        type: "Dinner",
        name: "Salmon with Sweet Potato",
        calories: 650,
        protein: 45,
        carbs: 70,
        fats: 20,
        ingredients: [
          "200g salmon fillet",
          "2 medium sweet potatoes",
          "2 cups mixed vegetables",
          "1 tbsp olive oil"
        ],
        instructions: "Bake salmon and sweet potatoes. Sauté vegetables in olive oil."
      },
      {
        type: "Evening Snack",
        name: "Cottage Cheese & Nuts",
        calories: 200,
        protein: 15,
        carbs: 10,
        fats: 12,
        ingredients: [
          "150g cottage cheese",
          "30g almonds"
        ],
        instructions: "Enjoy cottage cheese with almonds."
      }
    ],
    shoppingList: [
      "Chicken breast (1.4kg)",
      "Salmon (1kg)",
      "Eggs (2 dozen)",
      "Greek yogurt (1kg)",
      "Cottage cheese (500g)",
      "Milk (4L)",
      "Oatmeal (1kg)",
      "Brown rice (2kg)",
      "Sweet potatoes (2kg)",
      "Broccoli",
      "Mixed vegetables",
      "Mixed berries",
      "Bananas",
      "Whey protein (1 tub)",
      "Peanut butter",
      "Almond butter",
      "Almonds",
      "Olive oil",
      "Honey"
    ]
  },
  {
    id: 2,
    title: "Fat Loss Meal Plan",
    goal: "Lose Weight",
    calories: 1800,
    macros: { protein: 140, carbs: 150, fats: 60 },
    description: "Calorie-controlled, high-protein meal plan to promote fat loss while preserving muscle mass.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    meals: [
      {
        type: "Breakfast",
        name: "Egg White Scramble",
        calories: 350,
        protein: 30,
        carbs: 30,
        fats: 10,
        ingredients: [
          "6 egg whites",
          "2 whole eggs",
          "1 cup spinach",
          "1/2 cup mushrooms",
          "1 slice whole wheat toast"
        ],
        instructions: "Scramble eggs with vegetables, serve with toast."
      },
      {
        type: "Snack",
        name: "Apple with Almond Butter",
        calories: 180,
        protein: 5,
        carbs: 25,
        fats: 8,
        ingredients: [
          "1 medium apple",
          "1 tbsp almond butter"
        ],
        instructions: "Slice apple and serve with almond butter."
      },
      {
        type: "Lunch",
        name: "Grilled Chicken Salad",
        calories: 450,
        protein: 45,
        carbs: 30,
        fats: 15,
        ingredients: [
          "150g chicken breast",
          "3 cups mixed greens",
          "Cherry tomatoes",
          "Cucumber",
          "2 tbsp balsamic vinaigrette",
          "1/2 cup quinoa"
        ],
        instructions: "Grill chicken, arrange on greens with vegetables and quinoa, drizzle dressing."
      },
      {
        type: "Snack",
        name: "Protein Shake",
        calories: 200,
        protein: 25,
        carbs: 15,
        fats: 5,
        ingredients: [
          "1 scoop whey protein",
          "1 cup unsweetened almond milk",
          "Ice"
        ],
        instructions: "Blend until smooth."
      },
      {
        type: "Dinner",
        name: "Baked Tilapia & Veggies",
        calories: 400,
        protein: 35,
        carbs: 35,
        fats: 12,
        ingredients: [
          "200g tilapia fillet",
          "2 cups mixed vegetables",
          "1/2 cup brown rice",
          "Lemon",
          "Herbs"
        ],
        instructions: "Bake tilapia with lemon and herbs, steam vegetables, cook rice."
      },
      {
        type: "Evening Snack",
        name: "Greek Yogurt",
        calories: 120,
        protein: 15,
        carbs: 10,
        fats: 3,
        ingredients: [
          "150g low-fat Greek yogurt",
          "Cinnamon"
        ],
        instructions: "Top yogurt with cinnamon."
      }
    ],
    shoppingList: [
      "Chicken breast (1kg)",
      "Tilapia fillets (1kg)",
      "Eggs (2 dozen)",
      "Greek yogurt (750g)",
      "Almond milk (2L)",
      "Quinoa (500g)",
      "Brown rice (1kg)",
      "Whole wheat bread",
      "Mixed greens",
      "Spinach",
      "Mixed vegetables",
      "Mushrooms",
      "Cherry tomatoes",
      "Cucumbers",
      "Apples",
      "Lemons",
      "Whey protein",
      "Almond butter",
      "Balsamic vinaigrette",
      "Herbs & spices"
    ]
  },
  {
    id: 3,
    title: "Balanced Nutrition Plan",
    goal: "Maintain",
    calories: 2200,
    macros: { protein: 150, carbs: 250, fats: 70 },
    description: "Well-balanced meal plan for maintaining weight and overall health.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
    meals: [
      {
        type: "Breakfast",
        name: "Avocado Toast & Eggs",
        calories: 450,
        protein: 20,
        carbs: 45,
        fats: 20,
        ingredients: [
          "2 slices whole grain bread",
          "1/2 avocado",
          "2 eggs",
          "Cherry tomatoes"
        ],
        instructions: "Toast bread, mash avocado on top, cook eggs, serve with tomatoes."
      },
      {
        type: "Snack",
        name: "Mixed Nuts & Fruit",
        calories: 250,
        protein: 8,
        carbs: 30,
        fats: 12,
        ingredients: [
          "30g mixed nuts",
          "1 orange"
        ],
        instructions: "Enjoy nuts with orange."
      },
      {
        type: "Lunch",
        name: "Turkey & Veggie Wrap",
        calories: 500,
        protein: 35,
        carbs: 55,
        fats: 15,
        ingredients: [
          "Whole wheat tortilla",
          "150g turkey breast",
          "Lettuce, tomato, cucumber",
          "1 tbsp hummus",
          "1 small apple"
        ],
        instructions: "Layer turkey and vegetables in tortilla with hummus, serve with apple."
      },
      {
        type: "Snack",
        name: "Energy Balls",
        calories: 200,
        protein: 8,
        carbs: 28,
        fats: 8,
        ingredients: [
          "Oats, dates, almond butter mix"
        ],
        instructions: "Pre-made energy balls (4 pieces)."
      },
      {
        type: "Dinner",
        name: "Beef Stir-Fry",
        calories: 600,
        protein: 50,
        carbs: 65,
        fats: 18,
        ingredients: [
          "150g lean beef",
          "2 cups mixed stir-fry vegetables",
          "1 cup jasmine rice",
          "2 tbsp soy sauce",
          "1 tbsp sesame oil"
        ],
        instructions: "Stir-fry beef and vegetables in sesame oil, serve over rice."
      },
      {
        type: "Evening Snack",
        name: "Yogurt Parfait",
        calories: 200,
        protein: 15,
        carbs: 25,
        fats: 5,
        ingredients: [
          "150g Greek yogurt",
          "1/4 cup granola",
          "Fresh berries"
        ],
        instructions: "Layer yogurt with granola and berries."
      }
    ],
    shoppingList: [
      "Turkey breast (1kg)",
      "Lean beef (750g)",
      "Eggs (1 dozen)",
      "Greek yogurt (500g)",
      "Whole grain bread",
      "Whole wheat tortillas",
      "Jasmine rice (1kg)",
      "Avocados",
      "Mixed vegetables",
      "Lettuce",
      "Tomatoes",
      "Cucumbers",
      "Cherry tomatoes",
      "Oranges",
      "Apples",
      "Fresh berries",
      "Mixed nuts",
      "Oats",
      "Dates",
      "Almond butter",
      "Hummus",
      "Granola",
      "Sesame oil",
      "Soy sauce"
    ]
  },
  {
    id: 4,
    title: "Vegetarian Meal Plan",
    goal: "Build Muscle",
    calories: 2600,
    macros: { protein: 150, carbs: 320, fats: 75 },
    description: "Plant-based high-protein meal plan for muscle building without meat.",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600",
    meals: [
      {
        type: "Breakfast",
        name: "Tofu Scramble Bowl",
        calories: 500,
        protein: 30,
        carbs: 55,
        fats: 18,
        ingredients: [
          "200g firm tofu",
          "1 cup quinoa",
          "Spinach, peppers, onions",
          "1 tbsp olive oil",
          "1 slice whole grain toast"
        ],
        instructions: "Scramble tofu with vegetables in olive oil, serve with quinoa and toast."
      },
      {
        type: "Snack",
        name: "Protein Smoothie",
        calories: 350,
        protein: 25,
        carbs: 45,
        fats: 10,
        ingredients: [
          "1 scoop plant protein",
          "1 banana",
          "1 cup soy milk",
          "1 tbsp peanut butter",
          "Spinach"
        ],
        instructions: "Blend all ingredients until smooth."
      },
      {
        type: "Lunch",
        name: "Lentil Buddha Bowl",
        calories: 600,
        protein: 30,
        carbs: 80,
        fats: 18,
        ingredients: [
          "1 cup cooked lentils",
          "1 cup quinoa",
          "1/2 avocado",
          "Roasted chickpeas",
          "Mixed vegetables",
          "Tahini dressing"
        ],
        instructions: "Arrange lentils, quinoa, and vegetables in bowl, top with avocado and dressing."
      },
      {
        type: "Snack",
        name: "Hummus & Veggies",
        calories: 250,
        protein: 10,
        carbs: 30,
        fats: 10,
        ingredients: [
          "1/2 cup hummus",
          "Carrot sticks, bell peppers, cucumber"
        ],
        instructions: "Dip vegetables in hummus."
      },
      {
        type: "Dinner",
        name: "Chickpea Curry with Rice",
        calories: 650,
        protein: 35,
        carbs: 85,
        fats: 15,
        ingredients: [
          "1.5 cups chickpeas",
          "1 cup basmati rice",
          "Coconut milk, curry spices",
          "Spinach, tomatoes",
          "1 tbsp coconut oil"
        ],
        instructions: "Cook curry with chickpeas and vegetables, serve over rice."
      },
      {
        type: "Evening Snack",
        name: "Nut Butter & Banana",
        calories: 250,
        protein: 10,
        carbs: 35,
        fats: 10,
        ingredients: [
          "1 large banana",
          "2 tbsp almond butter"
        ],
        instructions: "Slice banana and serve with almond butter."
      }
    ],
    shoppingList: [
      "Firm tofu (1kg)",
      "Lentils (1kg)",
      "Chickpeas (canned, 6 cans)",
      "Plant protein powder",
      "Soy milk (2L)",
      "Quinoa (1kg)",
      "Basmati rice (1kg)",
      "Whole grain bread",
      "Avocados",
      "Bananas",
      "Spinach",
      "Mixed vegetables",
      "Bell peppers",
      "Onions",
      "Tomatoes",
      "Carrots",
      "Cucumbers",
      "Hummus",
      "Peanut butter",
      "Almond butter",
      "Tahini",
      "Coconut milk",
      "Olive oil",
      "Coconut oil",
      "Curry spices"
    ]
  }
]

export const mealGoals = ["All", "Build Muscle", "Lose Weight", "Maintain"]
export const dietTypes = ["All", "Standard", "Vegetarian", "High Protein", "Low Carb"]
