const tileExistsMiddleware = (req, res, next) => {
  try {
    const { coordX, coordY } = req.body;
    if (coordX >= 0 && coordX <= 11 && coordY >= 0 && coordY <= 5) {
      next();
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = { tileExistsMiddleware };
