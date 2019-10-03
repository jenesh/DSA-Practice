const arrayGenerator = require('../module/array_generator.js');
// Binary Search
// Given a sorted array (min - max) start from the middle element and check whether
// the target value is equal to the middle element and if not, check whether higher or lower
// and repeat this on the subarray.
// Best Case: O(1) Worst Case: O(nlog(n))

function binarySearch(array, value) {
    if (array.length === 0) {
        return `${value} is not in the array.`;
    }
    let middleIndex = Math.floor(array.length / 2);
    let middleValue = array[middleIndex];
    console.log('Middle Value: ', middleValue);
    if (value === middleValue) {
        return `${value} is in the array.`;
    } else {
        if (value < array[middleIndex]) {
            let leftArray = array.splice(0, middleIndex);
            console.log('Left Array: ', leftArray)
            return binarySearch(leftArray, value);
        } else {
            let rightArray = array.splice(middleIndex + 1, array.length - 1);
            console.log('Right Array: ', rightArray);
            return binarySearch(rightArray, value);
        }
    }
}

function binarySearchv2(array, value) {
    if (array.length === 0) {
        return `${value} is not in the array.`;
    }

    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2); // left + (right - left) / 2;
        console.log('Middle Index: ', middle);
        

        if (array[middle] === value) {
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
    return `${value} is not in the array.`;
}

// const array = arrayGenerator(2, 7, 10);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(array);

// console.log('v1: ', binarySearch(array, 10));

console.log('v2: ', binarySearchv2(array, 11));