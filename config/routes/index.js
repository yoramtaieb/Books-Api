module.exports = (express, controllers) => {
  const book_route = require("./book");

  const routes = [book_route(express, controllers)];

  return routes;
};
