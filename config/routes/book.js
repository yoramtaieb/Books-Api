module.exports = (express, controllers) => {
  const router = express.Router();

  router.route("/book").get(controllers.book.getAll);
  router.route("/book/:id").get(controllers.book.getById);
  router.route("/book/name/:name").get(controllers.book.getByName);

  return router;
};
