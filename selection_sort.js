// Selection Sort
// Sort the array from left to right by finding the smallest number
// in the unsorted part with the first element in the unsorted part
// Best Case: O(n^2) Worst Case: O(n^2)

function selectionSort(array) {
    const start = Date.now();
    for (let i = 0; i < array.length; i++) {
        let firstUnsorted = array[i];
        let currentMin = array[i];
        let currentMinIndex = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < currentMin) {
                currentMin = array[j];
                currentMinIndex = j;
            }
        }
        if (currentMinIndex != i) {
            array[i] = currentMin;
            array[currentMinIndex] = firstUnsorted;
        }
    }
    console.log(`${Date.now() - start}ms`);
    return array;
}

const array = arrayGenerator(-1000000, 1000000, 10000);

selectionSort(array) // Array size too large to console log so only call the function to see runtime, sort 100% working check with smaller sized array


function arrayGenerator(min, max, arrSize) {
    let arr = [];
    for (let i = 0; i < arrSize / 2; i++) {
        const positiveNumber = randomNumber(max);
        const negativeNumber = randomNumber(min);

        arr.push(positiveNumber);
        arr.push(negativeNumber);
    }
    return arr;
}

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}