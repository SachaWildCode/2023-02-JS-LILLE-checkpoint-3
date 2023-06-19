const models = require("../models");

const getAll = async (req, res) => {
  try {
    const [result] = await models.boat.findAll();
    res.status(200).send(result);
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
};

const getByName = async (req, res) => {
  try {
    const { name } = req.query;
    const [result] = await models.boat.findByName(name);
    if (result[0] == null) {
      res.sendStatus(404);
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
};

const updateBoat = async (req, res) => {
  try {
    const boat = req.body;
    boat.id = parseInt(req.params.id, 10);
    const [result] = await models.boat.update(boat);
    if (result.affectedRow !== 0) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = { getAll, getByName, updateBoat };
