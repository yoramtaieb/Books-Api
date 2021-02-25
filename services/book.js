module.exports = (repositories) => {
  const book_service = {
    getAll: async (data) => {
      return repositories.book.getAll();
    },
  };

  return book_service;
};
