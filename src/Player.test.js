import Player, { Computer } from "./Player";
import Ship from "./Ship";

describe('Function recordAttack should keep track of attacks made by player', () => {

    let human = new Player();

    test('The property [attacked] should have correct values', () => {
        expect(human.attacked).toEqual([]);
        human.recordAttack([0, 0]);
        expect(human.attacked).toEqual(['[0,0]']);
        human.recordAttack([1, 1]);
        expect(human.attacked).toEqual(['[0,0]', '[1,1]']);
    });

});

describe('Function getAttackCoor of Player should determine whether the chosen position is legal', () => {

    let human = new Player();
    human.recordAttack([1, 1]);

    test('returns the chosen position if it is legal', () => {
        expect(human.getAttackCoor([4, 4])).toEqual([4, 4]);
        expect(human.getAttackCoor([1, 0])).toEqual([1, 0]);
    });

    test('throws error if chosen position is not legal', () => {
        expect(() => human.getAttackCoor([1, 1])).toThrow();
        expect(() => human.getAttackCoor([10, 10])).toThrow();
    });

});

describe('Function getAttackCoor of Computer should return a legal position', () => {

    let computer = new Computer();
    computer.recordAttack([0, 1]);

    test('Chosen position is within the map', () => {
        for (let i = 0; i < 1000; i++) {
            const pos = computer.getAttackCoor();
            expect(pos[0]).toBeGreaterThanOrEqual(0);
            expect(pos[0]).toBeLessThanOrEqual(9);
            expect(pos[1]).toBeGreaterThanOrEqual(0);
            expect(pos[1]).toBeLessThanOrEqual(9);
        }
    });

    test('Chosen position is not attacked yet', () => {
        for (let i = 0; i < 1000; i++) {
            expect(computer.getAttackCoor()).not.toEqual([0, 1]);
        }
    });

});

describe('Function lose should determine whether the player loses or not', () => {

    let human = new Player();
    let shipOne = new Ship(1, 'horizontal');
    let shipTwo = new Ship(1, 'horizontal');
    human.ships = [shipOne, shipTwo];
    human.gameboard.placeShip(shipOne, [1, 1]);
    human.gameboard.placeShip(shipTwo, [2, 2]);

    test('returns a boolean value correctly of whether all the ships of the player are sunk', () => {
        expect(human.lose()).toBeFalsy();
        human.gameboard.receiveAttack([2, 2]);
        expect(human.lose()).toBeFalsy();
        human.gameboard.receiveAttack([1, 1]);
        expect(human.lose()).toBeTruthy();
    });
});