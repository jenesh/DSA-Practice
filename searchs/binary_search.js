const arrayGenerator = require('../module/array_generator.js');
// Binary Search
// Given a sorted array (min - max) start from the middle element and check whether
// the target value is equal to the middle element and if not, check whether higher or lower
// and repeat this on the subarray.
// Best Case: O(1) Worst Case: O(nlog(n))


// Passing in a subarray every turn so not that efficient and harder to keep track of index number
function binarySearch(array, value) {
    const start = Date.now();
    if (array.length === 0) {
        console.log(`Binary Search => ${array.length} items in ${Date.now() - start}ms`);
        return `${value} is not in the array.`;
    }
    let middleIndex = Math.floor(array.length / 2);
    let middleValue = array[middleIndex];
    // console.log('Middle Value: ', middleValue);
    if (value === middleValue) {
        return `${value} is in the array.`;
    } else {
        if (value < array[middleIndex]) {
            let leftArray = array.splice(0, middleIndex);
            // console.log('Left Array: ', leftArray);
            console.log(`Binary Search => ${array.length} items in ${Date.now() - start}ms`);

            return binarySearch(leftArray, value);
        } else {
            let rightArray = array.splice(middleIndex + 1, array.length - 1);
            // console.log('Right Array: ', rightArray);
            console.log(`Binary Search => ${array.length} items in ${Date.now() - start}ms`);
            return binarySearch(rightArray, value);
        }
    }
}

// Iterating using a while loop and using pointers to keep track of index number
function binarySearchv2(array, value) {
    const start = Date.now();
    if (array.length === 0) {
        console.log(`Binary Search => ${array.length} items in ${Date.now() - start}ms`);
        return `${value} is not in the array.`;
    }

    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2); // left + (right - left) / 2;
        // console.log('Middle Index: ', middle);

        if (array[middle] === value) {
            console.log(`Binary Search => ${array.length} items in ${Date.now() - start}ms`);
            return `${value} is in index ${middle}`;
        }

        if (array[middle] < value) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }

        console.log('Middle: ', array[middle]);
        console.log('Left: ', array[left]);
        console.log('Right: ', array[right]);
    }
    console.log(`Binary Search => ${array.length} items in ${Date.now() - start}ms`);
    return `${value} is not in the array.`;
}

// const array = arrayGenerator(2, 7, 10);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(array);

// console.log('v1: ', binarySearch(array, 10));

console.log('v2: ', binarySearchv2(array, 11));