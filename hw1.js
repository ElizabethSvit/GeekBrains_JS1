"use strict";

// task 1
let Tc = 5;
let Tf = (9 / 5) * Tc + 32;
alert(Tf);

// task 2
let admin, name;
name = "Василий";
admin = name;
console.log(admin);

// task 3
console.log(10 + 10 + "10"); // сложение двух Int (20) и строки (10) дает строку 2010
console.log(10 + "10" + 10); // сложение Int со строкой дает строку (1010) и плюс Int дает строку (101010)
console.log(10 + 10 + +"10"); // унарный оператор + перед строкой делает ее числом, при сложении получается 30
console.log(10 / -""); // деление на -0, который получается при операторе минус перед строкой, дает в результате минус бесконечность
console.log(10 / +"2,5"); // дробные числа, записанные в строке, при действии на них унарного оператора дают NaN, при делении так же получается NaN

// task 4
let mode = "normal"; // correct
let my_valu3 = 102; // correct
let 3my_value3 = "102"; // incorrect: начинается с цифры
let __hello__ = "world"; // correct
let $$$ = "money"; // correct
let !0_world = true; // incorrect: начинается с запрещенного символа (!)
