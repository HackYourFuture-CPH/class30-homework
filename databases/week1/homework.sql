SELECT * FROM HYF.task;

-- 1. Find out how many tasks are in the task table
SELECT count(*) AS total_taskS from hyf.task;

-- 2. Find out how many tasks in the task table do not have a valid due date
select * FROM hyf.task where due_date is NULL;
select *from status;
-- 3-Find all the tasks that are marked as done
SELECT * FROM status WHERE name='done';

-- 4.Find all the tasks that are not marked as done
select * FROM status where name!='done';

-- 5. Get all the tasks, sorted with the most recently created first
SELECT * FROM hyf.task ORDER BY created_at DESC;

-- 6. Get the single most recently created task
select * FROM hyf.task ORDER BY created_at DESC limit 1;

-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT title,status_id FROM hyf.task WHERE TITLE LIKE '%database%' OR description like '%database%';

-- 8. Get the title and status (as text) of all tasks
SELECT hyf.task.title, hyf.status.name AS status
FROM hyf.task
JOIN hyf.status ON hyf.task.status_id = hyf.status.id;

-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT hyf.status.name AS status, COUNT(task.id) AS task_count
FROM hyf.task
JOIN hyf.status ON hyf.task.status_id = hyf.status.id
GROUP BY hyf.status.id
ORDER BY task_count DESC;

SELECT hyf.status.name AS status, COUNT(task.id) AS task_count
FROM hyf.status
LEFT JOIN hyf.task ON status.id = task.status_id
GROUP BY status.id
ORDER BY task_count DESC;