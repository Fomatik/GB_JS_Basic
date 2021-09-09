/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch). */

//сложение
function addition(a, b) {
    return a + b;
}

//вычитание
function subtraction(a, b) {
    return a - b;
}

//умножение
function multiplication(a, b) {
    return a * b;
}

//деление
function division(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            return console.log(addition(arg1, arg2));
            break;
        case 'subtraction':
            return console.log(subtraction(arg1, arg2));
            break;
        case 'multiplication':
            return console.log(multiplication(arg1, arg2));
            break;
        case 'division':
            return console.log(division(arg1, arg2));
            break;

        default:
            return console.log('Неправильная операция!');
            break;
    }
}

//Тест
mathOperation(5, 10, 'addition');
mathOperation(10, 5, 'subtraction');
mathOperation(5, 5, 'multiplication');
mathOperation(33, 3, 'division');
mathOperation(2, 3, 'exponentiation');


//Надеюсь я правильно задание понял.
