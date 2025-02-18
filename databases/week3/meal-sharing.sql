--  creating the data model
CREATE TABLE Meal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    `when` DATETIME NOT NULL,
    max_reservations INT,
    price DECIMAL(10,2),
    created_date DATE NOT NULL
);
CREATE TABLE Reservation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE NOT NULL,
    contact_phonenumber VARCHAR(20),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE CASCADE
);

CREATE TABLE Review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    meal_id INT NOT NULL,
    stars INT CHECK (stars >= 1 AND stars <= 5),
    created_date DATE NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE CASCADE
);
-- inserting data to tables
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date) VALUES
    ('Sushi', 'Fresh sushi platter', 'Copenhagen', '2025-05-10 19:00:00', 15, 150.30, '2025-02-19'),
    ('Burger', 'Classic beef burger with fries', 'Odense', '2025-03-15 18:30:00', 25, 80.00, '2025-02-20'),
    ('Steak', 'Grilled steak with mashed potatoes', 'Aalborg', '2025-06-05 20:00:00', 10, 199.99, '2025-02-21');
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES
    (2, 1, '2025-02-20', '12345678', 'Hamid Khosh', 'hamid@gmail.com'),
    (4, 2, '2025-02-21', '87654321', 'Jane Smith', 'jane@yahoo.com'),
    (3, 3, '2025-02-22', '55512345', 'Michael Brown', 'michael@gmail.com');

INSERT INTO Review (title, description, meal_id, stars, created_date) VALUES
    ('Fresh and Tasty', 'The sushi was very fresh, and the service was great!', 1, 4, '2025-02-25'),
    ('Good but overpriced', 'Burger was tasty, but a bit expensive for the portion.', 2, 3, '2025-02-26'),
    ('Perfect Steak', 'Best steak I have ever had!', 3, 5, '2025-02-27');

-- Queries
-- Meal:
-- 1
SELECT *  FROM Meal

-- 2
INSERT INTO Meal (title, description, location, `when`, price, created_date) VALUES
('Pasta', 'Italian style Fettuccine', 'Aarhus', '2025-04-20 12:00:00', 89.99, '2025-02-18' );
-- 3
SELECT * FROM Meal WHERE id = 3;
-- 4
UPDATE Meal SET max_reservations = 20
WHERE id = 4
-- 5
DELETE FROM Meal WHERE id = 1;
-- Reservation:
-- 1
SELECT *  FROM Reservation
-- 2
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES
(2, 2, '2025-02-20', '81945657', 'Farzaneh Ahmadi', 'Farzaneh@gmail.com');
-- 3
SELECT * FROM Reservation WHERE id = 4;
-- 4
UPDATE Reservation SET contact_phonenumber = 81994567
WHERE id = 4
-- 5
DELETE FROM Reservation WHERE id = 4;
-- Review:
-- 1
SELECT *  FROM Review
-- 2
INSERT INTO Review (title, description, meal_id, stars, created_date) VALUES
('Amazing Experience', 'The food was incredible, and the atmosphere was perfect!', 2, 5, '2025-02-28');

-- 3
SELECT * FROM Review WHERE id = 4;
-- 4
UPDATE Review SET stars = 2
WHERE id = 3
-- 5
DELETE FROM Review WHERE id = 3;

-- Additinal queries
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date) VALUES
('Tacos Al Pastor', 'Traditional Mexican tacos with marinated pork', 'Roskilde', '2025-07-10 13:00:00', 30, 95.00, '2025-02-18'),
('Tacos with Guacamole', 'Soft tacos served with fresh guacamole', 'Aarhus', '2025-08-15 18:00:00', 25, 85.00, '2025-02-18');

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM Meal
WHERE price < 90

-- Get meals that still has available reservations
SELECT Meal.id, Meal.title, Meal.description, Meal.location, Meal.when, Meal.price 
FROM Meal 
LEFT JOIN Reservation  ON Meal.id = Reservation.meal_id
GROUP BY Meal.id LIMIT 100;

-- Get meals that partially match a title.
SELECT * FROM Meal 
WHERE title LIKE 'Tacos%';

-- Get meals that has been created between two dates
SELECT * FROM Meal 
WHERE created_date BETWEEN '2025-02-18' AND '2025-02-20'
ORDER BY created_date;

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM Meal
LIMIT 3;

-- Get the meals that have good reviews
SELECT Meal.id, Meal.title, Meal.description, Meal.location, Meal.when, Review.stars 
FROM Meal
JOIN Review ON Meal.id = Review.meal_id
WHERE Review.stars >= 4;

-- Get reservations for a specific meal sorted by created_date
SELECT Reservation.id, Reservation.contact_name, Meal.title, Meal.location
FROM Reservation
LEFT JOIN Meal on Meal.id = Reservation.meal_id
WHERE Meal.created_date = '2025-02-20'

-- Sort all meals by average number of stars in the reviews
SELECT Meal.id, Meal.title, Meal.description, Meal.location, Meal.`when`, Meal.price, AVG(Review.stars) AS average_stars
FROM Meal
LEFT JOIN Review ON Meal.id = Review.meal_id
GROUP BY Meal.id
ORDER BY average_stars DESC;