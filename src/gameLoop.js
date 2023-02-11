import Player, { Computer } from "./Player.js";
import { displayMessage, renderHomepage, updateGameboard } from "./DOM.js";
import './styles.css'

const player = new Player();
const computer = new Computer();

// Player's ships are randomly placed on the gameboard at this stage
for (let ship of player.ships) {
    let done = false;
    while (!done) {
        let pos = [getRandomInt(9), getRandomInt(9)];
        done = player.gameboard.placeShip(ship, pos);
    }
}
for (let ship of computer.ships) {
    let done = false;
    while (!done) {
        let pos = [getRandomInt(9), getRandomInt(9)];
        done = computer.gameboard.placeShip(ship, pos);
    }
}

renderHomepage(player, computer);
updateGameboard(player, computer);
displayMessage(`Your turn.`);

export function attack(player, computer, [x, y]) {
    let isLegal = player.getAttackCoor([x, y]);
    if (!isLegal) {
        displayMessage(`Not here again! Pick another place.`);
        return;
    }
    computer.gameboard.receiveAttack([x, y]);
    player.recordAttack([x, y]);
    updateGameboard(player, computer);
    if (computer.lose()) {
        displayMessage(`Congratulations, you won!`);
    } else {
        let pos = computer.getAttackCoor();
        player.gameboard.receiveAttack(pos);
        computer.recordAttack(pos);
        displayMessage(`${computer.name} attacked ${pos}!`);
        updateGameboard(player, computer);
        if (player.lose()) {
            displayMessage(`${computer.name} Won. You lost.`);
        }
    }
    if (isEnd(player, computer)) {
        const endScreen = document.querySelector('.endScreen');
        endScreen.classList.add('visible');
    }
}

function isEnd(player, computer) {
    return (player.lose() || computer.lose()) ? true : false;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
