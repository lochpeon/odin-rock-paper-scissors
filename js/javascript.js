let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return getRandomChoice();
}

function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function getRandomChoice() {
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

function getHumanChoice() {
    let choice = prompt("Choose between Rock, Paper, or Scissors", getRandomChoice());
    switch (choice.toLowerCase()) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie! Both are ${humanChoice}`;
    } else if (
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Rock" && computerChoice === "Scissors")
            ) {
        return `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    } else if (
        (humanChoice === "Scissors" && computerChoice === "Rock") ||
        (humanChoice === "Paper" && computerChoice === "Scissors") ||
        (humanChoice === "Rock" && computerChoice === "Paper")
            ) {
        return `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }
}