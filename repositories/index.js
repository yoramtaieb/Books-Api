// Repositories dépendencies
const models = require("../db/models/index");

// Repositories
const book_repository = require("./book");

// create a repositories object for map all the repositories
const repositories = {
  book: book_repository(models),
};

// export our repositories object
module.exports = repositories;
