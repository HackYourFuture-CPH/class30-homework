SELECT COUNT(*) AS total_tasks FROM task;

SELECT COUNT(*) AS invalid_due_dates 
FROM task 
WHERE due_date IS NULL 

SELECT * 
FROM task 
WHERE status_id = (SELECT id FROM status WHERE name = 'Done');

SELECT * 
FROM task 
WHERE status_id != (SELECT id FROM status WHERE name = 'Done');

SELECT * 
FROM task 
ORDER BY created DESC;

SELECT * 
FROM task 
ORDER BY created DESC 
LIMIT 1;

SELECT title, due_date
FROM task
WHERE title LIKE '%database%' 
OR description LIKE '%database%';

SELECT task.title, status.name AS status
FROM task
JOIN status ON task.status_id = status.id;

SELECT status.name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON status.id = task.status_id
GROUP BY status.name;

SELECT status.name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON status.id = task.status_id
GROUP BY status.name
ORDER BY task_count DESC;


