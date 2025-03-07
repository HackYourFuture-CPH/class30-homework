--Get all the tasks assigned to users whose email ends in @spotify.com
select * from task
join user_task on task_id = user_task.task_id
join user on user_task.task_id = user.id
where user.email like '%@spotify.com';


--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT * 
FROM task 
JOIN user_task ON task.id = user_task.task_id
join user on user_id = user.id
JOIN status on status_id = status.id
where user.name = 'Donald Duck' and status.name = 'not started';


--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select * from task
join user_task on task.id = user_task.task_id
join user on user.id = user_task.user_id
where user.name = 'Maryrose Meadows' and month(created) = 9;


--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTH(created) AS month,
COUNT(*) AS task_amount
FROM task
GROUP BY month;