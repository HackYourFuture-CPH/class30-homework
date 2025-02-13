-- Active: 1739009256341@@127.0.0.1@3307
create database hackYourFuture

use hackYourFuture


CREATE TABLE Contact_Info(
    id INT AUTO_INCREMENT,
    phone_no VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    website VARCHAR(255) NULL,
    linkedin VARCHAR(255) NULL,
    PRIMARY KEY(id)
)

CREATE TABLE Location(
    id INT AUTO_INCREMENT,
    city VARCHAR(255) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    street_name VARCHAR(255) NOT NULL,
    house_no VARCHAR(10) NOT NULL,
    PRIMARY KEY(id)
)

CREATE TABLE Partner(
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    contact_id INT NOT NULL,
    location_id INT NOT NULL, 
    PRIMARY KEY(id),
    CONSTRAINT fk_partner_contact FOREIGN KEY(contact_id) REFERENCES Contact_Info(id),
    CONSTRAINT fk_partner_location FOREIGN KEY(location_id) REFERENCES Location(id)
)

CREATE TABLE Employee(
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    contact_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_contact_employee FOREIGN KEY(contact_id) REFERENCES Contact_Info(id)
)

CREATE TABLE Department(
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL, 
    employee_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_employee FOREIGN KEY (employee_id) REFERENCES Employee(id)
)


CREATE TABLE HackYourFuture(
    id int AUTO_INCREMENT,
    partner_id INT NOT NULL, 
    department_id INT NOT NULL, 
    PRIMARY KEY(id),
    CONSTRAINT fk_partner FOREIGN KEY (partner_id) REFERENCES Partner(id),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES Department(id)
)


CREATE TABLE Mentor(
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    contact_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_contact_mentor FOREIGN KEY(contact_id) REFERENCES Contact_Info(id)
)


CREATE TABLE Student(
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    contact_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_contact_student FOREIGN KEY(contact_id) REFERENCES Contact_Info(id)
)

CREATE TABLE Team(
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    employee_id INT NOT NULL, 
    student_id INT NOT NULL,
    mentor_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_employee_team FOREIGN KEY(employee_id) REFERENCES Employee(id),
    CONSTRAINT fk_student_team FOREIGN KEY(student_id) REFERENCES Student(id),
    CONSTRAINT fk_mentor_team FOREIGN KEY(mentor_id) REFERENCES Mentor(id)    
)


CREATE TABLE Course(
    id INT AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL,
    team_id INT NOT NULL,
    location_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_course_team FOREIGN KEY(team_id) REFERENCES Team(id),
    CONSTRAINT fk_course_location FOREIGN KEY(location_id) REFERENCES Location(id)
)


