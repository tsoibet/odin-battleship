import Ship from "./Ship";

export default class Gameboard {
  constructor() {
    let map = [];
    for (let i = 0; i < 10; i++) {
      let row = []
      for (let j = 0; j < 10; j++) {
        let unit = {
          ship: null,
          attacked: false
        };
        row.push(unit);
      }
      map.push(row);
    }
    this._map = map;
    this._ships = [];
  }

  get map() {
    return this._map;
  }

  get ships() {
    return this._ships;
  }

  placeShip(length, direction, [x, y]) {
    let ship = new Ship(length);
    if (direction === 'horizontal') {
      for (let i = y + length - 1; i >= y; i--) {
        this.map[x][i]['ship'] = ship;
      }
    } else {
      for (let i = x + length - 1; i >= x; i--) {
        this.map[i][y]['ship'] = ship;
      }
    }
    this.ships.push(ship);
  }

  receiveAttack([x, y]) {
    if (this.map[x][y]['ship'] !== null) {
      this.map[x][y]['ship'].gotHit();
    }
    this.map[x][y]['attacked'] = true;
  }

  allSunk() {
    for (let ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
}