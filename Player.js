import Gameboard from "./Gameboard";

export default class Player {
    constructor(name = 'Player') {
        this.name = name;
        this.gameboard = new Gameboard();
        this.attacked = [];
    }

    sendAttack([x, y], callback) {
        if (x < 0 || x > 9 || y < 0 || y > 9) {
            throw new Error('Target is out of map!');
        }
        if (this.attacked.includes(JSON.stringify([x, y]))) {
            throw new Error('Target has been already attacked!');
        }
        callback([x, y]);
        this.attacked.push(JSON.stringify([x, y]));
    }
}

export class Computer extends Player {
    constructor() {
        super('Computer');
    }
    
    choosePosition() {
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