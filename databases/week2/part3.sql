-- # PART3

SELECT task.* 
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.email LIKE '%@spotify.com';

SELECT task.* 
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';

SELECT task.* 
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.name = 'Maryrose Meadows' AND MONTH(task.created) = 9;

SELECT MONTH(created) AS month, COUNT(*) AS task_count
FROM task
GROUP BY MONTH(created);