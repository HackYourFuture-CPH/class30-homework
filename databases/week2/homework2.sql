-- Updating data with lesson2-data.sql before starting homework
CREATE TABLE `user_task` (
  `user_id` int(10) unsigned NOT NULL,
  `task_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`user_id`, `task_id`),
  CONSTRAINT `fk_user_task_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_task_task` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Users-tasks
insert into user_task (user_id, task_id) values(1, 5);
insert into user_task (user_id, task_id) values(1, 35);
insert into user_task (user_id, task_id) values(1, 11);
insert into user_task (user_id, task_id) values(2, 4);
insert into user_task (user_id, task_id) values(2, 26);
insert into user_task (user_id, task_id) values(2, 29);
insert into user_task (user_id, task_id) values(3, 22);
insert into user_task (user_id, task_id) values(3, 13);
insert into user_task (user_id, task_id) values(3, 19);
insert into user_task (user_id, task_id) values(4, 24);
insert into user_task (user_id, task_id) values(4, 20);
insert into user_task (user_id, task_id) values(5, 20);
insert into user_task (user_id, task_id) values(5, 18);
insert into user_task (user_id, task_id) values(5, 15);
insert into user_task (user_id, task_id) values(6, 10);
insert into user_task (user_id, task_id) values(6, 7);
insert into user_task (user_id, task_id) values(6, 27);
insert into user_task (user_id, task_id) values(7, 33);
insert into user_task (user_id, task_id) values(7, 18);
insert into user_task (user_id, task_id) values(7, 23);
insert into user_task (user_id, task_id) values(8, 26);
insert into user_task (user_id, task_id) values(8, 30);
insert into user_task (user_id, task_id) values(8, 11);
insert into user_task (user_id, task_id) values(9, 34);
insert into user_task (user_id, task_id) values(9, 15);
insert into user_task (user_id, task_id) values(9, 1);
insert into user_task (user_id, task_id) values(10, 29);
insert into user_task (user_id, task_id) values(10, 16);
insert into user_task (user_id, task_id) values(10, 1);
insert into user_task (user_id, task_id) values(11, 26);
insert into user_task (user_id, task_id) values(11, 27);
insert into user_task (user_id, task_id) values(11, 17);
insert into user_task (user_id, task_id) values(11, 2);
insert into user_task (user_id, task_id) values(1, 3);
insert into user_task (user_id, task_id) values(2, 6);
insert into user_task (user_id, task_id) values(3, 8);
insert into user_task (user_id, task_id) values(4, 9);
insert into user_task (user_id, task_id) values(5, 12);
insert into user_task (user_id, task_id) values(6, 14);
insert into user_task (user_id, task_id) values(7, 21);
insert into user_task (user_id, task_id) values(8, 25);
insert into user_task (user_id, task_id) values(9, 28);
insert into user_task (user_id, task_id) values(10, 31);
insert into user_task (user_id, task_id) values(11, 32);


--Part 1:
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES
('Do sql homework', 'Check the github!','2025-2-10 17:54:16','2025-2-25 06:54:16','2025-3-13 06:54:16', 2, NULL);

-- Change the title of a task
UPDATE task
SET title = 'Update Data for Homework Assignment'
WHERE task.title = 'Make the databases perform better'

-- Change a task due date
UPDATE task
SET due_date = '2024-12-22 06:00:00'
WHERE id = 1; 

-- Change a task status
UPDATE task
SET status_id = 3
WHERE id = 1; 

-- Mark a task as complete
UPDATE task
SET status_id = (SELECT id FROM status WHERE status.name = 'Done')
WHERE task.title = 'Update Data for Homework Assignment';

-- Delete a task
DELETE FROM task
WHERE id = 5;


-- Part2: School database
---class table
CREATE TABLE `class`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NOT NULL,
  `ends` DATETIME NULL
);

---Student table
CREATE TABLE `student`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` INT(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

---Create an index on the name column of the student table.
CREATE INDEX index_name
ON student (name);

---Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished
ALTER Table class
ADD COLUMN status ENUM('not-started','ongoing','finished') NULL;
SELECT * FROM class


