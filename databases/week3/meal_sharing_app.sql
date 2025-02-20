USE meal_sharing_app;

CREATE TABLE `meal` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT DEFAULT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` INT(10) UNSIGNED NOT NULL,
    `price` DECIMAL(10,2) NOT NULL,
    `created_date` DATETIME NOT NULL
);

CREATE TABLE `reservation` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `number_of_guests` INT(10) UNSIGNED NOT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `created_date` DATETIME NOT NULL,
    `contact_phonenumber` VARCHAR(255) NOT NULL,
    `contact_name` VARCHAR(255) NOT NULL,
    `contact_email` VARCHAR(255) NOT NULL,
    CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
);

CREATE TABLE `review` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT DEFAULT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `stars` INT(10) UNSIGNED NOT NULL,
    `created_date` DATETIME NOT NULL,
    CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
);

-- Queries to write
-- Meal
-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO meal 
    (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES 
    ('Pizza', 'Traditional italien pizza', 'Aarhus', '2025-3-1', 6, 100, '2025-2-13'),
    ('Asian Food', 'Fusion asian experience', 'Aarhus', '2025-3-2', 6, 96, '2025-2-14'),
    ('Open Sandwich', 'Fresh Danish indregients', 'Aarhus', '2025-3-3', 6, 120, '2025-2-15'),
    ('Salad Bowl', 'A healthy way of delicious bites', 'Aarhus', '2025-2-25', 6, 89, '2025-2-16'),
    ('Big Burger', 'American Style Burger', 'Aarhus', '2025-2-28', 4, 160, '2025-2-17');

--Get a meal with any id, fx 1
SELECT * FROM meal WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET
    title = 'Pasta',
    description = 'Traditional italian food'
WHERE 
    id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE id = 1;


-- Reservation
-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation 
    (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES 
    (2, 1, '2025-2-23', '12345678', 'Alice', 'alice@example.com'),
    (4, 3, '2025-2-23', '23456789', 'Jason', 'jason@example.com'),
    (3, 2, '2025-2-23', '34567890', 'Alex', 'alex@example.com'),
    (2, 4, '2025-2-23', '45678901', 'Ida', 'ida@example.com'),
    (2, 5, '2025-2-23', '56789012', 'Henrik', 'henrik@example.com');

-- Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id = 3;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET
    number_of_guests = 4,
    contact_phonenumber = 11224568
WHERE id = 3;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id = 4;


-- Review
-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review
    (title, description, meal_id, stars, created_date)
VALUES
    ('Great experience', 'Nice food and staffs, hygge place', 3, 5, '2025-3-6'),
    ('Highly recommended', 'Great place for gathering with nice food', 2, 5, '2025-3-2'),
    ('Recommended', 'Friendly to family with kids', 1, 5, '2025-3-3'),
    ('Nice burger', 'Great burgurs, nice staffs', 5, 4, '2025-3-7'),
    ('Eat healthily', 'Fresh ingredients', 4, 5, '2025-3-2');

-- Get a review with any id, fx 1
SELECT * FROM review WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET
    title = 'Unforgettable experience',
    created_date = '2025-3-5'
WHERE
    id = 1;

-- Delete a review with any id, fx 1
DELETE FROM review WHERE id = 2;


-- Additional queries
-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE price < 90;

-- Get meals that still has available reservations
SELECT 
    meal.id AS meal_id, 
    meal.title AS meal_title, 
    meal.description AS meal_description, 
    meal.location AS meal_location, 
    meal.when AS meal_date, 
    meal.max_reservations - IFNULL(SUM(reservation.number_of_guests), 0) AS remaining_number
FROM meal
LEFT JOIN reservation ON reservation.meal_id = meal.id
GROUP BY meal.id;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal WHERE title LIKE '%burger%';

-- Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2025-2-13' AND '2025-2-16';

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
ORDER BY created_date ASC
LIMIT 3;

-- Get the meals that have good reviews
SELECT
    meal.id AS meal_id, 
    meal.title AS meal_title, 
    meal.description AS meal_description, 
    meal.location AS meal_location, 
    meal.when AS meal_date, 
    review.stars AS review_stars
FROM meal
JOIN review ON review.meal_id = meal.id
WHERE review.stars > 4
ORDER BY review.stars DESC;

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation
WHERE meal_id = 5
ORDER BY created_date ASC;

-- Sort all meals by average number of stars in the reviewsr
SELECT
    meal.id AS meal_id,
    meal.title AS meal_title,
    meal.description AS meal_description,
    meal.location AS meal_location,
    ROUND(AVG(review.stars), 2) AS average_stars
FROM meal
LEFT JOIN review ON meal.id = review.meal_id
GROUP BY meal.id 
ORDER BY average_stars DESC;