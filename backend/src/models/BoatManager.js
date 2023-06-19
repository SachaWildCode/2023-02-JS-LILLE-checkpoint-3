const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findByName(name) {
    return this.connection.query(
      `SELECT * FROM tile JOIN ${this.table} ON boat.coord_X = tile.coord_X AND boat.coord_Y = tile.coord_Y where name = ?;`,
      [name]
    );
  }

  update(boat) {
    return this.connection.query(
      `update ${this.table} set coord_x = ?, coord_y = ? where id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
  }
}

module.exports = BoatManager;
