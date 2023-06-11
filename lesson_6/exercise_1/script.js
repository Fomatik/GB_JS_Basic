const product = [
    {
        name: 'Ноутбук',
        cost: 30000,
        img: [
            'https://cdn.pixabay.com/photo/2012/04/13/20/24/laptop-33521_960_720.png',
            'https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg',
            'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg',
            'https://cdn.pixabay.com/photo/2015/01/09/02/45/laptop-593673_1280.jpg'
        ]
    },
    {
        name: 'Принтер',
        cost: 7000,
        img: [
            'https://cdn.pixabay.com/photo/2013/07/13/12/19/printer-159612_960_720.png',
            'https://cdn.pixabay.com/photo/2015/09/09/20/23/printer-933098_1280.jpg',
            'https://cdn.pixabay.com/photo/2016/07/14/11/12/printer-1516580_1280.jpg',
            'https://cdn.pixabay.com/photo/2015/09/09/20/23/printer-933098_1280.jpg'
        ]
    },
    {
        name: 'Монитор',
        cost: 27000,
        img: [
            'https://cdn.pixabay.com/photo/2016/04/08/06/25/screen-1315650_960_720.png',
            'https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_1280.jpg',
            'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_1280.jpg',
            'https://cdn.pixabay.com/photo/2014/07/31/23/10/apple-407122_1280.jpg',
            'https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_1280.jpg'
        ]
    }
];

const basketItems = {
    itemsCost: 0,
    items: 0
};

const main = document.getElementById('main');
const catalog = document.getElementById('catalog');
const basket = document.getElementById('basket');

function createDOMElement(tag, options = {}) {
    const element = document.createElement(tag);
    for (const key in options) {
        element[key] = options[key];
    }
    return element;
}

function updateBasket() {
    const basketText = basket.querySelector('p');
    if (basketItems.items > 0) {
        basketText.innerText = `В корзине: ${basketItems.items} товаров на сумму ${basketItems.itemsCost} рублей`;
    } else {
        basketText.innerText = 'Корзина пуста';
    }
}

function addItemToBasket(cost) {
    basketItems.items += 1;
    basketItems.itemsCost += parseInt(cost);
    updateBasket();
}

function showAllPhotos(item) {
    const modal = createDOMElement('div', { id: 'modal' });
    const modalContent = createDOMElement('div', { className: 'modal-content' });
    const modalInner = createDOMElement('div', { className: 'modal-inner' });
    const modalTitle = createDOMElement('div', { className: 'modal-title', innerText: item.name });
    const closeModalBtn = createDOMElement('div', { className: 'modal-close', innerHTML: '&times' });
    const slider = createDOMElement('div', { className: 'modal-slider' });
    const modalFullFoto = createDOMElement('div', { className: 'modal-foto-full' });
    const modalFullFotoImg = createDOMElement('img', { src: item.img[0], alt: '' });
    const modalDemoFoto = createDOMElement('div', { className: 'modal-foto-demo' });

    modalFullFoto.appendChild(modalFullFotoImg);

    for (const imgSrc of item.img) {
        const previewFoto = createDOMElement('img', { src: imgSrc, alt: '' });
        previewFoto.addEventListener('click', () => {
            modalFullFotoImg.src = imgSrc;
        });
        modalDemoFoto.appendChild(previewFoto);
    }

    closeModalBtn.addEventListener('click', () => {
        main.removeChild(modal);
    });

    slider.appendChild(modalFullFoto);
    slider.appendChild(modalDemoFoto);

    modalInner.appendChild(modalTitle);
    modalInner.appendChild(closeModalBtn);
    modalContent.appendChild(modalInner);
    modalContent.appendChild(slider);
    modal.appendChild(modalContent);
    main.appendChild(modal);
}

function init() {
    if (catalog && product.length) {
        for (const item of product) {
            const productItem = createDOMElement('div', { className: 'product-item' });
            const productImg = createDOMElement('img', { src: item.img[0] });
            const fotoBtn = createDOMElement('a', { className: 'foto', innerText: 'Все фото' });
            const productTitle = createDOMElement('h3', { innerText: item.name });
            const price = createDOMElement('span', { className: 'price', innerText: item.cost });
            const productBtn = createDOMElement('a', { className: 'in_basket', innerText: 'В корзину' });

            productBtn.addEventListener('click', () => {
                addItemToBasket(price.textContent);
            });

            fotoBtn.addEventListener('click', () => {
                showAllPhotos(item);
            });

            productItem.appendChild(productImg);
            productItem.appendChild(fotoBtn);
            productItem.appendChild(productTitle);
            productItem.appendChild(price);
            productItem.appendChild(productBtn);
            catalog.appendChild(productItem);
        }
    }

    if (basket) {
        const basketImg = createDOMElement('img', {
            src: 'https://cdn.pixabay.com/photo/2012/04/24/13/16/cart-40016_960_720.png'
        });
        const basketText = createDOMElement('p', { innerText: 'Корзина пуста' });
        const basketBtn = createDOMElement('button', { innerText: 'Очистить корзину' });

        basketBtn.addEventListener('click', () => {
            basketItems.items = 0;
            basketItems.itemsCost = 0;
            updateBasket();
        });

        basket.appendChild(basketImg);
        basket.appendChild(basketText);
        basket.appendChild(basketBtn);
    }
}

init();
