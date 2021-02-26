module.exports = (repositories) => {
  const user_service = {
    signup: async (data) => {
      return repositories.user.signup(data);
    },
  };

  return user_service;
};
