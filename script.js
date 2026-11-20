// Make a function that randomly returns 0, 1, or 2
// Then change function to return "rock", "paper", and "scissors" instead of integers
function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 3));
    if (computerChoice === 0) {
        return "rock";
    } if (computerChoice ===1) {
        return "paper";
    } if (computerChoice === 2) {
        return "scissors";
    }
}

// Make function that prompts the user to enter "rock", "paper", or "scissors"
// Make function return a string based on user input
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors").toLowerCase()
    if (humanChoice === "rock") {
        return "rock";
    } if (humanChoice === "paper") {
        return "paper";
    } if (humanChoice === "scissors") {
        return "scissors";
    } 
}

console.log(getHumanChoice())
