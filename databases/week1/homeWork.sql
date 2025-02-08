create DATABASE hyf_db;
use hyf_db;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    description VARCHAR(255),
    status VARCHAR(50),
    due_date DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO tasks (title, description, status, due_date)
VALUES ("Finish project report", "Complete the final draft of the quarterly project report.", "NOT_DONE", "2025-02-10"),
       ("Organize team meeting", "Schedule and prepare for the next team meeting, including an agenda.", "NOT_DONE", "2025-02-12"),
       ("Review email campaign", "Review and approve the email marketing campaign content.", "NOT_DONE", "2025-02-14"),
       ("Update website content", "Refresh the home page with new content and images.", "NOT_DONE", "2025-02-16"),
       ("Submit expense report", "Submit the monthly expense report for approval.", "NOT_DONE", "2025-02-09"),
       ("Finalize client presentation", "Complete and finalize the presentation for the upcoming client meeting.", "NOT_DONE", "2025-02-11"),
       ("Team brainstorming session", "Set up a meeting for the team to brainstorm ideas for the new project.", "NOT_DONE", "2025-02-13"),
       ("Complete training module", "Finish the online training module on new software tools.", "NOT_DONE", "2025-02-17");

       INSERT INTO tasks (title, description, is_done)
VALUES ("Normalize Database", "database should be normalized by end of this month", FALSE)





SELECT * from tasks

SELECT COUNT(title) FROM tasks;  -- Find out how many tasks are in the task table

SELECT * FROM tasks WHERE due_date IS NULL

ALTER TABLE tasks ADD is_done BOOLEAN;

UPDATE tasks
SET is_done = CASE 
    WHEN status = "DONE" THEN TRUE  
    ELSE FALSE
END;

ALTER TABLE tasks DROP COLUMN status;


UPDATE tasks
SET is_done = TRUE
WHERE id IN (2,6, 8);


SELECT title, is_done FROM hyf_db.tasks WHERE is_done = TRUE ;

SELECT title, is_done FROM hyf_db.tasks WHERE is_done = FALSE ;


SELECT MIN(created_at) AS earliest_created_at, title, description 
FROM tasks 
GROUP BY title, description 
ORDER BY earliest_created_at ASC;

SELECT created_at, title, description from tasks ORDER BY created_at ASC
LIMIT 1

UPDATE tasks
SET due_date = '2025-02-28'
WHERE id in (11)


SELECT title, due_date from tasks where title like '%database%' OR description like '%database%' GROUP BY title, due_date


SELECT title,
    CASE 
        WHEN  is_done = TRUE THEN 'DONE'  
        ELSE  'NOT_DONE'
    END AS status_text
FROM tasks



SELECT
    CASE 
        WHEN is_done = true THEN 'DONE'  
        ELSE  'NOT_DONE'
    END AS status_name,
    COUNT(*) AS task_count
FROM tasks
GROUP BY is_done
ORDER BY task_count DESC



