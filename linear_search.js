// Linear Search
// Sorts from the left(min) to the right(max)
// Best Case: O(1) Worst Case: O(n)

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

const array = arrayGenerator(-1000000, 1000000, 1000000);

console.log(linearSearch(array, 2342));