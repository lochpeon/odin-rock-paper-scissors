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
    // let choice = prompt("Choose between Rock, Paper, or Scissors", getRandomChoice());
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
        console.log (`It's a tie! Both are ${humanChoice}`);
        return "tie";
    } else if (
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Rock" && computerChoice === "Scissors")
            ) {
        console.log (`You win! ${humanChoice} beats ${computerChoice}!`);
        return humanChoice;
    } else if (
        (humanChoice === "Scissors" && computerChoice === "Rock") ||
        (humanChoice === "Paper" && computerChoice === "Scissors") ||
        (humanChoice === "Rock" && computerChoice === "Paper")
            ) {
        console.log (`You lose! ${computerChoice} beats ${humanChoice}!`);
        return computerChoice;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // for (i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
        
    //     let response = playRound(humanSelection, computerSelection);
    //     if (response === humanSelection) {
    //         humanScore++;
    //     } else if (response === computerSelection) {
    //         computerScore++;
    //     }
    // }

    // return `Final Score: Human = ${humanScore} vs. Computer = ${computerScore}`;
}

// console.log(playGame());