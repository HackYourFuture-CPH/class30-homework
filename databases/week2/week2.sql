------------TASK PART 1------------

--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
SELECT * from task;
insert into task (id, title, description, created, updated, due_date, status_id) value (38, 'Wash my clothes', 'Title says it all.', '2017-10-25 06:54:16', '2017-10-15 13:05:09', null, 2);
--Change the title of a task
UPDATE task  SET title= 'My clothes' WHERE task.title ='Wash my clothes';
--Change a task due date// I changed all the nulls :( 
UPDATE task SET due_date ='2017-12-07 23:04:38' WHERE due_date iS NULL;
--But now i Know that I should do this instead
UPDATE task SET due_date= '2017-12-07 22:00:00' where id =38;

---Change a task status
UPDATE task SET status_id = 1 WHERE id=38;
---Mark a task as complete--
UPDATE task SET status_id=3 WHERE id=38;

--Delete a task
DELETE from task WHERE id=37;


----TASK 2----------------------
--Create a new database containing the following tables:

--Class: with the columns: id, name, begins (date), ends (date)-- 

CREATE TABLE `class`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins_date` DATETIME NOT NULL,
  `ends_date` DATETIME NULL
);
--Student: with the columns: id, name, email, phone, class_id (foreign k)
CREATE TABLE `student`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `class_id` int(10) unsigned NOT NULL,
  FOREIGN KEY (`class_id`) REFERENCES `class`(`id`)
);

--Create an index on the name column of the student table.

CREATE INDEX `name_index` ON `student`(`name`);

---Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
 ALTER TABLE `class` ADD `status` ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';

 SELECT * from class;



----TASK 3-------

--Get all the tasks assigned to users whose email ends in @spotify.com

SELECT task.id, task.title, `user`.name, `user`.email
FROM task
JOIN user_task on task.id = user_task.task_id
JOIN `user` on `user`.id = user_task.user_id
WHERE `user`.email LIKE '%@spotify.com';


--Get all the tasks for 'Donald Duck' with the status 'Not started'

SELECT task.id, task.title, `user`.name, status.name
FROM task
JOIN user_task on task.id = user_task.task_id
JOIN `user` on `user`.id = user_task.user_id
JOIN status on task.status_id = status.id
WHERE `user`.name = 'Donald Duck' AND status.name = 'Not started';


-- Get all the tasks for 'Maryrose Meadows' that were created in September (hint: month(created)=month_number)
SELECT task.title , task.created, `user`.name
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN `user` on `user`.id = user_task.user_id
WHERE `user`.name = 'Maryrose Meadows' AND MONTH(task.created) = 09;

-- Find how many tasks were created in each month
SELECT YEAR(created) AS year, MONTHNAME(created) AS month, COUNT(*) AS task_count
FROM task
GROUP BY year, month
ORDER BY year, month;









