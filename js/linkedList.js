class ListNode {

    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor () {
        this.head = null;
        this.size = 0;
    }

    insert (value, index=this.size) {

        if (index < 0 || index > this.size) {
            return false;
        } else {

            let node = new ListNode(value);

            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {

                let current = this.head;
                let previous;
                let i = 0;
                
                while (i < index) {
                    previous = current;
                    current = current.next;
                    i++;
                }

                previous.next = node;
                node.next = current;
            }

            this.size++;
        }
    }

    indexOf (value, all=false) {
        
        let current = this.head;
        let index = 0;

        if (all == 'all') {

            let indexes = [];

            while (current) {
                if (current.value == value) {
                    indexes.push(index);
                }
                current = current.next;
                index++;
            }

            if (indexes.length == 0) {
                return -1
            } else {
                return indexes;
            }
            
        } else {

            while (current) {
                if (current.value == value) {
                    return index; 
                }
                current = current.next;
                index++;
            }

            return -1;
        }
    }

    remove (value, all=false) {

        if (all == 'all') {
            let indexes = this.indexOf(value, 'all');

            if (indexes == -1) {
                return;
            } else {
                
                let i = 0
                let index = 1

                if (indexes[i] == 0) {
                    this.head = this.head.next;
                    this.size--;
                    i++;
                    index++;
                }
                
                let current = this.head.next;
                let previous = this.head;

                while (i < indexes.length) {

                    while (index <= indexes[i]) {
                        if (index == indexes[i]) {
                            previous.next = current.next;
                            current = current.next;
                            this.size--;
                        } else {
                            previous = current;
                            current = current.next;
                        }

                        index++;
                    }

                    i++;
                }
            }

        } else {
            let index = this.indexOf(value);

            if (index == -1) {
                return;
            } else if (index == 0) {
                this.head = this.head.next;
                this.size--;
            } else {
                let current = this.head.next;
                let previous = this.head;
                let i = 1;

                while (i <= index) {
                    if (i == index) {
                        previous.next = current.next;
                        this.size--;
                        return;
                    }
                    previous = current;
                    current = current.next;
                    i++;
                }
            }
        }
    }

    print () {
        let current = this.head;
        let values = [];
        let strList = '';

        while (current) {
            values.push(current.value);
            current = current.next;
        }

        strList = '[' + values.join(', ') + ']';
        console.log(strList);
        return strList;
    } 
}

module.exports = {LinkedList, ListNode}