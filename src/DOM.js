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
    message.textContent = 'Drag on yellow marks to place ships.';
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
                    const shipDiv = document.createElement('div');
                    shipDiv.setAttribute('data-x', i);
                    shipDiv.setAttribute('data-y', j);
                    shipDiv.classList.add('ship');
                    shipDiv.classList.add(`length-${shipObj.length}`);
                    shipDiv.classList.add(shipObj.direction);
                    if (shipObj.isSunk()) {
                        shipDiv.classList.add('sunk');
                    }
                    unit.appendChild(shipDiv);
                    renderedShips.push(shipObj);
                }
            }
            if (player.gameboard.map[unit.dataset.x][unit.dataset.y]['attacked']) {
                const attacked = document.createElement('div');
                if (player.gameboard.map[unit.dataset.x][unit.dataset.y]['ship']) {
                    attacked.classList.add('fire');
                } else {
                    attacked.classList.add('sea');
                }
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
                const attacked = document.createElement('div');
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
                    attacked.classList.add('fire');
                } else {
                    attacked.classList.add('sea');
                }
                unit.appendChild(attacked);
            }
        }
    }
}

export function coverComputerGameboard() {
    const gameboard = document.querySelector('.Computer.gameboard');
    const cover = document.createElement('div');
    cover.classList.add('cover');
    gameboard.prepend(cover);
}

export function enableDragDrop(game) {
    let draggedShip;

    document.querySelectorAll('.Player .ship').forEach(item => {
        item.draggable = true;

        item.addEventListener('dragstart', (event) => {
            draggedShip = game.player.gameboard.map[Number(event.target.dataset.x)][Number(event.target.dataset.y)]['ship'];
            setTimeout(() => {
                event.target.classList.add('dragging');
            }, 0);
        });

        item.addEventListener('dragend', (event) => {
            if (event.target.classList.contains('dragging')) {
                event.target.classList.remove('dragging');
                displayMessage('Drop ship within your board.');
            }
        });
    });

    document.querySelectorAll('.Player .unit').forEach(item => {
        item.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        item.addEventListener('dragenter', (event) => {
            const x = Number(event.target.dataset.x);
            const y = Number(event.target.dataset.y);
            if (game.player.gameboard.canPlaceShip(draggedShip, [x, y])) {
                event.currentTarget.classList.add('canDrop');
            } else {
                event.currentTarget.classList.add('cannotDrop');
                
            }
        });

        item.addEventListener('dragleave', (event) => {
            if (event.target.classList.contains('canDrop')) {
                event.target.classList.remove('canDrop');
            }
            if (event.target.classList.contains('cannotDrop')) {
                event.target.classList.remove('cannotDrop');
            }
        });

        item.addEventListener('drop', (event) => {
            event.preventDefault();
            document.querySelector('.dragging').classList.remove('dragging');
            if (event.target.classList.contains('cannotDrop')) {
                event.target.classList.remove('cannotDrop');
            }
            const x = Number(event.currentTarget.dataset.x);
            const y = Number(event.currentTarget.dataset.y);
            if (game.player.gameboard.canPlaceShip(draggedShip, [x, y])) {
                game.player.gameboard.placeShip(draggedShip, [x, y]);
                updateGameboard(game);
                enableDragDrop(game);
                displayMessage('Successfully placed ship.');
            } else {
                displayMessage('Cannot place ship there.');
            }
        });
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
    const randomizeButton = document.querySelector('.randomize.button');
    randomizeButton.classList.add('invisible');
    for (const item of document.querySelectorAll(`[draggable='true']`)) {
        item.draggable = false;
    }
    displayMessage('Your turn.');
}
