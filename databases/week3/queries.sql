-- 1. Find out how many tasks are in the task table
SELECT COUNT(*) AS total_tasks FROM task;

-- 2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) AS tasks_without_due_date FROM task WHERE due_date IS NULL;

-- 3. Find all the tasks that are marked as done
SELECT * FROM task WHERE status_id = 3;

-- 4. Find all the tasks that are not marked as done
SELECT * FROM task WHERE status_id != 3;

-- 5. Get all the tasks, sorted with the most recently created first
SELECT * FROM task ORDER BY created DESC;

-- 6. Get the single most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 1;

-- 7. Get the title and due date of all tasks where the title or description contains database

SELECT title, due_date FROM task 
WHERE title LIKE '%database%' OR description LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks
SELECT task.title, status.name AS status 
FROM task 
JOIN status ON task.status_id = status.id;

-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS status, COUNT(task.id) AS task_count
FROM task 
JOIN status ON task.status_id = status.id
GROUP BY status.name;

-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS status, COUNT(task.id) AS task_count
FROM task 
JOIN status ON task.status_id = status.id
GROUP BY status.name
ORDER BY task_count DESC;











--  1 Add a new task
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
VALUES ('Learn SQL', 'Practice queries in MySQL', NOW(), NOW(), '2025-03-01', 1, 1);

-- 2️ Change the title of a task 
UPDATE task SET title = 'Master SQL' WHERE title = 'Learn SQL';

-- 3️ Update the due date of a task
UPDATE task SET due_date = '2025-04-01' WHERE title = 'Master SQL';

-- 4️ Change the status of a task 
UPDATE task SET status_id = 2 WHERE title = 'Master SQL';

-- 5️ Mark a task as complete
UPDATE task SET status_id = 3 WHERE title = 'Master SQL';

-- 6️ Delete a task 
DELETE FROM task WHERE title = 'Master SQL';







CREATE DATABASE school;
USE school;


CREATE TABLE class (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NULL
);


CREATE TABLE student (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    class_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (class_id) REFERENCES class(id)
);


CREATE INDEX name_index ON student(name);


ALTER TABLE class 
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';











-- 1️ Count the total number of tasks in the `task` table
SELECT COUNT(*) AS total_tasks FROM task;

-- 2️ Count how many tasks do not have a valid `due_date`
SELECT COUNT(*) AS tasks_without_due_date FROM task WHERE due_date IS NULL;

-- 3️ Retrieve all tasks that are marked as "Done"
SELECT * FROM task WHERE status_id = 3;

-- 4️ Retrieve all tasks that are NOT marked as "Done"
SELECT * FROM task WHERE status_id != 3;

-- 5️ Get all tasks, sorted with the most recently created first
SELECT * FROM task ORDER BY created DESC;

-- 6️ Get the single most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 1;

-- 7️ Get the title and due date of all tasks where the `title` or `description` contains "database"
SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';

-- 8️ Get the title and status (as text) of all tasks
SELECT task.title, status.name AS status_text
FROM task
JOIN status ON task.status_id = status.id;

-- 9️ Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS status_text, COUNT(task.id) AS total_tasks
FROM task
JOIN status ON task.status_id = status.id
GROUP BY status.name;

--  Get the names of all statuses, sorted by the status with the most tasks first
SELECT status.name AS status_text, COUNT(task.id) AS total_tasks
FROM task
JOIN status ON task.status_id = status.id
GROUP BY status.name
ORDER BY total_tasks DESC;
