/*
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
    Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
    Пустая корзина должна выводить строку «Корзина пуста»;
    Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

4. Сделать так, чтобы товары в каталоге выводились при помощи JS:
    Создать массив товаров (сущность Product);
    При загрузке страницы на базе данного массива генерировать вывод из него.
    HTML-код должен содержать только div id=”catalog” без вложенного кода.
    Весь вид каталога генерируется JS.
*/

const product = [{
    name: 'Ноутбук', cost: 30000, img: 'https://cdn.pixabay.com/photo/2012/04/13/20/24/laptop-33521_960_720.png'
},

    {
        name: 'Принтер', cost: 7000, img: 'https://cdn.pixabay.com/photo/2013/07/13/12/19/printer-159612_960_720.png'
    },

    {
        name: 'Монитор', cost: 27000, img: 'https://cdn.pixabay.com/photo/2016/04/08/06/25/screen-1315650_960_720.png'
    }]

const basketItems = {
    itemsCost: 0, items: 0,
}

const catalog = document.getElementById('catalog')
const basket = document.getElementById('basket')

function createDOMElement(tag, options = {}) {
    const element = document.createElement(tag);
    console.log(element);
    for (const key in options) {
        element[key] = options[key];
        console.log(element);
    }
    console.log(element);
    return element;
}

const addItemInCatalog = () => {
    if (catalog && product.length) {
        product.forEach(item => {
            const productItem = catalog.appendChild(createDOMElement('div', {className: 'product-item'}));
            productItem.appendChild(createDOMElement('img', {src: item.img}));
            productItem.appendChild(createDOMElement('h3', {innerText: item.name}));
            productItem.appendChild(createDOMElement('span', {className: 'price', innerText: item.cost}));
            const button = createDOMElement('a', {className: 'button', innerText: 'В корзину'});
            productItem.appendChild(button);
        });
    }
}

const addBasket = () => {
    basket.appendChild(createDOMElement('img', {src: 'https://cdn.pixabay.com/photo/2012/04/24/13/16/cart-40016_960_720.png'}));
    basket.appendChild(createDOMElement('p', {innerText: 'Корзина пуста'}));

    const basketBtn = createDOMElement('button', {innerText: 'Очистить корзину'});
    basket.appendChild(basketBtn);

    basketBtn.addEventListener('click', function () {
        basketItems.items = 0;
        basketItems.itemsCost = 0;
        basket.querySelector('p').innerText = 'Корзина пуста';
    });
}

document.getElementById('catalog').addEventListener('click', event => {
    const cost = event.target.parentNode.querySelector('.price').textContent
    basketItems.items += 1
    basketItems.itemsCost += parseInt(cost)
    if (basketItems.items > 0) {
        basket.querySelector('p').innerHTML = `В корзине: ${basketItems.items} товаров на сумму ${basketItems.itemsCost} рублей`
    } else {
        basket.querySelector('p').innerText = 'Корзина пуста'
    }
})

function main() {
    addItemInCatalog()
    addBasket()
}

main()