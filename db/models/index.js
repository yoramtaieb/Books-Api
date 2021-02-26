// models dépendency
const db = require("../config");

// models
const Book = require("./book");
const User = require("./user");

// create a object models for map all the models
const models = {
  book: new Book(db),
  user: new User(db),
};

// export our model object
module.exports = models;
