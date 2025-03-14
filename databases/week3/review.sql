--Get all reviews
SELECT * FROM review;


--Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Delicious biryani', 'The flavors were extraordinary!', 2, 5,'2025-06-19' );


--Get a review with any id, fx 1
SELECT * FROM review WHERE id = 2;


--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review set title = 'Excellent' WHERE id = 3;


--Delete a review with any id, fx 1
DELETE from review WHERE id = 4;





