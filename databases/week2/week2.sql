

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







