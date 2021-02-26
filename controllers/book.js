module.exports = (services) => {
  const book_controller = {
    getAll: async (req, res) => {
      let result = await services.book.getAll();
      res.send(result);
    },
    getById: async (req, res) => {
      const id = req.params.id;
      let result = await services.book.getById(id);
      res.send(result);
    },
    getByName: async (req, res) => {
      const name = req.params.name;
      let result = await services.book.getByName(name);
      res.send(result);
    },
  };

  return book_controller;
};
