CREATE TABLE Reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  meal_id INT,
  name VARCHAR(255) NOT NULL,
  review TEXT NOT NULL,
  stars INT NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (meal_id) REFERENCES Meals(id) ON DELETE CASCADE
);

select * from Reviews;

INSERT INTO Reviews (meal_id, name, review, stars) 
select id, 'Alice', 'Amazing meal and great company!', 5 
from Meals where id = 1;

select * from Reviews where id = 1;

update Reviews 
set name = 'Bob', review = 'Good food, but a bit noisy.', stars = 4 
where id = 1;

delete from Reviews where id = 1;
