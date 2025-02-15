SET NAMES utf8mb4;

CREATE TABLE class (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    begins DATETIME,
    ends DATETIME
);

CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES class(id) ON DELETE CASCADE
);

CREATE INDEX index_name ON student(name);

ALTER TABLE class 
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';