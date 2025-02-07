-- Find out how many tasks are in the task table
SELECT COUNT(*) AS total_tasks FROM task

-- Find out how many tasks in the task table do not have a valid due date
SELECT count(*) AS totaltask_novalidduedate FROM task WHERE due_date IS NULL

-- Find all the tasks that are marked as done
SELECT * FROM task WHERE status_id = (SELECT id FROM status WHERE name = 'done')

-- Find all the tasks that are not marked as done
SELECT * FROM task WHERE status_id NOT IN (SELECT id FROM status WHERE name LIKE "%DONE%")

-- Get all the tasks, sorted with the most recently created first
SELECT * FROM task ORDER BY created DESC

-- Get the single most recently created task
SELECT * FROM task 
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
SELECT status.name AS Status_Name, count(task.title) AS Task_Count 
FROM task 
INNER JOIN status 
WHERE task.status_id = status.id 
GROUP BY status.id

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS Status_Name, count(task.title) AS Task_Count 
FROM task 
INNER JOIN status 
WHERE task.status_id = status.id 
GROUP BY status.id 
ORDER BY Task_Count DESC