--part 4

--CREATE DATABASE library_db
CREATE DATABASE library_db;
USE  library_db;
 
 --CREATE table authors
 CREATE table authors(
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
 );
 INSERT INTO authors (name) VALUES
('J.D. Salinger'),
('Harper Lee'),
('George Orwell'),
('F. Scott Fitzgerald'),
('Herman Melville');

 -- CREATE table books
 CREATE table books(
    id int AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) not NULL,
    published_year int 
 );
 INSERT INTO books (id,title, published_year) VALUES
(1,'The Catcher in the Rye', 1951),
(2,'To Kill a Mockingbird', 1960),
(3,'Dystopian',1978),
(4,'The Great Gatsby', 1925),
(5,'Moby Dick', 1851);

-- CREATE TABLE book_authors
 CREATE TABLE book_authors (  
    book_id INT,  
    author_id INT,  
    PRIMARY KEY (book_id, author_id),  
    FOREIGN KEY (book_id) REFERENCES books(id),  
    FOREIGN KEY (author_id) REFERENCES authors(id)  
);
INSERT INTO book_authors (book_id, author_id) VALUES
(1, 1),  
(2, 2), 
(3, 3), 
(4, 4), 
(5, 5);  

--CREATE TABLE members
CREATE TABLE members (  
    id INT AUTO_INCREMENT PRIMARY KEY,  
    name VARCHAR(100) NOT NULL,  
    email VARCHAR(100) UNIQUE NOT NULL  
);
INSERT INTO members (name, email) VALUES
('Alice Johnson', 'alice@example.com'),
('Bob Smith', 'bob@example.com'),
('Charlie Brown', 'charlie@example.com');

--CREATE TABLE borrowings
CREATE TABLE borrowings (  
    id INT AUTO_INCREMENT PRIMARY KEY,  
    book_id INT,  
    member_id INT,  
    borrowed_date DATE NOT NULL,  
    return_date DATE,  
    FOREIGN KEY (book_id) REFERENCES books(id) , 
    FOREIGN KEY (member_id) REFERENCES members(id)
);
INSERT INTO borrowings (book_id, member_id, borrowed_date, return_date) VALUES
(1, 1, '2025-02-01', '2025-02-15'),  
(3, 2, '2025-02-05', NULL),          
(5, 3, '2025-01-20', '2025-02-10'); 


