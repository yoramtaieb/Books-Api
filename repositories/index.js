// Repositories dépendencies
const models = require("../db/models/index");

// Repositories
const book_repository = require("./book");
const categorie_repository = require('./categorie');
const genre_repository = require('./genre');


// create a repositories object for map all the repositories
const repositories = {
  book: book_repository(models),
  categorie: categorie_repository(models),
  genre: genre_repository(models)
};

// export our repositories object
module.exports = repositories;
