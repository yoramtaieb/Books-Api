// controllers dépendencies
const services = require("../services/index");

// controllers

const book_controller = require("./book");
const user_controller = require("./user");
const categorie_controller = require("./categorie");
const genre_controller = require("./genre");

// create a controllers object for map all the controllers
const controllers = {
  book: book_controller(services),
  user: user_controller(services),
  categorie: categorie_controller(services),
  genre: genre_controller(services)
};

// export our controllers object
module.exports = controllers;
