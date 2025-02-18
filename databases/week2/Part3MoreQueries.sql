USE task_manager;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    task_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (task_id) REFERENCES task(id)
);

SELECT t.*
FROM task t
JOIN user_task ut ON t.id = ut.task_id
JOIN user u ON ut.user_id = u.id
WHERE u.email LIKE '%@spotify.com';


SELECT t.*
FROM task t
JOIN user_task ut ON t.id = ut.task_id
JOIN user u ON ut.user_id = u.id
JOIN status s ON t.status_id = s.id
WHERE u.name = 'Donald Duck' AND s.name = 'Not started';


SELECT t.*
FROM task t
JOIN user_task ut ON t.id = ut.task_id
JOIN user u ON ut.user_id = u.id
WHERE u.name = 'Maryrose Meadows' AND MONTH(t.created) = 9;


SELECT MONTH(t.created) AS month, COUNT(*) AS task_count
FROM task t
GROUP BY MONTH(t.created)
ORDER BY month;

