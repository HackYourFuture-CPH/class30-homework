
--Part 1:
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES
('Do sql homework', 'Check the github!','2025-2-10 17:54:16','2025-2-25 06:54:16','2025-3-13 06:54:16', 2, NULL);

-- Change the title of a task
UPDATE task
SET title = 'Address review comments'
WHERE task.id = 33;

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
ALTER TABLE class
MODIFY COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL;

SELECT * FROM class

--Part3
-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.id, task.title, user_task.task_id, user_task.user_id, `user`.id
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN `user` ON `user`.id = user_task.user_id
WHERE `user`.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.id, task.title, `user`.name, status.name
FROM task
JOIN user_task on task.id = user_task.task_id
JOIN `user` on `user`.id = user_task.user_id
JOIN status on task.status_id = status.id
WHERE `user`.name = 'Donald Duck' AND status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.title , task.created, `user`.name
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN `user` on `user`.id = user_task.user_id
WHERE `user`.name = 'Maryrose Meadows' AND MONTH(task.created) = 9;

-- Find how many tasks where created in each month
SELECT YEAR(created) AS year, MONTHNAME(created) AS month, COUNT(*) AS task_count
FROM task
GROUP BY year, month
ORDER BY year, month;


-- Part4
-- Event planning database

CREATE TABLE venues (
    venue_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location TEXT NOT NULL,
    capacity INT NOT NULL
);

CREATE TABLE organizers (
    organizer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    event_date DATETIME NOT NULL,
    venue_id INT NOT NULL,
    organizer_id INT NOT NULL,
    CONSTRAINT `fk_venues` FOREIGN KEY (venue_id) REFERENCES venues(venue_id),
    CONSTRAINT `fk_organizer` FOREIGN KEY (organizer_id) REFERENCES organizers(organizer_id)
);

CREATE TABLE guests (
    guest_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE event_guests (
    event_id INT NOT NULL,
    guest_id INT NOT NULL,
    PRIMARY KEY (event_id, guest_id),
    CONSTRAINT `fk_evnet_guest_event` FOREIGN KEY (event_id) REFERENCES events(event_id),
    CONSTRAINT `fk_event_guest_guest` FOREIGN KEY (guest_id) REFERENCES guests(guest_id)
);

-- Trigger
CREATE Trigger check_guest_capacity
BEFORE INSERT ON guests
FOR EACH ROW
BEGIN
     IF (
        (SELECT COUNT(*) 
         FROM event_guests 
         WHERE event_id = NEW.event_id) 
        >= 
        (SELECT capacity 
         FROM events 
         JOIN venues ON events.venue_id = venues.venue_id 
         WHERE events.event_id = NEW.event_id)
    ) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Event capacity exceeded!';
    END IF;
END;