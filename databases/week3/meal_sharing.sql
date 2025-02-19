-- Active: 1738236443102@@0.0.0.0@3307@meal_sharing_database

-----Create table for meals-----
CREATE TABLE Meal(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    meal_time DATETIME NOT NULL,
    max_reservations INT NOT NULL,
    price DECIMAL NOT NULL,
    created_date DATE
)

-----Create table for reservations-----
CREATE TABLE Reservation(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE NOT NULL,
    contact_phonenumber VARCHAR(20) NOT NULL,
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255),
    CONSTRAINT FOREIGN KEY fk_mealid (meal_id) REFERENCES Meal (id) ON DELETE CASCADE    
)

-----Create table for reviews-----
CREATE TABLE Review(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    stars INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    CONSTRAINT FOREIGN KEY fk_mealid (meal_id) REFERENCES Meal (id) ON DELETE CASCADE    
)

-----Insert into meal table-----
INSERT INTO `Meal` (title, description, location, meal_time, max_reservations, price, created_date) 
VALUES 
('Pizza', 'Pizza made with tomatoes and aubergines', 'Luciano Pizza', '2025-04-04 18:00:00', 2, 215, '2025-02-18'),
('South Indian Cuisine', 'Discover the vibrant flavors of South Indian cuisine with authentic recipes and techniques.', 'Anna kichen', '2025-03-25 11:00:00', 15, 44, '2025-02-16'),
('Sushi Night', 'Fresh sushi rolls with sashimi and miso soup.', '456 Elm St', '2025-03-01 19:30:00', 8, 35.50, '2025-02-20'),
('Vegan Dinner', 'Plant-based dishes including tofu stir-fry and quinoa salad.', '555 Maple St', '2025-03-15 18:30:00', 10, 22.50, '2025-02-25'),
('Rød grød med fløde', 'grød and fløde with honey and sugger', 'Aars', '2025-01-19 12:45:00', 40, 45.00, '2025-11-07');

-----Insert into Reservation table-----
INSERT INTO `Reservation` (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
VALUES 
(4, 3, '2025-02-20', '3456789', 'Gayathri', 'gayathri@gmail.com'),
(2, 2, '2025-02-23', '987-654-3210', 'Jane Smith', 'jane@example.com'),
(4, 4, '2025-03-01', '444-555-6666', 'Bob Williams', 'bob@example.com'),
(3, 5, '2025-02-28', '777-888-9999', 'Emily Brown', 'emily@example.com'),
(3, 1, '2025-02-24', '123-456-7890', 'John Doe', 'john@example.com'),
(6, 5, '2025-09-07', '20304050', 'morgen friman', 'morgenfri@gmail.com');


-----Insert into Review table-----
INSERT INTO `Review` (title, description, meal_id, stars, created_date) 
VALUES 
('Love the experiment', 'The quality of material, taste and freshness was excellent', 3, 4, '2025-04-12'),
('so delicious', 'Our meal was perfect', 5, 5, '2025-02-04 19:03:25'),
('Too spicy', 'Our pizza didn''t tase good and there were too spicy for my child', 1, 2, '2025-02-03 19:03:25'),
('cleanness', 'The host''s house and kitchen were clean and the meal was good but a little bit salty', 4, 3, '2024-02-02 19:03:25'),
('Amazing Experience', 'I thoroughly enjoyed the South Indian food!', 2, 5, '2024-03-11');

-----Get all meals-----
SELECT * from Meal;

-----Add a new meal-----
INSERT INTO `Meal` (title, description, location, meal_time, max_reservations, price, created_date) 
VALUES ('Ruby Chocolate Bars', 'Experimental chocolate with Ruby chocolate beans.', 'Horsens', '2025-04-12 16:00:00', 6, 50, '2025-02-19');

-----Get a meal with any id, fx 1-----
SELECT * FROM `Meal`
WHERE id=4;

-----Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes-----
UPDATE `Meal`
SET title = 'Special Gluten-fri Pizza', description = 'A special gluten-fri pizza with local ingredients'
WHERE id=1;

-----Delete a meal with any id, fx 1-----
DELETE FROM `Meal` WHERE id = 3;

-----Get all reservations-----
SELECT * FROM `Reservation`;

-----Add a new reservation-----
INSERT INTO `Reservation` (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 2, '2025-02-20', '3456789', 'lino gamira', 'liga@gmail.com');

-----Get a reservation with any id, fx 1-----
SELECT * FROM `Reservation`
WHERE id=4;

-----Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes-----
UPDATE `Reservation`
SET contact_name = 'Gorm Den Gamle', contact_phonenumber = '1234567'
WHERE id=3;

-----Delete a reservation with any id, fx 1-----
DELETE FROM `Reservation` WHERE id = 2;

-- Review Queries

-----Get all reviews-----
SELECT * FROM `Review`;

-----Add a new review-----
INSERT INTO `Review` (title, description, meal_id, stars, created_date) 
VALUES ('Love the experiment', 'I love the quality of the homemade chocolate.', 6, 5, '2024-04-12');

-----Get a review with any id, fx 1-----
SELECT * FROM `Review`
WHERE id = 3;

-----Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes-----
UPDATE `Review`
SET stars = 1, created_date = '2025-02-17'
WHERE id=3;

-----Delete a review with any id, fx 1-----
DELETE FROM `Review` WHERE id=5;

-----Additional Queries-----

-----Get meals that has a price smaller than a specific price fx 90-----
SELECT * FROM `Meal`
WHERE price < 50;

-----Get meals that still has available reservations-----
SELECT m.id, m.title, m.description, m.location, m.meal_time 
FROM `Meal` m
LEFT JOIN `Reservation` r ON m.id = r.meal_id
GROUP BY m.id LIMIT 100;

-----Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde-----
SELECT *
FROM `Meal`
WHERE title LIKE '%Rød grød med%';

-----Get meals that has been created between two dates-----
SELECT *
FROM `Meal`
WHERE created_date BETWEEN '2025-02-15' AND '2025-02-25';

-----Get only specific number of meals fx return only 5 meals-----
SELECT *
FROM `Meal`
LIMIT 2;

-----Get the meals that have good reviews-----
SELECT m.title, m.description, m.location, r.stars
FROM `Meal` m
LEFT JOIN `Review` r ON m.id = r.meal_id
WHERE r.stars > 3 LIMIT 100;

-----Get reservations for a specific meal sorted by created_date-----
SELECT *
FROM `Reservation`
WHERE meal_id = 5
ORDER BY created_date LIMIT 100;

-----Sort all meals by average number of stars in the reviews-----
SELECT m.id, m.title, m.description, m.location, avg(r.stars) AS average_rate
FROM `Meal` m
LEFT JOIN `Review` r ON m.id = r.meal_id
GROUP BY m.id
ORDER BY average_rate;






 
 
 
 





 
 
