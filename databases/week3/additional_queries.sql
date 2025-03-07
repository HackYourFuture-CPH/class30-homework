-- Get meals that has a price smaller than a specific price fx 90
SELECT * from meal where price < 70;



-- Get meals that still has available reservations
SELECT meal.* FROM meal
LEFT JOIN reservation ON reservation.meal_id = meal.id
GROUP BY meal.id
HAVING COUNT(reservation.id) < meal.max_reservations;



-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * from meal where title LIKE '%rød grød med fløde%';



-- Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2025-01-01' AND '2025-2-13';



-- Get only specific number of meals fx return only 5 meals
SELECT * from meal limit 2;



-- Get the meals that have good reviews
SELECT meal.title AS meal,meal.description,meal.location,review.title as review,review.description,review.stars from meal
JOIN review on review.meal_id = meal.id
WHERE review.stars >= 4
 


-- Get reservations for a specific meal sorted by created_date
SELECT * FROM meal
join reservation on reservation.meal_id = meal.id
where meal.id = 1
order by reservation.created_date



-- Sort all meals by average number of stars in the reviews
SELECT meal.* ,avg(review.stars) as average_rate from meal
join review on review.meal_id = meal.id
group by meal.id
order by average_rate desc;
