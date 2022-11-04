function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomItem = options[Math.floor(Math.random() * options.length)];
    return randomItem;
}

function playerSelection(choice) {
    return choice;
}

console.log(playerSelection("paper"));
console.log(getComputerChoice());