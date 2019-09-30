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
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const linkedList = new LinkedList();
linkedList.push(3)
linkedList.push(4)
linkedList.push(1)
linkedList.append(5)
console.log(linkedList.nodeAt(0))
console.log(linkedList.nodeAt(1))
console.log(linkedList.nodeAt(2))
console.log(linkedList.nodeAt(3))
console.log('Popped: ', linkedList.pop())
console.log('Popped: ', linkedList.pop())
console.log('Popped: ', linkedList.pop())
// console.log('Popped: ', linkedList.pop())
console.log(linkedList.print())
console.log(linkedList)