module.exports = (models) => {
  const book_repository = {
    getAll: async (data) => {
      return models.book.query("select * from Book");
    },

    getById: async (id) => {
      return models.book.query(`SELECT * FROM Book WHERE id = ${id}`);
    }
  };

  return book_repository;
};
