-- # PART 1

INSERT INTO 
task (title, description, created, updated, due_date, status_id, user_id)
VALUES ("Sign up for Instagram", "Create an account on Instagram to share photos and videos", "2025-02-01", "2025-02-01", "2025-02-02", 1, 1);

UPDATE task
SET title = "Go to the gym", description = "Work out for 1 hour", due_date = "2025-02-02", status_id = 3, user_id = 1
WHERE title = "Sign up for Instagram";

DELETE FROM task
WHERE title = "Go to the gym";


