-- 1️ Get all tasks assigned to users whose email ends in @spotify.com
SELECT task.title, user.name, user.email
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.email LIKE '%@spotify.com';

-- 2️ Get all tasks for 'Donald Duck' with status 'Not started'
SELECT task.title, status.name AS status_text
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';

-- 3️ Get all tasks for 'Maryrose Meadows' that were created in September
SELECT task.title, task.created, user.name
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows' AND MONTH(task.created) = 9;

-- 4️ Find how many tasks were created in each month
SELECT YEAR(created) AS year, MONTHNAME(created) AS month, COUNT(*) AS task_count
FROM task
GROUP BY year, month
ORDER BY year, month;
