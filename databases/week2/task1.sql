#Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
VALUES ('read a book', 'complete human laws of nature', '2024-12-01', '2024-12-18', '2025-1-01', 2, 3);


#Change the title of a task
update task
set title = 'wash car'
where id = 36;


#Change a task due date
update task
set due_date = '2026-12-3'
where id = 36;


#Change a task status
update task 
set status_id = 3
where id = 16;


#Mark a task as complete
update task 
set status_id = 1 
where id = 3;


# Delete a task
delete from task 
where user_id  = 1;


SELECT * FROM task;
