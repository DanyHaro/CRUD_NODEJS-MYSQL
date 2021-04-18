
CREATE DATABASE crudnode;


use crudnode;


CREATE TABLE comprador(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(9)
);



SHOW TABLES;

describe comprador;









