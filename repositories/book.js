module.exports = (models) => {
  const book_repository = {
    getAll: async (data) => {
      return models.book.query("select * from Book");
    },
    getById: async (id) => {
      return models.book.query("select * from Book where id = ? LIMIT 1", [id]);
    },
    getByName: async (name) => {
      return models.book.query("select * from Book where name = ? LIMIT 1", [
        name,
      ]);
    },
  };

  return book_repository;
};
