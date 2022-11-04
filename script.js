function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomItem = options[Math.floor(Math.random() * options.length)];
    return randomItem;
}

function playerSelection() {
    var playerChoice = document.getElementById("playerChoice").value;
    console.log(playerChoice);
    return playerChoice;
}

console.log(getComputerChoice());