import Gameboard from "./Gameboard";
import Ship from "./Ship";

test('Gameboard has a map of 10x10', () => {
  let myGameboard = new Gameboard();
  expect(myGameboard.map).toBeDefined();
  let correctMapSize = true;
  let x = 0;
  for (let row of myGameboard.map) {
    x += 1;
    let y = 0;
    for (let position of row) {
      y += 1;
    }
    if (y !== 10) {
      correctMapSize = false;
      break;
    }
  }
  if (x !== 10) {
    correctMapSize = false;
  }
  expect(correctMapSize).toBeTruthy();
});

describe('Function placeShip determines whether the ship can be placed on designated position and handles correspondingly', () => {

  let myGameboard = new Gameboard();
  let shipOne = new Ship(2, 'horizontal');
  let shipTwo = new Ship(3, 'vertical');

  test('returns true after successfully placing ship on desingated position', () => {
    expect(myGameboard.placeShip(shipOne, [0, 1])).toBeTruthy();
    expect(myGameboard.placeShip(shipTwo, [3, 0])).toBeTruthy();
  });

  test('On designated position there is ship of correct length and direction', () => {
    expect(myGameboard.map[3][0]['ship']).not.toBeNull();
    expect(myGameboard.map[4][0]['ship']).not.toBeNull();
    expect(myGameboard.map[5][0]['ship']).not.toBeNull();
    expect(myGameboard.map[3][0]['ship'] === myGameboard.map[4][0]['ship']).toBeTruthy();
    expect(myGameboard.map[3][0]['ship'] === myGameboard.map[5][0]['ship']).toBeTruthy();

    expect(myGameboard.map[0][1]['ship']).not.toBeNull();
    expect(myGameboard.map[0][2]['ship']).not.toBeNull();
    expect(myGameboard.map[0][1]['ship'] === myGameboard.map[0][2]['ship']).toBeTruthy();
    expect(myGameboard.map[0][1]['ship'] === myGameboard.map[3][0]['ship']).toBeFalsy();
  });

  test('All other positions are empty', () => {
    const shipLocations = [[0, 1], [0, 2], [3, 0], [4, 0], [5, 0]];
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        if (JSON.stringify(shipLocations).includes(JSON.stringify([r, c]))) {
          continue;
        }
        expect(myGameboard.map[r][c]['ship']).toBeNull();
      }
    }
  });

  const shipA = new Ship(1, 'vertical');
  const shipB = new Ship(1, 'horizontal');
  const shipC = new Ship(4, 'horizontal');
  const shipD = new Ship(3, 'vertical');

  test('returns false when designated place is occupied', () => {
    expect(myGameboard.placeShip(shipA, [3, 0])).toBeFalsy();
  });
    
  test('returns false when designated place is out of map', () => {
    expect(myGameboard.placeShip(shipB, [10, 0])).toBeFalsy();
    expect(myGameboard.placeShip(shipB, [2, 10])).toBeFalsy();
    expect(myGameboard.placeShip(shipC, [0, 8])).toBeFalsy();
    expect(myGameboard.placeShip(shipD, [8, 3])).toBeFalsy();
  });

});

describe('Function receiveAttack', () => {
  let myGameboard = new Gameboard();
  const ship = new Ship(2, 'horizontal');
  myGameboard.placeShip(ship, [0, 1]);

  test('number of hits of the correct ship increases by 1 if the attack hit a ship', () => {
    expect(myGameboard.map[0][1]['ship'].hit).toBe(0);
    myGameboard.receiveAttack([0, 1]);
    expect(myGameboard.map[0][1]['ship'].hit).toBe(1);
    myGameboard.receiveAttack([0, 2]);
    expect(myGameboard.map[0][2]['ship'].hit).toBe(2);
  });

  test('changes attack status of the attacked position', () => {
    expect(myGameboard.map[0][1]['attacked']).toBeTruthy();
    expect(myGameboard.map[0][2]['attacked']).toBeTruthy();
    myGameboard.receiveAttack([5, 5]);
    expect(myGameboard.map[5][5]['attacked']).toBeTruthy();
    // All other positions should be false
    const attackedPositions = [[0, 1], [0, 2], [5, 5]];
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        if (JSON.stringify(attackedPositions).includes(JSON.stringify([r, c]))) {
          continue;
        }
        expect(myGameboard.map[r][c]['attacked']).toBeFalsy();
      }
    }
  });
});
