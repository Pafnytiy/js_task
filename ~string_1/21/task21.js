// Пользователь ввел строку. Убрать лишние пробелы, привести к маленькому
// регистру. Добавить проверку на ввод только текста. Необходимо преобразовать
// строку в строку вида
// х-х-х-х-х-х...
// hsChOoL -> h-s-c-h-o-o-l

const value = prompt('Введите строку');

if (isNaN(value)) {
  console.log(value.toLowerCase().split('').join('-'));
} else {
  console.error('это не строка');
}