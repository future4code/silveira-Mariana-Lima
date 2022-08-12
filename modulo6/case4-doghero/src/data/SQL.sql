-- Active: 1656509809949@@35.226.146.116@3306@silveira-21814389-mariana-lima
CREATE TABLE user_doghero(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

SELECT * FROM user_doghero;

CREATE TABLE doghero_dogWalking(
        id VARCHAR(255) PRIMARY KEY NOT NULL,
        status ENUM("Do", "Doing", "Done") DEFAULT "Do",
        date VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        duration VARCHAR(255) NOT NULL,
        latitude VARCHAR(255) NOT NULL,
        longitude VARCHAR(255) NOT NULL,
        pets INT NOT NULL, 
        start_time VARCHAR(255) NOT NULL,
        end_time VARCHAR(255) NOT NULL
);
SELECT * FROM doghero_dogWalking;

