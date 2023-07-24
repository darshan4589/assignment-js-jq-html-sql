use sakila;
#Find all customers order between 1 Aug to 15 Aug with count=
select rental_date as orders_bet_1_to_15_aug from rental where rental_date between '2005-08-01' and '2005-08-15' order by rental_date desc limit 20;

#Select all orders of customers whose quantity is greater than 100
select customer_id, count(customer_id) from rental group by customer_id order by count(customer_id) desc limit 20;
 
#Find customers products
select r.customer_id,i.film_id ,f.title,concat(c.first_name," ",c.last_name)as customer_name from rental r inner join inventory i on(i.inventory_id=r.inventory_id) join film f on (f.film_id=i.film_id) join customer c on (c.customer_id=r.customer_id)   order by r.customer_id limit 10;

#Write a query to fetch total price of all the products ordered by each customer=
select r.customer_id,i.film_id ,f.title,concat(c.first_name," ",c.last_name),p.amount from rental r inner join inventory i on(i.inventory_id=r.inventory_id) join film f on (f.film_id=i.film_id) join customer c on (c.customer_id=r.customer_id) join payment p on (p.customer_id=c.customer_id)  order by r.customer_id limit 10;



- 1st querry
SELECT DATE(r.rental_date) AS orders_bet_1_to_15_aug, CONCAT(c.first_name, " ", c.last_name) AS name, COUNT(r.rental_id) AS repeated_count FROM rental r INNER JOIN customer c ON r.customer_id = c.customer_id WHERE rental_date BETWEEN '2005-08-01' AND '2005-08-15' GROUP BY orders_bet_1_to_15_aug, c.customer_id ORDER BY orders_bet_1_to_15_aug, repeated_count DESC LIMIT 20;
SELECT DATE(rental_date), COUNT(DATE(rental_date)) FROM rental where rental_date between '2005-08-1' and '2005-08-15' group by date( rental_date);
-- 2nd querry
select customer_id, count(customer_id ) as NO_OF_ORDERS from payment group by customer_id having count(customer_id)>40 limit 20;
-- 3rd querry
select r.customer_id,i.film_id ,f.title,concat(c.first_name," ",c.last_name)as customer_name from rental r inner join inventory i on(i.inventory_id=r.inventory_id) join film f on (f.film_id=i.film_id) join customer c on (c.customer_id=r.customer_id)   order by r.customer_id limit 10;
-- 4th querry
select r.customer_id,i.film_id ,f.title,concat(c.first_name," ",c.last_name),p.amount from rental r inner join inventory i on(i.inventory_id=r.inventory_id) join film f on (f.film_id=i.film_id) join customer c on (c.customer_id=r.customer_id) join payment p on (p.customer_id=c.customer_id)  order by r.customer_id limit 10;


