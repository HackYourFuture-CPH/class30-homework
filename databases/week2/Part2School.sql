CREATE DATABASE school_db;
USE school_db;

CREATE TABLE class (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
);


CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES class(id) ON DELETE SET NULL
);



CREATE INDEX idx_student_name ON student(name);


ALTER TABLE class 
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') DEFAULT 'not-started';

