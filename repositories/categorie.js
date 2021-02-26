module.exports = (models) => {
  const categorie_repository = {
    getAll: async (data) => {
      return models.book.query("SELECT * FROM Category");
    }
  };

  return categorie_repository;
};