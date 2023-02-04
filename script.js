function getComputerChoice() {
    const array = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * array.length)
    if (randomNumber === 0) {
        return "Rock";
    }else if (randomNumber === 1) {
        return "Paper"
    }else if (randomNumber === 2) {
        return "Scissors"
    }
}
console.log(getComputerChoice())