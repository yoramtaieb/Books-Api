module.exports = (express, controllers) => {
  const book_route = require("./book");
  const categorie_route = require("./categorie");
  const genre_route = require('./genre');

  const routes = [
    book_route(express, controllers),
    categorie_route(express, controllers),
    genre_route(express, controllers)
  ];

  return routes;
};
