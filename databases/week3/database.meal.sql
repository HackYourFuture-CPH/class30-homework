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
VALUES 
('Pasta Carbonara', 'Italian pasta with creamy sauce', 'Rome, Italy', '2025-03-01 18:30:00', 20, 85.50, '2025-02-18');
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Kebab Koobideh', 'Grilled minced lamb kebabs served with saffron rice', 'Tehran, Iran', '2025-03-05 19:00:00', 20, 75.00, '2025-02-18'),

('Ghormeh Sabzi', 'Persian herb stew with lamb and kidney beans', 'Shiraz, Iran', '2025-03-10 20:00:00', 15, 85.00, '2025-02-18'),

('Fesenjan', 'Rich pomegranate and walnut stew with chicken', 'Isfahan, Iran', '2025-03-15 19:30:00', 12, 95.00, '2025-02-18'),

('Zereshk Polo ba Morgh', 'Saffron rice with barberries and slow-cooked chicken', 'Mashhad, Iran', '2025-03-20 18:00:00', 25, 70.00, '2025-02-18'),

('Baghali Polo', 'Dill and fava bean rice served with tender lamb shank', 'Tabriz, Iran', '2025-03-25 19:00:00', 18, 100.00, '2025-02-18');

SELECT * FROM Meal WHERE id = 1;

UPDATE Meal 
SET title = 'Spaghetti Bolognese', price = 95.00
WHERE id = 1;

DELETE FROM Meal WHERE id = 1;

ALTER TABLE Meal AUTO_INCREMENT = 1;
INSERT INTO Meal (id, title, description, location, `when`, max_reservations, price, created_date)
VALUES 
(1, 'Pasta Carbonara', 'Italian pasta with creamy sauce', 'Rome, Italy', '2025-03-01 18:30:00', 20, 85.50, '2025-02-18');

SELECT * FROM Reservation;

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 1, '2025-02-19', '50108318', 'Parisa Mousavi', 'parisamsv1993@gmail.com');

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES 
(3, 2, '2025-02-19', '9123456789', 'Ali Rezai', 'ali.rezai85@gmail.com'),

(2, 3, '2025-02-19', '9356781234', 'Sara Mohammadi', 'sara.mohammadi92@yahoo.com'),

(5, 4, '2025-02-19', '9012345678', 'Hossein Gholami', 'hossein.gholami76@hotmail.com'),

(4, 5, '2025-02-19', '9387654321', 'Leila Khosravi', 'leila.khosravi88@gmail.com'),

(6, 1, '2025-02-19', '9154326789', 'Reza Farhadi', 'reza.farhadi91@gmail.com');


SELECT * FROM Reservation WHERE id = 1;

UPDATE Reservation 
SET number_of_guests = 6, contact_name = 'Milad Zamani'
WHERE id = 1;

DELETE FROM Reservation WHERE id = 1;

SELECT * FROM Review;

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Delicious meal', 'The pasta was amazing!', 1, 5, '2025-02-19');
INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES 
('Amazing Kebab', 'The Koobideh was juicy and full of flavor!', 2, 5, '2025-02-19'),

('Authentic Taste', 'Ghormeh Sabzi tasted just like home!', 3, 4, '2025-02-19'),

('Rich and Delicious', 'Fesenjan had the perfect balance of sweet and sour.', 4, 5, '2025-02-19'),

('Perfectly Cooked', 'The chicken in Zereshk Polo was so tender!', 5, 4, '2025-02-19'),

('Aromatic and Flavorful', 'Baghali Polo with lamb shank was amazing.', 6, 5, '2025-02-19');


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
