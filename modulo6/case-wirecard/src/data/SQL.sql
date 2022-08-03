-- Active: 1656509809949@@35.226.146.116@3306@silveira-21814389-mariana-lima
CREATE TABLE user_wirecard (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    cpf VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

SELECT * FROM user_wirecard;

CREATE TABLE card_wirecard (
    id VARCHAR(255) PRIMARY KEY,
    number VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    expiration DATE NOT NULL,
    CVV VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user_wirecard(id)
);

SELECT * FROM card_wirecard;

CREATE TABLE payment_wirecard (
    id VARCHAR(255) PRIMARY KEY,
    amount INT NOT NULL,
    payment VARCHAR(255) NOT NULL,
    credit_card VARCHAR(255),
    payment_situation ENUM("Paid", "Waiting Payment") DEFAULT "Waiting Payment",
    id_ticket VARCHAR(255),
    user_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user_wirecard(id)
);

SELECT * FROM payment_wirecard;
