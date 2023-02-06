import Player, { Computer } from "./Player";

describe('Player chosen position should be sent to gameboard', () => {

    let human = new Player();
    let enemy = new Computer();

    test('calls the callback function with chose position if the position is legal', () => {
        const mock = jest.fn();
        human.sendAttack([2, 2], mock);
        expect(mock).toHaveBeenCalledWith([2, 2]);
        expect(mock).toHaveBeenCalledTimes(1);
    });

    test('chosen position on enemys map receives attack if the position is legal', () => {
        expect(enemy.gameboard.map[4][4]['attacked']).toBeFalsy();
        human.sendAttack([4, 4], () => enemy.gameboard.receiveAttack([4, 4]));
        expect(enemy.gameboard.map[4][4]['attacked']).toBeTruthy();
    });

    test('throws error and refuses to send position if chosen position is not legal', () => {
        expect(() => human.sendAttack([4, 4], () => enemy.gameboard.receiveAttack([4, 4]))).toThrow();
        expect(() => human.sendAttack([10, 10], () => enemy.gameboard.receiveAttack([10, 10]))).toThrow();
    });

});

describe('Computer should choose a legal position', () => {

    let computer = new Computer();
    computer.attacked.push(JSON.stringify([0, 1]));

    test('Chosen position is within the map', () => {
        for (let i = 0; i < 1000; i++) {
            const pos = computer.choosePosition();
            expect(pos[0]).toBeGreaterThanOrEqual(0);
            expect(pos[0]).toBeLessThanOrEqual(9);
            expect(pos[1]).toBeGreaterThanOrEqual(0);
            expect(pos[1]).toBeLessThanOrEqual(9);
        }
    });

    test('Chosen position is not attacked yet', () => {
        for (let i = 0; i < 1000; i++) {
            expect(computer.choosePosition()).not.toEqual([0, 1]);
        }
    });

});