module.exports = (models) => {
  const genre_repository = {
    getAll: async (data) => {
      return models.book.query("SELECT * FROM Genre");
    },
  };

  return genre_repository;
};