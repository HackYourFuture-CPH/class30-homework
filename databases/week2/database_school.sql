CREATE DATABASE School_database;
USE School_database;

CREATE TABLE classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL,
    status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started'
);

CREATE TABLE Students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    classes_id INT,
    FOREIGN KEY (classes_id) REFERENCES classes(id) ON DELETE SET NULL
);

CREATE INDEX idx_student_name ON Students(name);

SELECT* FROM Students;