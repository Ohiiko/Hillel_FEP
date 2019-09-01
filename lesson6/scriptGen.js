"use strict";

let replay;

do {
    // Генерируем число

    let minNumber = 0;
    let maxNumber = 10;

    function random(minNumber, maxNumber){
        let rand = minNumber + Math.random() * (maxNumber + 1 - minNumber);
        
        return Math.floor(rand);
    }
    let genNumber = random(minNumber, maxNumber);

    // Задаем вопрос пользователю

    let answer;
    do{
    answer = +prompt('Введите число от 0 до 10', '0');
    }while(isNaN(answer) || 11 <= answer || answer < 0);

    if (genNumber == answer){
        alert ('Это верный ответ, вы получаете 10 баллов!')

    }else alert ('Увы, но вы не угадали. Было сгенерировано число  ' + genNumber);
} while (replay = confirm('Повторить действие?'));
  