class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    cycleHereQuestionMark(){
        let arr = [];
        if (this.head === null) {
            return false
        }
        let tempNode = this.head;
        while (tempNode.next !== null) {
            arr.push(tempNode.next);
            tempNode = tempNode.next;
            if(arr.includes(tempNode.next)){
                return true;
            }
        }
        return false;
    }
    display() {
        let Arr = '[';
        if (this.head === null) {
            return Arr + ']'
        }
        let tempNode = this.head;
        while (tempNode.next !== null) {
            Arr += tempNode.value + ', ';
            tempNode = tempNode.next;
        }
        return Arr + tempNode.value + ']'
    }

    size() {
        let count = 0;
        if (this.head === null) {
            return count;
        }
        let tempNode = this.head;
        while (tempNode.next !== null) {
            count += 1;
            tempNode = tempNode.next;
        }
        return count;
    }

    isEmpty() {
        return !(!!this.head)
    }

    insertFirst(item) {
        this.head = new Node(item, this.head);
    }

    insertAfter(newNode, target) {

        if (this.head === null) {
            this.insertFirst(newNode);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null && (tempNode.value !== target)) {
                tempNode = tempNode.next;
            }
            tempNode.next = new Node(newNode, tempNode.next);
        }
    }

    insertAt(newNode, index) {
        if (this.head === null) {
            this.insertFirst(newNode);
        } else {
            let tempNode = this.head;
            let prevNode = this.head;
            let count = 0;
            while (tempNode.next !== null && count < index) {
                count++;
                prevNode = tempNode;
                tempNode = tempNode.next;

            }
            prevNode.next = new Node(newNode, tempNode);
        }
    }

    insertBefore(newNode, target) {
        if (this.head === null || this.head.value === target) {
            this.insertFirst(newNode);
        } else {
            let tempNode = this.head;
            let prevNode = this.head;
            while (tempNode.next !== null && (tempNode.value !== target)) {
                prevNode = tempNode;
                tempNode = tempNode.next;
            }
            prevNode.next = new Node(newNode, tempNode);
        }
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new Node(item, null);
        }
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    findLast() {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    }

    findPrevious(item) {
        let currNode = this.head;
        let prevNode = this.head;
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            return console.log('None Before it');
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            } else {
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
        return prevNode;
    }
    middleOfAList(){
        let size = this.size();
        if(size < 2){
            return console.log('Not Large Enough');
        }
        let currNode = this.head;
        for (let x = 0; x < Math.floor(size/2); x++){
            currNode = currNode.next;

        }
        return (size % 2 === 0) ? currNode : [currNode, currNode.next];
    }
    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    removeExtras(list) {
        let current = list.head;
        while (current !== null) {
            let newNode = current;
            while (newNode.next !== null) {
                if (newNode.next.value === current.value) {
                    newNode.next = newNode.next.next;
                } else {
                    newNode = newNode.next;
                }
            }
            current = current.next;
        }
    }

    reverseList() {
        if (!this.head) {
            return null;
        }
        let currNode = this.head;
        let prevNode = null;
        while (currNode !== null) {
            let nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.head = prevNode;
    }
    thirdFromtheEnd(){
        let length = this.size();
        if(length <= 3){
            return console.log('Not Large Enough');
        }
        let currNode = this.head;
        while (currNode.next.next !== this.findLast()){
            currNode = currNode.next;
        }
        return currNode;
    }
}

module.exports = LinkedList;