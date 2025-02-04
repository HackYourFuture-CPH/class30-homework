-- Find out how many tasks are in the task table
SELECT COUNT(*) as total_tasks FROM task

-- Find out how many tasks in the task table do not have a valid due date
SELECT * from task WHERE due_date is NULL

-- Find all the tasks that are marked as done
SELECT * FROM task WHERE status_id IN (SELECT id from status where name LIKE "%DONE%")

-- Find all the tasks that are not marked as done
SELECT * FROM task WHERE status_id not IN (SELECT id from status where name LIKE "%DONE%")

-- Get all the tasks, sorted with the most recently created first
SELECT * from task ORDER BY created DESC

-- Get the single most recently created task
SELECT * from task 
ORDER BY created DESC
LIMIT 1

-- Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date  FROM task
WHERE title LIKE "%database%" or 
description LIKE "%database%"

-- Get the title and status (as text) of all tasks
SELECT task.title AS TaskTitle, status.name AS StatusName
FROM task
INNER JOIN status ON task.status_id = status.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT status.name as Status_Name, count(task.title) as Task_Count 
FROM task 
INNER JOIN status 
WHERE task.status_id = status.id 
GROUP BY status.id

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name as Status_Name, count(task.title) as Task_Count 
FROM task 
INNER JOIN status 
WHERE task.status_id = status.id 
GROUP BY status.id 
ORDER BY Task_Count DESC