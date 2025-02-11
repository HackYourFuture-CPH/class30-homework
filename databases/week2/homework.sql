-- Active: 1738236443102@@0.0.0.0@3307@library_database
SELECT * from task

-----Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id---
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) VALUES 
("Cut Vegetables","Prepare food for HYF team","2025-02-11","2025-02-11",NULL,1,7)

-----Change the title of a task-----
UPDATE task SET title="Prepare clothes for next day" WHERE id=11

-----Change a task due date-----
UPDATE task SET due_date="2025-02-11" WHERE id=5

-----Change a task status-----
UPDATE task SET status_id=2 WHERE id=17

-----Mark a task as complete-----
UPDATE task SET status_id=3 WHERE id=27

-----Delete a task-----
DELETE FROM task WHERE id=21

-----Creating Class Table-----
CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-----Creating Student Table-----
CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `class_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-----Create an index on the name column of the student table.-----
CREATE INDEX index_name
ON student (name)

-----Add a new column to the class table named status-----
ALTER TABLE class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';

-----Get all the tasks assigned to users whose email ends in @spotify.com-----
SELECT t.id,t.title,t.status_id, ut.user_id,u.name,u.email FROM task t
JOIN user_task ut 
ON t.id = ut.task_id
JOIN `user` u
ON u.id = ut.user_id
WHERE u.email LIKE "%@spotify.com"

-----Get all the tasks for 'Donald Duck' with status 'Not started'-----
SELECT t.id,t.title,t.status_id,u.name FROM task t
JOIN user_task ut
ON t.id = ut.task_id
JOIN `user` u
ON u.id = ut.user_id
WHERE u.name = "Donald Duck" AND t.status_id=1

-----Get all the tasks for 'Maryrose Meadows' that were created in september-----
SELECT t.id,t.title,t.created,u.name FROM task t
JOIN user_task ut
ON t.id = ut.task_id
JOIN `user` u
ON u.id = ut.user_id
WHERE u.name = "Maryrose Meadows" AND MONTH(t.created) = 9

-----Find how many tasks where created in each month-----
SELECT DATE_FORMAT(created, '%Y-%m') AS month, COUNT(*) AS task_count
FROM task
GROUP BY month
ORDER BY month;

-----CREATE TABLE statements------
USE library_database; 
CREATE TABLE Book (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    publication_year INT
);

CREATE TABLE Author (
    author_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);


CREATE TABLE Member (
    member_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Borrowing_Log (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    book_id INT,
    member_id INT,
    borrow_date DATE NOT NULL,
    return_date DATE,
    FOREIGN KEY (book_id) REFERENCES Book(book_id),
    FOREIGN KEY (member_id) REFERENCES Member(member_id)
);

CREATE TABLE Book_Author (
    book_id INT,
    author_id INT,
    PRIMARY KEY (book_id, author_id),
    FOREIGN KEY (book_id) REFERENCES Book(book_id),
    FOREIGN KEY (author_id) REFERENCES Author(author_id)
);





