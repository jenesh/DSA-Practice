const arrayGenerator = require('../module/array_generator.js');

// Insertion Sort
// Starting from the left build a sorted array in place moving right everytime
// If there is an element smaller than the current value grab it and shift it
// to its appropriate sorted located on the left of current value(sorted array)

function insertionSort(array) {
    array.unshift(-Infinity);
    const start = Date.now();

    for (let i = 1; i < array.length; i++) {
        let min = false;
        // console.log('Pointer', i);
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[i]) {
                // console.log('i', i, '=>', array[i])
                // console.log('j', j, '=>', array[j])
                min = array.splice(j, 1);
                // console.log('Min: ', min);

                for (let k = i; k > 0; k--) {
                    // console.log('k', k, '=>', array[k])
                    if (array[k - 1] <= min[0]) {
                        // console.log(`Inserting ${min[0]} before ${array[k]}...`);
                        array.splice(k, 0, min[0]);
                        break;
                    }
                }
                break;
            }
        }
        // console.log('Array: ', array);
    }
    array.shift();
    console.log(`Insertion Sort => ${array.length} items in ${Date.now() - start}ms`);
    // console.log('Ending Array: ', array);
    return array;
}

const array = arrayGenerator(2, 20, 5);
// const array = [0,-5,-2,1,2,3,4,5,6,8,0];
// console.log('Starting Array:', array);

// insertionSort(array);


function insertionSortv2(arr) {
    for (let unSorted = 1; unSorted < arr.length; unSorted++) {
        for (let sorted = unSorted - 1; sorted >= 0; sorted--) {
            console.log('Unsorted => ', arr[unSorted], ' index => ', unSorted)
            console.log('Sorted => ', arr[sorted], ' index => ', sorted)
            const pivot = arr[unSorted];
            if (pivot >= arr[unSorted]) {
                console.log('switch ', arr[sorted], ' with ', pivot)
                // let temp = arr[unSorted];
                arr[unSorted] = arr[sorted];
                // arr[sorted] = pivot;
            }
            console.log(' - - - - - - - - - - ')
        }

    }


    return arr;
}
console.log('Start: ', array)
console.log('End: ', insertionSortv2(array))