// service dépendencies
const repositories = require("../repositories/index");

// services
const book_service = require("./book");

// create a services object for map all the services
const services = {
  book: book_service(repositories),
};

// export our service object
module.exports = services;
