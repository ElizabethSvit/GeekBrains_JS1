/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

let numToObject = function (num) {
    if (num > 999) {
        console.log('The number is bigger than 999');
        return {};
    }
    return {units: num % 10, decades: parseInt(num / 10) % 10, hundreds: parseInt(num / 100) % 10};
};

console.log(numToObject(245));
console.log(numToObject(1000));

/*
2. Продолжить работу с интернет-магазином, а именно, перенести функционал подсчета корзины на объектно-ориентированную базу:
• создать объект Basket с полем goodList и методами countTotalPrice и countTotalNumber
(методы должны считать общую стоимость того, что в goodList и общее количество того, что в goodList)
• создать объект Good c полями: name, price и методом putToBasket
• после этого создать массив товаров (объектов Good),
пройтись по нему в цикле и положить в корзину по одному товару на четной позиции и по 2 товара на нечетной позиции
• вывести общую стоимость корзины и общее количество товаров в корзине
 */

let Basket = {
    goodList: [],
    countTotalPrice: function () {
        let sumPrice = 0;
        this.goodList.forEach(good => {
            sumPrice += good.price;
        });
        return sumPrice;
    },
    countTotalNumber: function () {
        return this.goodList.length;
    },
    putToBasket: function (good) {
        this.goodList.push(good);
    }
};

function Good(name, price) {
    this.name = name;
    this.price = price;
}

let good1 = new Good('blueberry', 6);
let good2 = new Good('strawberry', 5);
let good3 = new Good('cranberry', 4);

let goods = [good1, good2, good3];

for (let i = 0; i < goods.length; i++) {
    if (i % 2 === 0) {
        Basket.putToBasket(goods[i]);
    } else {
        Basket.putToBasket(goods[i]);
        Basket.putToBasket(goods[i]);
    }
}

console.log(Basket.countTotalNumber());
console.log(Basket.countTotalPrice());
