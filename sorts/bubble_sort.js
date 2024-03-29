const arrayGenerator = require('../module/array_generator.js');

// Bubble Sort
// Move/Bubble larger numbers to the right by comparing adjacent pairs and swapping them
// Have a swap counter to keep track of swaps and stop when counter = 0
// Best Case: O(n) Worst Case: O(n^2)

function bubbleSort(array) {
    const start = Date.now();
    let counter = 1;
    while (counter) {
        counter = 0;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                counter++;
            }
        }
    }
    console.log(`Bubble Sort => ${array.length} items in ${Date.now() - start}ms`);
    return array;
}

const array = arrayGenerator(-1000000, 1000000, 100000);

bubbleSort(array);