use hyf_db

select * from tasks AS ta
inner JOIN
`user` as us
where us.email like '%@spotify.com%'


SELECT t.*, u.email 
FROM task t
LEFT JOIN `user` u ON t.user_id = u.id
WHERE u.email LIKE '%@spotify.com%';



SELECT *
FROM task 
inner JOIN status 
ON task.status_id =  status.id
where status.name like '%Not started%'


SELECT *
FROM task 
 JOIN status 
ON task.status_id =  status.id
 join user
on task.user_id = user.id
where user.name like '%Donald Duck%'
and status.name like '%Not started%'



insert into task (title, description, created, updated, status_id, due_date, user_id)
VALUES ("Just To test number2", "test if the joining tables works", Now(), NOW(), 2, "2025-03=01", 11  )


select title, description, created, user.name from task
inner join `user` 
on task.user_id = user.id
where MONTH(created) = 9
and user.name = "Maryrose Meadows"


select count(title) as Count_Of_Task, MONTH(created) as Created_on_Month, MONTHNAME(created) as Name_of_Month from task
group by MONTH(created), MONTHNAME(created)




SELECT * from `user` where user.id = 11

SELECT * from status