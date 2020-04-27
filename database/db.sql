CREATE DATABASE crudnode;


use crudnode;


CREATE TABLE customer(
  id INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(110) NOT NULL,
  phone VARCHAR(29)
);


SHOW TABLES;


describe customer;
