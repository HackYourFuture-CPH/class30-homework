CREATE DATABASE fitness_center;
USE fitness_center;

-- Subscription
CREATE TABLE subscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('Monthly', 'Yearly', 'Premium') NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Trainers
CREATE TABLE trainers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    specialty VARCHAR(255)
);

-- classes
CREATE TABLE classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    schedule DATETIME NOT NULL,
    trainer_id INT,
    FOREIGN KEY (trainer_id) REFERENCES trainers(id) ON DELETE SET NULL
);

-- Members
CREATE TABLE members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    subscription_id INT,
    FOREIGN KEY (subscription_id) REFERENCES subscriptions(id) ON DELETE SET NULL
);

-- Members_classes
CREATE TABLE members_classes (
    member_id INT,
    class_id INT,
    PRIMARY KEY (member_id, class_id),
    FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE,
    FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE
);
