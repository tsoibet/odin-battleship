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
    message.textContent = 'Randomize ship layout, click start.';
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
    const randomizeButton = document.createElement("div");
    randomizeButton.classList.add('randomize');
    randomizeButton.classList.add('button');
    randomizeButton.textContent = 'Randomize';
    randomizeButton.addEventListener('click', start);
    startScreen.appendChild(randomizeButton);
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
    battleScreen.appendChild(playerGameboard);
    const playerName = document.createElement("div");
    playerName.classList.add('name');
    playerName.textContent = `${game.player.name}`;
    battleScreen.appendChild(playerName);
    const computerGameboard = document.createElement("div");
    computerGameboard.classList.add('Computer');
    computerGameboard.classList.add('gameboard');
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
    updateComputerGameboard(game, game.computer);
}

function updatePlayerGameboard(player) {
    const playerGameboard = document.querySelector('.Player.gameboard');
    playerGameboard.textContent = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const unit = document.createElement('div');
            unit.setAttribute('data-x', i);
            unit.setAttribute('data-y', j);
            unit.classList.add('unit');
            playerGameboard.appendChild(unit);
        }
    }
    let renderedShips = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const unit = document.querySelector(`.Player .unit[data-x='${i}'][data-y='${j}']`);
            if (player.gameboard.map[unit.dataset.x][unit.dataset.y]['ship']) {
                const shipObj = player.gameboard.map[unit.dataset.x][unit.dataset.y]['ship'];
                if (!renderedShips.includes(shipObj)) {
                    const shipHead = document.createElement('div');
                    shipHead.classList.add('ship');
                    shipHead.classList.add('head');
                    shipHead.classList.add(shipObj.direction);
                    if (shipObj.isSunk()) {
                        shipHead.classList.add('sunk');
                    }
                    unit.appendChild(shipHead);
                    if (shipObj.length === 1) {
                        shipHead.classList.add('tail');
                    } else if (shipObj.direction === 'horizontal') {
                        for (let l = 1; l < shipObj.length - 1; l++) {
                            const adjUnit = document.querySelector(`.Player .unit[data-x='${i}'][data-y='${j + l}']`);
                            const shipBody = document.createElement('div');
                            shipBody.classList.add('ship');
                            shipBody.classList.add('body');
                            shipBody.classList.add(shipObj.direction);
                            if (shipObj.isSunk()) {
                                shipBody.classList.add('sunk');
                            }
                            adjUnit.appendChild(shipBody);
                       }
                       const lastUnit = document.querySelector(`.Player .unit[data-x='${i}'][data-y='${j + shipObj.length - 1}']`);
                       const shipTail = document.createElement('div');
                       shipTail.classList.add('ship');
                       shipTail.classList.add('tail');
                       shipTail.classList.add(shipObj.direction);
                       if (shipObj.isSunk()) {
                        shipTail.classList.add('sunk');
                        }
                       lastUnit.appendChild(shipTail);
                    } else if (shipObj.direction === 'vertical') {
                        for (let l = 1; l < shipObj.length - 1; l++) {
                            const adjUnit = document.querySelector(`.Player .unit[data-x='${i + l}'][data-y='${j}']`);
                            const shipBody = document.createElement('div');
                            shipBody.classList.add('ship');
                            shipBody.classList.add('body');
                            shipBody.classList.add(shipObj.direction);
                            if (shipObj.isSunk()) {
                                shipBody.classList.add('sunk');
                            }
                            adjUnit.appendChild(shipBody);
                       }
                       const lastUnit = document.querySelector(`.Player .unit[data-x='${i + shipObj.length - 1}'][data-y='${j}']`);
                       const shipTail = document.createElement('div');
                       shipTail.classList.add('ship');
                       shipTail.classList.add('tail');
                       shipTail.classList.add(shipObj.direction);
                       if (shipObj.isSunk()) {
                        shipTail.classList.add('sunk');
                        }
                       lastUnit.appendChild(shipTail);
                    }
                    renderedShips.push(shipObj);
                }
            }
            if (player.gameboard.map[unit.dataset.x][unit.dataset.y]['attacked']) {
                const attacked = document.createElement('div');
                attacked.classList.add('attacked');
                unit.appendChild(attacked);
            }
        }
    }
}

function updateComputerGameboard(game, computer) {
    const computerGameboard = document.querySelector('.Computer.gameboard');
    computerGameboard.textContent = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const unit = document.createElement('div');
            unit.setAttribute('data-x', i);
            unit.setAttribute('data-y', j);
            unit.classList.add('unit');
            unit.addEventListener('click', () => {
                game.takeTurns([i, j]);
            });
            computerGameboard.appendChild(unit);
        }
    }
    let renderedShips = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const unit = document.querySelector(`.Computer .unit[data-x='${i}'][data-y='${j}']`);
            if (computer.gameboard.map[i][j]['attacked']) {
                if (computer.gameboard.map[i][j]['ship']) {
                    const shipObj = computer.gameboard.map[i][j]['ship'];
                    if (!shipObj.isSunk()) {
                        const ship = document.createElement('div');
                        ship.classList.add('ship');
                        unit.appendChild(ship);
                    } else if (!renderedShips.includes(shipObj)){
                        const shipHead = document.createElement('div');
                        shipHead.classList.add('ship');
                        shipHead.classList.add('head');
                        shipHead.classList.add(shipObj.direction);
                        shipHead.classList.add('sunk');
                        unit.appendChild(shipHead);
                        if (shipObj.length === 1) {
                            shipHead.classList.add('tail');
                        } else if (shipObj.direction === 'horizontal') {
                            for (let l = 1; l < shipObj.length - 1; l++) {
                                const adjUnit = document.querySelector(`.Computer .unit[data-x='${i}'][data-y='${j + l}']`);
                                const shipBody = document.createElement('div');
                                shipBody.classList.add('ship');
                                shipBody.classList.add('body');
                                shipBody.classList.add(shipObj.direction);
                                shipBody.classList.add('sunk');
                                adjUnit.appendChild(shipBody);
                            }
                            const lastUnit = document.querySelector(`.Computer .unit[data-x='${i}'][data-y='${j + shipObj.length - 1}']`);
                            const shipTail = document.createElement('div');
                            shipTail.classList.add('ship');
                            shipTail.classList.add('tail');
                            shipTail.classList.add(shipObj.direction);
                            shipTail.classList.add('sunk');
                            lastUnit.appendChild(shipTail);
                        } else if (shipObj.direction === 'vertical') {
                            for (let l = 1; l < shipObj.length - 1; l++) {
                                const adjUnit = document.querySelector(`.Computer .unit[data-x='${i + l}'][data-y='${j}']`);
                                const shipBody = document.createElement('div');
                                shipBody.classList.add('ship');
                                shipBody.classList.add('body');
                                shipBody.classList.add(shipObj.direction);
                                shipBody.classList.add('sunk');
                                adjUnit.appendChild(shipBody);
                            }
                            const lastUnit = document.querySelector(`.Computer .unit[data-x='${i + shipObj.length - 1}'][data-y='${j}']`);
                            const shipTail = document.createElement('div');
                            shipTail.classList.add('ship');
                            shipTail.classList.add('tail');
                            shipTail.classList.add(shipObj.direction);
                            shipTail.classList.add('sunk');
                            lastUnit.appendChild(shipTail);
                        }
                        renderedShips.push(shipObj);
                    }
                }
                const attacked = document.createElement('div');
                attacked.classList.add('attacked');
                unit.appendChild(attacked);
            }
        }
    }
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
    const randomizeButton = document.querySelector('.randomize.button');
    randomizeButton.classList.add('invisible');
    displayMessage('Your turn.');
}
