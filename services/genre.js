module.exports = (repositories) => {
  const genre_service = {
    getAll: async (data) => {
      return repositories.genre.getAll();
    },
  };

  return genre_service;
};