'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', check);
let guessedNumber = Number(document.querySelector('.guess').value);
const resetButton = document.querySelector('.again');
resetButton.addEventListener('click', reset);
function check(){
  guessedNumber = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guessedNumber) {
      changeTextContent('.message', 'Input Needed!');
      score--;
      changeTextContent('.score', score);
    }
    else if (guessedNumber === secretNumber) {
      changeTextContent('.number', secretNumber);
      document.querySelector('body').style.backgroundColor = '#60b347';
      changeTextContent('.message', 'Correct Number!');
      document.querySelector('.number').style.width = '30rem';
      checkButton.style.display = 'none';
      if (score > highScore) {
        highScore = score;
        changeTextContent('.highScore', highScore);
      }
    }
    else if (guessedNumber != secretNumber) {
      score--;
      changeTextContent('.score', score);
      guessedNumber > secretNumber ? changeTextContent('.message', 'Too High!') : changeTextContent('.message', 'Too Low!');
    }
    else {
      changeTextContent('.message', 'You Lost!');
      checkButton.style.display = 'none';
      score--;
      changeTextContent('.score', score);
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
}
function changeTextContent(selector, text){
  document.querySelector(selector).textContent = text;
}
function reset(){
  score = 20;
  changeTextContent('.score', 20);
  checkButton.style.display = 'block';
  document.querySelector('body').style.backgroundColor = '#222';
  changeTextContent('.number', '?');
  document.querySelector('.guess').value = null;
  document.querySelector('.number').style.width = '15rem';
  changeTextContent('.message', 'Start Guessing...');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
}