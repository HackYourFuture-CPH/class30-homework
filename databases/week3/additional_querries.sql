select * from Meals where price < 90;

select Meals.* from Meals
LEFT JOIN Reservations ON Meals.id = Reservations.meal_id
GROUP BY Meals.id
HAVING COUNT(Reservations.id) < Meals.max_reservations;

select * from Meals where title like '%Rød grød med%';

select * from Meals where created_date BETWEEN '2023-01-01' AND '2023-12-31';

select * from Meals limit 5;

select Meals.* from Meals
INNER JOIN Reviews ON Meals.id = Reviews.meal_id
where Reviews.stars >= 4
GROUP BY Meals.id;

select * from Reservations where meal_id = 1 ORDER BY created_date;

select Meals.*, AVG(Reviews.stars) AS average_rating
from Meals
LEFT JOIN Reviews ON Meals.id = Reviews.meal_id
GROUP BY Meals.id
ORDER BY average_rating DESC;