-- Find out how many tasks are in the task table
SELECT count(id) FROM task;

-- Find out how many tasks in the task table do not have a valid due date
SELECT count(id) FROM task
WHERE due_date is NULL;

-- Find all the tasks that are marked as done
SELECT * FROM task 
WHERE status_id IN (SELECT id FROM status WHERE name LIKE "%done%");

-- Find all the tasks that are not marked as done
SELECT * FROM task
WHERE status_id NOT IN (SELECT id FROM status WHERE name LIKE "%done%");

-- Get all the tasks, sorted with the most recently created first
SELECT * FROM task
ORDER BY created DESC;

-- Get the single most recently created task
SELECT * FROM task
ORDER BY created DESC
LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date FROM task
WHERE title LIKE "%database%"
OR description LIKE "%database%";

-- Get the title and status (as text) of all tasks
SELECT task.title AS task_title, status.name AS task_status
FROM task
LEFT JOIN status on task.status_id = status.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS task_status, count(task.title) AS task_count 
FROM task
LEFT JOIN status on task.status_id = status.id
GROUP BY task_status;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS task_status, count(task.title) AS task_count 
FROM task
LEFT JOIN status on task.status_id = status.id
GROUP BY task_status
ORDER BY task_count DESC;
