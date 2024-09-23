const result = document.querySelector("#result");
const score = document.querySelector("#score");
let userScore = 0;
let computerScore = 0;

// Function to get a random choice for the computer
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    let choice = (number == 0) ? "rock" :
    (number == 1) ? "paper" :
    "scissors";

    return choice;
}

document.querySelector("#rock").onclick = () => playRound("rock");
document.querySelector("#paper").onclick = () => playRound("paper");
document.querySelector("#scissors").onclick = () => playRound("scissors");

// Function for playing one round and logging the winner
function playRound(humanChoice) {
    const choice = humanChoice.toLowerCase();
    const computer_choice = getComputerChoice();
    let winner = "";

    if(choice == computer_choice) {
        winner = "It's a tie!";
    } else if((choice == "rock" && computer_choice == "scissors") || (choice == "paper" && computer_choice == "rock") || (choice == "scissors" && computer_choice == "paper")) {
        winner = `You win! ${choice} beats ${computer_choice}`;
        userScore++
    } else {
        winner = `You lose! ${computer_choice} beats ${choice}`;
        computerScore++
    }

    result.textContent = winner;
    score.textContent = `Your score: ${userScore}, Computer score: ${computerScore}`;

    if(userScore == 5) {
        alert("Congratulations, you have won!");
        userScore = 0;
        computerScore = 0;
    } else if(computerScore == 5) {
        alert("Unfortunately, you have been defeated!");
        userScore = 0;
        computerScore = 0;
    }
}