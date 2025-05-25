CREATE DATABASE mealshare_db;
USE mealshare_db;

SET NAMES utf8mb4;
CREATE TABLE `Meal`
(
  `id` int
(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar
(150) NOT NULL,
  `description` text NOT NULL,
  `location` varchar
(255) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` int
(10) unsigned DEFAULT NULL,
  `price` decimal
(6,2) NOT NULL,
  `created_date` DATETIME NOT NULL
);

CREATE TABLE `Reservation`
(
  `id` int
(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int
(10) unsigned DEFAULT NULL,
  `meal_id` int
(10) unsigned NOT NULL,
  `created_date` DATETIME NOT NULL,
  `contact_phonenumber` varchar
(255) NULL,
  `contact_name` varchar
(255) NOT NULL,
  `contact_email` varchar
(255) NOT NULL,
  CONSTRAINT `fk_meal` FOREIGN KEY
(`meal_id`) REFERENCES `Meal`
(`id`) ON
DELETE CASCADE ON
UPDATE CASCADE
);




CREATE TABLE `Review`
(
 `id` int
(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` varchar
(150) NOT NULL,
 `description` text NOT NULL,
 `meal_id` int
(10) unsigned NOT NULL,
 `stars` int unsigned NOT NULL,
 `created_date` DATETIME NOT NULL,
 CONSTRAINT `fk_meal_rev` FOREIGN KEY
(`meal_id`) REFERENCES `Meal`
(`id`) ON
DELETE CASCADE ON
UPDATE CASCADE
);

insert into Meal
  (title, description, location,
  `when`, max_reservations, price, created_date) 
VALUES
('Zeytinyağli Sarma', 'Rice stuffed wine leaves with olive oil, lemon juice and spices', 'Istanbul', '2025-02-27 15:30:00', 5, 59.50, '2024-01-01 10:38:09'),
('Dalyan Köfte', 'In the shape of a substantial meatloaf with boiled eggs in it, garnished with peas and carrots in tomato sauce', 'Ankara', '2025-06-25 12:30:00', 2, 189.00, '2024-01-01 10:40:00'),
('Kuru-Pilav', 'Turkish white haricot bean stew with meat, served with pilav made of rice and butter', 'Izmir', '2025-05-15 18:30:00', 4, 120.00, '2024-01-01 11:15:00');


insert into Reservation
  (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES
  (2, 1, '2024-11-10 20:30:25', '+36 3877848600', 'Borisova Minevka', 'bbmin@contact.com'),
  (5, 2, '2024-12-30 22:58:00', '+45 44556677', 'Jens Jensen', 'jesse@contact.com'),
  (1, 1, '2025-02-10 06:00:08', '+33 5864867900', 'Franz Napoleon', 'napofra@contact.com'),
  (3, 2, '2024-01-02 11:20:40', '+44 6677876557', 'Jack Mccormik', 'mcjackie@contact.com');

insert into Review
  (title, description, meal_id, stars, created_date)
VALUES
  ('insanely delicious!', 'Our host was super welcoming and talented, <sarma> was amazing! Savory, sour, sweet and the taste was soo unique  mamma mia<3', 1, 5, '2025-02-28 20:30:25'),
  ("A true delight!", "I had never tried Zeytinyağli Sarma before, but wow, what an explosion of flavors! Highly recommended.", 1, 4, "2025-02-15 18:34:21"),
  ("Nice, but could be better", "The Zeytinyağli Sarma was decent, but I felt like it needed a bit more seasoning. It lacked some punch.", 1, 3, "2025-02-09 23:53:15"),
  ("Not my cup of tea", "Maybe I had too high expectations, but Sarma didn't impress me. It was a bit bland for my liking.", 1, 1, "2025-01-31 21:45:40"),
  ("Absolutely heavenly!", "Zeytinyağli Sarma was just perfect! Every bite was bursting with flavor, and the texture was spot on.", 1, 5, "2025-02-05 13:56:43"),
  ("Super authentic!", "This tasted just like home-cooked food. Dalyan Köfte was prepared with so much love and care!", 2, 5, "2025-02-11 14:12:08"),
  ("Okayish", "Dalyan Köfte was okay, but I found it a bit too oily. Not sure I-d order it again.", 2, 2, "2025-02-03 11:26:14"),
  ("Good but not great", "Dalyan Köfte was tasty, but I found it a little too salty. Still worth trying!", 2, 3, "2025-02-18 17:29:55"),
  ("Not bad, but expected more", "Dalyan Köfte was decent, but I was hoping for stronger flavors. It was a bit bland.", 2, 4, "2025-02-14 19:51:09"),
  ("Loved it!", "This was my first time trying Dalyan Köfte, and it won't be my last. Amazing balance of spices!", 2, 5, "2025-02-07 20:45:32"),
  ("Num num", "I had never tried Kuru-Pilav before, but wow, what an explosion of flavors! Highly recommended.", 3, 5, "2025-02-12 09:34:45"),
  ("Not as promoted", "I am dissapointed a little, unfort Kuru-Pilav didn't impress me. A bit too dry for me.", 3, 2, "2025-02-01 07:52:11"),
  ("Super authentic!", "This tasted just like real home-cooked food. Kuru-Pilav was a surprisingly delicious blend of two different taste", 3, 5, "2025-02-17 16:30:50"),
  ("Could be better", "The Kuru-Pilav was decent, but I felt like it was too spicy. Burned till my ears.", 3, 3, "2025-02-06 22:15:29");

--Meal Tasks--
-- Get all meals--
SELECT *
FROM `Meal
`;
-- Add a new meal
insert into Meal
  (title, description, location,
  `when`, max_reservations, price, created_date) 
VALUE
('Ispanakli Börek', 'Flaky and creamy, this pastry combines crisp phyllo dough with tangy Turkish white cheese and tender spinach', 'Tekirdağ', '2025-04-24 12:30:00', 6, 125.00, '2023-09-01 18:08:09');
-- Get a meal with any id, fx 1
SELECT *
FROM meal
WHERE id=3;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET location = 'Tosya', price = 210
WHERE id = 2;

-- Delete a meal with any id, fx 1
DELETE FROM meal 
WHERE id = 3;

--Reservation Tasks
-- Get all reservations
SELECT *
FROM reservation;

-- Add a new reservation
insert into Reservation
  (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES
  (8, 4, '2024-11-10 20:30:25', '+90 5064887943', 'Dilay Üzgün', 'diluz@contact.com');

-- Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id=15;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET contact_name = 'Mette Jorgen'
WHERE id = 14;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation 
WHERE id = 15;

--Review Tasks
-- Get all reviews
SELECT *
FROM review;

-- Add a new review
insert into Review
  (title, description, meal_id, stars, created_date)
VALUES
  ('I am burning!', 'I was not informed about the alergens,I have hives on my skin and my face is burning... Never Recommend!', 5, 1, '2025-02-02 09:30:12');

-- Get a review with any id, fx 1
SELECT *
FROM review
WHERE id=8;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET stars = 4, title = 'Meh!'
WHERE id = 10;

-- Delete a review with any id, fx 1
DELETE FROM review 
WHERE id = 3;

-- Additional queries
insert into Meal
  (title, description, location,
  `when`, max_reservations, price, created_date) 
VALUE
('Sütlaç', 'It is a baked rice pudding made with rice, milk, sugar and spices', 'Trabzon', '2025-03-06 14:30:00', 4, 60.00, '2023-09-01 18:08:09');

insert into Reservation
  (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES
  (1, 5, '2024-11-10 20:30:25', '+90 3364858012', 'Chanda Jawagi', 'jawagicha@contact.com');

insert into Review
  (title, description, meal_id, stars, created_date)
VALUES
  ('Wow<3', 'I have tried various types of rice puddings so far, but giiirl it was sooo tasty, creamy, like baby food <3', 5, 5, '2025-03-10 18:40:50')
-- Functionality
--Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM meal
WHERE price < 100;

-- Get meals that still has available reservations
SELECT *
FROM meal
WHERE max_reservations > (
  SELECT COALESCE(SUM(number_of_guests), 0)
FROM reservation
WHERE meal.id = reservation.meal_id
);

/* Get meals that partially match a title. 
  Rød grød med will match the meal with the title Rød grød med fløde */
SELECT *
FROM meal
WHERE title LIKE '%sü%';

-- Get meals that has been created between two dates
SELECT id, title, created_date
FROM meal
WHERE '2023-08-10 10:30:25' < created_date
<'2024-11-10 00:30:25';

-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal
LIMIT
2, 4;

-- Get the meals that have good reviews
SELECT m.title as mt, r.meal_id, r.stars
FROM meal m
  LEFT JOIN review r ON m.id = r.meal_id
WHERE r.stars >= 4;

-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM reservation
WHERE meal_id = 2
ORDER BY created_date ASC;

-- Sort all meals by average number of stars in the reviews
SELECT m.*, AVG(r.stars) as avg_stars
FROM meal m
  LEFT JOIN review r ON m.id = r.meal_id
GROUP BY m.id
ORDER BY avg_stars DESC;