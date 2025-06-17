const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const btnClicker = document.getElementById("button-clicker");
const btnReset = document.getElementById("button-reset");

let score = 0;
let timeLeft = 5;
let timerInterval = null;
let gameStarted = false;

function updateScore() {
  scoreEl.textContent = score;
}

function updateTimer() {
  timerEl.textContent = timeLeft.toFixed(1);
}

function startGame() {
  if (gameStarted) return;
  gameStarted = true;
  score = 0;
  timeLeft = 5;
  updateScore();
  updateTimer();

  timerInterval = setInterval(() => {
    timeLeft -= 0.1;
    if (timeLeft <= 0) {
      timeLeft = 0;
      endGame();
    }
    updateTimer();
  }, 100);
}

function endGame() {
  clearInterval(timerInterval);
  gameStarted = false;
  btnClicker.disabled = true;
  alert(`Time's up ! Score: ${score}`);
}

btnClicker.addEventListener("click", () => {
  if (!gameStarted) startGame();
  if (timeLeft > 0) {
    score++;
    updateScore();
  }
});

btnReset.addEventListener("click", () => {
  clearInterval(timerInterval);
  gameStarted = false;
  score = 0;
  timeLeft = 5;
  btnClicker.disabled = false;
  updateScore();
  updateTimer();
});
