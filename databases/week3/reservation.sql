--Get all reservations
SELECT * FROM reservation;


--Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)  
VALUES (6, 1, '2025-03-15', '34567890', 'Qays Qayser', 'Qay23@gmail.com');


--Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id = 3;


--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation set contact_phonenumber = 34343434 WHERE id = 3;


--Delete a reservation with any id, fx 1
DELETE from reservation WHERE id = 4;





