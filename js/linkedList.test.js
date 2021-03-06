const {LinkedList, ListNode} = require('./linkedList');

test('creates a Node with a value property set to the passed value and a next property set to null', function () {
    expect(new ListNode(3)).toEqual({value: 3, next: null})
})

test('creates a Linked List with a head property set to null and a size property set to 0 (zero)', function () {
    expect(new LinkedList()).toEqual({head: null, size: 0})
})

test('inserts a node at index 0 of an empty linked list', function () {
    let list = new LinkedList();
    list.insert(4, 0);
    expect(list).toEqual({head: {value: 4, next: null}, size: 1})
})

test('inserts a node at index 0 of a linked list with 3 nodes', function () {
    let mockList = {head: {value: 2, next: {value: 3, next: {value: 5, next: {value: 4, next: null}}}}, size: 4}
    
    let list = new LinkedList();
    list.insert(4, 0);
    list.insert(5, 0);
    list.insert(3, 0);
    list.insert(2, 0);
    expect(list).toEqual(mockList)
})

test('inserts a node at index 2 of a linked list with 4 nodes', function () {
    let mockList = {head: {value: 2, next: {value: 3, next: {value: 7, next: {value: 5, next: {value: 4, next: null}}}}}, size: 5}
    
    let list = new LinkedList();
    list.insert(4, 0);
    list.insert(5, 0);
    list.insert(3, 0);
    list.insert(2, 0);
    list.insert(7, 2);
    expect(list).toEqual(mockList)
})

test('inserts a node at the end of a linked list with 4 nodes', function () {
    let mockList = {head: {value: 2, next: {value: 3, next: {value: 5, next: {value: 4, next: {value: 7, next: null}}}}}, size: 5}
    
    let list = new LinkedList();
    list.insert(4, 0);
    list.insert(5, 0);
    list.insert(3, 0);
    list.insert(2, 0);
    list.insert(7, 4);
    expect(list).toEqual(mockList)
})

test('inserts a node at the end of a linked list with 4 nodes without passing the index parameter', function () {
    let mockList = {head: {value: 2, next: {value: 3, next: {value: 5, next: {value: 4, next: {value: 7, next: null}}}}}, size: 5}
    
    let list = new LinkedList();
    list.insert(4, 0);
    list.insert(5, 0);
    list.insert(3, 0);
    list.insert(2, 0);
    list.insert(7);
    expect(list).toEqual(mockList)
})

test('tries to insert node at invalid index', function () {
    let list = new LinkedList();
    list.insert(4, 0);
    expect(list.insert(3, 2)).toEqual(false)
})

test('tries to insert node at invalid index', function () {
    let list = new LinkedList();
    list.insert(4, 0);
    expect(list.insert(3, -1)).toEqual(false)
})

test('returns the index of a value', function () {
    let list = new LinkedList();
    list.insert(4, 0);
    list.insert(5, 0);
    list.insert(3, 0);
    list.insert(2, 0);
    list.insert(7, 2);

    expect(list.indexOf(7)).toEqual(2)
})

test('returns the index of the first appearance of a value', function () {
    let list = new LinkedList();
    list.insert(4, 0);
    list.insert(5, 0);
    list.insert(7, 0);
    list.insert(2, 0);
    list.insert(7, 0);

    expect(list.indexOf(7)).toEqual(0)
})

test('returns the indexes of all appearances of a value', function () {
    let list = new LinkedList();
    list.insert(4, 0);
    list.insert(5, 0);
    list.insert(7, 0);
    list.insert(2, 0);
    list.insert(7, 2);

    expect(list.indexOf(7, 'all')).toEqual([1, 2])
})

test('returns -1 (no values found)', function () {
    let list = new LinkedList();
    list.insert(4, 0);
    list.insert(5, 0);
    list.insert(3, 0);
    list.insert(2, 0);
    list.insert(7, 2);

    expect(list.indexOf(10, 'all')).toEqual(-1)
})

test('returns -1 (no values found)', function () {
    let list = new LinkedList();
    list.insert(4, 0);
    list.insert(5, 0);
    list.insert(3, 0);
    list.insert(2, 0);
    list.insert(7, 2);

    expect(list.indexOf(10, 'all')).toEqual(-1)
})

test('removes first appearance of a value from list', function () {
    let mockList = {head: {value: 2, next: {value: 7, next: {value: 5, next: {value: 4, next: null}}}}, size: 4}
    
    let list = new LinkedList();
    list.insert(4, 0);
    list.insert(5, 0);
    list.insert(7, 0);
    list.insert(2, 0);
    list.insert(7, 0);
    list.remove(7);

    expect(list).toEqual(mockList)
})

test('removes all appearances of a value from list', function () {
    let mockList = {head: {value: 2, next: {value: 5, next: {value: 4, next: null}}}, size: 3}
    
    let list = new LinkedList();
    list.insert(4, 0);
    list.insert(7, 0);
    list.insert(5, 0);
    list.insert(7, 0);
    list.insert(2, 0);
    list.remove(7, 'all');

    expect(list).toEqual(mockList)
})

test('removes all appearances of a value from list', function () {
    let mockList = {head: {value: 2, next: {value: 5, next: {value: 4, next: null}}}, size: 3}
    
    let list = new LinkedList();
    list.insert(4, 0);
    list.insert(5, 0);
    list.insert(7, 0);
    list.insert(2, 0);
    list.insert(7, 0);
    list.remove(7, 'all');

    expect(list).toEqual(mockList)
})

test('removes all appearances of a value from list', function () {
    let mockList = {head: {value: 2, next: {value: 5, next: null}}, size: 2}
    
    let list = new LinkedList();
    list.insert(7, 0);
    list.insert(5, 0);
    list.insert(7, 0);
    list.insert(2, 0);
    list.insert(7, 0);
    list.remove(7, 'all');

    expect(list).toEqual(mockList)
})

test('returns (no value to remove)', function () {
    let list = new LinkedList();
    list.insert(7, 0);
    list.insert(5, 0);
    list.insert(7, 0);
    list.insert(2, 0);
    list.insert(7, 0);
    list.remove(7, 'all');

    expect(list.remove(10)).toEqual(undefined)
})

test('returns (no value to remove)', function () {
    let list = new LinkedList();
    list.insert(7, 0);
    list.insert(5, 0);
    list.insert(7, 0);
    list.insert(2, 0);
    list.insert(7, 0);
    list.remove(7, 'all');

    expect(list.remove(10, 'all')).toEqual(undefined)
})

test('logs a string with the list values in the console and returns the string', function () {
    let list = new LinkedList();
    list.insert(7, 0);
    list.insert(5, 0);
    list.insert(7, 0);
    list.insert(2, 0);
    list.insert(7, 0);

    expect(list.print()).toEqual('[7, 2, 7, 5, 7]')
})