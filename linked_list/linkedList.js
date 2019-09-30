class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push(value) : Add new element to the beginning of the list. While pushing everything down.
    push(value) {
        const node = new Node(value);
        if (this.length > 0) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
        return value;
    }
    // append(value) : Add new element to the end of the list. Keeping original order intact.
    append(value) {
        const node = new Node(value);
        if (this.length > 0) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
        return value;
    }
    // print() : Prints all the elements in the list sequentially.
    print() {
        if (this.length === 0) {
            return 'This linked list is empty.';
        }
        let currentNode = this.head;
        let str = currentNode.value;
        for (let i = 0; i < this.length - 1; i++) {
            currentNode = currentNode.next;
            str += ` => ${currentNode.value}`
        }
        return str;
    }
    // nodeAt(index) : Returns value at the passed index.
    nodeAt(index) {
        if (index >= 0 && index < this.length) {
            let curr = this.head;
            for (let i = 0; i < index; i++) {
                curr = curr.next;
            }
            return curr.value;
        } else {
            return 'Out of range.'
        }
    }
    // pop() : Removes the last element in the list and returns it.
    pop() {
        let curr = this.head;
        let returnValue = curr.value;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        if (this.length > 0) {
            while (curr.next) {
                if (curr.next.next === null) {
                    returnValue = curr.next.value;
                    curr.next = null;
                    this.tail = curr;
                } else {
                    curr = curr.next;
                }
            }
        } else {
            return 'Nothing to pop.'
        }
        this.length--;
        return returnValue;
    }
    // shift() : Remove the first element from the beginning of the list. Return the removed node.
    shift() {
        if (this.length === 0) {
            return 'This linked list is empty';
        }
        let returnValue = this.head.value;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return returnValue;
    }
    // removeAt(index) : Remove the element at the index provided. Return the removed node.
    removeAt(index) {
        if (index < 0 || index > this.length) {
            return 'Out of bounds.';
        } else if (index === 0 || (this.length === 2 && index === 0)) {
            return this.shift();
        } else if (index === this.length - 1 || (this.length === 2 && index === 1)) {
            return this.pop();
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            let returnValue = curr.next.value;
            curr.next.next = null;
            curr.next = curr.next.next;
            this.length--;
            return returnValue;
        }
    }
    // find(value) : Find and return the index of the node with passed value. If value doesn't exist in the list return -1.
    find(value) {
        let curr = this.head;
        for (let i = 0; i < this.length; i++) {
            if (value === curr.value) {
                return i;
            } else {
                curr = curr.next;
            }
        }
        return -1;

    }
    // toArray() : Returns an array with the values of the linked list.
    toArray() {
        if (this.length === 0) {
            return [];
        } else {
            let curr = this.head;
            let returnArray = [curr.value];
            for (let i = 0; i < this.length - 1; i++) {
                curr = curr.next;
                returnArray.push(curr.value);
            }
            return returnArray;
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const linkedList = new LinkedList();

linkedList.push(3)
linkedList.push(2)
linkedList.push(1)

linkedList.append(4)
linkedList.append(5)
linkedList.append(6)

console.log('Node At index 0: ', linkedList.nodeAt(0))
console.log('Node At index 1: ',linkedList.nodeAt(1))

console.log('Popped: ', linkedList.pop())
console.log('Popped: ', linkedList.pop())

console.log('Current Linked List : ', linkedList.print())

console.log('Shift: ', linkedList.shift())

console.log('Remove at: ', linkedList.removeAt(0));

console.log('Find: ', linkedList.find(5));

console.log('To Array: ', linkedList.toArray());

console.log(linkedList);