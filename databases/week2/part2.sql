-- # Part 2

CREATE DATABASE my_db2;

CREATE TABLE Class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
);

CREATE TABLE Student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Class(id) ON DELETE SET NULL
);

CREATE INDEX idx_student_name ON Student(name);

ALTER TABLE Class ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') DEFAULT 'not-started';
