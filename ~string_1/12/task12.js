// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6
let a = prompt("Введите число");
let z = +a[0];
let x = +a[1];
let c = +a[2];
if (isNaN(a)) {
    console.log(`error`);
} else {
    console.log(z + x + c);
    console.log(z * x * c);
}