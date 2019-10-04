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
    constructor(size) {
        this.map = new Array(size);
    }
    // Get => Returns the value of the provided key if it exists, if not says 'Key doesn't exist'
    get (key) {

    }
    // Insert => 
    insert (key, value) {
        const index = sha256(utf8.encode(key));
        console.log(parseInt(index, 16) % this.map.length);
        console.log(parseInt(index, 16))
    }
    // Delete =>
}

const map1 = new hashMap(100);

console.log(map1.insert('User1', 'Tom Berry'))
console.log(map1.insert('User2', 'Tom Berry'))
console.log(map1.insert('User3', 'Tom Berry'))
console.log(map1.insert('User4', 'Tom Berry'))
console.log(map1.insert('User5', 'Tom Berry'))
console.log(map1.insert('User6', 'Tom Berry'))
console.log(map1.insert('User7', 'Tom Berry'))
console.log(map1.insert('User8', 'Tom Berry'))
console.log(map1.insert('User9', 'Tom Berry'))
console.log(map1.insert('User10', 'Tom Berry'))



