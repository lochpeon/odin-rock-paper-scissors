let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = getRandomNumber();
    switch (choice) {
        case 0: 
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissors";
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    let choice = prompt("Choose between Rock, Paper, or Scissors", "Rock");
    switch (choice) {
        case "Rock":
        case "rock":
            return "Rock";
        case "Paper":
        case "paper":
            return "Paper";
        case "Scissors":
        case "scissors":
            return "Scissors";
    }
}