'use strict';

function guessNumber(secretNumber) {

   let attempts = 10;

   return function gamePlay() {
      if (attempts === 0) {
         if (confirm('Попытки закончились :(  Хотите сыграть еще?')) {
            attempts = 10;
            secretNumber = Math.round(Math.random() * (100 - 1) + 1);
            gamePlay();
         } else {
            return;
         }
      } else {
         const tryNumber = prompt(`Угадай число от 1 до 100. Осталось попыток: ${attempts}`);
         if (tryNumber === null) {
            alert('Игра окончена!');
            return;
         } else if (parseInt(tryNumber) > secretNumber) {
            attempts--;
            alert(`Загаданное число меньше. Осталось попыток: ${attempts}`);
            gamePlay();
         } else if (parseInt(tryNumber) < secretNumber) {
            attempts--;
            alert(`Загаданное число больше. Осталось попыток: ${attempts}`);
            gamePlay();
         } else if (isNaN(parseInt(tryNumber))) {
            alert('Введите число');
            gamePlay();
         } else if (parseInt(tryNumber) === secretNumber) {
            if (confirm('Поздравляю, Вы угадали!!!, Хотели бы сыграть еще?')) {
               attempts = 10;
               secretNumber = Math.round(Math.random() * (100 - 1) + 1);
               gamePlay();
            } else {
               return;
            }
         }
      }
   };
}

let play = guessNumber(Math.round(Math.random() * (100 - 1) + 1));
play();


