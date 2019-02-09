// task 1

/*
пример 1

Вначале к а было прибавлено 1 путем инкремента ++, затем полученное значение присвоено с

пример 2

Вначале текущее значение b (1) было присвоено d, затем значение повысилось до 2 (у b)

пример 3

Значение а было увеличено до 3 путем инкремента, затем к этому значению прибавлено 2, итого 5

пример 4

Вначале к 2 было прибавлено исходное значение b (2), затем b увеличилось до 3 (поэтому alert(b) дает 3), итого 4 для d
Значение а = 3, так как путем инкремента слева два раза увеличивалось.
 */

// task 2
var a = 2;
var x = 1 + (a *= 2);
// x = 5, так как из-за скобок вначале а становится равно 4, затем 1 прибавляется к полученному значению.

// task 3
var a = 1;
var b = 2;

if (a >= 0 && b >= 0) console.log(a - b);
else if (a < 0 && b < 0) console.log(a * b);
else console.log(a + b);

// task 4
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function mul(a, b) {
    return a * b;
}

// task 5
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'divide':
            return divide(a, b);
        case 'mul':
            return mul(a, b);
        default:
            return 0;
    }
}

// task 6
function power(val, pow) {
    if (pow === 1) return val;
    return val * power(val, pow - 1);
}

console.log(power(2, 5));

// task 7

function checkLength(path) {
    return path.length >= 3 && path.length <= 12;
}

function checkSymbols(path) {
    return path.indexOf('&') !== -1 || path.indexOf('$') !== -1 || path.indexOf('%') !== -1 || path.indexOf('*') !== -1;
}

function checkStartEnd(path) {
    return path.lastIndexOf('q', 0) === 0 || path.lastIndexOf('z') === path.length - 1;
}

function checkPassword(path) {
    if (checkLength(path) && checkSymbols(path) && checkStartEnd(path)) {
        return 'Корректный пароль';
    } else {
        return 'Некорректный пароль';
    }
}

console.log(checkPassword('zzzzzz&z'));
console.log(checkPassword('!!'));