// Function to get a random choice for the computer
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    let choice = (number == 0) ? "rock" :
    (number == 1) ? "paper" :
    "scissors";

    return choice;
}

// Function to get the choice from the player
function getHumanChoice() {
    let player = "";
    while(player == "" || player !== "rock" && player !== "paper" && player !== "scissors") {
        player = prompt("Please choose rock, paper or scissors: ");
    }
    return player;
}

function playRound(humanChoice, computerChoice) {
    let choice = humanChoice.toLowerCase();

    if(choice == computerChoice) {
        let tie = console.log("It's a tie!");
        return tie;
    } else if((choice == "rock" && computerChoice == "scissors") || (choice == "paper" && computerChoice == "rock") || (choice == "scissors" && computerChoice == "paper")) {
        let player = console.log(`You win! ${choice} beats ${computerChoice}`);
        return player;
    } else {
        let computer = console.log(`You lose! ${computerChoice} beats ${choice}`);
        return computer;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    while(round < 5) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}