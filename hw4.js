// task 1

function num2object(number) {
    if (number > 999) {
        console.log('Число превышает 999');
        return {};
    }
    var obj = {'единицы' : 0, 'десятки' : 0, 'сотни' : 0};
    var keyNames = ['единицы', 'десятки', 'сотни'];
    var i = 0;
    while (parseInt(number) > 0) {
        obj[keyNames[i]] = parseInt(number) % 10;
        number /= 10;
        i++;
    }
    return obj;
}

console.log(num2object(5));
console.log(num2object(387));
console.log(num2object(1000));

// task 2

let Basket = {
    goodList : [],
    countTotalPrice: function() {
        var totalPrice = 0;
        for (var i = 0; i < this.goodList.length; i++) {
            totalPrice += this.goodList[i].price;
        }
        return totalPrice;
    },
    countTotalNumber: function() {
        return this.goodList.length;
    },
    putToBasket: function(good) {
        this.goodList.push(good);
    }
};

let Good = {
    name : 'blueberry',
    price: 6
};

var good1 = {};
Object.assign(good1, Good);
good1.name = 'blueberry';
good1.price = 6;

var good2 = {};
Object.assign(good2, Good);
good2.name = 'strawberry';
good2.price = 5;

var good3 = {};
Object.assign(good3, Good);
good3.name = 'cranberry';
good3.price = 4;

var goods = [good1, good2, good3];

for (var i = 0; i < goods.length; i++) {
    if (i % 2 === 0) {
        Basket.putToBasket(goods[i]);
    } else {
        Basket.putToBasket(goods[i]);
        Basket.putToBasket(goods[i]);
    }
}

console.log(Basket.countTotalNumber());
console.log(Basket.countTotalPrice());