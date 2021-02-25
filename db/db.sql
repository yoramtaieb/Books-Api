CREATE DATABASE IF NOT EXISTS BooksStore;

USE BooksStore;
CREATE TABLE IF NOT EXISTS User (
  id INT(11) PRIMARY KEY NOT NULL,
  username VARCHAR(55),
  email VARCHAR(55),
  password VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Category (
  id INT(11) PRIMARY KEY NOT NULL,
  name VARCHAR(55)
);

CREATE TABLE IF NOT EXISTS Book (
  id INT(11) PRIMARY KEY NOT NULL,
  name VARCHAR(55),
  idCategory INT(11),
  FOREIGN KEY (idCategory) REFERENCES Category(id)
  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Rental (
  id INT(11) PRIMARY KEY NOT NULL,
  idUser INT(11),
  idBook INT(11),
  date DATETIME,
  FOREIGN KEY (idUser) REFERENCES User(id)
  ON DELETE CASCADE,
  FOREIGN KEY (idBook) REFERENCES Book(id)
  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Wishlist (
  id INT(11) PRIMARY KEY NOT NULL,
  idUser INT(11),
  idBook INT(11),
  FOREIGN KEY (idUser) REFERENCES User(id)
  ON DELETE CASCADE,
  FOREIGN KEY (idBook) REFERENCES Book(id)
  ON DELETE CASCADE
);

INSERT INTO Category (`id`, `name`) VALUES
('1', 'Action'),
('2', 'Roman'),
('3', 'Policier'),
('4', 'Science-fiction');

INSERT INTO Book (`id`, `name`, `idCategory`) VALUES
('1', 'Les maladies', '2'),
('2', 'Arsene Lupin', '3'),
('3', 'Retour vers le futur', '4'),
('4', 'Mission Impossible', '1');
