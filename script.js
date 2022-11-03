function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomItem = options[Math.floor(Math.random() * options.length)];
    return randomItem;
}

console.log(getComputerChoice());