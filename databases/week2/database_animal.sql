CREATE TABLE Farmers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Barns (
    id INT PRIMARY KEY AUTO_INCREMENT,
    location VARCHAR(255) NOT NULL,
    capacity INT NOT NULL
);

CREATE TABLE Animals (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    species VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    barn_id INT,
    FOREIGN KEY (barn_id) REFERENCES Barns(id) ON DELETE SET NULL
);

CREATE TABLE Farmer_Animal (
    farmer_id INT,
    animal_id INT,
    PRIMARY KEY (farmer_id, animal_id),
    FOREIGN KEY (farmer_id) REFERENCES Farmers(id) ON DELETE CASCADE,
    FOREIGN KEY (animal_id) REFERENCES Animals(id) ON DELETE CASCADE
);