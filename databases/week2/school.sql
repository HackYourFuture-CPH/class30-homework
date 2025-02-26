CREATE DATABASE IF NOT EXISTS School;
USE School;

CREATE TABLE student (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  family VARCHAR(50),
  phone VARCHAR(50),
  adress VARCHAR(255),
  email VARCHAR(255),
  date_registered DATETIME
);

CREATE TABLE enrolments (
  student_id INT,
  course_id INT,
  date DATETIME NOT NULL,
  price DECIMAL(5,2),
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) 
    REFERENCES student(student_id) 
    ON UPDATE CASCADE 
    ON DELETE NO ACTION,
  FOREIGN KEY (course_id) 
    REFERENCES courses(course_id) 
    ON UPDATE CASCADE 
    ON DELETE CASCADE
);

CREATE TABLE courses (
  course_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  price DECIMAL(5,2) NOT NULL,
  instructors_id INT,
  FOREIGN KEY (instructors_id) 
    REFERENCES instructors(instructors_id) 
    ON UPDATE CASCADE 
    ON DELETE NO ACTION
);

CREATE TABLE course_tags (
  course_id INT,
  tag_id INT,
  PRIMARY KEY (course_id, tag_id),
  FOREIGN KEY (course_id) 
    REFERENCES courses(course_id) 
    ON DELETE CASCADE,
  FOREIGN KEY (tag_id) 
    REFERENCES tags(tag_id) 
    ON DELETE CASCADE
);

CREATE TABLE tags (
  tag_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE instructors (
  instructors_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);