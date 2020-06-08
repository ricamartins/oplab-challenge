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