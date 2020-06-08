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
}

module.exports = {LinkedList, ListNode}