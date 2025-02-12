USE hyf_lesson2;

insert into task (title, description, created, updated, due_date, status_id) values ('Wash dishes', 'This is in priority.', '2025-02-11 06:54:16', '2025-02-11 06:54:16', '2025-02-12', 1);

UPDATE task
SET title = 'Go Playground'
WHERE id = 5;

UPDATE task
SET due_date = '2025-02-25'
WHERE id = 6;

UPDATE task
SET status_id = 2
WHERE id = 7;

UPDATE status
SET name = 'Completed'
WHERE id = 8;

DELETE FROM task
WHERE id = 9;

SELECT* FROM task;

SELECT * 
FROM task 
WHERE email LIKE '%@spotify.com';

SELECT * 
FROM task 
WHERE assigned_to = 'Donald Duck' 
AND status = 'Not started';

SELECT * 
FROM task
WHERE assigned_to = 'Maryrose Meadows' 
AND MONTH(created) = 9;

SELECT MONTH(created) AS month, COUNT(*) AS task_count
FROM tasks
GROUP BY MONTH(created)
ORDER BY month;