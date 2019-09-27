const arrayGenerator = require('./module/array_generator.js');
// Linear Search
// Sorts from the left(min) to the right(max)
// Best Case: O(1) Worst Case: O(n)

function linearSearch(array, value) {
    const start = Date.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            console.log(`${Date.now() - start}ms`);
            return true
        }
    }
    // console.log(array)
    console.log(`${Date.now() - start}ms`);
    return false;
}

const array = arrayGenerator(-1000000, 1000000, 10000);

console.log(linearSearch(array, 2342));