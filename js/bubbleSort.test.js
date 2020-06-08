const bubbleSort = require('./bubbleSort');

test('sorts list of numbers in ascending order', function () {
    expect(bubbleSort([5, 4, 10, 28, 2, 3])).toEqual([2, 3, 4, 5, 10, 28])
})

test('sorts list of numbers with equal numbers in ascending order', function () {
    expect(bubbleSort([5, 2, 23, 14, 7, 8, 7, 2, 3])).toEqual([2, 2, 3, 5, 7, 7, 8, 14, 23])
})