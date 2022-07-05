-- Active: 1656509809949@@35.226.146.116@3306@silveira-21814389-mariana-lima
CREATE TABLE Labook_users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

SELECT * FROM Labook_users;

CREATE TABLE Labook_posts (
    id VARCHAR(255) PRIMARY KEY,
    photo VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    type ENUM("Normal", "Event") DEFAULT "Normal",
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id VARCHAR(255),
    FOREIGN KEY(author_id) REFERENCES Labook_users(id)
);

SELECT * FROM Labook_posts;