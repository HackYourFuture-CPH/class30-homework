CREATE DATABASE mycompany_db;
USE mycompany_db;

SET NAMES utf8mb4;

CREATE TABLE `employee` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `email` varchar(255) NOT NULL,
  `jobtitle_id` int(10) unsigned NOT NULL,
  `dept_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_jobtitle` FOREIGN KEY (`jobtitle_id`) REFERENCES `department_jobs` (`jobtitle_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_deptid` FOREIGN KEY (`dept_id`) REFERENCES `department_jobs` (`dept_id`) ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE `job_titles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL
)

CREATE TABLE `department` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
)

CREATE TABLE `department_jobs` (
  `dept_id` int(10) unsigned NOT NULL,
  `jobtitle_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`dept_id`, `jobtitle_id`),
  CONSTRAINT `fk_deptid_deptjobs` FOREIGN KEY (`dept_id`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_jobtitleid_deptjobs` FOREIGN KEY (`jobtitle_id`) REFERENCES `job_titles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)


insert into employee (id, name, phone, email, jobtitle_id, dept_id) values (1, 'Jan Dark', '40404080', 'darkjan@company.dk', 1, 1);
insert into employee (id, name, phone, email, jobtitle_id, dept_id) values (2, 'Ali Uyumaz', '50894910', 'uyurali@company.dk', 2, 2);
insert into employee (id, name, phone, email, jobtitle_id, dept_id) values (3, 'Mette Hojbjergsen', '40989880', 'hojbmet@company.dk', 1, 1);
insert into employee (id, name, phone, email, jobtitle_id, dept_id) values (4, 'Fariha Kerimi', '30304080', 'kerfarh@company.dk', 3, 1);
insert into employee (id, name, phone, email, jobtitle_id, dept_id) values (5, 'Jovita Paulina', '29104070', 'paujov@company.dk', 4, 2);

insert into job_titles (id, title) values (1, 'Software Engineer');
insert into job_titles (id, title) values (2, 'Project Manager');
insert into job_titles (id, title) values (3, 'UX_UI Designer');
insert into job_titles (id, title) values (4, 'Business Analyst');



insert into department (id, name) values (1, 'Product Development');
insert into department (id, name) values (2, 'Business Management');



insert into department_jobs (jobtitle_id, dept_id) values (1, 1);
insert into department_jobs (jobtitle_id, dept_id) values (3, 1);
insert into department_jobs (jobtitle_id, dept_id) values (2, 2);
insert into department_jobs (jobtitle_id, dept_id) values (4, 2);