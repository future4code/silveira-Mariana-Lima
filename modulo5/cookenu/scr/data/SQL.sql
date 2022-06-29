CREATE TABLE cookenu_user (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

SELECT * FROM cookenu_user;

CREATE TABLE cookenu_recipes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    creation DATE NOT NULL,
    user_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES cookenu_user(id)
);


SELECT * FROM cookenu_recipes;

CREATE TABLE cookenu_friends (
    id VARCHAR (255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    user_follow VARCHAR(255) NOT NULL UNIQUE,
    FOREIGN KEY (user_id) REFERENCES cookenu_user(id)
);

SELECT * FROM cookenu_friends; 