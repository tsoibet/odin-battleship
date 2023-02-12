import start from "./Game";

export default function renderHomepage(game) {
    const body = document.querySelector("body");
    body.textContent = "";

    const container = document.createElement("div");
    container.classList.add('container');

    const header = document.createElement("div");
    header.classList.add('header');
    header.textContent = "Battleship";
    container.appendChild(header);

    const main = document.createElement("div");
    main.classList.add('main');
    const messageBox = document.createElement("div");
    messageBox.classList.add('messageBox');
    const message = document.createElement("div");
    message.classList.add('message');
    message.textContent = 'Click start button.';
    messageBox.appendChild(message);
    main.appendChild(messageBox);

    const battleScreen = document.createElement("div");
    battleScreen.classList.add('battleScreen');
    const endScreen = document.createElement("div");
    endScreen.classList.add('endScreen');
    endScreen.classList.add('invisible');
    const restartButton = document.createElement("div");
    restartButton.classList.add('restart');
    restartButton.classList.add('button');
    restartButton.classList.add('invisible');
    restartButton.textContent = 'Play again';
    restartButton.addEventListener('click', start);
    endScreen.appendChild(restartButton);
    battleScreen.appendChild(endScreen);
    const startScreen = document.createElement("div");
    startScreen.classList.add('startScreen');
    const startButton = document.createElement("div");
    startButton.classList.add('start');
    startButton.classList.add('button');
    startButton.textContent = 'Start';
    startButton.addEventListener('click', hideStartScreen);
    startScreen.appendChild(startButton);
    battleScreen.appendChild(startScreen);

    const playerGameboard = document.createElement("div");
    playerGameboard.classList.add('Player');
    playerGameboard.classList.add('gameboard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const unit = document.createElement('div');
            unit.x = i;
            unit.y = j;
            unit.classList.add('unit');
            playerGameboard.appendChild(unit);
        }
    }
    battleScreen.appendChild(playerGameboard);
    const playerName = document.createElement("div");
    playerName.classList.add('name');
    playerName.textContent = `${game.player.name}`;
    battleScreen.appendChild(playerName);
    const computerGameboard = document.createElement("div");
    computerGameboard.classList.add('Computer');
    computerGameboard.classList.add('gameboard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const unit = document.createElement('div');
            unit.x = i;
            unit.y = j;
            unit.classList.add('unit');
            unit.addEventListener('click', () => {
                game.takeTurns([unit.x, unit.y]);
            });
            computerGameboard.appendChild(unit);
        }
    }
    battleScreen.appendChild(computerGameboard);
    const computerName = document.createElement("div");
    computerName.classList.add('name');
    computerName.textContent = `${game.computer.name}`;
    battleScreen.appendChild(computerName);
    main.appendChild(battleScreen);
    container.appendChild(main);

    const footer = document.createElement("div");
    footer.classList.add('footer');
    footer.textContent = "Created by Betsy @ The Odin Project 2023";
    container.appendChild(footer);

    body.appendChild(container);
}

export function updateGameboard(game) {
    updatePlayerGameboard(game.player);
    updateComputerGameboard(game.computer);
}

function updatePlayerGameboard(player) {
    const units = document.querySelectorAll('.Player .unit');
    units.forEach(unit => {
        unit.textContent = '';
        if (player.gameboard.map[unit.x][unit.y]['ship']) {
            const ship = document.createElement('div');
            ship.classList.add('ship');
            unit.appendChild(ship);
        }
        if (player.gameboard.map[unit.x][unit.y]['attacked']) {
            const attacked = document.createElement('div');
            attacked.classList.add('attacked');
            unit.appendChild(attacked);
        }
    });
}

function updateComputerGameboard(computer) {
    const units = document.querySelectorAll('.Computer .unit');
    units.forEach(unit => {
        unit.textContent = '';
        if (computer.gameboard.map[unit.x][unit.y]['attacked']) {
            const attacked = document.createElement('div');
            attacked.classList.add('attacked');
            unit.appendChild(attacked);
            if (computer.gameboard.map[unit.x][unit.y]['ship']) {
                const ship = document.createElement('div');
                ship.classList.add('ship');
                unit.appendChild(ship);
            }
        }
    });
}

export function displayMessage(text) {
    const message = document.querySelector('.message');
    message.textContent = text;
}

export function showEndScreen() {
    const endScreen = document.querySelector('.endScreen');
    endScreen.classList.remove('invisible');
    const restartButton = document.querySelector('.restart.button');
    restartButton.classList.remove('invisible');
}

function hideStartScreen() {
    const startScreen = document.querySelector('.startScreen');
    startScreen.classList.add('invisible');
    const startButton = document.querySelector('.start.button');
    startButton.classList.add('invisible');
}
