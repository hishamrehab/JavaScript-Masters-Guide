const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SESSIORS = "SISSORS";
const DEFAULT_USER_CHOUCE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";



let gameIsRunning = false;

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK} , ${PAPER} or ${SESSIORS}` , "").toUpperCase();

    if (
        selection !== ROCK &&
         selection !== PAPER  &&
          selection !== SESSIORS ) 
    {
    alert(`Invalid Choice We chose ${ROCK} fro you! `);
    return DEFAULT_USER_CHOUCE;
    }

    return selection;
};


const getComputerChoice = function() {
  const randomValue = Math.random();
  if(randomValue < 0.34) {
   return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SESSIORS;
  }
}

const getWinner = function(cChoice ,  pChoice) {
     if (cChoice === pChoice) {
        return RESULT_DRAW;
     } else if(cChoice === ROCK && pChoice === PAPER|| 
        cChoice === PAPER && pChoice === SESSIORS ||
        cChoice === SESSIORS && pChoice === ROCK
    ) {
    return RESULT_PLAYER_WINS;
      }else {
        return RESULT_COMPUTER_WINS;
      }
};


startGameBtn.addEventListener("click" , function() {
if(gameIsRunning) {
    return;
}

gameIsRunning = true;
 const playerChoice =  getPlayerChoice();
 const computerChoice = getComputerChoice();
 const winner  = getWinner(playerChoice , computerChoice);
 console.log(winner);
gameIsRunning = false;
});