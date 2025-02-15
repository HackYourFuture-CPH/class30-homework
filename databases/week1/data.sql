-- Active: 1739137835692@@0.0.0.0@3306@my_db
-- 1. Find out how many tasks are in the task table
SELECT count(*) 
from task;


-- 2. Find out how many tasks in the task table do not have a valid due date
SELECT count (*) 
from task 
WHERE due_date is NULL;


-- 3. Find all the tasks that are marked as done
SELECT * 
FROM task 
WHERE status_id = 3; -- 3 is equal to done 


-- 4. Find all the tasks that are not marked as done
SELECT * 
FROM task 
WHERE status_id <> 3; -- numbers that are not 3 are either not started or in progress


-- 5. Get all the tasks, sorted with the most recently created first
SELECT * 
from task 
ORDER BY CREATED DESC;


-- 6. Get the single most recently created task
SELECT * 
from task 
ORDER BY CREATED DESC limit 1;


-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT title,due_date 
from task 
WHERE title like '%database%' OR description like '%database%';


-- 8. Get the title and status (as text) of all tasks
SELECT task.title AS tt, status.name AS sn 
FROM task  
JOIN status ON task.status_id = status.id;


-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS sn, count(task.title) AS tc 
FROM task 
JOIN status 
WHERE task.status_id = status.id 
GROUP BY status.id;


-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS sn, count(task.title) AS tc 
FROM task 
JOIN status 
WHERE task.status_id = status.id 
GROUP BY status.id 
ORDER BY tc DESC;