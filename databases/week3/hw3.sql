CREATE DATABASE hw3_meal

USE hw3_meal;

CREATE TABLE meal (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(100) NOT NULL,
    `description` TEXT,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` INT UNSIGNED NOT NULL,
    `price` DECIMAL(10,2),
    `created_date` DATE NOT NULL 
);

CREATE TABLE `reservation` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `number_of_guests` INT UNSIGNED NOT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL,
    `contact_phonenumber` VARCHAR(100) NOT NULL,
    `contact_name` VARCHAR(100) NOT NULL,
    `contact_email` VARCHAR(100) NOT NULL,
    FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON DELETE CASCADE
);

CREATE TABLE `review` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(100) NOT NULL,
    `description` TEXT,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `stars` INT(5) NOt NULL,
    `created_date` DATE NOT NULL,
    FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON DELETE CASCADE
)


-- QUERIES

-- Meal

SELECT * 
FROM meal;

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Traditonal Sicilian Pasta Carbonara', 'Master class from of cooking Carbonara from the best sicilain chef.', 'Palermo, IT', '2025-05-09', 25, 34.99, '2025-02-17')

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ('10 Different ways to make a great pizza', 'Very good mini-course of making real italian pizza', 'Rome, IT', '2025-04-23', 20, 24.00, '2025-02-19');

SELECT *
FROM meal
WHERE id = 2;

UPDATE meal 
SET location = 'Napoli, IT',
    price = 29.95
WHERE id = 2;

DELETE FROM meal
WHERE id = 1

-- Reservation

SELECT *
FROM reservation

INSERT INTO `reservation` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) 
VALUES (4, 2, CURDATE(), '52 45 12 34', 'Pedro Moretti', 'pedromoretti@example.com');

SELECT * FROM `reservation` WHERE `id` = 2;

UPDATE `reservation` 
SET `number_of_guests` = 10 
WHERE `id` = 2;

UPDATE `reservation` 
SET `number_of_guests` = 7, 
    `contact_name` = 'Anna-Maria Moretti', 
    `contact_email` = 'annamaria@example.com' 
WHERE `id` = 2;

DELETE FROM reservation
WHERE id = 2

-- Review

SELECT * FROM `review`;

INSERT INTO `review` (`title`, `description`, `meal_id`, `stars`, `created_date`) 
VALUES ('Great meal!', 'It was very, very tasty and the service was TOP!', 2, 5, CURDATE());

SELECT * FROM review
WHERE id = 1

UPDATE `review` 
SET `description` = 'Et kæmpe stort TAK til alle, der lavede den lækker mad!',
    `title` = 'Super!!'
WHERE `id` = 1;

DELETE FROM review
WHERE id = 2

-- Additional queries

SELECT * FROM meal
WHERE price >= 90;

SELECT m.*
FROM meal m
LEFT JOIN (
    SELECT meal_id, SUM(number_of_guests) AS total_reserved
    FROM reservation
    GROUP BY meal_id
) r ON m.id = r.meal_id
WHERE r.total_reserved IS NULL OR r.total_reserved < m.max_reservations;


SELECT * FROM `meal` 
WHERE `title` LIKE '%Rød grød med%';


SELECT * FROM `meal` 
WHERE `created_date` BETWEEN '2025-01-01' AND '2026-02-01';


SELECT * FROM `meal` 
LIMIT 5;


SELECT DISTINCT *
FROM meal m
JOIN review r ON m.id = r.meal_id
WHERE r.stars >= 4;

SELECT * FROM `reservation` 
WHERE `meal_id` = 2 
ORDER BY `created_date` DESC;

SELECT m.*, AVG(r.stars) AS avg_stars
FROM `meal` m
LEFT JOIN `review` r ON m.id = r.meal_id
GROUP BY m.id
ORDER BY avg_stars DESC;
