module.exports = (repositories) => {
  const book_service = {
    getAll: async (data) => {
      return repositories.book.getAll();
    },
    getById: async (id) => {
      const rows = await repositories.book.getById(id);
      console.log(rows);
      return rows[0];
    },
    getByName: async (name) => {
      const rows = await repositories.book.getByName(name);
      console.log(rows);
      return rows[0];
    },
  };

  return book_service;
};
