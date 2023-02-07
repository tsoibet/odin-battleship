import Gameboard from "./Gameboard"

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

describe('Function placeShip', () => {
  let myGameboard = new Gameboard();
  myGameboard.placeShip(2, 'horizontal', [0, 1]);
  myGameboard.placeShip(3, 'vertical', [3, 0]);

  describe('places ship on desingated position with correct direction', () => {

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
  });

  describe('throws error if ship cannot be placed at designated position', () => {

    test('throws error when designated place is occupied', () => {
      expect(() => myGameboard.placeShip(1, 'vertical', [3, 0])).toThrow();
      });
      
      test('throws error when designated place is out of map', () => {
      expect(() => myGameboard.placeShip(1, 'horizontal', [10, 0])).toThrow();
      expect(() => myGameboard.placeShip(1, 'horizontal', [2, 10])).toThrow();
      expect(() => myGameboard.placeShip(4, 'horizontal', [0, 8])).toThrow();
      expect(() => myGameboard.placeShip(3, 'vertical', [8, 3])).toThrow();
      });

  });

});

describe('Function receiveAttack', () => {
  let myGameboard = new Gameboard();
  myGameboard.placeShip(2, 'horizontal', [0, 1]);

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

describe('Function allSunk', () => {
  let myGameboard = new Gameboard();
  myGameboard.placeShip(1, 'horizontal', [1, 1]);
  myGameboard.placeShip(1, 'horizontal', [2, 2]);
  test('returns correctly whether all the ships on map are sunk', () => {
    expect(myGameboard.allSunk()).toBeFalsy();
    myGameboard.receiveAttack([2, 2]);
    expect(myGameboard.allSunk()).toBeFalsy();
    myGameboard.receiveAttack([1, 1]);
    expect(myGameboard.allSunk()).toBeTruthy();
  });
});