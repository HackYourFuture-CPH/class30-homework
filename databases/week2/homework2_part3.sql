SELECT * FROM task
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user.id = user_task.user_id
WHERE user.email LIKE '%@spotify.com';

SELECT * FROM task
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user.id = user_task.user_id
JOIN status ON status.id = task.status_id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';

SELECT * FROM task
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows' AND MONTH(task.created) = 09;

SELECT MONTH(created) AS month, COUNT(id) AS task_count FROM task
GROUP BY month
ORDER BY task_count ASC;