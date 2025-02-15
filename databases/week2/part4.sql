-- # PART 4

CREATE DATABASE recipes
    DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE Category (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Recipe (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id BIGINT,
    cooking_time INT,
    FOREIGN KEY (category_id) REFERENCES Category(id) ON DELETE SET NULL
);

CREATE TABLE Ingredient (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Recipe_Ingredients (
    recipe_id BIGINT NOT NULL,
    ingredient_id BIGINT NOT NULL,
    quantity VARCHAR(50) NOT NULL,  
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id) ON DELETE CASCADE
);

CREATE TABLE User (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Favorite_Recipes (
    user_id BIGINT NOT NULL,
    recipe_id BIGINT NOT NULL,
    PRIMARY KEY (user_id, recipe_id),
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id) ON DELETE CASCADE
);

INSERT INTO Category (name) VALUES
('Breakfast'),
('Lunch'),
('Dinner'),
('Dessert'),
('Beverage');

INSERT INTO Recipe (name, category_id, cooking_time) VALUES
('Pancakes', 1, 20),   -- Breakfast
('Mashed Potatoes', 2, 30),  -- Lunch
('Pasta Carbonara', 3, 25),  -- Dinner
('Chocolate Cake', 4, 60),  -- Dessert
('Latte Coffee', 5, 10);  -- Beverage


INSERT INTO Ingredient (name) VALUES
('Flour'),
('Milk'),
('Eggs'),
('Sugar'),
('Cream'),
('Potatoes'),
('Butter'),
('Cheese'),
('Spaghetti'),
('Bacon'),
('Coffee');

INSERT INTO Recipe_Ingredients (recipe_id, ingredient_id, quantity) VALUES
-- Pancakes
(1, 1, '200 g'),  -- Flour
(1, 2, '500 ml'),  -- Milk
(1, 3, '2 pcs'),  -- Eggs
(1, 4, '1 tbsp'),  -- Sugar

-- Mashed Potatoes
(2, 6, '500 g'),  -- Potatoes
(2, 7, '50 g'),  -- Butter
(2, 2, '100 ml'),  -- Milk

-- Pasta Carbonara
(3, 9, '200 g'),  -- Spaghetti
(3, 10, '100 g'),  -- Bacon
(3, 3, '1 pc'),  -- Egg
(3, 8, '50 g'),  -- Cheese

-- Chocolate Cake
(4, 1, '300 g'),  -- Flour
(4, 4, '100 g'),  -- Sugar
(4, 3, '3 pcs'),  -- Eggs
(4, 5, '200 ml'),  -- Cream

-- Latte Coffee
(5, 11, '1 tsp'),  -- Coffee
(5, 2, '250 ml');  -- Milk

INSERT INTO User (name) VALUES
('Alex'),
('Maria'),
('John'),
('Emily'),
('Michael');

INSERT INTO Favorite_Recipes (user_id, recipe_id) VALUES
(1, 1),  -- Alex added "Pancakes" to favorites
(1, 3),  -- Alex added "Pasta Carbonara" to favorites
(2, 4),  -- Maria added "Chocolate Cake" to favorites
(3, 2),  -- John added "Mashed Potatoes" to favorites
(4, 5),  -- Emily added "Latte Coffee" to favorites
(5, 3);  -- Michael added "Pasta Carbonara" to favorites

SELECT Recipe.name 
FROM Recipe
JOIN Favorite_Recipes ON Recipe.id = Favorite_Recipes.recipe_id
JOIN User ON Favorite_Recipes.user_id = User.id
WHERE User.name = 'Alex';

