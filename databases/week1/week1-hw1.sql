-- Find out how many tasks are in the task table: 35
SELECT COUNT(*) 
FROM task;

-- Find out how many tasks in the task table do not have a valid due date: 8
SELECT COUNT(*) 
FROM task 
WHERE due_date IS NULL;

-- Find all the tasks that are marked as done:12 tasks
SELECT *
FROM task
WHERE status_id in (
    SELECT id
    FROM status
    WHERE name = "done"
);

-- Find all the tasks that are not marked as done: 23
SELECT *
FROM task
WHERE status_id in (
    SELECT id
    FROM status
    WHERE name != "done"
);

-- Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC;

-- Get the single most recently created task: task with id=25
SELECT id, title, created 
FROM task
ORDER BY created DESC
LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database: 5 rows
SELECT title, due_date
FROM task
WHERE 
title LIKE "%database%" OR 
description LIKE "%database%"

-- Get the title and status (as text) of all tasks
SELECT task.title, status.name as status_name
FROM task
JOIN status ON task.status_id = status.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT status.name as status_name, COUNT(task.id) as task_count
FROM status
LEFT JOIN task ON task.status_id = status.id
GROUP BY status.name;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name as statusname, COUNT(task.id) as taskcount
FROM status
LEFT JOIN  task on task.status_id = status.id
GROUP BY status.name
ORDER BY taskcount DESC;