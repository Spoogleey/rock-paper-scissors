let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    let choice = (number == 0) ? "Rock" :
    (number == 1) ? "Paper" :
    "Scissors";

    return choice;
}

function getHumanChoice() {
    let player = "";
    while(player == "" || player !== ("rock" || "paper" || "scissors")) {
        player = prompt("Please choose rock, paper or scissors: ");
    }
    return player;
}

console.log(getHumanChoice());