USE DATABASE hyf_lesson2,
insert into task (title, description, created, updated, due_date, status_id,, user_id) values ('Wash dishes', 'This is in priority.', '2025-02-11 06:54:16', '2025-02-11 06:54:16', '2025-02-12', 1, 123);

UPDATE tasks
SET title = 'New Task Title'
WHERE id = 5;

UPDATE tasks
SET due_date = '2025-02-25'
WHERE id = 6;

UPDATE tasks
SET status_id = 2
WHERE id = 7;

UPDATE statuses
SET name = 'Completed'
WHERE id = 8;

DELETE FROM tasks
WHERE id = 9;


