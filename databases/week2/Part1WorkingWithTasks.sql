CREATE DATABASE task_manager;
USE task_manager;

CREATE TABLE task (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    due_date DATE,
    status_id INT NOT NULL,
    user_id INT NOT NULL,
    is_deleted BOOLEAN DEFAULT FALSE
);



-- Update a task's title
UPDATE task 
SET title = 'Updated Task Title'
WHERE id = 1;

-- Update a task’s due date
UPDATE task 
SET due_date = '2025-04-01'
WHERE id = 1;

-- Change a task’s status
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

SELECT * FROM task WHERE is_deleted = FALSE;
