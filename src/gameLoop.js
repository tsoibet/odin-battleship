import Player, { Computer } from "./Player.js";

const player = new Player();
const computer = new Computer();

for (let ship of player.ships) {
    let a = prompt(`Place a ${ship.length}-unit-long ship: enter x coordinate`);
    let b = prompt(`Place a ${ship.length}-unit-long ship: enter y coordinate`);
    player.gameboard.placeShip(ship, [Number(a), Number(b)]);
}

// Computer ships are placed with predetermined coordinates at this stage
computer.gameboard.placeShip(computer.ships[0], [5, 1]);
computer.gameboard.placeShip(computer.ships[1], [3, 5]);
computer.gameboard.placeShip(computer.ships[2], [5, 6]);

function isEnd() {
    return (player.lose() || computer.lose())
}

let turn = 1;
while (!isEnd()) {
    if (turn % 2) {
        let x = prompt("Please enter x coordinate");
        let y = prompt("Please enter y coordinate");
        let pos = player.getAttackCoor([x, y]);
        computer.gameboard.receiveAttack(pos);
        player.recordAttack(pos);
        alert(`You attacked ${pos}!`);
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

console.log(player.gameboard.map);
console.log(computer.gameboard.map);
console.log(computer.attacked);