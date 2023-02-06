function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "Tie! Rock and Rock";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "Tie! Paper and Paper";
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "Tie! Scissors and Scissors";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game with a score of " + playerScore + " to " + computerScore + ".");
    } else if (playerScore < computerScore) {
        console.log("You lose the game with a score of " + playerScore + " to " + computerScore + ".");
    } else {
        console.log("The game is tied with a score of " + playerScore + " to " + computerScore + ".");
    }   
}