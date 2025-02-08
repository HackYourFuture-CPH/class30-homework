-- #1
SELECT COUNT(*) AS task_count FROM task;

-- #2
SELECT COUNT(*) AS tasks_without_due_date 
FROM task 
WHERE due_date IS NULL;

-- #3
SELECT * FROM task 
WHERE status_id = 3;

-- #4
SELECT * FROM task 
WHERE status_id != 3;

-- #5
SELECT * FROM task 
ORDER BY created DESC;

-- #6
SELECT * FROM task 
ORDER BY created DESC 
LIMIT 1;

-- #7
SELECT title, due_date 
FROM task 
WHERE title LIKE '%database%' 
   OR description LIKE '%database%';

-- #8
SELECT task.title, status.name AS status_text
FROM task
JOIN status ON task.status_id = status.id;

-- #9
SELECT status.name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON task.status_id = status.id
GROUP BY status.name;


-- #10
SELECT status.name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON task.status_id = status.id
GROUP BY status.name
ORDER BY task_count DESC;
