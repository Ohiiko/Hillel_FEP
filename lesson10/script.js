"use strict";

function createCalculator(value){

  return {
    add: (operationValue) => value = value + operationValue,
    sub: (operationValue) => value = value - operationValue,
    divide: (operationValue) => value = value / operationValue,
    mult: (operationValue) => value = value * operationValue,
    set: (operationValue) => value = operationValue
  }
}

const calculator = createCalculator(10); 

console.log(calculator.add(45)); // возвращает 55 
console.log(calculator.sub(45)); // возвращает 10 
console.log(calculator.divide(5)); // возвращает 2 
console.log(calculator.mult(5)); // возвращает 10 
console.log(calculator.set(100)); // устанавливает базовое значение в 100 
console.log(calculator.mult(5)); // возвращает 500
