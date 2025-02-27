CREATE DATABASE mealsharing_db
    DEFAULT CHARACTER SET = 'utf8mb4';

USE mealsharing_db;

CREATE TABLE meal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(255),
    `when` DATE,
    max_reservations INT,
    price DECIMAL(5, 2),
    created_date DATE
);


CREATE TABLE reservation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    number_of_guests INT,
    meal_id INT,
    created_date DATE,
    contact_phone_number VARCHAR(255),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);

CREATE TABLE review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);