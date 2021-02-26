module.exports = (repositories) => {
  const categorie_service = {
    getAll: async (data) => {
      return repositories.categorie.getAll();
    },
  };

  return categorie_service;
};