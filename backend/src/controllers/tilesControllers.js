const models = require("../models");

const handleError = (res, err) => {
  console.error(err);
  res.sendStatus(500);
};

const getAll = async (req, res) => {
  try {
    const [result] = await models.tile.findAll();
    res.status(200).send(result);
  } catch (err) {
    handleError(res, err);
  }
};

module.exports = { getAll };
