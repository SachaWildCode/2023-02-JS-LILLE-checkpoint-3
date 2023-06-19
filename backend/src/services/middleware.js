const tileExists = async (req, res, next) => {
  try {
    const boat = await req.body;
    if (
      boat.coord_x >= 0 &&
      boat.coord_x <= 11 &&
      boat.coord_y >= 0 &&
      boat.coord_y <= 5
    ) {
      next();
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = { tileExists };
