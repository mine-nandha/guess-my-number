"use strict";

const generatedNumber = Math.floor(Math.random() * 20 + 1);

const restartButton = document.querySelector("#restartButton");
const guessButton = document.querySelector("#guessButton");

const number = document.querySelector("#guessNumber");
const hiddenNumber = document.querySelector("#hiddenNumber");
const score = document.querySelector("#score");
const highScore = document.querySelector("#highScore");
highScore.textContent = localStorage.getItem("highScore") || 0;

const message = document.querySelector("#message");

restartButton.addEventListener("click", () => {
  window.location.reload();
});

guessButton.addEventListener("click", () => {
  if (score.textContent > 0) {
    score.textContent = parseInt(score.textContent) - 1;
    if (number.value == generatedNumber) {
      message.textContent = "You are correct!🎉";
      hiddenNumber.textContent = generatedNumber;
      if (parseInt(score.textContent) > parseInt(highScore.textContent)) {
        highScore.textContent = score.textContent;
        localStorage.setItem("highScore", highScore.textContent);
      }
    } else if (number.value > generatedNumber) {
      message.textContent = "Too high!📈";
    } else if (number.value < generatedNumber) {
      message.textContent = "Too low!📉";
    }
    if (parseInt(score.textContent) == 0) {
      message.textContent = "Game Over!💔";
    }
  }
});
