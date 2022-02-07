'use strict';

let secretNumbers = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
let playing = true;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (playing) {
    // when no input number
    if (!guess) {
      displayMessage('⛔ No Number !');

      // When win
    } else if (guess === secretNumbers) {
      playing = false;
      displayMessage(' 🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumbers;

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      // When gues is wrong
    } else if (guess !== secretNumbers) {
      if (score > 1) {
        displayMessage(
          guess > secretNumbers ? ' 📈 Too High!' : ' 📉 Too Low!'
        );
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage(' 💥 You lost the game!');
        document.querySelector('.number').textContent = secretNumbers;
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#ed5249';
      }
    }
  }
});

/////////////////////
/*
Implement a game rest functionality, so that the player can make a new guess!
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumbers = Math.trunc(Math.random() * 20) + 1;
  playing = true;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
