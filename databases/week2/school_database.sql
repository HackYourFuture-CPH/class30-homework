create database School;

use School


create table Class(
    id int AUTO_INCREMENT,
    name VARCHAR(255),
    begins DATE,
    ends DATE,
    PRIMARY KEY(id)
)

create table Student(
    id int AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    class_id int,
    PRIMARY KEY(id),
    CONSTRAINT fk_class Foreign Key (class_id) REFERENCES Class(id)
)

select * from Class


create INDEX st_name
ON Student(name)

ALTER Table Class 
add status ENUM('not-started', 'ongoing', 'finished')

