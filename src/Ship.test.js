import Ship from './Ship';

test('Ship has correct designated length and direction.', () => {
  let myShipOne = new Ship(2, 'horizontal');
  let myShipTwo = new Ship(4, 'vertical');
  expect(myShipOne.length).toBe(2);
  expect(myShipOne.direction).toBe('horizontal');
  expect(myShipTwo.length).toBe(4);
  expect(myShipTwo.direction).toBe('vertical');
});

test('Function gotHit increases one hit of the ship.', () => {
  let myShip = new Ship(4);
  expect(myShip.hit).toEqual(0);
  myShip.gotHit();
  expect(myShip.hit).toEqual(1);
  myShip.gotHit();
  expect(myShip.hit).toEqual(2);
});

test('Function isSunk reports correct status of the ship.', () => {
  let myShip = new Ship(2);
  expect(myShip.isSunk()).toBeFalsy();
  myShip.gotHit();
  expect(myShip.isSunk()).toBeFalsy();
  myShip.gotHit();
  expect(myShip.isSunk()).toBeTruthy();
});
