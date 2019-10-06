const sha256 = require('sha-256-js');
const utf8 = require('utf8');

// Hash Map/Table

// Hash Map is a data structure, comparable to Objects(JS), Dictionary(Python), and so on...
// The advantages of using a Hash Map are for a constant time lookup O(1),
// unique Key/Value pair, dynamic resize based on implementation
// The disadvantages of Hash Map are that a Hash is only as good as its Hashing Function,
// potential issues with collision which can slow down performance and even loss of data if not
// implemented correctly, needs to always have some buffer space meaning it takes more space than
// the data currently needs

class hashMap {
    constructor(size = 1, buffer = .75) {
        // const safeSize = Math.ceil(size / buffer); // Computes array size to be 25% more than intended key size
        this.map = new Array(size * 2);
        this.buffer = buffer;
        this.numOfKeys = 0;
        this.length = this.map.length;
        this.load = 0;
    }
    hashKey(key) {
        const currentMapSize = this.map.length;
        const shaKey = sha256(utf8.encode(key));
        const shaArrayLength = sha256(utf8.encode(currentMapSize));
        const parsedSha = parseInt(shaKey, 16);
        const uniqueKey = (parsedSha / parseInt(shaArrayLength, 16)) * 1000000000000000;
        const perciseKey = uniqueKey.toFixed(0);

        return perciseKey;
    }

    updateArray(oldArr, newArr) {
        return oldArr.map(ele => {
            if (ele) {
                const hashedKey = this.hashKey(ele.key);
                const index = hashedKey % newArr.length;
                newArr[index] = ele;
            }
        })
    }
    // Get => Returns the value of the provided key if it exists, if not says 'Key doesn't exist'
    get(key) {

    }
    // Insert => 
    insert(key, value) {
        console.log('Empty', this.map[0])
        if (((this.numOfKeys + 1) / this.length) > this.buffer) {
            this.grow(this.hashMap, this.buffer);
        }

        const hashedKey = this.hashKey(key);
        const index = hashedKey % this.map.length;
        console.log(index)
        const node = new Node();
        node.key = key;
        node.value = value;

        if (this.map[index]) {
            this.map[index].next = node;

        } else {
            this.map[index] = node;
        }
        this.numOfKeys++;
        this.load = this.numOfKeys / this.length;

        return `Key: ${key} | Index: ${index}  | Size of Array: ${this.map.length}\n`;
    }

    // Delete =>

    // Resize => Give the array and buffer, rehashes the elements and returns a bigger array
    grow(arr, buffer) {
        // if (((this.numOfKeys + 1) / arr.length) > this.buffer) {
        // const newSize = Math.ceil((this.length) / this.buffer);
        const newSize = (this.map.length + 1) * 2;
        const currArray = this.map;
        const newArray = new Array(newSize);
        const updatedArray = this.updateArray(currArray, newArray);
        this.map = updatedArray;
        this.length = this.map.length;
        // console.log(newArray)
        // console.log('Resize');
        // console.log('New Size: ', newSize)
        // }
    }
    shrink(arr, buffer) {
        const newSize = this.numOfKeys * 2;
        const newArray = new Array(newSize);
        this.map = newArray;
        this.length = this.map.length;
        8
    }
    printNodes() {
        this.map.forEach(ele => {
            if (ele) {
                console.log('>>>', ele);
            }
        })
    }
}



class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

const map1 = new hashMap();

map1.insert('User1', 'Tom Berry')
map1.insert('User2', 'Tom Berry')
map1.insert('User3', 'Tom Berry')
map1.insert('User4', 'Tom Berry')
map1.insert('User5', 'Tom Berry')
map1.insert('User6', 'Tom Berry')
map1.insert('User7', 'Tom Berry')
map1.insert('User8', 'Tom Berry')
map1.insert('User9', 'Tom Berry')
map1.insert('User10', 'Tom Berry')
map1.insert('User11', 'Tom Berry')
map1.insert('User12', 'Tom Berry')

console.log(map1)
console.log(...map1.map)

map1.printNodes();