DROP DATABASE IF EXISTS cats_db;

CREATE DATABASE cats_db;

USE cats_db;

CREATE TABLE cats(
    id INT NOT NULL AUTO_INCREMENT,
    cat_name VARCHAR(225) NOT NULL,
    adopted BOOLEAN DEFAULT false NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO cats
(cat_name)
VALUES
('Macaroni'),
('MR. Fluffypants'),
('Kevin');

SELECT * FROM cats;