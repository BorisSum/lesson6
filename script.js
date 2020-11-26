'use strict';

function guessNumber(secretNumber) {

   return function gamePlay() {
      const tryNumber = prompt('Угадай число от 1 до 100');

      if (tryNumber === null) {
         alert('Игра окончена!');
         return;
      } else if (parseInt(tryNumber) > secretNumber) {
         alert('Загаданное число меньше');
         gamePlay();
      } else if (parseInt(tryNumber) < secretNumber) {
         alert('Загаданное число больше');
         gamePlay();
      } else if (isNaN(parseInt(tryNumber))) {
         alert('Введите число');
         gamePlay();
      } else if (parseInt(tryNumber) === secretNumber) {
         alert('Поздравляю, Вы угадали!!!');
         return;
      }
   };
}

let play;

// --------------------------------- Кнопка игры ------------------------------------------
const playButton = document.createElement('div');
document.body.appendChild(playButton);
playButton.classList.add('btn-play');
playButton.textContent = 'Сыграем?';

playButton.addEventListener('click', event => {
   event.preventDefault();
   play = guessNumber(Math.round(Math.random() * (100 - 1) + 1));
   play();
});


