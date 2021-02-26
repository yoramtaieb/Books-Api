module.exports = (services) => {
  const user_controller = {
    signup: async (req, res) => {
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;
      try {
        if (!username || !email || !password)
          res.status(400).json("missing parameters");
        else {
          let hash = await services.cryptPassword.hashPassword(password);
          let result = await services.user.signup([username, email, hash]);
          res.status(201).json("new user registered");
        }
      } catch (err) {
        res.status(400).json(err);
      }
    },
  };

  return user_controller;
};
