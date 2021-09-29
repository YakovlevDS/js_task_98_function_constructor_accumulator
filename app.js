// ? Task:Напишите Function-constructor Accumulator(val).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора val.
// Метод read принимает один параметр(число) и прибавляет его к свойству value.


// Solution 1

function Accumulator(val) {
  this.value = val;
  this.read = newVal =>this.value += newVal;
}

let accumulator = new Accumulator(10);

accumulator.read(2);
accumulator.read(5);

console.log(accumulator.value); // 8

// ! Explanation: Присваием стартовое значение val в this.value. Создаём метод this.read, который принимает один аргумент и добавляет его к this.value. 
