-- first task
insert into task (title, description, created, updated, due_date, status_id, user_id) 
values ("mop meeting room", "use the mop in the basement, add some detergent to 5lt water", "2017-11-25 10:54:48", "2017-11-27 13:05:09", "2017-11-28 16:55:00", 1, 9)

-- second task

UPDATE task
SET title="Do skincare"
WHERE id=35;

-- third task

UPDATE task
SET due_date=NULL
WHERE id=32;

-- fourth task

UPDATE task
SET status_id=3
WHERE id=1;

--fifth task / not sure if I understood the task correctly

INSERT INTO status (name) VALUES ('Completed');

UPDATE task
SET status_id= (SELECT id FROM status WHERE name= "Completed")
WHERE id=34;

--sixth task

DELETE FROM task
WHERE id =25;

