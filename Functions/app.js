const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, "").toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }

  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("game is starting");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}. `;

  if (winner === RESULT_DRAW) {
    message = message + "You had a draw!";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "You won!";
  } else {
    message = message + "You lost!";
  }

  alert(message);
  gameIsRunning = false;
});

//not related to the game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const iterator of numbers) {
    if (operation === 'ADD') {
      sum = sum + validateNumber(iterator);
    } else {
      sum = sum - validateNumber(iterator);
    }
  }
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(`${messageText} ${result} `)
}

combine(showResult.bind(this, 'The result after adding is: '), 'ADD', 2, 3, 4, 5);
combine(showResult.bind(this, 'The result after subtracting is: '), 'SUBTRACT', 2, 3, 4, 5);
