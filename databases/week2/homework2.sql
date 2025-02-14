USE my_db;

-- Part1: working with tasks
INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES 
('home work', 'do the home work', NOW(), NOW(), '2020-12-13', 2);

INSERT INTO user_task (user_id, task_id)
SELECT 10, id FROM task WHERE title = 'home work' LIMIT 1;

UPDATE task
SET title = 'Home work task updated'
WHERE title = 'home work';

UPDATE task
SET due_date = '2020-12-12', status_id = 3, description = 'completed'
WHERE title = 'Home work task updated';

DELETE FROM task
WHERE title = 'Home work task updated';



