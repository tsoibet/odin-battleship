export function renderHomepage(game) {
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
    message.textContent = 'Your turn.';
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
            unit.id = `unit-${i}-${j}-computer`;
            unit.classList.add('unit');
            unit.addEventListener('click', () => {
                const x = Number(unit.id[5]);
                const y = Number(unit.id[7]);
                game.takeTurns([x, y]);
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
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            units[i * 10 + j].textContent = "";
            if (player.gameboard.map[i][j]['ship']) {
                const ship = document.createElement('div');
                ship.classList.add('ship');
                units[i * 10 + j].appendChild(ship);
            }
            if (player.gameboard.map[i][j]['attacked']) {
                const attacked = document.createElement('div');
                attacked.classList.add('attacked');
                units[i * 10 + j].appendChild(attacked);
            }
        }
    }
}

function updateComputerGameboard(computer) {
    const units = document.querySelectorAll('.Computer .unit');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            units[i * 10 + j].textContent = "";
            if (computer.gameboard.map[i][j]['attacked']) {
                const attacked = document.createElement('div');
                attacked.classList.add('attacked');
                units[i * 10 + j].appendChild(attacked);
                if (computer.gameboard.map[i][j]['ship']) {
                    const ship = document.createElement('div');
                    ship.classList.add('ship');
                    units[i * 10 + j].appendChild(ship);
                }
            }
        }
    }
}

export function displayMessage(text) {
    const message = document.querySelector('.message');
    message.textContent = text;
}