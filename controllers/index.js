// controllers dépendencies
const services = require("../services/index");

// controllers

const book_controller = require("./book");

// create a controllers object for map all the controllers
const controllers = {
  book: book_controller(services),
};

// export our controllers object
module.exports = controllers;
