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

CREATE TABLE IF NOT EXISTS Genre (
  id INT(11) PRIMARY KEY NOT NULL,
  name VARCHAR(55)
);

CREATE TABLE IF NOT EXISTS BookCategory (
  id INT(11) PRIMARY KEY NOT NULL,
  idBook INT(11),
  idCategory INT(11),
  FOREIGN KEY(idBook) REFERENCES Book(id)
  ON DELETE CASCADE,
  FOREIGN KEY(idCategory) REFERENCES Category(id)
  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Book (
  id INT(11) PRIMARY KEY NOT NULL,
  name VARCHAR(55),
  idGenre INT(11),
  idBookCategory INT(11),
  author VARCHAR(55),
  FOREIGN KEY (idBookCategory) REFERENCES BookCategory(id)
  ON DELETE CASCADE,
  FOREIGN KEY(idGenre) REFERENCES Genre(id)
  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Rental (
  id INT(11) PRIMARY KEY NOT NULL,
  idUser INT(11),
  idBook INT(11),
  dateRent DATETIME,
  dateReturn DATETIME,
  FOREIGN KEY (idUser) REFERENCES User(id)
  ON DELETE CASCADE,
  FOREIGN KEY (idBook) REFERENCES Book(id)
  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Wishlist (
  id INT(11) PRIMARY KEY NOT NULL,
  idUser INT(11),
  idBook INT(11),
  dateCreate DATETIME,
  dateDel DATETIME,
  FOREIGN KEY (idUser) REFERENCES User(id)
  ON DELETE CASCADE,
  FOREIGN KEY (idBook) REFERENCES Book(id)
  ON DELETE CASCADE
);

INSERT INTO Category (`id`, `name`) VALUES
('1', 'Action'),
('2', 'Romance'),
('3', 'Policier'),
('4', 'Science-fiction');

INSERT INTO Genre (`id`, `name`) VALUES
('1', 'Roman'),
('2', 'BD'),
('3', 'Manga'),
('4', 'Poesie');


INSERT INTO BookCategory (`id`, `idBook`, `idCategory`) VALUES
('1', '1', '1'),
('2', '1', '4'),
('3', '2', '1'),
('4', '3', '3'),
('5', '4', '2'),
('6', '4', '1'),
('7', '4', '3');


INSERT INTO Book (`id`, `name`, `idGenre`, `idBookCategory`,`author`) VALUES
('1', 'Les maladies', '2', '1', 'My' ),
('2', 'Arsene Lupin', '3', '3','Yoram'),
('3', 'Retour vers le futur', '4', '2', 'Clement'),
('4', 'Mission Impossible', '1', '4', 'Inconnu');
