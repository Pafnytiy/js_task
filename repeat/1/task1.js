// Дана строка в виде числа. Необходимо просуммировать все элементы числа
// ‘123’ -> 6
// ‘111111111111’ -> 12

const num1 = `123`;
let num2 = 0;
for (let i = 0; i < num1.length; i++) {
    num2 += +num1[i];
}
console.log(num2);