const recipe={
  id: 1,
title: "Gløgg",
picture_url:
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Gl%C3%B6gg_kastrull.JPG/800px-Gl%C3%B6gg_kastrull.JPG",
ingredients: [
  { NAME: "Orange zest", AMOUNT: "0.5" },
  { NAME: "Water", AMOUNT: "200 ml" },
  { NAME: "Sugar", AMOUNT: "275 g" },
  { NAME: "Whole cloves", AMOUNT: "5" },
  { NAME: "Cinnamon sticks", AMOUNT: "2" },
  { NAME: "Spice", AMOUNT: undefined },
  { NAME: "Bottle of red wine", AMOUNT: "1" },
  { NAME: "Raisins", AMOUNT: "100 g" },
  { NAME: "Slipped Almonds", AMOUNT: "50 g" },
],
description: "Mix everything, heat it, and you are good to go!",
};

function displayRecipe(recipe){
  const recipeDisplay=document.getElementById("recipeDisplay");
  let ingredientshtml="";
  for(let i=0;i<recipe.ingredients.length;i++){
      const ingredient=recipe.ingredients[i];
      ingredientshtml +="<li>" + ingredient.NAME + "-" +ingredient.AMOUNT+ "</li>";

  }
  recipeDisplay.innerHTML=`<div><h3>${recipe.title}</h3><img src="${recipe. picture_url}" alt="${recipe.title}">
  <p>${recipe.description}</P> <ul>${ingredientshtml}<ul>
  </div>`;
}
displayRecipe(recipe);


document
  .getElementById("addIngredientButton")
  .addEventListener("click", function () {
    const ingredientsList = document.getElementById("ingredientsList");
    const ingredientDiv = document.createElement("div");
    ingredientDiv.className = "ingredient";
    ingredientDiv.innerHTML = `
      <label>Ingredient Name:</label>
      <input type="text" class="ingredient-name" required>
      <label>Amount:</label>
      <input type="text" class="ingredient-amount" required>
    `;
    ingredientsList.appendChild(ingredientDiv);
  });


document.getElementById("addRecipeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); 

    const title = document.getElementById("recipeTitle").value;
    const description = document.getElementById("recipeDescription").value;
    const picture_url = document.getElementById("recipePicture").value;

    const ingredientElements = document.querySelectorAll(".ingredient");
    const ingredients = [];
    for (let i = 0; i < ingredientElements.length; i++) {
      const name = ingredientElements[i].querySelector(".ingredient-name").value;
      const amount = ingredientElements[i].querySelector(".ingredient-amount").value;
      ingredients.push({ NAME: name, AMOUNT: amount });
    }

    if (ingredients.length < 5) {
      alert("Please add at least 5 ingredients.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      picture_url,
      ingredients,
      description,
    };

    
    displayRecipe(newRecipe);
    alert("New recipe added successfully!");
    document.getElementById("addRecipeForm").reset(); 
  });