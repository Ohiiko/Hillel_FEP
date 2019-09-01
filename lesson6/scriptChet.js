"use strict";

let answer;



do{
    answer = prompt('Введите произвольное число', '12345');
}while(isNaN(answer));



let output = [],
    sNumber = answer.toString();

for (let i = 0; i < sNumber.length; i ++) {
    output.push(+sNumber.charAt(i));
}

console.log(output);

let b = 0;
for (let key in output) {
    if (output[key]% 2 == 0 && output[key] !== 0 ){
       b++  
    }
  }

  alert('В числе ' + answer + ' четных цифр ' + b);

