// service dépendencies
const repositories = require("../repositories/index");
const bcrypt = require("bcrypt");

// services
const book_service = require("./book");
const user_service = require("./user");
const bcrypt_service = require("./bcrypt");
const categorie_service = require('./categorie');
const genre_service = require('./genre');

// create a services object for map all the services
const services = {
  book: book_service(repositories),
  user: user_service(repositories),
  cryptPassword: bcrypt_service(bcrypt),
  categorie: categorie_service(repositories),
  genre: genre_service(repositories)
};

// export our service object
module.exports = services;
