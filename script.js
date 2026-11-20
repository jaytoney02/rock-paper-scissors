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
    let humanChoice = (prompt("Rock, paper or scissors"))
    if (humanChoice === "rock") {
        return "rock";
    } if (humanChoice === "paper") {
        return "paper";
    } if (humanChoice === "scissors") {
        return "scissors";
    } 
}


let humanScore = 0
let computerScore = 0
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
// Make function that takes getComputerChoice and getHumanChoice as arguments, and compares them to each other to get a winner
function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock" && humanChoice === "paper") {
        return "You win. Paper beats rock!";
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        return "You lose. Rock beats scissors!";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        return "You lose. Scissors beats paper!";
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        return "You win. Scissors beats paper!";
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        return "You win. Rock beats scissors!";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        return "You lose. Paper beats rock!";
    } else {
       return "Tie! You both made the same choice.";
    }
}

console.log(playRound(computerSelection, humanSelection))

