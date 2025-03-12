--Get all meals
--Get all meals
SELECT * FROM meal;

--Add a new meal
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) VALUES ('Burak', 'Deep fried crunchy rolls, soft and creamy inside', 'Aalborg', '2025-03-18', 4, 25.50, '2025-02-26');   

SELECT * FROM meal WHERE id = 10;

-- update a meal
UPDATE meal SET title = 'Brik' WHERE id = 21;

-- delete a meal
DELETE FROM meal WHERE id = 1;

-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phone_number, contact_name, contact_email) VALUES (7, 10, '2025-03-01', '12345678', 'Juan Cruz', 'juan@cruz.com');

-- get a reservation with an id 
SELECT * FROM reservation WHERE id = 5;

-- update a reservation
UPDATE reservation SET number_of_guests = 8 WHERE id = 5;

-- delete a reservation
DELETE FROM reservation WHERE id = 5;

-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date) VALUES ('Best Burak', 'The best Burak I’ve had in years!', 10, 5, '2025-03-16');  

-- get a review with an id
SELECT * FROM review WHERE id = 5;  

-- update a review
UPDATE review SET title = 'Best Brik' WHERE id = 5;

-- delete a review
DELETE FROM review WHERE id = 5;

-- getting all meals cheaper than 15
SELECT * FROM meal WHERE price < 15;

-- all meals with available reservations
SELECT meal.*
FROM meal
LEFT JOIN reservation ON meal.id = reservation.meal_id
WHERE meal.max_reservations > (
    SELECT COUNT(*) FROM reservation WHERE reservation.meal_id = meal.id
);
-- Get meals that partially match a title
SELECT * FROM meal WHERE title LIKE '%BBQ%';

--Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2025-03-01' AND '2025-03-5';

--Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 5;

--Get the meals that have good reviews
SELECT * FROM meal 
JOIN review ON meal.id = review.meal_id
WHERE review.stars > 4;

--Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation WHERE meal_id = 10 ORDER BY created_date;

--Sort all meals by average number of stars in the reviews
SELECT m.id, m.title, AVG(review.stars) AS avg_stars
FROM meal AS m
LEFT JOIN review ON m.id = review.meal_id
GROUP BY m.id
ORDER BY avg_stars DESC;