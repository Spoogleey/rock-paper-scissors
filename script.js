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

// Function for playing one round and logging the winner
function playRound(humanChoice, computerChoice) {
    let choice = humanChoice.toLowerCase();
    let winner = "";

    if(choice == computerChoice) {
        console.log("It's a tie!");
        winner = "tie";
    } else if((choice == "rock" && computerChoice == "scissors") || (choice == "paper" && computerChoice == "rock") || (choice == "scissors" && computerChoice == "paper")) {
        console.log(`You win! ${choice} beats ${computerChoice}`);
        winner = "player";
    } else {
        console.log(`You lose! ${computerChoice} beats ${choice}`);
        winner = "computer";
    }
    return winner;
}

// Function for playing a whole game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let game_winner = "";

    for(let round = 0; round < 5; round++) {
        let round_win = playRound(getHumanChoice(), getComputerChoice());

        if(round_win == "player") {
            ++humanScore
        } else if(round_win == "computer") {
            ++computerScore
        }
        console.log(`Current score: Player = ${humanScore}, Computer = ${computerScore}`);
    }

    if(humanScore > computerScore) {
        console.log("Congratulations, you win!");
        game_winner = "player";
    } else if(computerScore > humanScore) {
        console.log("Unfortunately, you have lost. Better luck next time!");
        game_winner = "computer";
    } else {
        console.log("It's a tie!");
        game_winner = "tie";
    }
    return game_winner;
}

playGame();