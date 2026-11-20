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




// Make function that takes getComputerChoice and getHumanChoice as arguments, and compares them to each other to get a winner
// Add score tally by incrementing humanScore and computerScore

function playGame() {

    let humanScore = 0
    let computerScore = 0
    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();

    function playRound(computerChoice, humanChoice) {
        if (computerChoice === "rock" && humanChoice === "paper") {
            (humanScore += 1)
            return (
                "You win. Paper beats rock!" +
                ` Score -> You: ${humanScore} Computer ${computerScore}`
            );
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            (computerScore += 1)
            return (
                "You lose. Rock beats scissors!" +
                ` Score -> You: ${humanScore} Computer ${computerScore}`
            );
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            (computerScore += 1)
            return (
                "You lose. Scissors beats paper!" +
                ` Score -> You: ${humanScore} Computer ${computerScore}`
            );
        } else if (computerChoice === "paper" && humanChoice === "scissors") {
            (humanScore += 1)
            return (
                "You win. Scissors beats paper!" +
                ` Score -> You: ${humanScore} Computer ${computerScore}`
            );
        } else if (computerChoice === "scissors" && humanChoice === "rock") {
            (humanScore += 1)
            return (
                "You win. Rock beats scissors!" +
                ` Score -> You: ${humanScore} Computer ${computerScore}`
            );
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            (computerScore += 1)
            return (
                "You lose. Paper beats rock!" +
                ` Score -> You: ${humanScore} Computer ${computerScore}`
            );
        } else {
        return (
            "Tie! You both made the same choice." +
            ` Score -> You: ${humanScore} Computer ${computerScore}`
        );
        }
    }

    console.log(playRound(getComputerChoice(),getHumanChoice()));
    console.log(playRound(getComputerChoice(),getHumanChoice()));
    console.log(playRound(getComputerChoice(),getHumanChoice()));
    console.log(playRound(getComputerChoice(),getHumanChoice()));
    console.log(playRound(getComputerChoice(),getHumanChoice()));
    


}

    



playGame()







