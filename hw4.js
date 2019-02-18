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
