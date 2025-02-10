CREATE TABLE `users`  (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NULL,
    PRIMARY KEY (id)
) ;

-- Statuses Table
CREATE TABLE `statuses` (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Tasks Table
CREATE TABLE `tasks` (
    id SERIAL,
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    due_date TIMESTAMP NULL,
    status_id BIGINT UNSIGNED NOT NULL,
    user_id BIGINT UNSIGNED NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_status FOREIGN KEY (status_id) REFERENCES `statuses` (id) ON DELETE CASCADE,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES `users` (id) ON DELETE SET NULL
);