CREATE DATABASE meal_sharing;
USE meal_sharing;

CREATE TABLE meal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    when_date DATETIME NOT NULL,
    max_reservations INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meal_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    number_of_guests INT NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE
);

CREATE TABLE review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meal_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    stars INT CHECK (stars BETWEEN 1 AND 5),
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE
);

-- Meal Queries

-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO meal (title, description, location, when_date, max_reservations, price) 
VALUES ('Pizza Party', 'Homemade pizza night', 'Aarhus', '2025-03-15 19:00:00', 10, 150.00);

-- Get a meal with any id, fx 1
SELECT * FROM meal WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal 
SET title = 'Updated Pizza Party', price = 140.00 
WHERE id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE id = 1;




-- Reservation Queries

-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (meal_id, name, email, phone, number_of_guests) 
VALUES (2, 'Ayman Ngu', 'Belvsall@outlook.com', '61446282', 3);

-- Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the name or multiple attributes
UPDATE reservation 
SET number_of_guests = 4 
WHERE id = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id = 1;



-- Review Queries

-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review (meal_id, title, description, stars) 
VALUES (2, 'Fantastic!', 'Best pizza ever!', 5);

-- Get a review with any id, fx 1
SELECT * FROM review WHERE id = 1;

-- Update a review
UPDATE review 
SET stars = 4, description = 'Great pizza but a bit too salty.' 
WHERE id = 1;

-- Delete a review with any id, fx 1
DELETE FROM review WHERE id = 1;





-- Get meals that cost less than 90
SELECT * FROM meal WHERE price < 90;

-- Get meals that still have available spots
SELECT * FROM meal 
WHERE max_reservations > (SELECT COUNT(*) FROM reservation WHERE meal.id = reservation.meal_id);

-- Find meals that partially match a title
SELECT * FROM meal WHERE title LIKE '%Piz%';

-- Get meals created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2025-01-01' AND '2025-03-01';

-- Get a specific number of meals (fx return only 5 meals)
SELECT * FROM meal LIMIT 5;

-- Get the meals that have good reviews (stars >= 4)
SELECT * FROM meal 
WHERE id IN (SELECT meal_id FROM review WHERE stars >= 4);

-- Get reservations for a specific meal, sorted by creation date
SELECT * FROM reservation WHERE meal_id = 1 ORDER BY created_date DESC;

-- Sort all meals by average number of stars in the reviews
SELECT meal.*, 
       (SELECT AVG(stars) FROM review WHERE review.meal_id = meal.id) AS avg_stars 
FROM meal
ORDER BY avg_stars DESC;









