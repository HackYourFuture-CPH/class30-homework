INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ("Do DB homework", "Databases week 2 homework needs to be done by tomorrow", NOW(),NOW(), "2025-02-02", 1, 1 )

UPDATE task 
set due_date = "2025-03-02"
where id = 38


update task
set title = "Week2 DB HW"
where id = 38

update task
set status_id = 2
where id = 38

update task 
set status_id = 3
where id = 38

delete from task where id = 37

select * from status

select * from task
