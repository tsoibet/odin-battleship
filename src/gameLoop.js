import Player, { Computer } from "./Player.js";

export default function start() {
    const player = new Player();
    const computer = new Computer();

    for (let ship of player.ships) {
        let a = prompt(`Place a ${ship.length}-unit-long ship: enter x coordinate`);
        let b = prompt(`Place a ${ship.length}-unit-long ship: enter y coordinate`);
        let done = player.gameboard.placeShip(ship, [Number(a), Number(b)]);
        while (!done) {
            alert(`The ship cannot be placed on ${[a, b]}. Please choose again.`);
            a = prompt(`Place a ${ship.length}-unit-long ship: enter x coordinate`);
            b = prompt(`Place a ${ship.length}-unit-long ship: enter y coordinate`);
            done = player.gameboard.placeShip(ship, [Number(a), Number(b)]);
        }
    }

    for (let ship of computer.ships) {
        let done = false;
        while (!done) {
            let pos = [getRandomInt(9), getRandomInt(9)];
            done = computer.gameboard.placeShip(ship, pos);
        }
    }

    let turn = 1;
    while (!(player.lose() || computer.lose())) {
        if (turn % 2) {
            let x = prompt("Please enter x coordinate");
            let y = prompt("Please enter y coordinate");
            let isLegal = player.getAttackCoor([x, y]);
            while (!isLegal) {
                alert(`Cannot attack ${[x, y]}. Please choose again.`);
                x = prompt("Please enter x coordinate");
                y = prompt("Please enter y coordinate");
                isLegal = player.getAttackCoor([x, y]);
            }
            computer.gameboard.receiveAttack([x, y]);
            player.recordAttack([x, y]);
            alert(`You attacked ${[x, y]}!`);
        } else {
            let pos = computer.getAttackCoor();
            player.gameboard.receiveAttack(pos);
            computer.recordAttack(pos);
            alert(`Computer attacked ${pos}!`);
        }
        turn += 1;
    }
    if (player.lose()) {
        alert(`${computer.name} Won!`);
    } else {
        alert(`${player.name} Won!`);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}