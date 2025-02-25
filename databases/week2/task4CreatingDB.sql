CREATE DATABASE `factory_db`
    DEFAULT CHARACTER SET = 'utf8mb4';
    
USE factory_db

CREATE TABLE `departments` (
    `id` INT UNSIGNED NOT NULL  PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR (50) NOT NULL
);

INSERT INTO departments (name) 
VALUES ('Compact'), ('Maxi'), ('Lager');

CREATE TABLE `duties` (
    `id` INT UNSIGNED NOT NULL  PRIMARY KEY AUTO_INCREMENT,
    `duty_name` VARCHAR(50) NOT NULL UNIQUE,
    `description` TEXT
);

INSERT INTO duties (duty_name, description) VALUES
('Quality Control', 'Inspect products for defects'),
('Employee Hiring', 'Find more employees'),
('Inventory Management', 'Monitor stock levels');

CREATE TABLE `shifts` (
    `id` INT UNSIGNED NOT NULL  PRIMARY KEY AUTO_INCREMENT,
    `shift_name` ENUM('morning', 'afternoon', 'night') NOT NULL
);

INSERT INTO shifts (shift_name) 
VALUES ('morning'), ('afternoon'), ('night');

CREATE TABLE `staff` (
    `id` INT UNSIGNED NOT NULL  PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `depart_id` INT UNSIGNED NOT NULL,
    `shift_id` INT UNSIGNED NOT NULL,
    FOREIGN KEY(`depart_id`) REFERENCES `departments` (`id`) ON DELETE CASCADE,
    FOREIGN KEY(`shift_id`) REFERENCES `shifts` (`id`) ON DELETE CASCADE
);

INSERT INTO staff (name, depart_id, shift_id) VALUES
('Jens Jakobsen', 1, 2),
('Andrii Pavliuk', 2, 3),
('Lene Vestergaard', 3, 1);

CREATE TABLE staff_duties (
    staff_id INT UNSIGNED,
    duty_id INT UNSIGNED,
    created DATETIME NOT NULL,
    PRIMARY KEY (staff_id, duty_id),
    FOREIGN KEY (staff_id) REFERENCES staff(id) ON DELETE CASCADE,
    FOREIGN KEY (duty_id) REFERENCES duties(id) ON DELETE CASCADE
);

INSERT INTO staff_duties (staff_id, duty_id, created) VALUES
(1, 1, '2025-02-13'),
(2, 2, '2025-02-14'),
(3, 3, '2025-02-15');

SELECT staff.name AS Employee, staff_duties.created, duties.duty_name, duties.description 
FROM staff
JOIN staff_duties ON staff.id = staff_id
JOIN duties ON staff_duties.duty_id = duties.id

SELECT 
    staff.name AS Employee, 
    departments.name AS Department, 
    shifts.shift_name AS Shift 
FROM staff
JOIN departments ON staff.depart_id = departments.id
JOIN shifts ON staff.shift_id = shifts.id;
