import Player, { Computer } from "./Player";
import renderHomepage, { displayMessage, enableDragDrop, showEndScreen, updateGameboard } from "./DOM";

export default function start() {
    const game = new Game();
    console.log(game);
    renderHomepage(game);
    updateGameboard(game);
    enableDragDrop(game);
}
class Game {
    constructor() {
        this.player = new Player();
        this.computer = new Computer();

        for (let ship of this.player.ships) {
            let done = false;
            while (!done) {
                let pos = [getRandomInt(10), getRandomInt(10)];
                if(this.player.gameboard.canPlaceShip(ship, pos)) {
                    this.player.gameboard.placeShip(ship, pos);
                    done = true;
                }
            }
        }
        for (let ship of this.computer.ships) {
            let done = false;
            while (!done) {
                let pos = [getRandomInt(10), getRandomInt(10)];
                if (this.computer.gameboard.canPlaceShip(ship, pos)) {
                    this.computer.gameboard.placeShip(ship, pos);
                    done = true;
                }
            }
        }
    }

    takeTurns = ([x, y]) => {
        let isLegal = this.player.getAttackCoor([x, y]);
        if (!isLegal) {
            displayMessage(`Not here again! Pick another place.`);
            return;
        }
        this.computer.gameboard.receiveAttack([x, y]);
        this.player.recordAttack([x, y]);
        updateGameboard(this);
        if (this.computer.lose()) {
            displayMessage(`Congratulations, you won!`);
        } else {
            let pos = this.computer.getAttackCoor();
            if (this.player.gameboard.receiveAttack(pos)) {
                displayMessage(`Your ship got hit!`);
            } else {
                displayMessage(`${this.computer.name}'s attack missed!`);
            }
            this.computer.recordAttack(pos);
            updateGameboard(this);
            if (this.player.lose()) {
                displayMessage(`${this.computer.name} Won. You lost.`);
            }
        }
        if (isEnd(this.player, this.computer)) {
            showEndScreen();
        }
    }
}

function isEnd(player, computer) {
    return (player.lose() || computer.lose()) ? true : false;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
