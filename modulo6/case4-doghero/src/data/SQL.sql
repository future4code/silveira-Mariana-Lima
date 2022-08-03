-- Active: 1656509809949@@35.226.146.116@3306@silveira-21814389-mariana-lima
CREATE TABLE IF NOT EXISTS dogWalking_doghero(
          id VARCHAR(255) PRIMARY KEY,
          status ENUM("Do", "Doing", "Done") DEFAULT "Do",
          date DATE NOT NULL,
          price FLOAT NOT NULL,
          latitude VARCHAR(255) NOT NULL,
          longitude VARCHAR(255) NOT NULL,
          duration ENUM("30", "60") NOT NULL,
          start_date timestamp NOT NULL,
          end_date timestamp NOT NULL
      );

SELECT * FROM dogWalking_doghero;

CREATE TABLE IF NOT EXISTS pets_doghero(
        id VARCHAR(255) PRIMARY KEY,
        pet_name VARCHAR(255) NOT NULL,
        pet_walk_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (pet_walk_id) REFERENCES dogWalking_doghero(id)
);

SELECT * FROM Pets;