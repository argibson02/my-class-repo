-- Write your schema here --
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db


DROP TABLE IF EXISTS product_t;
CREATE TABLE product_t (
    id INT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    category_name VARCHAR(30) NOT NULL,
    price INT NOT NULL,
    instock BOOLEAN NOT NULL
);


DROP TABLE IF EXISTS categories_t;
CREATE TABLE categories_t (
    id INT NOT NULL,
    category_name VARCHAR(30) NOT NULL
);


INSERT INTO product_t (id, product_name, category_name, price, instock)
VALUES
(001, "Ajax", "Cleaners", 2.99, true),
(002, "Mr Clean", "Cleaners", 4.99, true),
(003, "Pine Sol", "Cleaners", 1.99, true);

SELECT * FROM product_t;


INSERT INTO categories_t(id, category_name)
VALUES
    (001, "Cleaners"),
    (002, "Not Cleaners");
    SELECT * FROM categories_t;