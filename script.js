let round = 0;
while (round < 5) {
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

    let choice = prompt("Please type Rock, Paper or Scissors").toLowerCase();
    function getPlayerChoice() {
        if (choice == "rock") {
            return "Rock";
        }else if (choice == "paper") {
            return "Paper";
        }else if (choice == "scissors") {
            return "Scissors"
        }else {
            return "Please type Rock, Paper or Scissors"
        }
    }
    round += 1
    console.log(getComputerChoice())
    console.log(getPlayerChoice())
}


