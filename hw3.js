/*
1. Дан массив
let a = [
[{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
[{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
[{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

Скопируйте его в переменную b и выведите в консоль.
 */

let a = [
    [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
    [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
    [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

// shallow copy
// b = [];
// a.forEach(obj => {
//     b.push({...obj});
// });
//
// console.log(b);

// deep copy
b = [];
a.forEach(obj => {
    b.push(JSON.parse(JSON.stringify(obj)));
});
console.log(b);

/*
2. С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины
в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве.

Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 */

let basket = {
    products: [{name: 'apple', price: 20}],
    countBacketPrice: function() {
        let sum = 0;
        this.products.forEach(product => {
            sum += product.price;
        });
        return sum;
    }
};

console.log(basket.countBacketPrice());

/*
3.* Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть должно так:
for(...){// здесь пусто}
 */

for(let i = 0; i < 10; console.log(i), i++) {}

/*
4. * Нарисовать пирамиду из 20 рядов с помощью console.log
 */

let stars = '*';
for(let i = 0; i < 20; i++) {
    console.log(stars);
    stars += '*';
}



