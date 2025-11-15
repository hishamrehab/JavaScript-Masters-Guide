const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
 console.log("Game is Startin...")   
}

const person = {
    name: "Max",
    greet: function greet() {
        console.log("HELLO tHREE!")
    }
};

person.greet();
 

startGameBtn.addEventListener("click" , startGame);