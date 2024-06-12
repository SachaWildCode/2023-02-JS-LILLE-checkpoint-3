const express = require("express");

const router = express.Router();

const boatControllers = require("./controllers/boatsControllers");
const middleware = require("./services/middleware");

router.get("/boats", boatControllers.getByName);
router.put(
  "/boats/:id",
  middleware.tileExistsMiddleware,
  boatControllers.updateBoat
);

const tilesControllers = require("./controllers/tilesControllers");

router.get("/tiles", tilesControllers.getAll);

module.exports = router;
