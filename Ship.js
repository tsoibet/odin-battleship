export default class Ship {
  constructor(length = 1, direction = 'horizontal') {
    this._length = length;
    this._direction = direction;
    this._hit = 0;
  }

  get length() {
    return this._length;
  }

  get direction() {
    return this._direction;
  }

  get hit() {
    return this._hit;
  }

  set direction(direction) {
    if (direction === 'horizontal' || direction === 'vertical') {
      this._direction = direction;
    } else {
      throw new Error('Direction should be either horizontal or vertical!');
    }
  }

  gotHit(times = 1) {
    this._hit += times;
  }

  isSunk() {
    return this.hit >= this.length;
  }
}
