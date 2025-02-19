CREATE TABLE Meals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(255) NOT NULL,
  max_reservations INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  meal_id INT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (meal_id) REFERENCES Meals(id) ON DELETE CASCADE
);

select * from Meals;

INSERT INTO Meals (title, description, location, max_reservations, price) 
VALUES ('Pasta Night', 'Enjoy a homemade Italian dinner', 'Aarhus', 10, 12.50);

select * from Meals where id = 1;

update Meals
set title = 'Updated Pasta Night', description = 'Updated description', price = 15.00 
where id = 1;

delete from Meals where id = 1;
