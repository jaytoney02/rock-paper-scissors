// Make a function that randomly returns 0, 1, or 2
// Then change function to return "rock", "paper", and "scissors" instead of integers
function getComputerChoice() {
    let choice = (Math.floor(Math.random() * 3));
    if (choice === 0) {
        return "Rock";
    } if (choice ===1) {
        return "Paper";
    } if (choice === 2) {
        return "Scissors";
    }

}

console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
