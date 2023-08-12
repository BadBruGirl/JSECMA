// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
console.log('Задача № 1\n');
getMin = (array) => Math.min(...array);

const arr = [1, 5, 7, 9];
console.log(arr);
console.log(`Наименшее число из массива ${getMin(arr)}`);
console.log('\n');


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
console.log('Задача № 2\n');

function createCounter() {
  let counter = 0;
  return {
    increment: () => ++counter,
    decrement: () => --counter,
  }
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());
console.log('\n');

// 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// // примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)
console.log('Задача № 3\n');
getFactorial = (number) => {
  if (number === 0) return 1;
  else return getFactorial(number - 1) * number;
}

console.log(getFactorial(5));
console.log(getFactorial(0));
console.log('\n');