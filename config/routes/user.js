module.exports = (express, controllers) => {
  const router = express.Router();

  router.route("/user/signup").post(controllers.user.signup);

  return router;
};
