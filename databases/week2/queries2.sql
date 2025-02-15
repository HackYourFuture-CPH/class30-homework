-- Create the Class table
CREATE TABLE class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL,
    status ENUM ('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started'
);

-- Create the Student table
CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES class(id) ON DELETE SET NULL
);

--  Create an index on the student name
CREATE INDEX index_student ON student(name);
