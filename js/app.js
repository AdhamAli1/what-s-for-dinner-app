const RECIPES = [
  {
    image: "images/teryaki.jpeg",
    rating: "4.7",
    reviews: "(367 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",
    tags: [
      { label: "Easy", bg: "bg-primary-subtle", text: "text-primary" },
      { label: "Asian", bg: "bg-success-subtle", text: "text-success" },
    ],
    title: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",
    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
    ],
    nutrition: {
      calories: "540 kcal",
      protein: "42g",
      carbs: "58g",
      fat: "14g",
      fiber: "4g",
      sodium: "1240mg",
    },
    tips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead",
    ],
  },
  {
    image: "images/pizza.jpeg",
    rating: "4.9",
    reviews: "(512 reviews)",
    prepTime: "20 min",
    cookTime: "12 min",
    servings: "4 people",
    tags: [
      { label: "Medium", bg: "bg-warning-subtle", text: "text-warning" },
      { label: "Italian", bg: "bg-danger-subtle", text: "text-danger" },
    ],
    title: "Classic Margherita Pizza",
    description: "Wood-fired style pizza with fresh basil and mozzarella",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup San Marzano tomato sauce",
      "200g fresh mozzarella, torn",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "Pinch of sea salt",
      "Grated parmesan, to taste",
    ],
    instructions: [
      "Preheat oven to its highest setting with a pizza stone inside.",
      "Stretch the dough out into a 12-inch round on a floured surface.",
      "Spread tomato sauce evenly, leaving a border for the crust.",
      "Scatter mozzarella over the sauce.",
      "Bake for 8-12 minutes until the crust is golden and blistered.",
      "Top with fresh basil, a drizzle of olive oil, and salt before serving.",
    ],
    nutrition: {
      calories: "680 kcal",
      protein: "28g",
      carbs: "76g",
      fat: "26g",
      fiber: "3g",
      sodium: "980mg",
    },
    tips: [
      "Let the dough come to room temperature before stretching",
      "Use a pizza stone or steel for a crispier crust",
      "Don't overload with sauce or it'll get soggy",
      "Tear the basil in at the very end to keep it fragrant",
    ],
  },
  {
    image: "images/tacos.jpeg",
    rating: "4.6",
    reviews: "(289 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "3 people",
    tags: [
      { label: "Easy", bg: "bg-primary-subtle", text: "text-primary" },
      { label: "Mexican", bg: "bg-success-subtle", text: "text-success" },
    ],
    title: "Beef Street Tacos",
    description: "Seared beef with lime, cilantro, and onion on corn tortillas",
    ingredients: [
      "450g flank steak, diced small",
      "8 small corn tortillas",
      "1/2 white onion, diced",
      "1/4 cup cilantro, chopped",
      "2 limes, cut into wedges",
      "1 teaspoon cumin",
      "1 teaspoon chili powder",
      "Salsa of choice",
    ],
    instructions: [
      "Season the diced steak with cumin, chili powder, and salt.",
      "Sear the beef in a hot pan for 4-5 minutes until browned.",
      "Warm the tortillas on a dry skillet or open flame.",
      "Fill each tortilla with beef, onion, and cilantro.",
      "Finish with a squeeze of lime and your favorite salsa.",
    ],
    nutrition: {
      calories: "460 kcal",
      protein: "36g",
      carbs: "34g",
      fat: "18g",
      fiber: "5g",
      sodium: "610mg",
    },
    tips: [
      "Don't overcrowd the pan or the beef will steam instead of sear",
      "Double up tortillas to prevent tearing",
      "Char the tortillas directly over a flame for extra flavor",
      "Let the steak rest a few minutes before dicing for tacos",
    ],
  },
  {
    image: "images/StirUp.jpeg",
    rating: "4.5",
    reviews: "(178 reviews)",
    prepTime: "10 min",
    cookTime: "10 min",
    servings: "2 people",
    tags: [
      { label: "Easy", bg: "bg-primary-subtle", text: "text-primary" },
      { label: "Vegan", bg: "bg-success-subtle", text: "text-success" },
    ],
    title: "Rainbow Veggie Stir Fry",
    description: "Crisp seasonal vegetables tossed in a garlic-ginger sauce",
    ingredients: [
      "1 red bell pepper, sliced",
      "1 cup snap peas",
      "1 carrot, julienned",
      "1 cup broccoli florets",
      "2 cloves garlic, minced",
      "1 tablespoon fresh ginger, grated",
      "3 tablespoons soy sauce",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a wok over high heat.",
      "Add garlic and ginger, stir for 30 seconds until fragrant.",
      "Add the harder vegetables (carrot, broccoli) first, stir-fry 2 minutes.",
      "Add remaining vegetables and soy sauce, toss for 3-4 minutes.",
      "Serve immediately over rice or noodles.",
    ],
    nutrition: {
      calories: "290 kcal",
      protein: "9g",
      carbs: "32g",
      fat: "12g",
      fiber: "7g",
      sodium: "820mg",
    },
    tips: [
      "Cut all vegetables to a similar size for even cooking",
      "Keep the heat high and keep everything moving",
      "Prep all ingredients before you start — stir fry moves fast",
      "Add a splash of rice vinegar at the end for brightness",
    ],
  },
];


  var heroEl = document.getElementById("recipeHero");
  var ratingEl = document.getElementById("recipeRating");
  var reviewsEl = document.getElementById("recipeReviews");
  var prepTimeEl = document.getElementById("prepTime");
  var cookTimeEl = document.getElementById("cookTime");
  var servingsEl = document.getElementById("servingsCount");
  var tagsEl = document.getElementById("recipeTags");
  var titleEl = document.getElementById("recipeTitle");
  var descriptionEl = document.getElementById("recipeDescription");
  var ingredientsListEl = document.getElementById("ingredientsList");
  var instructionsListEl = document.getElementById("instructionsList");
  var tipsListEl = document.getElementById("tipsList");
  var tryAnotherBtn = document.getElementById("tryAnotherBtn");

  var caloriesEl = document.getElementById("nutritionCalories");
  var proteinEl = document.getElementById("nutritionProtein");
  var carbsEl = document.getElementById("nutritionCarbs");
  var fatEl = document.getElementById("nutritionFat");
  var fiberEl = document.getElementById("nutritionFiber");
  var sodiumEl = document.getElementById("nutritionSodium");

  var currentIndex = 0;

  function showRecipe(recipe) {
    heroEl.style.backgroundImage = "url(" + recipe.image + ")";

    ratingEl.textContent = recipe.rating;
    reviewsEl.textContent = recipe.reviews;
    prepTimeEl.textContent = recipe.prepTime;
    cookTimeEl.textContent = recipe.cookTime;
    servingsEl.textContent = recipe.servings;
    titleEl.textContent = recipe.title;
    descriptionEl.textContent = recipe.description;

    var tagsHTML = "";
    for (var t = 0; t < recipe.tags.length; t++) {
      var tag = recipe.tags[t];
      tagsHTML +=
        '<span class="me-2 ' +
        tag.bg +
        " " +
        tag.text +
        ' px-2 rounded-pill fs-14 fw-semibold">' +
        tag.label +
        "</span>";
    }
    tagsEl.innerHTML = tagsHTML;

    var ingredientsHTML = "";
    for (var i = 0; i < recipe.ingredients.length; i++) {
      ingredientsHTML +=
        '<li class="d-flex align-items-center py-2">' +
        '<span class="badge-number">' +
        (i + 1) +
        "</span>" +
        "<span>" +
        recipe.ingredients[i] +
        "</span>" +
        "</li>";
    }
    ingredientsListEl.innerHTML = ingredientsHTML;

    var instructionsHTML = "";
    for (var s = 0; s < recipe.instructions.length; s++) {
      instructionsHTML +=
        '<li class="d-flex align-items-center mb-4">' +
        '<span class="badge-number badge-number-lg fs-5">' +
        (s + 1) +
        "</span>" +
        "<span>" +
        recipe.instructions[s] +
        "</span>" +
        "</li>";
    }
    instructionsListEl.innerHTML = instructionsHTML;

    caloriesEl.textContent = recipe.nutrition.calories;
    proteinEl.textContent = recipe.nutrition.protein;
    carbsEl.textContent = recipe.nutrition.carbs;
    fatEl.textContent = recipe.nutrition.fat;
    fiberEl.textContent = recipe.nutrition.fiber;
    sodiumEl.textContent = recipe.nutrition.sodium;

    var tipsHTML = "";
    for (var tpIndex = 0; tpIndex < recipe.tips.length; tpIndex++) {
      tipsHTML +=
        '<li class="d-flex align-items-center">' +
        '<i class="fa-solid fa-circle-check tip-check"></i>' +
        "<span>" +
        recipe.tips[tpIndex] +
        "</span>" +
        "</li>";
    }
    tipsListEl.innerHTML = tipsHTML;

  }

  function showRandomRecipe() {
    var newIndex = currentIndex;
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * RECIPES.length);
    }
    currentIndex = newIndex;
    showRecipe(RECIPES[currentIndex]);
  }

  showRecipe(RECIPES[currentIndex]);

  tryAnotherBtn.addEventListener("click", showRandomRecipe);
