-- Get all tasks assigned to users whose email ends in @spotify.com
SELECT * 
FROM task 
JOIN user ON task.user_id = user.id 
WHERE user.email LIKE '%@spotify.com';

-- Add table with status ENUM
ALTER TABLE task ADD COLUMN status ENUM('Not started', 'Ongoing', 'Finished');

-- Get all tasks for 'Donald Duck' with status 'Not started'
SELECT * 
FROM task 
JOIN user ON task.user_id = user.id 
WHERE user.name = 'Donald Duck' 
AND task.status = 'Not started';

-- Get all tasks for 'Maryrose Meadows' that were created in September
SELECT * 
FROM task 
JOIN user ON task.user_id = user.id 
WHERE user.name = 'Maryrose Meadows' 
AND MONTH(task.created) = 9;

-- Find how many tasks were created in each month РОБИТЬ
SELECT MONTH(created) AS month, COUNT(*) AS task_count 
FROM task 
GROUP BY MONTH(created) 
ORDER BY month;

select * from task;