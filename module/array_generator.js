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

module.exports = arrayGenerator;