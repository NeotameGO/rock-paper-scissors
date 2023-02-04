let round = 0;
while (round < 5) {
    function getComputerChoice() {
        const array = ["Rock", "Paper", "Scissors"];
        let randomNumber = Math.floor(Math.random() * array.length)
        if (randomNumber === 0) {
            return "Computer: Rock";
        }else if (randomNumber === 1) {
            return "Computer: Paper"
        }else if (randomNumber === 2) {
            return "Computer: Scissors"
        }
    }

    let choice = prompt("Please type Rock, Paper or Scissors").toLowerCase();
    function getPlayerChoice() {
        while (true) {
            if (choice != "rock" && choice != "paper" && choice != "scissors") {
                choice = prompt("Please type Rock, Paper or Scissors").toLowerCase();
            }else if (choice == "rock") {
                return "Player: Rock";
            }else if (choice == "paper") {
                return "Player: Paper";
            }else if (choice == "scissors") {
                return "Player:Scissors";
            }
        }
    }

    function getWinner(computerChoice, playerChoice) {
        if (computerChoice == "Computer: Rock" && playerChoice == "Player: Rock") {
            return 0;
        } else if (computerChoice == "Computer: Rock" && playerChoice == "Player: Paper") {
            return 2;
        } else if (computerChoice == "Computer: Rock" && playerChoice == "Player:Scissors") {
            return 1;
        } else if (computerChoice == "Computer: Paper" && playerChoice == "Player: Paper") {
            return 0;
        } else if (computerChoice == "Computer: Paper" && playerChoice == "Player:Scissors") {
            return 2;
        } else if (computerChoice == "Computer: Paper" && playerChoice == "Player: Rock") {
            return 1;
        } else if (computerChoice == "Computer: Scissors" && playerChoice == "Player:Scissors") {
            return 0;
        } else if (computerChoice == "Computer: Scissors" && playerChoice == "Player: Rock") {
            return 2;
        } else if (computerChoice == "Computer: Scissors" && playerChoice == "Player: Paper") {
            return 1;
        }
    }
        
    round += 1
    console.log(getComputerChoice())
    console.log(getPlayerChoice())
    console.log(getWinner(getComputerChoice(), getPlayerChoice()))
}


