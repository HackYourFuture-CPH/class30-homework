show DATABASES;
use my_database_week1;
SELECT * 
from task
SELECT COUNT (id) from task
SELECT COUNT(id) from task
 where due_date is NULL


SELECT task.id, title, description, created, updated,due_date, user_id, status.name
from task
JOIN status ON task.status_id = status.id 
where status.name= 'Done' 

SELECT task.id, title, description, created, updated,due_date, user_id, status.name
from task
JOIN status ON task.status_id = status.id 
where status.name != 'Done' 

SELECT * from task
ORDER BY(created)

SELECT * from task
ORDER BY(created)
LIMIT 1

select * from task
WHERE description is not NULL and due_date is not NULL


SELECT title , name
FROM task
join status on task.status_id = status.id 


 select name , count(*) as task_count
 from status
 JOIN task
 on task.status_id = status.id
 GROUP BY name
 


SELECT status.name, COUNT(*) AS task_count
FROM status
JOIN task ON task.status_id = status.id
GROUP BY status.name
ORDER BY task_count DESC;