module.exports = (models) => {
  const book_repository = {
    getAll: async (data) => {
      return models.book.query("select * from Book");
    },
  };

  return book_repository;
};
