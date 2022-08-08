-- Active: 1656509809949@@35.226.146.116@3306@silveira-21814389-mariana-lima
CREATE TABLE doghero_dogWalking(
        id VARCHAR(255) PRIMARY KEY NOT NULL,
        status ENUM("Do", "Doing", "Done") DEFAULT "Do",
        date DATE NOT NULL,
        price INT NOT NULL,
        duration INT NOT NULL,
        latitude INT NOT NULL,
        longitude INT NOT NULL,
        start_time TIME NOT NULL,
        end_time TIME NOT NULL
      );

SELECT * FROM doghero_dogWalking;

CREATE TABLE doghero_pets(
        id VARCHAR(255) PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        tutor VARCHAR(255) NOT NULL
);

SELECT * FROM doghero_pets;

CREATE TABLE doghero_pets_tour(
        id VARCHAR(255) PRIMARY KEY NOT NULL,
        pet_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (pet_id) REFERENCES doghero_pets (id),
        tour_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (tour_id) REFERENCES doghero_dogWalking (id)
)