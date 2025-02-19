-- Active: 1739038387593@@127.0.0.1@3306@meal_sharing
--Create the Database and Tables
CREATE database meal_sharing;
use meal_sharing;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);
INSERT INTO users (id, name, email) VALUES
(4, 'Maryam', 'maryam@example.com');

CREATE TABLE meals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    price DECIMAL(10,2),
    max_reservations INT,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meal_id INT NOT null,
    user_id INT NOT NULL,
    number_of_guests INT NOT null,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meal_id INT,
    user_id INT,
    stars INT CHECK (stars BETWEEN 1 AND 5),
    description TEXT,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


--Get all meals
SELECT * FROM meals;

--Add a new meal
INSERT INTO meals(title,description,location,price,max_reservations)
VALUES('Pizza Night', 'Delicious homemade pizza', 'Copenhagen', 75.00, 10);

--Get a meal with any id
SELECT * FROM meals WHERE id=5;

--Update a meal with any id =1
UPDATE meals SET location="aarhus"  WHERE id=1;

INSERT INTO meals(title,description,location,price,max_reservations)
VALUES('pizza day', 'lykker pizza','vejle',89.00,12);
INSERT INTO meals(title,description,location,price,max_reservations)
VALUES('pizza_peperoni','polse','bronby',110.00,14);
INSERT INTO meals(title,description,location,price,max_reservations)
VALUES('pizza_kebab','kebab','kolding',100.00,15);

--Delete a meal with any id (e.g., 1)
DELETE from meals WHERE id=2;



---------------reservations
--Get all reservations
SELECT * FROM reservations;

--Add a new reservation
INSERT INTO reservations (meal_id, user_id, number_of_guests)
VALUES (1, 2, 3);
INSERT INTO reservations (id, meal_id, user_id, number_of_guests) 
VALUES(2, 2, 3, 2),
(3, 3, 1, 4),  
(4, 4, 4, 1); 
INSERT INTO reservations (id, meal_id, user_id, number_of_guests) 
VALUES (1, 2, 3, 4);
--Get a reservation with any id=1
SELECT * FROM reservations where  id=1;

--Update a review with any id 
UPDATE reservations SET number_of_guests='5' WHERE id=1;

--Delete a reservation with any id 
DELETE FROM reservations WHERE id=1;



-----reviews
--Get all reviews
SELECT * FROM reviews;

--Add a new review
INSERT INTO reviews(meal_id,user_id,stars,description)
VALUES(1, 2, 5, 'Amazing meal! Definitely coming again.');
INSERT INTO reviews (id, meal_id, user_id, stars, description) VALUES
(2, 2, 3, 4, 'Good pasta, but a bit salty.'),
(3, 3, 1, 3, 'Burger was okay, but I had better.'),
(4, 4, 4, 5, 'Super fresh salad, loved it!');

--Get a review with any id 
SELECT * 
FROM reviews
 WHERE id=1;

--Update a review with any id 
UPDATE reviews
SET stars = 4, description = 'Great meal but could be better'
WHERE id = 1;

--Delete a review with any id 
DELETE FROM reviews WHERE id=2;

--------------------Additional Queries-------------------------------
--Get meals that have a price smaller than a specific price (e.g., 90)
SELECT title,price 
FROM meals 
WHERE price < 90;

--Get meals that still have available reservations
SELECT m.id, m.title, m.description, m.location, m.price
FROM meals m
LEFT JOIN reservations r ON m.id = r.meal_id
GROUP BY m.id ;
--Get meals that partially match a title
SELECT * 
FROM meals
WHERE title LIKE '%night';

--Get meals created between two dates
SELECT * 
FROM meals 
WHERE created_date
BETWEEN '2025-02-13 05:35:41' AND '2025-02-13 05:55:19';

--Get only a specific number of meals (e.g., return only 5 meals)
SELECT * 
FROM meals LIMIT 5;

--Get meals that have good reviews (4 stars or more)
SELECT meals.id,meals.title,meals.description,reviews.stars,reviews.description 
FROM meals 
JOIN reviews
ON meals.id=reviews.meal_id
WHERE reviews.stars > 4;

--Get reservations for a specific meal sorted by created_date
SELECT * 
FROM reservations 
WHERE meal_id=1
ORDER BY created_date ASC ;



--Sort all meals by average number of stars in reviews
SELECT m.id, m.title, m.description, m.location, AVG(r.stars) AS average_stars
FROM meals m
LEFT JOIN reviews r 
ON m.id = r.meal_id
GROUP BY m.id
ORDER BY average_stars DESC;


