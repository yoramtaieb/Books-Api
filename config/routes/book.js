module.exports = (express, controllers) => {
  const router = express.Router();

  router.route("/book").get(controllers.book.getAll);
  router.route("/book/:id").get(controllers.book.getById);

  return router;
};
