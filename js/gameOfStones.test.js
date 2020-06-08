const gameOfStones = require('./gameOfStones');

test('returns a list of the players that won in 21 matches (number of stones from 1 to 21', function () {
    let mockWinners = [
        'Second', 'First', 'First', 'First', 'First', 'First', 'Second',
        'Second', 'First', 'First', 'First', 'First', 'First', 'Second',
        'Second', 'First', 'First', 'First', 'First', 'First', 'Second',];
    let winners = [];
    for (let numberOfStones = 1; numberOfStones <= 21; numberOfStones++) {
        winners.push(gameOfStones(numberOfStones));
    }
    expect(winners).toEqual(mockWinners)
})