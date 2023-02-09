import Gameboard from "./Gameboard";
import Ship from "./Ship";

export default class Player {
    constructor(name = 'Player') {
        this.name = name;
        this.ships = [];
        this.gameboard = new Gameboard();
        this.attacked = [];
        this.createDefaultShips();
    }

    createDefaultShips() {
        const ship01 = new Ship(4);
        const ship02 = new Ship(3);
        const ship03 = new Ship(2);
        const ship04 = new Ship(1);
        const ship05 = new Ship(1);
        this.ships = [ship01, ship02, ship03, ship04, ship05];
    }

    getAttackCoor([x, y]) {
        if (x < 0 || x > 9 || y < 0 || y > 9) {
            throw new Error('Target is out of map!');
        }
        if (this.attacked.includes(JSON.stringify([x, y]))) {
            throw new Error('Target has been already attacked!');
        }
        return [x, y];
    }

    recordAttack([x, y]) {
        this.attacked.push(JSON.stringify([x, y]));
    }

    lose() {
    for (let ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
}

export class Computer extends Player {
    constructor() {
        super('Computer');
    }
    
    getAttackCoor() {
        let pos = [getRandomInt(9), getRandomInt(9)];
        while (this.attacked.includes(JSON.stringify(pos))) {
            pos = [getRandomInt(9), getRandomInt(9)];
        }
        return pos;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }