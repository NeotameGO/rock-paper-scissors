function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomItem = options[Math.floor(Math.random() * options.length)];
    return randomItem;
}

function playerSelection(choice) {
    let firstLetter = choice[0].toUpperCase();
    let otherLetters = choice.slice(1,).toLowerCase();
    return firstLetter + otherLetters;
}

function playRound(computer, player) {
    if (computer == "Rock" && player == "Paper") {
       return "You Lose!";
    } else if (computer == "Rock" && player == "Scissors") {
        return "You Lose!";
    } else if (computer == "Paper" && player == "Scissors") {
        return "You Win!";
    } else if (computer == "Paper" && player == "Rock") {
        return "You Lose!";
    } else if (computer == "Scissors" && player == "Paper") {
         return "You Lose!";
    } else if (computer == "Scissors" && player == "Rock") {
        return "You Win!";
    } else {
        return "Draw!"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
   for (i = 0; i < 5; i++) {
    let result = playRound(getComputerChoice(), playerSelection("rock"));
    if (result == "You Win!") {
        playerScore++;
    } else if (result == "You Lose!") {
        computerScore++;
    } 

    console.log(result);
    console.log(playerScore);
    console.log(computerScore);
   }

   if (playerScore > computerScore) {
    console.log("You Win " + playerScore + " : " + computerScore);
   } else if (playerScore < computerScore) {
    console.log("You Lose " + playerScore + " : " + computerScore);
   } else {
    console.log("Draw " + playerScore + " : " + computerScore);
   }
}

game();