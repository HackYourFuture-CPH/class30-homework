-- task for creating the school database
CREATE DATABASE school_db;

USE school_db;

CREATE TABLE class (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `begins` DATETIME NOT NULL,
    `ends` DATETIME NOT NULL
);

CREATE TABLE student (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `phone` varchar(255) NULL,
    `class-id` int(10) unsigned NOT NULL,
    CONSTRAINT `fk_classid` FOREIGN KEY (`class-id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- advanced tasks

CREATE INDEX index_name ON student (name);
ALTER TABLE class
ADD status ENUM("not-started", "ongoing", "finished");


