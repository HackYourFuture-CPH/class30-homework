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
(2, 2, '2024-11-10 20:30:25', '+36 3877848600', 'Borisova Minevka', 'bbmin@contact.com'),
(3, 1, '2024-01-02 11:20:40', '+44 6677876557', 'Jack Mccormik', 'mcjackie@contact.com');