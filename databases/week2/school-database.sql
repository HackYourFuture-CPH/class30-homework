-- Creating a new database
CREATE DATABASE school_db;

-- Using database
USE school_db;

-- Creating table Class
CREATE TABLE Class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATE,
    ends DATE
);

-- Create table Student
CREATE TABLE Student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Class(id)
);

-- Creating an index on the name column of the Student table
CREATE INDEX idx_student_name ON Student(name);

-- Adding a status column to the Class table with values ​​not-started, ongoing, finished
ALTER TABLE Class 
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished');
