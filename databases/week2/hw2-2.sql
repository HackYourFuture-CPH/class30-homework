--Part 2: School database
CREATE DATABASE School_DB;
USE SCHOOL_DB;

CREATE TABLE Class(
    id int NOT null PRIMARY key AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
);
INSERT into class(name,begins,ends)
VALUES('marjan','1984-06-03','2025,01,02'),
       ('ali','2020-08-01','1987-06-09');


CREATE TABLE Students(
   id int NOT null PRIMARY key AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
 email VARCHAR(255),
 phone int not null,
 class_id INT,
 FOREIGN key (class_id) REFERENCES class(id)
);
INSERT INTO students(name,email,phone)
VALUES('kasra','kasra8374@gmail.com',1234567);

--Create an index on the name column of the student table.
CREATE INDEX idx_students_name ON students(name);

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class  
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';

SELECT * FROM students;

SELECT * FROM class;