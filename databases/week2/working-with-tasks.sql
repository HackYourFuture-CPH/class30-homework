-- Add a task
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('New Task', 'This is a new task description', NOW(), NOW(), '2025-02-20', 1, 1);

-- Change the title of a task
UPDATE task
SET title = 'Updated Task Title'
WHERE id = 1;

-- Change a task due date
UPDATE task
SET due_date = '2025-03-01'
WHERE id = 1;

-- Change a task status
UPDATE task
SET status_id = 2
WHERE id = 1;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 1;

-- Delete a task
DELETE FROM task
WHERE id = 1;
