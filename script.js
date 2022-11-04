function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomItem = options[Math.floor(Math.random() * options.length)];
    return randomItem;
}

function playerSelection(choice) {
    return choice;
}

function game(computer, player) {
    if (computer == "Rock" && player == "Paper") {
       return "You Lose! Paper beats Rock";
    } else if (computer == "Rock" && player == "Scissors") {
        return "You Lose! Rock beat Scissors";
    } else if (computer == "Paper" && player == "Scissors") {
        return "You Win! Scissors beat paper";
    } else if (computer == "Paper" && player == "Rock") {
        return "You Lose! Paper beats Rock";
    } else if (computer == "Scissors" && player == "Paper") {
         return "You Lose! Scissors beat Paper";
    } else if (computer == "Scissors" && player == "Rock") {
        return "You Win! Rock beats Scissors";
    } else {
        return "Draw!"
    }
}

console.log(game(getComputerChoice(), playerSelection("Rock")));