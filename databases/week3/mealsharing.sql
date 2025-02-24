CREATE DATABASE Meal_Sharing

USE Meal_Sharing

CREATE TABLE `Reservation` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `number_of_guests` int,
    `meal_id` int,
    `created_date` date,
    `contact_phonenumber` varchar(255),
    `contact_name` varchar(255),
    `contact_email` varchar(255)
);

CREATE TABLE `Meal` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `title` varchar(255),
    `description` text,
    `location` varchar(255),
    `when` datetime,
    `max_reservations` int,
    `price` decimal,
    `created_date` date
);

CREATE TABLE `Review` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `title` varchar(255),
    `description` text,
    `meal_id` int,
    `stars` int,
    `created_date` date
);

ALTER TABLE `Reservation` ADD PRIMARY KEY (`id`);

ALTER TABLE `Reservation`
ADD FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`);

ALTER TABLE `Review`
ADD FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`);

USE Meal_Sharing

SELECT * FROM `Meal`

--1--
SELECT title as Meal_Name FROM `Meal`;
---- Get all meals

--2--
INSERT INTO `Meal` 
    (title, description, location, `when`, max_reservations, price, created_date)
VALUES 

    ('Sushi Night', 'Fresh Japanese sushi selection', 'Copenhagen', '2025-03-05', 8, 150, '2025-02-18'),
    ('Taco Fiesta', 'Authentic Mexican tacos with a twist', 'Odense', '2025-03-06', 10, 90, '2025-02-19'),
    ('Pasta Delight', 'Homemade Italian pasta dishes', 'Aalborg', '2025-03-07', 6, 110, '2025-02-20'),
    ('Vegan Feast', 'Plant-based gourmet experience', 'Copenhagen', '2025-03-08', 5, 95, '2025-02-21'),
    ('Steakhouse Special', 'Premium steaks cooked to perfection', 'Aarhus', '2025-03-09', 7, 200, '2025-02-22');

--Add a new meal

--3--
SELECT * FROM `Meal` WHERE id = 1;
-- Get a meal with any id, fx 1

---4-
Update `Meal` SET price = 129 WHERE id = 1;
--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes-

--5--
DELETE FROM `Meal` WHERE id = 1;
--Delete a meal with any id, fx 1

-----Reservation-----

--1---
SELECT * FROM `Reservation`;
--Get all reservations---

--2---
INSERT INTO `Reservation` 
    (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES 
    (5, 2, '2025-03-01', '67890123', 'Emma', 'emma@example.com'),
    (3, 4, '2025-03-02', '78901234', 'Liam', 'liam@example.com'),
    (2, 1, '2025-03-03', '89012345', 'Sophia', 'sophia@example.com'),
    (6, 3, '2025-03-04', '90123456', 'Noah', 'noah@example.com'),
    (4, 5, '2025-03-05', '01234567', 'Olivia', 'olivia@example.com');

    --Add a new reservation---



  ---3---
SELECT number_of_guests, contact_name 
from `Reservation`
WHERE id = 1;
  --Get a reservation with any id, fx 1

--4----
update `Reservation`
set number_of_guests = 20
WHERE id = 1;
---Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes


--5--
DELETE FROM `Reservation` WHERE id = 1;
--Delete a reservation with any id, fx 1--

-----Review-----

--1---
SELECT * FROM `Review`;
--Get all reservations---

--2---
INSERT INTO `Review`
    (title, description, meal_id, stars, created_date)
VALUES
    ('Fantastic Sushi', 'Fresh and delicious sushi, great ambiance', 2, 5, '2025-03-10'),
    ('A Must-Try', 'Authentic flavors and amazing service', 4, 5, '2025-03-11'),
    ('Great for Date Night', 'Romantic atmosphere and delicious pasta', 1, 4, '2025-03-12'),
    ('Tasty and Filling', 'Big portions and great taste', 5, 4, '2025-03-13'),
    ('Healthy and Delicious', 'Loved the vegan options!', 3, 5, '2025-03-14');

    --Add a new reservation---



  ---3---
SELECT title, description 
from `Review`
WHERE id = 1;
  --Get a reservation with any id, fx 1

--4----
update `Review`
set title = "Strongly Recommended :D"
WHERE id = 1;
---Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes


--5--
DELETE FROM `Review` WHERE id = 1;
--Delete a reservation with any id, fx 1--






---Functionality-----



----1----Get meals that has a price smaller than a specific price fx 90----
SELECT title, LENGTH(price) AS len_price, price  
FROM `Meal`  
WHERE price < 90; 


----2----Get meals that still has available reservations----
SELECT 
  m.id,
  m.title,
  m.description,
  m.location,
  m.when,
  m.max_reservations - COALESCE(Sum(r.number_of_guests), 0) AS availble_reservations
from `Meal`  m 
LEFT JOIN `Reservation` r on r.meal_id = m.id
GROUP BY m.id;


-----3----- Get meals that partially match a title
SELECT * FROM `Meal` WHERE title LIKE '%sushi%';

----4---- Get meals created between two dates
SELECT * FROM `Meal` WHERE created_date BETWEEN '2025-02-18' AND '2025-03-06';

---5--- Get a limited number of meals
SELECT * FROM `Meal`
ORDER BY created_date ASC
LIMIT 3;

---6---- Get meals with good reviews (4+ stars)
SELECT
   *
FROM `Meal` meal
JOIN `Review` review ON review.meal_id = meal.id
WHERE review.stars > 4
ORDER BY review.stars DESC;

----7---- Get reservations for a specific meal, sorted by date
SELECT * FROM `Reservation`
WHERE meal_id = 5
ORDER BY created_date ASC;

----8---- Sort all meals by average review stars
SELECT
    meal.id AS ID,
    meal.title AS Title,
    meal.description AS Description,
    meal.location AS Location,
    ROUND(AVG(review.stars), 2) AS Average_Stars
FROM `Meal` meal 
LEFT JOIN `Review` review ON meal.id = review.meal_id
GROUP BY meal.id 
ORDER BY Average_Stars DESC;
