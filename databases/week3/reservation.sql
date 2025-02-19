CREATE TABLE Reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  meal_id INT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (meal_id) REFERENCES Meals(id) ON DELETE CASCADE
);

select * from Reservations;

INSERT INTO Reservations (name, email, phone) 
VALUES ('John Doe', 'john@example.com', '1234567890');

select * from Reservations where id = 1;

update Reservations 
set name = 'Jane Doe', email = 'jane.doe@example.com', phone = '0987654321' 
where id = 1;

delete from Reservations where id = 1;
