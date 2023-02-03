export default class Ship {
  constructor(length = 1) {
    this._length = length;
    this._hit = 0;
  }

  get length() {
    return this._length;
  }

  get hit() {
    return this._hit;
  }

  gotHit(times = 1) {
    this._hit += times;
  }

  isSunk() {
    return this.hit >= this.length;
  }
}
