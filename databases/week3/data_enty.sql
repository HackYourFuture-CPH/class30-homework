-- Insert data into meal table
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) VALUES
('Italian Pasta Night', 'Delicious homemade pasta with authentic Italian flavors.', 'Copenhagen', '2025-03-15', 10, 12.99, '2025-02-25'),
('Sushi Extravaganza', 'A night of fresh sushi and sashimi.', 'Aarhus', '2025-03-18', 8, 25.50, '2025-02-26'),
('Vegan Delight', 'A full-course vegan meal with organic ingredients.', 'Odense', '2025-03-20', 12, 18.75, '2025-02-27'),
('BBQ Feast', 'Slow-cooked BBQ meats with homemade sauces.', 'Aalborg', '2025-03-22', 15, 22.00, '2025-02-28'),
('Mexican Fiesta', 'Spicy and flavorful Mexican dishes.', 'Esbjerg', '2025-03-25', 10, 14.99, '2025-02-28'),
('Seafood Lovers', 'Fresh seafood straight from the coast.', 'Copenhagen', '2025-03-28', 6, 30.00, '2025-03-01'),
('French Cuisine Night', 'Classic French dishes paired with wine.', 'Aarhus', '2025-04-01', 10, 35.50, '2025-03-02'),
('Indian Curry Fest', 'A variety of authentic Indian curries.', 'Odense', '2025-04-03', 12, 16.50, '2025-03-03'),
('Burger Bonanza', 'Gourmet burgers with hand-cut fries.', 'Aalborg', '2025-04-06', 15, 13.99, '2025-03-04'),
('Taco Tuesday', 'All-you-can-eat tacos with fresh toppings.', 'Esbjerg', '2025-04-09', 20, 10.99, '2025-03-05'),
('Mediterranean Delights', 'A healthy and flavorful Mediterranean meal.', 'Copenhagen', '2025-04-12', 8, 19.99, '2025-03-06'),
('Korean BBQ Night', 'Grilled meats and classic Korean sides.', 'Aarhus', '2025-04-15', 10, 28.00, '2025-03-07'),
('Pizza Party', 'Wood-fired pizzas with fresh toppings.', 'Odense', '2025-04-18', 12, 15.50, '2025-03-08'),
('Steakhouse Special', 'Premium cuts of beef grilled to perfection.', 'Aalborg', '2025-04-21', 8, 40.00, '2025-03-09'),
('Greek Night', 'Greek dishes with fresh tzatziki and feta cheese.', 'Esbjerg', '2025-04-24', 10, 17.50, '2025-03-10'),
('Dim Sum Brunch', 'Traditional Chinese dumplings and buns.', 'Copenhagen', '2025-04-27', 10, 21.00, '2025-03-11'),
('Middle Eastern Feast', 'A mix of kebabs, hummus, and more.', 'Aarhus', '2025-04-30', 12, 23.50, '2025-03-12'),
('American Diner Experience', 'Classic American comfort food.', 'Odense', '2025-05-03', 15, 14.00, '2025-03-13'),
('Fusion Food Night', 'A mix of global flavors in one meal.', 'Aalborg', '2025-05-06', 10, 26.75, '2025-03-14'),
('Healthy Bowls', 'Nutrient-packed grain bowls with fresh ingredients.', 'Esbjerg', '2025-05-09', 12, 13.50, '2025-03-15');

-- Insert data into reservation table
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phone_number, contact_name, contact_email) VALUES
(2, 1, '2025-03-01', '12345678', 'Alice Johnson', 'alice@example.com'),
(3, 2, '2025-03-02', '23456789', 'Bob Smith', 'bob@example.com'),
(1, 3, '2025-03-03', '34567890', 'Charlie Brown', 'charlie@example.com'),
(4, 4, '2025-03-04', '45678901', 'David Lee', 'david@example.com'),
(2, 5, '2025-03-05', '56789012', 'Eve Adams', 'eve@example.com'),
(5, 6, '2025-03-06', '67890123', 'Frank Miller', 'frank@example.com'),
(3, 7, '2025-03-07', '78901234', 'Grace Kelly', 'grace@example.com'),
(1, 8, '2025-03-08', '89012345', 'Hank Green', 'hank@example.com'),
(2, 9, '2025-03-09', '90123456', 'Ivy Wilson', 'ivy@example.com'),
(4, 10, '2025-03-10', '12340987', 'Jack White', 'jack@example.com');

-- Insert data into review table
INSERT INTO review (title, description, meal_id, stars, created_date) VALUES
('Amazing Pasta', 'The best Italian pasta I’ve had in years!', 1, 5, '2025-03-16'),
('Sushi Heaven', 'Super fresh sushi, highly recommend!', 2, 5, '2025-03-19'),
('Great Vegan Options', 'Loved the variety of vegan dishes.', 3, 4, '2025-03-21'),
('Best BBQ Ever', 'The ribs were falling off the bone.', 4, 5, '2025-03-23'),
('Spicy and Delicious', 'Authentic Mexican flavors!', 5, 4, '2025-03-26'),
('So Fresh!', 'Amazing seafood, great atmosphere.', 6, 5, '2025-03-29'),
('French Elegance', 'A true taste of France.', 7, 5, '2025-04-02'),
('Perfectly Spiced', 'Best curry in town.', 8, 4, '2025-04-04'),
('Burger Bliss', 'Juicy and flavorful burgers.', 9, 5, '2025-04-07'),
('Taco Overload', 'So many tacos, all were delicious.', 10, 4, '2025-04-10');