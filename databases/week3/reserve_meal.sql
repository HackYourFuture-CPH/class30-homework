CREATE DATABASE meal_reserve_share;

USE meal_reserve_share;

CREATE TABLE Meal (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(255) NOT NULL,
  meal_time DATETIME,  
  max_reservation INT NOT NULL,
  price DECIMAL(5,2),
  create_date DATE
);


CREATE TABLE Reservation(
  id INT PRIMARY KEY AUTO_INCREMENT,
  number_of_guests INT NOT null,
  meal_id INT NOT NULL,
  Foreign Key (meal_id) REFERENCES Meal (id)
  ON UPDATE CASCADE 
  ON DELETE CASCADE,
  create_date DATE NOT null ,
  contact_phonenumber VARCHAR(50) NOT NULL,
  contact_name VARCHAR(50) NOT NULL,
  contact_email VARCHAR(255) NOT NULL
);

CREATE TABLE Review (
  id INT PRIMARY KEY AUTO_INCREMENT, 
  title VARCHAR(50) NOT NULL,
  desciption TEXT,
  meal_id INT,
  Foreign Key (meal_id) REFERENCES Meal (id)
  ON UPDATE CASCADE 
    ON DELETE CASCADE,
  stars int,
  create_date DATE NOT NULL
)



SELECT * from meal;

INSERT INTO meal(title,description,location,meal_time,max_reservation,price,create_date)
VALUES('Lasagna',' is a type of pasta','italian','2025-02-22 08:20:00',30,70,'2025-02-22');


SELECT * 
from meal
WHERE id=1;

UPDATE meal
SET title= "kobideh kabab", price=80, max_reservation=60
where id=1;

DELETE from meal
where id =1;

select * from reservation;
 

insert into reservation(number_of_guests, meal_id, create_date, contact_phonenumber, contact_name, contact_email)
values(2,4,"2025-02-20","52845214","hossein","hossein@gmail.com");

select * 
from reservation
WHERE id=1

UPDATE reservation
set number_of_guests=5, create_date="2025-02-17"
WHERE id =1;

DELETE from reservation
WHERE id =1;


select * from review;

insert into review(title, desciption, meal_id, stars, create_date)
values("good deal "," A truly delightful and satisfying meal",4,3,"2025-02-17");

select *
from review
WHERE id=1;

UPDATE review
SET title="flavor", stars=5
WHERE id=1;

DELETE from review
WHERE id=1;

 select * from meal
 where price<90;


 select * 
 from meal m
 join reservation r
 where m.id= r.meal_id and r.number_of_guests<m.max_reservation 
 


SELECT 
    m.title, 
    m.max_reservation - COALESCE(SUM(r.number_of_guests), 0) aS number_orders_available, 
    m.price
FROM meal m
LEFT JOIN reservation r ON m.id = r.meal_id
GROUP BY m.id, m.title, m.max_reservation, m.price
HAVING COALESCE(SUM(r.number_of_guests), 0) < m.max_reservation;


select * 
from meal
where title LIKE "%Rød grød med fløde%";

SELECT * 
from meal
WHERE create_date  BETWEEN "2025-02-18"and "2025-02-20";


SELECT *
from meal
LIMIT 5;

SELECT m.title, m.price,r.stars
FROM meal m
JOIN review  r
on m.id= r.meal_id
where r.stars=(SELECT MAX(stars) 
    FROM review
    WHERE meal_id = m.id);


select * 
from reservation
where id=2
ORDER by create_date;

SELECT m.title,m.price, AVG(r.stars) as avrage_stars
from meal m
JOIN review r
on m.id=r.meal_id
GROUP BY m.id
ORDER BY avrage_stars ;