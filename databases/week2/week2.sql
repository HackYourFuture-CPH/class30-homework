-- Active: 1738674433543@@127.0.0.1@3306@my_database_week1
-- part 1
SELECT * from status
SELECT * FROM task;

INSERT into task(title, description, created, updated, due_date, status_id, user_id)
VALUES('Database week2','Do homework for database week 2', '2025-02-09 12:00:00', '2025-02-13 17:10:15','2025-02-12 18:00:00',3,1);

UPDATE task
SET title = "HUF homework"
WHERE title= "Database week2";


UPDATE task
set due_date= "2025-02-12 18:20:15"
WHERE title= "HUF homework";

UPDATE task 
set status_id= 2
WHERE id= 16;

UPDATE task
set status_id= 3
where id=16;


DELETE from task
WHERE id=16;

-- part 2

CREATE DATABASE sql_School;
USE sql_School;
CREATE Table Classes;
(
  class_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) not NULL,
  begins DATE NOT null,
  ends DATE NOT null
);
CREATE Table students(
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(50) NOT NULL,
  class_id int,
  Foreign Key fk_students_classes(class_id) 
  REFERENCES  classes(class_id)
  ON UPDATE CASCADE
  ON DELETE NO ACTION
);

CREATE INDEX inx_name on students(name);



ALTER Table classes 
ADD status  ENUM ('not-started', 'ongoing', 'finished');

--part 3
use hyf_lesson2;

select * 
from `user` U
JOIN user_task ut
on u.id= ut.user_id
JOIN task t
ON t.id=ut.task_id
where u.email like "%@spotify.com";


select t.id, t.title, t.description, t.created, t.updated, t.due_date, s.name
from user u
join user_task ut
on u.id=ut.user_id
join task t
on t.id= ut.task_id
join status s on t.status_id=s.id
where u.name='Donald Duck' and s.name='Not started';

select * 
from user u
JOIN user_task ut
on u.id=ut.user_id
join task t
on t.id=ut.task_id and u.name= 'Maryrose Meadows'
where (month(created)=9);


SELECT MONTH(t.created) AS month, COUNT(*) AS task_count
FROM task t
GROUP BY MONTH(t.created)
ORDER BY month;


