function gameOfStones(numberOfStones) {
    return numberOfStones % 7 < 2 ? 'Second' : 'First';  
}

module.exports = gameOfStones