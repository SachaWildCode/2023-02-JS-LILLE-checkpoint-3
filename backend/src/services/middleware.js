const tileExistsMiddleware = (req, res, next) => {
  /* eslint-disable camelcase */
  try {
    const { coord_x, coord_y } = req.body;
    if (coord_x >= 0 && coord_x <= 11 && coord_y >= 0 && coord_y <= 5) {
      next();
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = { tileExistsMiddleware };
