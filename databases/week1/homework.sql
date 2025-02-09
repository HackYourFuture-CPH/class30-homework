SELECT COUNT(*) FROM task;

SELECT COUNT(*) FROM task WHERE due_date IS NULL;

SELECT * FROM task WHERE status = 'Done';

SELECT * FROM task WHERE status = 'Not started';

SELECT * FROM task ORDER BY created_at DESC;

SELECT * FROM task ORDER BY created_at DESC LIMIT 1;

SELECT title, due_date FROM task WHERE title ILIKE '%database%' OR description ILIKE '%database%';

SELECT title, status FROM task;

SELECT status, COUNT(*) FROM task GROUP BY status;

SELECT status, COUNT(*) AS count FROM task GROUP BY status ORDER BY count DESC;