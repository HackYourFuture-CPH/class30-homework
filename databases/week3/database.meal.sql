CREATE DATABASE MealReservationDB;
USE MealReservationDB;

CREATE TABLE Meal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    `when` DATETIME NOT NULL,
    max_reservations INT,
    price DECIMAL(10,2),
    created_date DATE NOT NULL
);

CREATE TABLE Reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT NOT NULL,
    meal_id INT,
    created_date DATE NOT NULL,
    contact_phonenumber VARCHAR(20),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE CASCADE
);

CREATE TABLE Review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    meal_id INT,
    stars INT CHECK (stars BETWEEN 1 AND 5),
    created_date DATE NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE CASCADE
);

SELECT * FROM Meal;

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Pasta Carbonara', 'Italian pasta with creamy sauce', 'Rome, Italy', '2025-03-01 18:30:00', 20, 85.50, '2025-02-18');

SELECT * FROM Meal WHERE id = 1;

UPDATE Meal 
SET title = 'Spaghetti Bolognese', price = 95.00
WHERE id = 1;

DELETE FROM Meal WHERE id = 1;

SELECT * FROM Reservation;

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 1, '2025-02-19', '50108318', 'Parisa Mousavi', 'parisamsv1993@gmail.com');

SELECT * FROM Reservation WHERE id = 1;

UPDATE Reservation 
SET number_of_guests = 6, contact_name = 'Milad Zamani'
WHERE id = 1;

DELETE FROM Reservation WHERE id = 1;

SELECT * FROM Review;

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Delicious meal', 'The pasta was amazing!', 1, 5, '2025-02-19');

SELECT * FROM Review WHERE id = 1;

UPDATE Review 
SET title = 'Amazing experience', stars = 4
WHERE id = 1;

DELETE FROM Review WHERE id = 1;

SELECT * FROM Meal WHERE price < 90;

SELECT * FROM Meal 
WHERE max_reservations > (
    SELECT COALESCE(SUM(number_of_guests), 0) FROM Reservation WHERE Meal.id = Reservation.meal_id
);

SELECT * FROM Meal WHERE title LIKE '%Rød grød med%';

SELECT * FROM Meal WHERE created_date BETWEEN '2025-01-01' AND '2025-02-18';

SELECT * FROM Meal LIMIT 5;

SELECT DISTINCT Meal.* 
FROM Meal 
JOIN Review ON Meal.id = Review.meal_id 
WHERE Review.stars >= 4;

SELECT * FROM Reservation WHERE meal_id = 1 ORDER BY created_date;

SELECT Meal.*, COALESCE(AVG(Review.stars), 0) AS average_rating
FROM Meal
LEFT JOIN Review ON Meal.id = Review.meal_id
GROUP BY Meal.id
ORDER BY average_rating DESC;
