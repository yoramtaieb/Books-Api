module.exports = (repositories) => {
  const book_service = {
    getAll: async (data) => {
      return repositories.book.getAll();
    },
    getById: async(id) => {
      const rows = repositories.book.getById(id);
      return rows[0];
    }
  };

  return book_service;
};
