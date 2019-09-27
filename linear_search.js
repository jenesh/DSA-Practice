// Linear Search
// Sorts from the left(min) to the right(max)
// Best Case: O(1) Worst Case: O(n)

function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true
        }
    }
    return false;
}

const array = [1,2,3,4,5,6,7,8,9];

console.log(linearSearch(array, 1));