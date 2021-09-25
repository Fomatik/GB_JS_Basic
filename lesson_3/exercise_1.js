/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */

function simpleNumSelection(num) {
    if (num < 2) return false;
    let count = 2;
    while (count < num) {
        if (num % count == 0) {
            return false;
        }
        count++;
    }
    return true;
}

function collectSimpleNumbers(max) {
    let i = 0;
    let arrSimpleNumbers = [];
    while (i < max) {
        if (simpleNumSelection(i)) arrSimpleNumbers.push(i);
        i++;
    }
    console.log(`Простые числа от 0 до ${max}: ${arrSimpleNumbers.join(', ')}.`);
}

collectSimpleNumbers(100);
