

CREATE TABLE Meal(
    id int AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    `location` VARCHAR(255),
    `when` DATETIME,
    max_reservations int,
    price DECIMAL(10,2),
    created_date date
)
    
CREATE Table Reservation(
    id int AUTO_INCREMENT PRIMARY KEY,
    number_of_guests int,
    meal_id int,
    created_date date,
    contact_phonenumber VARCHAR(255),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    Foreign Key (meal_id) REFERENCES Meal(id) ON DELETE SET NULL
)

CREATE Table Review(
    id int AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    meal_id int,
    stars int,
    created_date date,
    Foreign Key (meal_id) REFERENCES Meal(id) ON DELETE SET NULL
)

INSERT INTO Meal (title, description, `location`, `when`, max_reservations, price, created_date) VALUES
('Italian Pasta Night', 'Enjoy a delicious homemade Italian pasta with fresh ingredients.', 'New York, NY', '2024-03-01 19:00:00', 20, 15.99, '2024-02-15'),
('Sushi Making Class', 'Learn how to make sushi rolls with a professional chef.', 'San Francisco, CA', '2024-03-05 18:30:00', 15, 25.00, '2024-02-18'),
('Vegan Feast', 'A healthy and delicious vegan buffet with organic ingredients.', 'Los Angeles, CA', '2024-03-10 12:00:00', 30, 20.50, '2024-02-20'),
('BBQ Ribs Night', 'Classic American BBQ ribs served with sides and drinks.', 'Austin, TX', '2024-03-15 20:00:00', 25, 18.75, '2024-02-22'),
('French Pastry Workshop', 'Master the art of making croissants and éclairs.', 'Paris, France', '2024-03-20 14:00:00', 10, 30.00, '2024-02-25'),
('Indian Curry Night', 'Enjoy authentic Indian curry with freshly baked naan.', 'London, UK', '2024-03-25 19:30:00', 20, 22.99, '2024-02-28'),
('Mediterranean Brunch', 'A flavorful brunch with olives, hummus, and grilled meats.', 'Barcelona, Spain', '2024-03-30 11:00:00', 35, 17.49, '2024-03-01');

-- Queries to write
------------
---Meal-----
-----------

-- Get all meals
SELECT * FROM Meal;

-- Add a new meal
INSERT INTO Meal (title, description, `location`, `when`, max_reservations, price, created_date) VALUES
('Japanese Ramen Night', 'Experience authentic Japanese ramen with a variety of toppings.', 'Tokyo, Japan', '2024-04-05 19:00:00', 25, 16.50, '2024-03-05');

-- Get a meal with any id, fx 1
SELECT * FROM Meal WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal 
SET title = "Pasta", description = "Enjoy a delicious homemade pasta", price = 17.50 
    WHERE id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM Meal WHERE id = 1;

INSERT INTO Meal (title, description, `location`, `when`, max_reservations, price, created_date) 
VALUES ('Italian Pasta Night', 'Enjoy a delicious homemade Italian pasta with fresh ingredients.', 'New York, NY', '2024-03-01 19:00:00', 20, 15.99, '2024-02-15'),

----------------
---Reservation----
-----------------

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES 
(4, 1, '2025-02-18', '+4522334455', 'John Doe', 'john@example.com'),
(2, 3, '2025-02-19', '+4533445566', 'Emma Smith', 'emma@example.com'),
(6, 4, '2025-02-20', '+4544556677', 'Michael Johnson', 'michael@example.com'); -- NULL means the meal was deleted



-- Get all reservations
SELECT * from Reservation

-- Add a new reservation

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 2, '2025-02-21', '+4555667788', 'Sarah Brown', 'sarah@example.com');

-- Get a reservation with any id, fx 1

SELECT * FROM Reservation  
WHERE id = 1;


-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

Update `Reservation` 
set contact_name = "Andrii Khandohii", contact_email = "andrey@example.com"
where id = 1;

-- Delete a reservation with any id, fx 1

Delete FROM Reservation 
where id = 4;


-------------------
-----Review--------
--------------------

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES 
('Delicious and Affordable', 'I really liked the meal, it was fresh and well prepared.', 1, 5, '2025-02-18'),
('Just an Average Meal', 'I expected more, but the dish was just okay.', 3, 3, '2025-02-19'),
('Not Satisfied', 'The dish was too salty and served cold.', 2, 1, '2025-02-20');

-- Get all reviews

SELECT * FROM Review;

-- Add a new review

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES 
('Great Experience', 'The meal was fantastic, and the service was excellent.', 4, 4, '2025-02-21');

-- Get a review with any id, fx 1

SELECT * FROM Review
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

Update `Review`
set title = "Amazing Experience", stars = 4
where id = 1;

-- Delete a review with any id, fx 1

DELETE FROM `Review`
where id = 4;

----------------------
--Additional queries--
----------------------

-- Get meals that has a price smaller than a specific price fx 90

SELECT * FROM Meal
WHERE price < 90;

-- Get meals that still has available reservations

SELECT * FROM Meal
WHERE max_reservations > (SELECT COUNT(*) FROM Reservation WHERE meal_id = Meal.id);

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * from Meal
where title like '%Rød grød med%';


-- Get meals that has been created between two dates

SELECT * FROM Meal
WHERE created_date BETWEEN '2024-02-15' AND '2024-02-25';

-- Get only specific number of meals fx return only 5 meals

SELECT * FROM Meal
Limit 5;

-- Get the meals that have good reviews

SELECT Meal.* from `Meal`
JOIN Review ON Meal.id = Review.meal_id
WHERE Review.stars >= 4;

-- Get reservations for a specific meal sorted by created_date

SELECT Reservation.* FROM `Reservation`
JOIN Meal ON Reservation.meal_id = Meal.id
WHERE Meal.title = 'Italian Pasta Night'
ORDER BY Reservation.created_date;

-- Sort all meals by average number of stars in the reviews

SELECT Meal.*, AVG(Review.stars) as avg_stars FROM `Meal`
JOIN Review ON Meal.id = Review.meal_id
GROUP BY Meal.id;


INSERT INTO Meal (title, description, `location`, `when`, max_reservations, price, created_date) VALUES
('Italian Pasta Night', 'Enjoy a delicious homemade Italian pasta with fresh ingredients.', 'New York, NY', '2024-03-01 19:00:00', 20, 15.99, '2024-02-15'),
('Sushi Making Class', 'Learn how to make sushi rolls with a professional chef.', 'San Francisco, CA', '2024-03-05 18:30:00', 15, 25.00, '2024-02-18'),
('Vegan Feast', 'A healthy and delicious vegan buffet with organic ingredients.', 'Los Angeles, CA', '2024-03-10 12:00:00', 30, 20.50, '2024-02-20'),
('BBQ Ribs Night', 'Classic American BBQ ribs served with sides and drinks.', 'Austin, TX', '2024-03-15 20:00:00', 25, 18.75, '2024-02-22'),
('French Pastry Workshop', 'Master the art of making croissants and éclairs.', 'Paris, France', '2024-03-20 14:00:00', 10, 30.00, '2024-02-25'),
('Indian Curry Night', 'Enjoy authentic Indian curry with freshly baked naan.', 'London, UK', '2024-03-25 19:30:00', 20, 22.99, '2024-02-28'),
('Mediterranean Brunch', 'A flavorful brunch with olives, hummus, and grilled meats.', 'Barcelona, Spain', '2024-03-30 11:00:00', 35, 17.49, '2024-03-01');

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES 
(4, 1, '2025-02-18', '+4522334455', 'John Doe', 'john@example.com'),
(2, 3, '2025-02-19', '+4533445566', 'Emma Smith', 'emma@example.com'),
(6, 4, '2025-02-20', '+4544556677', 'Michael Johnson', 'michael@example.com'),
(3, 2, '2025-02-21', '+4555667788', 'Sarah Brown', 'sarah@example.com');

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES 
('Delicious and Affordable', 'I really liked the meal, it was fresh and well prepared.', 1, 5, '2025-02-18'),
('Just an Average Meal', 'I expected more, but the dish was just okay.', 3, 3, '2025-02-19'),
('Not Satisfied', 'The dish was too salty and served cold.', 2, 1, '2025-02-20'),
('Great Experience', 'The meal was fantastic, and the service was excellent.', 4, 4, '2025-02-21'),
('Amazing Experience', 'The meal was fantastic, and the service was excellent.', 5, 4, '2025-02-21'),
('Great Experience', 'The meal was fantastic, and the service was excellent.', 6, 4, '2025-02-21');
