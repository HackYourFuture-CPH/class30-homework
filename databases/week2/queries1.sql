USE homework;

-- Insert Users
INSERT INTO `users` (id, name, email, phone) VALUES
(1, 'Aarika Ellingworth', 'aellingworth0@harvard.edu', '483-396-8795'),
(2, 'Pren Goldsworthy', 'pgoldsworthy1@spotify.com', '635-572-8467'),
(3, 'Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683'),
(4, 'Rodie Duncan', 'rduncan3@quantcast.com', '646-743-6191'),
(5, 'Aubry Polak', 'apolak4@indiatimes.com', '302-678-7931'),
(6, 'Maryrose Meadows', 'mmeadows5@comcast.net', '251-524-6594'),
(7, 'Pavel Brushneen', 'pbrushneen6@techcrunch.com', '316-170-3640'),
(8, 'Hedy Gerault', 'hgerault7@nymag.com', '176-177-5579'),
(9, '王秀英', 'wang.xiuying@weebly.com', '891-952-6749'),
(10, 'إلياس', 'elias@github.com', '202-517-6983'),
(11, 'Donald Duck', 'donald@duck.com', NULL),
(12, 'Adam Smith', 'smith@bla.com', NULL);

-- Insert Statuses
INSERT INTO `statuses` (id, name) VALUES
(1, 'Not started'),
(2, 'In progress'),
(3, 'Done');

-- Insert Tasks
INSERT INTO `tasks` (id, title, description, created, updated, due_date, status_id, user_id) VALUES
(1, 'Wash clothes', 'Title says it all.', '2017-10-25 06:54:16', '2017-10-15 13:05:09', NULL, 2, 1),
(2, 'Become a billionaire', 'Invent a time machine and buy bitcoin in 2010.', '2017-09-26 03:06:46', '2017-10-08 06:14:31', '2017-12-22 20:58:03', 3, 6),
(3, 'Plan meeting with London office', 'We will probably use Skype', '2017-10-04 18:07:37', '2017-10-14 16:01:31', '2017-12-05 19:42:15', 2, 8),
(4, 'Order groceries online', 'The fridge is almost empty, we need eggs and milk', '2017-09-20 19:34:43', '2017-10-15 23:35:45', '2017-12-24 16:00:46', 1, 1),
(5, 'Empty the mailbox', NULL, '2017-09-27 15:17:08', '2017-10-08 17:31:16', NULL, 2, 9),
(6, 'Fix the flat tire on the bike', 'Tools are in the garage', '2017-09-13 23:16:30', '2017-10-06 04:03:52', '2017-12-07 11:51:11', 2, 6),
(7, 'Wash the car', NULL, '2017-10-06 19:39:16', '2017-10-03 04:49:05', '2017-12-04 17:43:16', 2, 10),
(8, 'Walk the dog', NULL, '2017-09-03 02:47:17', '2017-10-12 18:40:08', NULL, 3, 2),
(9, 'Write a book', 'Maybe something about dragons?', '2017-10-11 06:14:01', '2017-10-17 12:19:08', '2017-12-21 20:18:05', 2, 6),
(10, 'Do HackYourFuture homework', NULL, '2017-10-04 13:55:16', '2017-10-10 00:18:05', '2017-12-19 17:01:10', 1, 3),
(11, 'Iron shirts', NULL, '2017-09-23 03:59:58', '2017-10-19 08:30:48', '2017-12-08 11:00:35', 3, 9),
(12, 'Water the potted plants', 'Maybe they need fertilizer as well', '2017-09-29 23:38:42', '2017-10-08 04:24:53', NULL, 2, 1),
(13, 'Buy wine for the birthday party', 'Both red and white wine', '2017-10-10 14:57:22', '2017-10-14 14:03:30', '2017-12-10 23:43:56', 2, 5),
(14, 'Buy gift for Paul', 'He could use a shirt or a tie and some socks', '2017-09-09 05:22:08', '2017-10-17 15:58:05', '2017-12-04 20:45:18', 3, 3),
(15, 'Change lightbulb in hallway', 'Should be an LED bulb', '2017-10-01 19:07:35', '2017-10-03 10:02:27', '2017-12-08 17:09:03', 3, 10);

SHOW TABLES;

-- Find out how many tasks are in the task table
SELECT COUNT(*)
FROM tasks;

-- Find out how many tasks in the task table do not have a valid due date
SELECT * 
FROM tasks 
WHERE due_date= "NULL";


-- Find all the tasks that are marked as done
SELECT title 
FROM tasks 
WHERE status_id = 3;

-- Find all the tasks that are not marked as done
SELECT * 
FROM tasks 
WHERE status_id = 3;

-- Get all the tasks, sorted with the most recently created first
SELECT title, due_date
FROM tasks 
ORDER BY DESC


-- Get the single most recently created task
SELECT title
FROM task 
WHERE due_date =  MAX(due_date)
-- or i also thought , but idk if its optimal 
SELECT * FROM tasks
ORDER BY due_date DESC
LIMIT 1;


-- Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date 
WHERE title LIKE '%database%'
OR description LIKE '%database%';

-- Get the title and status (as text) of all tasks
SELECT title, statuses.name AS stat_text
FROM tasks
JOIN statuses ON tasks.status_id = statuses.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT statuses.name AS stat_name, COUNT(tasks.id) AS task_count
FROM statuses
JOIN tasks ON statuses.id = tasks.status_id
GROUP BY stat_name;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT statuses.name AS stat_name, COUNT(tasks.id) AS task_count
FROM statuses
JOIN tasks ON statuses.id = tasks.status_id
GROUP BY stat_name
ORDER BY task_count DESC;


SELECT tasks.*
FROM tasks
JOIN users ON tasks.user_id = users.id
WHERE users.email LIKE '%@spotify.com';


SELECT tasks.*
FROM tasks
JOIN users ON tasks.user_id = users.id
JOIN statuses ON tasks.status_id = statuses.id
WHERE users.name = 'Donald Duck' AND statuses.name = 'Not started';


SELECT MONTH(created) AS month_number, COUNT(*) AS task_count
FROM tasks
GROUP BY MONTH(created)
ORDER BY month_number;

-- week 2 

--  Add a new task
INSERT INTO tasks (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Attend HYF stand up meeting ', 'Share what I learn this week', NOW(), NOW(), '2025-03-01', 1, 3);

-- I choose the task id 1 for this part, 
-- Change the title of a task
UPDATE tasks
SET title = 'Do house appliances shopping '
WHERE id = 1;

-- Change a task due date
UPDATE tasks
SET due_date = '2025-04-01'
WHERE id = 1;

--  Change a task status
UPDATE tasks
SET status_id = 2
WHERE id = 1;

--  Mark a task as complete
UPDATE tasks
SET status_id = (SELECT id FROM statuses WHERE name = 'Completed')
WHERE id = 1;

-- 6. Delete a task
DELETE FROM tasks
WHERE id = 1;



-- Get all tasks assigned to users whose email ends in @spotify.com
SELECT tasks.* FROM tasks
JOIN users ON tasks.user_id = users.id
WHERE users.email LIKE '%@spotify.com';

-- 2. Get all tasks for 'Donald Duck' with status 'Not started'
SELECT tasks.* FROM tasks
JOIN users ON tasks.user_id = users.id
JOIN statuses ON tasks.status_id = statuses.id
WHERE users.name = 'Donald Duck' AND statuses.name = 'Not started';

-- Get all tasks for 'Maryrose Meadows' created in September


SELECT t.* FROM tasks t
INNER JOIN users u ON t.user_id = u.id AND u.name = 'Maryrose Meadows'
WHERE MONTH(t.created) = 9;

-- Find how many tasks were created in each month
SELECT MONTH(created) AS month_number, COUNT(*) AS task_count
FROM tasks
GROUP BY MONTH(created)
ORDER BY month_number;
