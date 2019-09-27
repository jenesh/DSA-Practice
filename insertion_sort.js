const arrayGenerator = require('./module/array_generator.js');

// Insertion Sort
// Starting from the left build a sorted array in place moving right everytime
// If there is an element smaller than the current value grab it and shift it
// to its appropriate sorted located on the left of current value(sorted array)

function insertionSort(array) {
    const start = Date.now();

    for (let i = 0; i < array.length; i++) {
        let min = false;
        // console.log('Pointer', i);
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[i]) {
                // console.log('i', i, '=>', array[i])
                // console.log('j', j, '=>', array[j])
                min = array.splice(j, 1);
                // console.log('Min: ', min);

                for (let k = 0; k <= i; k++) {
                    // console.log('k', k, '=>', array[k])
                    if (array[k] >= min[0]) {
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
    console.log(`Insertion Sort => ${array.length} items in ${Date.now() - start}ms`);
    console.log('Ending Array: ', array);
    return array;
}

// const array = arrayGenerator(-1000000, 1000000, 100000);
const array = [0,-5,-2,1,2,3,4,5,6,8,0];
// console.log('Starting Array:', array)

insertionSort(array);