/* 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом. */

function getRandomIntInclusive(min = -1000, max = 1000) {  //функция получения рандомного числа для переменных
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = getRandomIntInclusive()
let b = getRandomIntInclusive()

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a <= 0 && b <= 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}
