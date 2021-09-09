/* 7. * Сравнить null и 0. Объяснить результат. */

/* Почитал я https://habr.com/ru/company/ruvds/blog/337732/ про это сравнение, и легче не стало.
Следуя логике "абстрактного алгоритма сравнения для отношений" ToNumber(null) = +0.
И следую дальше этому алгоритму +0 > 0(false) так как он считает что значения одинаковы,
но тут же +0 == 0(false), где всё происходит из-за разницы типов. 
null != 0(true) тут всё понятно, не равно не по значению не типу.
А вот null >= 0(true), так как этот же алгоритм проверяет не меньше ли значение "null" значения "0".
Ну и строгое сравнение различает по типу.*/

console.log(null > 0);      //false
console.log(null < 0);      //false
console.log(null == 0);     //false
console.log(null != 0);     //true
console.log(null >= 0);     //true
console.log(null <= 0);     //true
console.log(null === 0);    //false
console.log(null !== 0);    //true