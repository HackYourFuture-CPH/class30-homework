const recipeObject = {
    id: 1,
    title: "Glögg",
    picture_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Gl%C3%B6gg_kastrull.JPG/800px-Gl%C3%B6gg_kastrull.JPG",
    ingredients: [
      { NAME: "Orange zest", AMOUNT: "0.5" },
      { NAME: "Water", AMOUNT: "200 ml" },
      { NAME: "Sugar", AMOUNT: "275 g" },
      { NAME: "Whole cloves", AMOUNT: "5" },
      { NAME: "Cinnamon sticks", AMOUNT: "2" },
    ],
    description: "Mix everything, heat it, and you are good to go!",
  };

const addNewButton = document.querySelector(`#add-new-recipe`);
addNewButton.addEventListener(`click`, addButtonforForm);
let ingredientCount;

function showRecipe(recipe) {
  const recipeForm = document.querySelector(`#recipe-container`);
  const newRecipeContainer = document.createElement("div");

  const recipeTitle = document.createElement("h1");
  recipeTitle.textContent = recipe.title;
  newRecipeContainer.appendChild(recipeTitle);

  const recipeImg = document.createElement("img");
  recipeImg.src = recipe.picture_url;
  recipeImg.alt = recipe.description;
  recipeImg.width = 400;
  newRecipeContainer.appendChild(recipeImg);

  if (recipe.ingredients && recipe.ingredients.length > 0) {
    const ingredientTitle = document.createElement("p");
    ingredientTitle.textContent = "Ingredients:";
    newRecipeContainer.appendChild(ingredientTitle);

    const recipeIngredients = document.createElement("ul");
    recipe.ingredients.forEach((ingredient) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${ingredient.NAME}: ${ingredient.AMOUNT}`;
      recipeIngredients.appendChild(listItem);
    });
    newRecipeContainer.appendChild(recipeIngredients);
  }

  const recipeDescription = document.createElement("p");
  recipeDescription.textContent = recipe.description;
  newRecipeContainer.appendChild(recipeDescription);

  recipeForm.appendChild(newRecipeContainer);
}

showRecipe(recipeObject);

function addButtonforForm() {
  addNewButton.style.display = "none";
  const recipeForm = document.querySelector(`#recipe-container`);
  const newForm = document.createElement("div");

  const formTitle = document.createElement("h1");
  formTitle.textContent = "New recipe";
  newForm.appendChild(formTitle);

  const formName = document.createElement("label");
  formName.textContent = "Add name of dish";
  const nameInput = document.createElement("input");
  nameInput.id = "recipe-title";
  formName.appendChild(nameInput);
  newForm.appendChild(formName);

  newForm.appendChild(document.createElement("br"));

  const formImg = document.createElement("label");
  formImg.textContent = "Add image of dish";
  const imgInput = document.createElement("input");
  imgInput.id = "recipe-image";
  formImg.appendChild(imgInput);
  newForm.appendChild(formImg);

  newForm.appendChild(document.createElement("br"));

  const labelIngredients = document.createElement("label");
  labelIngredients.textContent = "Ingredients (min 5):";
  newForm.appendChild(document.createElement("br"));
  newForm.appendChild(labelIngredients);

  const ingredientsContainer = document.createElement("div");
  ingredientsContainer.id = "ingredients-container";
  newForm.appendChild(ingredientsContainer);

  const addIngredientButton = document.createElement("button");
  addIngredientButton.type = "button";
  addIngredientButton.textContent = "Add ingredient";
  addIngredientButton.addEventListener(`click`, addFormForIngredient);
  
  newForm.appendChild(addIngredientButton);
  newForm.appendChild(document.createElement("br"));

  function addFormForIngredient() {
    const ingredientInput = document.createElement("div");
    ingredientInput.classList.add("ingredient");

    const nameInput = document.createElement("input");
    nameInput.classList.add("ingredient-name");
    nameInput.placeholder = "Ingredient name";

    const amountInput = document.createElement("input");
    amountInput.classList.add("ingredient-amount");
    amountInput.placeholder = "Amount";

    ingredientInput.appendChild(nameInput);
    ingredientInput.appendChild(amountInput);
    ingredientsContainer.appendChild(ingredientInput);
  }

  for (let i = 0; i < 5; i++) {
    addFormForIngredient();
  }

  newForm.appendChild(document.createElement("br"));

  const formDescription = document.createElement("label");
  formDescription.textContent = "Description:";
  const descriptionInput = document.createElement("input");
  descriptionInput.id = "recipe-description";
  formDescription.appendChild(descriptionInput);
  newForm.appendChild(formDescription);
  
  newForm.appendChild(document.createElement("br"));

  const addRecipe = document.createElement("button");
  addRecipe.textContent = "Add recipe";
  addRecipe.type = "button";

  addRecipe.addEventListener(`click`, function (event) {
    event.preventDefault();

    const title = nameInput.value.trim();
    const image = imgInput.value.trim();
    const description = descriptionInput.value.trim();

    if (!title || !image || !description) {
      alert("Please fill in all required fields: title, image URL, and description.");
      return;
    }

    const ingredients = [];
    let hasEmptyIngredient = false;

    document.querySelectorAll(".ingredient").forEach((ingredientInput) => {
      const name = ingredientInput.querySelector(".ingredient-name").value.trim();
      const amount = ingredientInput.querySelector(".ingredient-amount").value.trim();
      if (!name || !amount) {
        hasEmptyIngredient = true;
      } else {
        ingredients.push({ NAME: name, AMOUNT: amount });
      }
    });

    if (hasEmptyIngredient) {
      alert("Please fill in all ingredient fields.");
      return;
    }

    if (ingredients.length < 5) {
      alert("Please add at least 5 ingredients!");
      return;
    }

    const newRecipe = {
      title,
      picture_url: image,
      ingredients,
      description,
    };

    showRecipe(newRecipe);

    newForm.innerHTML = "";

    addNewButton.style.display = "block";
  });


  
  newForm.appendChild(addRecipe);
  recipeForm.appendChild(newForm);
}