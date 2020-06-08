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
}

module.exports = {LinkedList, ListNode}