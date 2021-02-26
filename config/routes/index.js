module.exports = (express, controllers) => {
  const book_route = require("./book"),
    user_route = require("./user");

  const routes = [
    book_route(express, controllers),
    user_route(express, controllers),
  ];

  return routes;
};
