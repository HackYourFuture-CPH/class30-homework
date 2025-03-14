CREATE DATABASE meal_sharing;
USE meal_sharing;


--created the tables
CREATE TABLE meal (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` INT NOT NULL,
    `price` DECIMAL(10, 0) NOT NULL,
    `created_date` DATE NOT NULL
)


CREATE TABLE reservation (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `number_of_guests` INT NOT NULL,
    `meal_id` INT NOT NULL,
    `created_date` DATE NOT NULL,
    `contact_phonenumber` VARCHAR(255) NOT NULL,
    `contact_name` VARCHAR(255) NOT NULL,
    `contact_email` VARCHAR(255) NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES meal(id)
)


CREATE TABLE review (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `meal_id` INT NOT NULL,
    `stars` INT NOT NULL,
    `created_date` DATE NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES meal(id)
) 





--data insertion for meal table
insert into meal (title,description,location,`when`,max_reservations,price,created_date)
VALUES ('Lasagna', 'Enjoy a delicious lasagna', 'Rome', '2025-05-01 10:00:00', 10, 50, '2025-02-15');

insert into meal (title,description,location,`when`,max_reservations,price,created_date)
VALUES ('Chicken biryani', 'Indian biryani', 'Mumbai', '2025-06-13 7:30:00', 8, 70, '2025-02-07');

insert into meal (title,description,location,`when`,max_reservations,price,created_date)
VALUES ('Samosa', 'Homemade Somali samosa', 'Mogadishu', '2025-07-25 22:14:00', 4, 100, '2025-02-22');


--data insertion for reservation table
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 1, '2025-04-02', '12345678', 'Benjamin Jensen', 'Benja@outlook.com');

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)  
VALUES (5,2, '2025-03-13', '11223344', 'Mohamed Ali', 'mohamed_ali@hotmail.com');  

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)  
VALUES (4, 3, '2025-06-24', '87654321', 'Leyla Abdirahman', 'Leyla67@gmail.com'); 


--data insertion for review table
INSERT INTO review (title, description, meal_id, stars, created_date)  
VALUES ('Average', 'The meal was okay, but could be better.', 1, 3, '2025-05-02');

INSERT INTO review (title, description, meal_id, stars, created_date)  
VALUES ('Delicious Experience', 'The flavors were amazing!', 2, 4, '2025-06-18');  

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Great Meal', 'Loved the food!', 3, 4, '2025-07-16');
