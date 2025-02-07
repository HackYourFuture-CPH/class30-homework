
-- 1. Find out how many tasks are in the task table
SELECT count(id) AS total_taskS from task;

-- 2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(id) FROM task
WHERE due_date IS NULL;

-- 3-Find all the tasks that are marked as done
SELECT title FROM task 
WHERE status_id = (SELECT id FROM status
WHERE name = 'Done');

-- 4.Find all the tasks that are not marked as done
SELECT title FROM task
WHERE status_id != (SELECT id FROM status
WHERE name = 'Done');

-- 5. Get all the tasks, sorted with the most recently created first
SELECT * FROM task
ORDER BY created_at DESC;

-- 6. Get the single most recently created task
SELECT * FROM task
ORDER BY created_at DESC
LIMIT 1;


-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date FROM task
WHERE title LIKE '%database%' OR description LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks
SELECT task.title AS Task, status.name AS Progress
FROM task 
INNER JOIN status ON task.status_id = status.id;

-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.name as Status_name, COUNT(task.id) AS Status_name_count
From status
INNER JOIN task ON status.id = task.status_id
GROUP BY status.name;



-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name as Status_name, COUNT(task.id) AS Status_name_count
FROM status
INNER JOIN task ON status.id = task.status_id
GROUP BY status.name
ORDER BY Status_name_count DESC;