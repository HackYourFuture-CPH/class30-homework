--Get all meals
SELECT * FROM meal;


--Add a new meal
insert into meal (title,description,location,`when`,max_reservations,price,created_date)
VALUES ('Tacos', 'Mexican tacos', 'Mexico', '2025-09-01 15:30:00', 3, 25, '2025-02-26');


--Get a meal with any id, fx 1
SELECT * FROM meal WHERE id = 2;


--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal set location = 'Pakistan' WHERE id = 2;


--Delete a meal with any id, fx 1
DELETE from meal WHERE id = 4;

