import Ship from './Ship';

test('Class Ship creates a ship object.', () => {
  let myShip = new Ship();
  expect(typeof myShip).toBe('object');
});

test('Ship has correct designated length.', () => {
  let myShipOne = new Ship(1);
  let myShipTwo = new Ship(4);
  expect(myShipOne.length).toBe(1);
  expect(myShipTwo.length).toBe(4);
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
