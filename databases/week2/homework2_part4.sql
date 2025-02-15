CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    is_verified BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE recipes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    pitch TEXT,
    img_url TEXT,
    description TEXT,
    editable BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE ingredients (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL
);

CREATE TABLE measurement_units (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL
);

CREATE TABLE recipes_ingredients (
    id VARCHAR(255) PRIMARY KEY,
    recipe_id VARCHAR(255) NOT NULL,
    ingredient_id VARCHAR(255) NOT NULL,
    measurement_unit_id VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE,
    FOREIGN KEY (measurement_unit_id) REFERENCES measurement_units(id) ON DELETE CASCADE
);

CREATE TABLE shopping_list (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    recipe_id VARCHAR(255) NOT NULL,
    ingredient_id VARCHAR(255) NOT NULL,
    measurement_unit_id VARCHAR(255) NOT NULL,
    ingredient_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE,
    FOREIGN KEY (measurement_unit_id) REFERENCES measurement_units(id) ON DELETE CASCADE
);