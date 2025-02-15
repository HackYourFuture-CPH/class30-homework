create database School;
use School;


CREATE TABLE Class (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    beginning_date DATE,
    ending_date DATE
);


CREATE TABLE Student (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES Class(id)
);


#Create an index on the name column of the student table.
CREATE INDEX indexName ON Student(name);


#Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE Class
ADD status ENUM('not-started', 'ongoing', 'finished');    






