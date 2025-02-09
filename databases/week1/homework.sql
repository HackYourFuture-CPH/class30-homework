select * from status;
select * from user;
select * from task;

SELECT COUNT(*) FROM task;

SELECT COUNT(*) FROM task WHERE due_date IS NULL;

SELECT task.* FROM task
JOIN status ON task.status_id = status.id
WHERE status.name = 'Done';

SELECT task.* FROM task
JOIN status ON task.status_id = status.id
WHERE status.name != 'Done';

SELECT * FROM task ORDER BY created DESC;

SELECT * FROM task ORDER BY created DESC LIMIT 1;

SELECT title, due_date FROM task 
WHERE title LIKE '%database%' OR description LIKE '%database%';

SELECT task.title, status.name AS status_text 
FROM task
JOIN status ON task.status_id = status.id;

SELECT status.name, COUNT(task.id) AS task_count 
FROM task
JOIN status ON task.status_id = status.id
GROUP BY status.name;

SELECT status.name, COUNT(task.id) AS task_count 
FROM task
JOIN status ON task.status_id = status.id
GROUP BY status.name
ORDER BY task_count DESC;
