-- Get all tasks assigned to users whose email ends in @spotify.com
SELECT task.* 
FROM task 
JOIN user_task ON task.id = user_task.task_id 
JOIN user ON user_task.user_id = user.id 
WHERE user.email LIKE '%@spotify.com';

-- Add table with status ENUM
ALTER TABLE task ADD COLUMN status ENUM('Not started', 'Ongoing', 'Finished');

-- Get all tasks for 'Donald Duck' with status 'Not started'
SELECT task.* 
FROM task 
JOIN user_task ON task.id = user_task.task_id 
JOIN user ON user_task.user_id = user.id 
WHERE user.name = 'Donald Duck' 
AND task.status = 'Not started';

-- Get all tasks for 'Maryrose Meadows' that were created in September
SELECT task.* 
FROM task 
JOIN user_task ON task.id = user_task.task_id 
JOIN user ON user_task.user_id = user.id 
WHERE user.name = 'Maryrose Meadows' 
AND MONTH(task.created) = 9;

-- Find how many tasks were created in each month
SELECT MONTH(created) AS month, COUNT(*) AS task_count 
FROM task 
GROUP BY MONTH(created) 
ORDER BY month;

-- Get all tasks
SELECT * FROM task;
