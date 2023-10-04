const recipes = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const showAll = document.getElementById("showAll");
const showVeg = document.getElementById("showVeg");
const showNonVeg = document.getElementById("showNonVeg");
const ratingAbove = document.getElementById("ratingAbove");
const ratingBelow = document.getElementById("ratingBelow");


// this was the first approach but was not able to get the like button functionality success 
/*
let x;
function displayRecipes(recipes) {
  let card = document.createElement("div");
  card.className = "card";

  if (recipes.isLiked) {
    x = "./resources/red-like.svg";
  } else {
    x = "./resources/pain-like.svg";
  }

  card.innerHTML = `
      <img id="foodImage" src="${recipes.imageSrc}" alt="food_image">
      <p id="foodType">${recipes.type}</p>
      <div id="rowOne">
        <h2>${recipes.name}</h2>
        <div>
          <img src="./resources/Star.svg" alt="">
          <p id="foodRating">${recipes.rating}</p>
        </div>
      </div>
      <div id="rowTwo">
        <p id="foodTime">${recipes.time}</p>
          <div>
            <button id="heart" class="like-button"><img src="${x}"</button>
            <button><img src="./resources/comments.svg" alt=""></button>
          </div>
      </div>
      `;
  recipeContainer.appendChild(card);

}
*/

// iterates of the array and display the cards respectively
function displayRecipes(recipe) {
  let card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = `${recipe.imageSrc}`;
  image.id = "foodImage";
  card.appendChild(image);

  const type = document.createElement("p");
  type.textContent = `${recipe.type}`;
  type.id = "foodType";
  card.appendChild(type);

  const rowOne = document.createElement("div");
  rowOne.id = "rowOne";

  const name = document.createElement("h2");
  name.textContent = `${recipe.name}`;
  rowOne.appendChild(name);

  const rowOneDiv = document.createElement("div");

  const star = document.createElement("img");
  star.src = "./resources/Star.svg";
  rowOneDiv.appendChild(star);

  const rating = document.createElement("p");
  rating.textContent = `${recipe.rating}`;
  rowOneDiv.appendChild(rating);

  rowOne.appendChild(rowOneDiv);
  card.appendChild(rowOne);

  const rowTwo = document.createElement("div");
  rowTwo.id = "rowTwo";

  const time = document.createElement("p");
  time.textContent = `${recipe.time}`;
  rowTwo.appendChild(time);

  const rowTwoDiv = document.createElement("div");

  const likeButton = document.createElement("span");
  likeButton.classList.add("like-button");
  likeButton.style.cursor = "pointer";
  likeButton.addEventListener("click", () => {
    recipe.isLiked = !recipe.isLiked;
    likeButton.textContent = recipe.isLiked ? "❤️" : "🤍"; // Adjusted content
  });

  // Initial content based on whether the recipe is liked or not
  likeButton.textContent = recipe.isLiked ? "❤️" : "🤍";

  rowTwoDiv.appendChild(likeButton);

  const comment = document.createElement("img");
  comment.src = "./resources/comments.svg";
  comment.style.width = "18px";
  comment.style.cursor = "pointer";

  rowTwoDiv.appendChild(comment);

  rowTwo.appendChild(rowTwoDiv);

  card.appendChild(rowTwo);

  recipeContainer.appendChild(card);
}


function filterOnRecipes(searchString) {
  // Clear existing recipes
  recipeContainer.innerHTML = "";

  // Filter recipes based on the input search string
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchString.toLowerCase())
  );

  // Generate cards for filtered recipes
  filteredRecipes.forEach((recipe) => {
    displayRecipes(recipe);
  });
}

searchInput.addEventListener("keyup", (event) => {
  const searchString = event.target.value.trim();
  filterOnRecipes(searchString);
});

function toggleRecipesByType(type) {
  // Clear existing recipes
  recipeContainer.innerHTML = "";

  // Filter recipes based on the type of food selected
  let filteredRecipes;
  if (type === "all") {
    filteredRecipes = recipes;
  } else {
    filteredRecipes = recipes.filter((recipe) => recipe.type === type);
  }

  // Generate cards for filtered recipes
  filteredRecipes.forEach((recipe) => {
    displayRecipes(recipe);
  });
}

showAll.addEventListener("click", () => toggleRecipesByType("all"));
showVeg.addEventListener("click", () => toggleRecipesByType("veg"));
showNonVeg.addEventListener("click", () => toggleRecipesByType("non-veg"));

function filterRecipesByRating() {
  // Clear existing recipes
  recipeContainer.innerHTML = "";

  let filteredRecipes;
  if (ratingAbove.checked) {
    filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.0);
  } else if (ratingBelow.checked) {
    filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
  } else {
    filteredRecipes = recipes;
  }

  // Generate cards for filtered recipes
  filteredRecipes.forEach((recipe) => {
    displayRecipes(recipe);
  });
}

ratingAbove.addEventListener("change", filterRecipesByRating);
ratingBelow.addEventListener("change", filterRecipesByRating);

recipes.forEach((recipe) => {
  displayRecipes(recipe);
});

//side drawer for the mobile scale
const menu = document.getElementById("menu");
menu.style.cursor = "pointer";
const sideMenu = document.getElementById("sideBar");
const menubtn = document.getElementById("menuSidebar");
menubtn.style.cursor = "pointer";
const navbar = document.getElementsByTagName("nav")[0];


menu.addEventListener("click", (e) => {
  navbar.style.visibility = "hidden";
  sideMenu.classList.add("active");
});
menubtn.addEventListener("click", () => {
  navbar.style.visibility = "visible";
  sideMenu.classList.remove("active");
});
