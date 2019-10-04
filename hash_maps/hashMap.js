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
    constructor(size = 1, buffer = .7) {
        const safeSize = Math.ceil(size / buffer); // Computes array size to be 25% more than intended key size
        this.map = new Array(safeSize);
        this.buffer = buffer;
        this.numOfKeys = 0;
        this.length = this.map.length;
    }
    // Get => Returns the value of the provided key if it exists, if not says 'Key doesn't exist'
    get (key) {

    }
    // Insert => 
    insert (key, value) {
        if (((this.numOfKeys + 1) / this.length) > this.buffer) {
            const newSize = Math.ceil((this.length) / this.buffer);
            const newArray = new Array(newSize);
            this.map = newArray;
            console.log(newArray)
            console.log('Resize');
            console.log('New Size: ', newSize)
        }

        console.log('Load: ', ((this.numOfKeys + 1) / this.length))

        const currentMapSize = this.map.length;
        const shaKey = sha256(utf8.encode(key));
        const shaArrayLength = sha256(utf8.encode(this.map.length));

        const parsedSha = parseInt(shaKey, 16);

        const uniqueKey = (parsedSha / parseInt(shaArrayLength, 16)) * 1000000000000000;
        const perciseKey = uniqueKey.toFixed(0);

        const index = perciseKey % this.map.length;

        this.map[index] = value;
        this.numOfKeys++;
        
        return `Key: ${key} | Index: ${index}  | Size of Array: ${this.map.length}\n`;
    }
    // Delete =>
}

class Node {
    constructor() {
        this.key = null;
        this.value = null;
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
console.log(map1)
console.log('Map Size: ', map1.length)
// console.log(map1.insert('User3', 'Tom Berry'))
// console.log(map1.insert('User4', 'Tom Berry'))
// console.log(map1.insert('User5', 'Tom Berry'))
// console.log(map1.insert('User6', 'Tom Berry'))
// console.log(map1.insert('User7', 'Tom Berry'))
// console.log(map1.insert('User8', 'Tom Berry'))
// console.log(map1.insert('User9', 'Tom Berry'))
// console.log(map1.insert('User10', 'Tom Berry'))



