-- Part 1: Working with tasks

USE hw

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Do your homework', 'You need to complete your homework, consists of 4 parts', '2025-02-09', '2025-02-11', '2025-02-16', 2, 5 )

UPDATE task
SET title = 'Do your hw and class preparation',
    due_date = '2025-02-14 22:30:00',
    status_id = 3
WHERE id = 36

DELETE FROM task 
WHERE id = 36

SELECT * from task

-- Part 2: School database

USE DB_HW2

CREATE TABLE `class` (
    `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `begins` DATETIME NOT NULL,
    `ends` DATETIME NULL
);

CREATE TABLE `student` (
    `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR (255) NOT NULL,
    `email` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `class_id` int(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`)
);

CREATE INDEX idx_student_name
ON student (name);

ALTER TABLE class
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL

-- Part 3: More queries

USE hw

SELECT * 
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.email LIKE '%@spotify.com';

SELECT *
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
JOIN status ON task.status_id = status_id
WHERE user.name = 'Donald Duck'
AND status.name = 'Not started';

SELECT *
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
JOIN status ON task.status_id = status_id
WHERE user.name = 'Maryrose Meadows'
AND MONTH(created) = 9

SELECT MONTH(created) AS month_number, COUNT(*) AS task_count
FROM task
GROUP BY MONTH(created)
ORDER BY month_number;


-- Part 4: Creating a database

