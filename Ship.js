export default class Ship {
  constructor(length = 1) {
    this.length = length;
    this.hit = 0;
  }

  gotHit() {
    this.hit += 1;
  }

  isSunk() {
    return this.hit >= this.length;
  }
}
