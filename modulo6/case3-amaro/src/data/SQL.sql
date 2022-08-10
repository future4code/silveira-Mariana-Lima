-- Active: 1656509809949@@35.226.146.116@3306@silveira-21814389-mariana-lima
CREATE TABLE user_amaro(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

SELECT * FROM user_amaro;

CREATE TABLE product_amaro(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    tags VARCHAR(255) NOT NULL
);

SELECT * FROM product_amaro;