--Part1
use hyf;
--ADD new task
INSERT INTO task (id,title,description,created,updated,due_date,status_id,user_id)
VALUES (16,'Finish Homework', 'Complete all SQL tasks for the week', NOW(), NOW(), '2025-02-15', 1, 2);



--Change the title of task
UPDATE task set title='submit Homework' WHERE id=1;

--Change a task due date 
UPDATE task SET due_date='2025-02-20' WHERE id=1;

--Change a task status
UPDATE task SET status_id=2 WHERE id=1;

--Mark a task as complete
UPDATE task SET description='COMPLETE' WHERE id=5;

--Delete task 
DELETE
FROM task
WHERE title='wash the car';

----Part 3

--1-Get all the tasks assigned to users whose email ends in @spotify.com
SELECT * FROM task t
LEFT JOIN user u
on u.id=t.user_id
where u.email like '%@spotify.com';


--2-Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT user.name,status.name,task.title,task.user_id
FROM task
JOIN user on task.user_id = user.id
JOIN status on status.id= task.status_id
WHERE user.name = 'Donald Duck' OR status.name = 'Not started';
SELECT * FROM STATUS;
SELECT * FROM user

--3-Get all tasks for ‘Maryrose Meadows’ that were created in September

SELECT *  
FROM task  
JOIN user ON task.user_id = user.id  
WHERE user.name = 'Maryrose Meadows' AND MONTH(task.created) = 9;

--4-Find how many tasks were created in each month

SELECT MONTH(created) AS month, COUNT(*) AS task_count  
FROM task  
GROUP BY MONTH(created)
ORDER BY MONTH;














