CREATE DATABASE mealshare_db;
USE mealshare_db;

SET NAMES utf8mb4;

CREATE TABLE `Reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int(10) unsigned DEFAULT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` DATETIME NOT NULL,
  `contact_phonenumber` varchar(255) NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `Meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(255) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` int(10) unsigned DEFAULT NULL,
  `price` decimal(6,2) NOT NULL,
  `created_date` DATETIME NOT NULL
);


CREATE TABLE `Review` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` varchar(150) NOT NULL,
 `description` text NOT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `stars` int unsigned NOT NULL,
 `created_date` DATETIME NOT NULL,
 CONSTRAINT `fk_meal_rev` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

insert into Meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES
('Zeytinyağli Sarma', 'Rice stuffed wine leaves with olive oil, lemon juice and spices', 'Istanbul', '2025-02-27 15:30:00', 5, 59.50, '2024-01-01 10:38:09'),
('Dalyan Köfte', 'In the shape of a substantial meatloaf with boiled eggs in it, garnished with peas and carrots in tomato sauce', 'Ankara', '2025-06-25 12:30:00', 2, 189.00, '2024-01-01 10:40:00'),
('Kuru-Pilav', 'Turkish white haricot bean stew with meat, served with pilav made of rice and butter', 'Izmir', '2025-05-15 18:30:00', 4, 120.00, '2024-01-01 11:15:00');


insert into Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
VALUES
(2, 2, '2024-11-10 20:30:25', '+36 3877848600', 'Borisova Minevka', 'bbmin@contact.com'),
(5, 3, '2024-12-30 22:58:00', '+45 44556677', 'Jens Jensen', 'jesse@contact.com'),
(1, 2, '2025-02-10 06:00:08', '+33 5864867900', 'Franz Napoleon', 'napofra@contact.com'),
(3, 1, '2024-01-02 11:20:40', '+44 6677876557', 'Jack Mccormik', 'mcjackie@contact.com');

insert into Review (title, description, meal_id, stars, created_date) 
VALUES
('insanely delicious!', 'Our host was super welcoming and talented, <sarma> was amazing! Savory, sour, sweet and the taste was soo unique  mamma mia<3',  1, 5, '2025-02-28 20:30:25'),
("A true delight!", "I had never tried Zeytinyağli Sarma before, but wow, what an explosion of flavors! Highly recommended.", 1, 4, "2025-02-15 18:34:21"),
("Nice, but could be better", "The Zeytinyağli Sarma was decent, but I felt like it needed a bit more seasoning. It lacked some punch.", 1, 3, "2025-02-09 23:53:15"),
("Not my cup of tea", "Maybe I had too high expectations, but Sarma didn't impress me. It was a bit bland for my liking.", 1, 1, "2025-01-31 21:45:40"),
("Absolutely heavenly!", "Zeytinyağli Sarma was just perfect! Every bite was bursting with flavor, and the texture was spot on.", 1, 5, "2025-02-05 13:56:43"),
("Super authentic!", "This tasted just like home-cooked food. Dalyan Köfte was prepared with so much love and care!", 2, 5, "2025-02-11 14:12:08"),
("Okayish", "Dalyan Köfte was okay, but I found it a bit too oily. Not sure I-d order it again.", 2, 2, "2025-02-03 11:26:14"),
("Good but not great", "Dalyan Köfte was tasty, but I found it a little too salty. Still worth trying!", 2, 3, "2025-02-18 17:29:55"),
("Not bad, but expected more", "Dalyan Köfte was decent, but I was hoping for stronger flavors. It was a bit bland.", 2, 4, "2025-02-14 19:51:09"),
("Loved it!", "This was my first time trying Dalyan Köfte, and it won't be my last. Amazing balance of spices!", 2, 5, "2025-02-07 20:45:32"),
("Num num", "I had never tried Kuru-Pilav before, but wow, what an explosion of flavors! Highly recommended.", 3, 5, "2025-02-12 09:34:45"),
("Not as promoted", "I am dissapointed a little, unfort Kuru-Pilav didn't impress me. A bit too dry for me.", 3, 2, "2025-02-01 07:52:11"),
("Super authentic!", "This tasted just like real home-cooked food. Kuru-Pilav was a surprisingly delicious blend of two different taste", 3, 5, "2025-02-17 16:30:50"),
("Could be better", "The Kuru-Pilav was decent, but I felt like it was too spicy. Burned till my ears.", 3, 3, "2025-02-06 22:15:29");