const models = require("../models");

const getAll = async (req, res) => {
  try {
    const [result] = await models.tile.findAll();
    res.status(200).send(result);
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
};
module.exports = { getAll };
