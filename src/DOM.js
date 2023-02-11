import {attack} from './gameLoop.js';

export function renderHomepage(player, computer) {
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
    messageBox.appendChild(message);
    main.appendChild(messageBox);

    const battleScreen = document.createElement("div");
    battleScreen.classList.add('battleScreen');
    const endScreen = document.createElement("div");
    endScreen.classList.add('endScreen');
    battleScreen.appendChild(endScreen);
    const playerGameboard = document.createElement("div");
    playerGameboard.classList.add('Player');
    playerGameboard.classList.add('gameboard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const unit = document.createElement('div');
            unit.id = `unit-${i}-${j}-player`;
            unit.classList.add('unit');
            playerGameboard.appendChild(unit);
        }
    }
    battleScreen.appendChild(playerGameboard);
    const computerGameboard = document.createElement("div");
    computerGameboard.classList.add('Computer');
    computerGameboard.classList.add('gameboard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const unit = document.createElement('div');
            unit.id = `unit-${i}-${j}-computer`;
            unit.classList.add('unit');
            unit.addEventListener('click', () => {
                const x = Number(unit.id[5]);
                const y = Number(unit.id[7]);
                attack(player, computer, [x, y]);
            });
            computerGameboard.appendChild(unit);
        }
    }
    battleScreen.appendChild(computerGameboard);
    main.appendChild(battleScreen);
    container.appendChild(main);

    const footer = document.createElement("div");
    footer.classList.add('footer');
    footer.textContent = "Created by Betsy @ The Odin Project 2023";
    container.appendChild(footer);

    body.appendChild(container);
}

export function updateGameboard(player, computer) {
    updatePlayerGameboard(player);
    updateComputerGameboard(computer);
}

function updatePlayerGameboard(player) {
    const units = document.querySelectorAll('.Player .unit');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (player.gameboard.map[i][j]['ship']) {
                units[i * 10 + j].classList.add('ship');
            }
            if (player.gameboard.map[i][j]['attacked']) {
                units[i * 10 + j].classList.add('attacked');
            }
        }
    }
}

function updateComputerGameboard(computer) {
    const units = document.querySelectorAll('.Computer .unit');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (computer.gameboard.map[i][j]['ship']) {
                units[i * 10 + j].classList.add('ship');
            }
            if (computer.gameboard.map[i][j]['attacked']) {
                units[i * 10 + j].classList.add('attacked');
                units[i * 10 + j].classList.remove('enabled');
                if (computer.gameboard.map[i][j]['ship']) {
                    units[i * 10 + j].classList.add('ship');
                }
            }
        }
    }
}

export function displayMessage(text) {
    const message = document.querySelector('.message');
    message.textContent = text;
}