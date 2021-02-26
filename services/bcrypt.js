module.exports = (bcrypt) => {
  const bcrypt_service = {
    hashPassword: async (data) => {
      const hash = await bcrypt.hash(data, 10);
      return hash;
    },
  };
  return bcrypt_service;
};
