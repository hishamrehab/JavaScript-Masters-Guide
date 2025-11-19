const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SESSIORS = "SISSORS";
const DEFAULT_USER_CHOUCE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";



let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK} , ${PAPER} or ${SESSIORS}` , "").toUpperCase();

    if (
        selection !== ROCK &&
         selection !== PAPER  &&
          selection !== SESSIORS ) 
    {
    alert(`Invalid Choice We chose ${ROCK} fro you! `);
    return;
    }
    return selection;
};


const getComputerChoice = () => {
  const randomValue = Math.random();
  if(randomValue < 0.34) {
   return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SESSIORS;
  }
}



const getWinner = (
  cChoice ,
   pChoice  =
  DEFAULT_USER_CHOUCE
  ) => 

  cChoice === pChoice
     ? RESULT_DRAW 
     : (cChoice === ROCK && pChoice === PAPER|| 
        cChoice === PAPER && pChoice === SESSIORS ||
        cChoice === SESSIORS && pChoice === ROCK
    )
  ? RESULT_COMPUTER_WINS 
  : RESULT_PLAYER_WINS;
  
  
  // if (cChoice === pChoice) {
  //       return RESULT_DRAW;
  //    } else if(cChoice === ROCK && pChoice === PAPER|| 
  //       cChoice === PAPER && pChoice === SESSIORS ||
  //       cChoice === SESSIORS && pChoice === ROCK
  //   ) {
  //   return RESULT_PLAYER_WINS;
  //     }else {
  //       return RESULT_COMPUTER_WINS;
  //     }


  startGameBtn.addEventListener("click" , () => {
  if(gameIsRunning) {
      return;
  }

gameIsRunning = true;
 const playerChoice =  getPlayerChoice();
 const computerChoice = getComputerChoice();
  let winner;
 if(playerChoice) {
    winner  = getWinner(playerChoice , computerChoice);
 }else {
  winner = getWinner(computerChoice);
 }
 
 let message =  `You picked ${playerChoice} ,
      computer picked ${computerChoice} , therfore you. `;;
  
 if(winner === RESULT_DRAW) {
     message = `You picked ${playerChoice || DEFAULT_USER_CHOUCE } ,
      computer picked ${computerChoice} , therfore you had a draw. `;
  } else if(winner === RESULT_COMPUTER_WINS) {
     message = message + "won.";
  }else {
    message = message + "lost.";
  }
 alert(message);
 gameIsRunning = false;
});


// not related to the game
const sumUp = (a, b ,...numbers) => {
 let sum = 0;
 for(const num of numbers) {
  sum += num
 }
 return sum;
};


const subtractUp = function() {
    let sum = 0;
 for(const num of numbers) {
  sum -= num
 }
 return sum;
}


sumUp(1 , 5 , 10 , -3 , 6 , 10);
console.log(sumUp(1 , 5 , 10 , -3 , 6 , 10 , 25 , 88));
console.log(subtractUp(1 , 5 , 10 , -3 , 6 , 10));