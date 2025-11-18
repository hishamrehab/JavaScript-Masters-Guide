const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
console.log("Game is Starting...");
}

// const person = {name :"Max"};
// console.log(person.name);


const person = {
    name: "Max",
    greet : function greet() {
        console.log("Hello Threre");
    }
}


person.greet()

startGameBtn.addEventListener("click" , startGame);