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



insert into emp (id, name, phone, email, jobt_id, dep_id) values (1, 'Jan Dark', '40404080', 'darkjan@company.dk', 1, 1);
insert into emp (id, name, phone, email, jobt_id, dep_id) values (2, 'Ali Uyumaz', '50894910', 'uyurali@company.dk', 2, 2);
insert into emp (id, name, phone, email, jobt_id, dep_id) values (3, 'Mette Hojbjergsen', '40989880', 'hojbmet@company.dk', 1, 1);
insert into emp (id, name, phone, email, jobt_id, dep_id) values (4, 'Fariha Kerimi', '30304080', 'kerfarh@company.dk', 3, 1);
insert into emp (id, name, phone, email, jobt_id, dep_id) values (5, 'Jovita Paulina', '29104070', 'paujov@company.dk', 4, 2);

insert into job (id, title) values (1, 'Software Engineer');
insert into job (id, title) values (2, 'Project Manager');
insert into job (id, title) values (3, 'UX_UI Designer');
insert into job (id, title) values (4, 'Business Analyst');



insert into dep (id, name) values (1, 'Product Development');
insert into dep (id, name) values (2, 'Business Management');

