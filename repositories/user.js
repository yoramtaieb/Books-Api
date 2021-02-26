module.exports = (models) => {
  const user_repository = {
    signup: async (data) => {
      return models.user.query(
        "INSERT INTO User (username, email, password) VALUES (?, ?, ?)",
        data
      );
    },
  };

  return user_repository;
};
