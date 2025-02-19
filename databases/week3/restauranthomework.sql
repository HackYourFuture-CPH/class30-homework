CREATE DATABASE homework3
    DEFAULT CHARACTER SET = 'utf8mb4';
USE homework3;

CREATE TABLE meals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT DEFAULT NULL,
    location VARCHAR(255) NOT NULL,
    meal_datetime DATETIME DEFAULT NULL,
    max_reservations INT DEFAULT 10,
    price DECIMAL(10,2) NOT NULL,
    created_date DATE NOT NULL
);
CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE NOT NULL,
    contact_phonenumber VARCHAR(20),
    contact_name VARCHAR(100),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    meal_id INT NOT NULL,
    stars INT CHECK (stars BETWEEN 1 AND 5),
    created_date DATETIME NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE
);


INSERT INTO meals (title, description, location, meal_datetime, max_reservations, price, created_date) VALUES
('Spaghetti Carbonara', 'Classic Italian pasta dish.', 'Rome, Italy', '2025-03-01 19:00:00', 15, 12.99, '2025-01-10'),
('Sushi Platter', 'Assorted fresh sushi and sashimi.', 'Tokyo, Japan', '2025-03-02 18:30:00', 20, 25.50, '2025-01-12'),
('Tacos al Pastor', 'Traditional Mexican tacos with marinated pork.', 'Mexico City, Mexico', '2025-03-03 20:00:00', 10, 8.99, '2025-01-15'),
('Biryani', 'Aromatic rice dish with chicken.', 'Mumbai, India', '2025-03-04 13:00:00', 30, 14.75, '2025-01-18'),
('Pad Thai', 'Stir-fried noodles with shrimp.', 'Bangkok, Thailand', '2025-03-05 18:00:00', 25, 10.50, '2025-01-20'),
('BBQ Ribs', 'Slow-cooked ribs with barbecue sauce.', 'Texas, USA', '2025-03-06 19:30:00', 18, 22.00, '2025-01-22'),
('Sauerbraten', 'German pot roast served with dumplings.', 'Berlin, Germany', '2025-03-07 17:45:00', 12, 19.99, '2025-01-25'),
('Pho', 'Vietnamese noodle soup with beef.', 'Hanoi, Vietnam', '2025-03-08 12:00:00', 20, 9.50, '2025-01-28'),
('Dim Sum', 'Chinese steamed dumplings and buns.', 'Hong Kong, China', '2025-03-09 11:30:00', 40, 15.75, '2025-02-01'),
('Paella', 'Spanish seafood rice dish.', 'Valencia, Spain', '2025-03-10 20:30:00', 16, 24.99, '2025-02-05');

INSERT INTO reservations (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES
(2, 1, '2025-02-02', '1234567890', 'Alice Johnson', 'alice@example.com'),
(4, 2, '2025-02-05', '9876543210', 'Bob Smith', 'bob@example.com'),
(3, 3, '2025-02-08', '1112223333', 'Charlie Brown', 'charlie@example.com'),
(5, 4, '2025-02-10', '4445556666', 'Diana Green', 'diana@example.com'),
(1, 5, '2025-02-12', '7778889999', 'Ethan White', 'ethan@example.com'),
(6, 6, '2025-02-15', '1122334455', 'Fiona Black', 'fiona@example.com'),
(2, 7, '2025-02-18', '6677889900', 'George Blue', 'george@example.com'),
(4, 8, '2025-02-20', '2233445566', 'Hannah Brown', 'hannah@example.com'),
(3, 9, '2025-02-23', '9988776655', 'Isaac Gray', 'isaac@example.com'),
(5, 10, '2025-02-25', '5544332211', 'Julia Red', 'julia@example.com');

INSERT INTO reviews (title, description, meal_id, stars, created_date) VALUES
('Delicious!', 'Loved the Carbonara, tasted authentic.', 1, 5, '2025-02-03'),
('Best sushi in town', 'Fresh and perfectly prepared.', 2, 5, '2025-02-06'),
('Average tacos', 'Could use more seasoning.', 3, 3, '2025-02-09'),
('Incredible biryani', 'So flavorful and well-spiced.', 4, 5, '2025-02-11'),
('Good Pad Thai', 'Noodles were perfect, sauce was tasty.', 5, 4, '2025-02-13'),
('Tender ribs', 'Fell off the bone, great sauce!', 6, 5, '2025-02-16'),
('Authentic Sauerbraten', 'Took me back to Germany!', 7, 5, '2025-02-19'),
('Pho was okay', 'Could use more broth flavor.', 8, 3, '2025-02-21'),
('Dim Sum heaven', 'So many great options!', 9, 5, '2025-02-24'),
('Paella delight', 'Seafood was fresh and rice was perfect.', 10, 5, '2025-02-26');

-- First part: Queries for meals
SELECT * FROM meals;

INSERT INTO meals (title, description, location, meal_datetime, max_reservations, price, created_date)
VALUES ('Fufu', 'traditional dish with plantain', 'Tanzania', NOW(), 10, 50.00, '2025-02-09');

SELECT * FROM meals WHERE id = 2;

DELETE FROM meals WHERE id = 3;

-- Second part: Queries for reservations
SELECT * FROM reservations;

INSERT INTO reservations (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 1, '2025-02-26', '1234567890', 'John Doe', 'john@example.com');

SELECT * FROM reservations WHERE id = 1;

UPDATE reservations 
SET contact_name = 'Marie' 
WHERE id = 2;

DELETE FROM reservations WHERE id = 2;

-- Third part: Queries for reviews
SELECT * FROM reviews;

INSERT INTO reviews (title, description, meal_id, stars, created_date)
VALUES ('Great Meal', 'The meal was delicious!', 2, 5, '2025-02-09');

SELECT * FROM reviews WHERE id = 4;

UPDATE reviews 
SET stars = 4 
WHERE id = 2;

DELETE FROM reviews WHERE id = 1;

-- Fourth part: Other queries
SELECT * FROM meals WHERE price < 90;

SELECT title FROM meals WHERE id < max_reservations;

SELECT * FROM meals WHERE title LIKE '%Rød grød med%';

SELECT * FROM meals WHERE meal_datetime IS NOT NULL;

SELECT * FROM meals LIMIT 5;

SELECT * FROM reservations ORDER BY created_date ASC;

SELECT * FROM meals 
ORDER BY (SELECT AVG(stars) FROM reviews WHERE reviews.meal_id = meals.id) DESC;
