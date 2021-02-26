// service dépendencies
const repositories = require("../repositories/index");

// services
const book_service = require("./book");
const categorie_service = require('./categorie');
const genre_service = require('./genre');


// create a services object for map all the services
const services = {
  book: book_service(repositories),
  categorie: categorie_service(repositories),
  genre: genre_service(repositories)
};

// export our service object
module.exports = services;
