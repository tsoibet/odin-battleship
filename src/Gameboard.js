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
  }

  get map() {
    return this._map;
  }

  placeShip(ship, [x, y]) {
    const errMsg = 'There is not enough space to place the ship!';
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      throw new Error(errMsg);
    }
    if (ship.direction === 'horizontal') {
      if (y + ship.length - 1 > 9) {
        throw new Error(errMsg);
      }
      for (let i = y + ship.length - 1; i >= y; i--) {
        if (this.map[x][i]['ship']) {
          throw new Error(errMsg);
        }
      }
    } else {
      if (x + ship.length - 1 > 9) {
        throw new Error(errMsg);
      }
      for (let i = x + ship.length - 1; i >= x; i--) {
        if (this.map[i][y]['ship']) {
          throw new Error(errMsg);
        }
      }
    }
    if (ship.direction === 'horizontal') {
      for (let i = y + ship.length - 1; i >= y; i--) {
        this.map[x][i]['ship'] = ship;
      }
    } else {
      for (let i = x + ship.length - 1; i >= x; i--) {
        this.map[i][y]['ship'] = ship;
      }
    }
  }

  receiveAttack([x, y]) {
    if (this.map[x][y]['ship'] !== null) {
      this.map[x][y]['ship'].gotHit();
    }
    this.map[x][y]['attacked'] = true;
  }
}