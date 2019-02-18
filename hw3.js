// task 1
let a = [
    [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}], [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}], [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

let b = a;
console.log(b);

// task 2
let goods = [{product: 'strawberry', cost: 5}, {product: 'blueberry', cost: 6}];

function countBasketPrice(goods) {
    let totalPrice = 0;
    for (var i = 0; i < goods.length; i++) {
        totalPrice += goods[i].cost;
    }
    return totalPrice;
}

console.log(countBasketPrice(goods));

// task 3
for (var i = 0; i < 10; console.log(i++));

// task 4
let star = '*';
for (var i = 0; i < 20; i++) {
    console.log(star);
    star += '*';
}
