-- Write your Schema Here -- 
DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;
USE restaurant_db;

DROP TABLE IF EXISTS customers_t;
CREATE TABLE customers_t (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS customers_order_t;
CREATE TABLE customers_order_t (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    order_details TEXT,
    FOREIGN KEY (customer_id)
    REFERENCES customers_t(id)
    ON DELETE SET NULL
);