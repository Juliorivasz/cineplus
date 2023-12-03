const Premier = require("../models/premiers");

module.exports = {
  getPremiers: async (req, res, next) => {
    try {
      const premiers = await Premier.find();
      res.json(premiers);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};
