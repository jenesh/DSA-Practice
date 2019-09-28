const arrayGenerator = require('./module/array_generator.js');

// Insert Sort

const start = Date.now();

console.log(`${Date.now() - start}ms`);

const array = arrayGenerator(-1000000, 1000000, 10000);

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

