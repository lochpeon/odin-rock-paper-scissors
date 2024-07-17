function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundResult.textContent = `It's a tie! Both are ${humanChoice}`;
        return "tie";
    } else if (
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Rock" && computerChoice === "Scissors")
        ) {
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        return humanChoice;
    } else if (
        (humanChoice === "Scissors" && computerChoice === "Rock") ||
        (humanChoice === "Paper" && computerChoice === "Scissors") ||
        (humanChoice === "Rock" && computerChoice === "Paper")
        ) {
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        return computerChoice;
    }
}

const buttons = document.querySelectorAll("button");
const resultSection = document.querySelector("#resultSection");
const roundResult = document.createElement("p");
const totalResult = document.querySelector("#totalResult");

resultSection.appendChild(roundResult);

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();

        let response = playRound(humanSelection, computerSelection);
        if (response === humanSelection) {
            humanScore++;
        } else if (response === computerSelection) {
            computerScore++;
        }

        totalResult.textContent = `Human = ${humanScore} vs. Computer = ${computerScore}`;
    });
});