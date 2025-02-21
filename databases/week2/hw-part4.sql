CREATE DATABASE mycompany_db;
USE mycompany_db;

SET NAMES utf8mb4;

CREATE TABLE `emp` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `email` varchar(255) NOT NULL,
  `jobt_id` int(10) unsigned NOT NULL,
  `dep_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_j` FOREIGN KEY (`jobt_id`) REFERENCES `job` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_d` FOREIGN KEY (`dep_id`) REFERENCES `dep` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)


CREATE TABLE `job` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL
)

CREATE TABLE `dep` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
)

CREATE TABLE  `projects` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `project_name` varchar(255) NOT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL
)

CREATE TABLE `project_assignment` (
  `emp_id` int(10) unsigned NOT NULL,
  `project_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`emp_id`, `project_id`),
  FOREIGN KEY (`emp_id`) REFERENCES `emp` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)
  

insert into emp (name, phone, email, jobt_id, dep_id) values ( 'Jan Dark', '40404080', 'darkjan@company.dk', 1, 1);
insert into emp ( name, phone, email, jobt_id, dep_id) values ('Ali Uyumaz', '50894910', 'uyurali@company.dk', 2, 2);
insert into emp ( name, phone, email, jobt_id, dep_id) values ('Mette Hojbjergsen', '40989880', 'hojbmet@company.dk', 1, 1);
insert into emp (name, phone, email, jobt_id, dep_id) values ('Fariha Kerimi', '30304080', 'kerfarh@company.dk', 3, 1);
insert into emp (name, phone, email, jobt_id, dep_id) values ('Jovita Paulina', '29104070', 'paujov@company.dk', 4, 2);

insert into job (title) values ('Software Engineer');
insert into job (title) values ('Project Manager');
insert into job (title) values ('UX_UI Designer');
insert into job (title) values ('Business Analyst');



insert into dep (name) values ('Product Development');
insert into dep (name) values ('Business Management');

insert into projects (project_name, start_date, end_date) VALUES
('Website Redesign', '2024-01-01 09:00:00', '2024-06-01 18:00:00'),
('AI Chatbot Development', '2024-02-15 10:00:00', '2024-08-15 17:00:00'),
('Mobile App Launch', '2024-03-10 08:30:00', '2024-09-30 16:00:00');

insert into project_assignment (emp_id, project_id) VALUES
(1,1),
(2,1),
(3,2),
(4,2),
(5,3);

