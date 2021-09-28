/* 2. Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */

const basket = {
    items: [
        { name: 'ball', coast: 1000, number: 1 },
        { name: 'flowers', coast: 1500, number: 1 },
        { name: 'shovel', coast: 800, number: 2 },
        { name: 'gloves', coast: 50, number: 10 }],

    itemCoast() {
        return this.items.reduce((sum, item) =>
            sum + item.coast * item.number, 0)
    }
};

console.log(`Сумма корзины: ${basket.itemCoast()}руб.`);
