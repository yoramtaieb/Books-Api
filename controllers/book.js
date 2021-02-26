module.exports = (services) => {
  const book_controller = {
    getAll: async (req, res) => {
      let result = await services.book.getAll();
      res.send(result);
    },
    getById: async (req, res) => {
      const id = req.params.id;
      let result = await services.book.getById(id);
      console.log(result);
      res.send(result);
    },
  };

  return book_controller;
};
