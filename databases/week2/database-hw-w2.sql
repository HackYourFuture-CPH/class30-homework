USE db_hw_w1;

-- Part 1: Working with tasks
-- Add a task
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES
    ('Finish Homework', 'database homework of week 2', '2025-2-8', '2025-2-12', '2025-2-13', 2, 6);

-- Change the title of a task
UPDATE task
SET title = 'Finish Homework and make a pull request'
WHERE title = 'Finish Homework';

-- Change a task due date
UPDATE task
SET due_date = '2025-2-14'
WHERE id = 36;

-- Change a task status
UPDATE task
SET status_id = 3
WHERE id = 10;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 36;

-- Delete a task
DELETE FROM task 
WHERE id = 36;

-- Part 2: School database
-- Create a new database and tables
CREATE DATABASE school_database;

USE school_database;

CREATE TABLE `class` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `begin_date` DATETIME NOT NULL,
    `end_date` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `student` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `class_id` int(10) unsigned NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
);

-- Create an index on the name column of the student table.
CREATE INDEX index_name ON student(name);

-- Add a new column to the class table named status
ALTER TABLE class
ADD `status` ENUM('not-started', 'ongoing', 'finished') NOT NULL;


-- Part 3: More queries
USE db_hw_w2;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title AS task_title, user.name AS user_name, user.email AS user_email
FROM user_task
JOIN task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title AS task_title, user.name AS user_name, status.name AS task_status
FROM user_task
JOIN task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.title AS task_title, user.name AS username, task.created AS create_date
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows' AND MONTH(task.created) = 9;

-- Find how many tasks where created in each month
SELECT MONTH(task.created) AS create_month , COUNT(task.title) AS task_count
FROM task
GROUP BY create_month
ORDER BY create_month ASC;


-- Creating a database
USE hr_database;

CREATE TABLE `department` (
    `department_id` int(10) unsigned NOT NULL,
    `department_name` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`department_id`)
);

CREATE TABLE `position` (
    `position_id` int(10) unsigned NOT NULL,
    `position_name` VARCHAR(255) NOT NULL,
    `position_level` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`position_id`)
);

CREATE TABLE `employee` (
    `employee_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `employee_name` VARCHAR(255) NOT NULL,
    `department_id` int(10) unsigned NOT NULL,
    PRIMARY KEY (`employee_id`),
    CONSTRAINT `fk_department` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`) ON DELETE CASCADE
);

CREATE TABLE `employment` (
    `employment_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `employee_id` int(10) unsigned NOT NULL,
    `employment_name` VARCHAR(255) NOT NULL,
    `employment_type` ENUM('full-time', 'part-time', 'intership'),
    `start_date` DATETIME NOT NULL,
    `end_date` DATETIME DEFAULT NULL,
    PRIMARY KEY (`employment_id`),
    CONSTRAINT `fk_employment` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE
);

CREATE TABLE `employee_position` (
    `employee_id` int(10) unsigned NOT NULL,
    `position_id` int(10) unsigned NOT NULL,
    `start_date` DATETIME NOT NULL,
    `end_date` DATETIME,
    PRIMARY KEY (`employee_id`),
    CONSTRAINT `fk_employee_position` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE,
    CONSTRAINT `fk_position` FOREIGN KEY (`position_id`) REFERENCES `position` (`position_id`) ON DELETE CASCADE
);