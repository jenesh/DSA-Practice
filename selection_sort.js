// Selection Sort
// Sort the array from left to right by finding the smallest number
// in the unsorted part with the first element in the unsorted part
// Best Case: O(n^2) Worst Case: O(n^2)

function selectionSort(array) {
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
    return array;
}

const array = [4,1,6,4,8,9,23,565,223,774,111,1234];

console.log(selectionSort(array))