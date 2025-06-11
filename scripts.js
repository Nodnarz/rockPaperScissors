function getComputerChoice() {
    let choice = Math.random();
    if (choice > 0.66) return "rock";
    else if (choice < 0.33) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors, SHOOT! ");
}

function playRound(humanChoice, computerChoice) {
    const resultsDiv1 = document.getElementById("results1");
    resultsDiv1.textContent = "The Computer plays " + computerChoice;
    const resultsDiv2 = document.getElementById("results2");
    const scoreDiv = document.getElementById("score");
    if (humanChoice === computerChoice){
        resultsDiv2.textContent = "You tie, no one wins!";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultsDiv2.textContent = "Human wins, Rock smashes scissors!";
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        resultsDiv2.textContent = "Computer wins, Paper covers rock!";
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        resultsDiv2.textContent = "Human wins, paper covers rock!";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        resultsDiv2.textContent = "Computer wins, scissors cuts paper!";
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultsDiv2.textContent = "Human wins, scissors cuts paper!";
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        resultsDiv2.textContent = "Computer wins, rock crushes scissors!";
        computerScore++;
    }
    else resultsDiv2.textContent = "You're trying to cheat, only use Rock, Paper, or Scissors!";
    
    if (humanScore < 5 && computerScore < 5) {
        scoreDiv.textContent = "Human - " + humanScore + " Computer - " + computerScore;
    }
    else if (humanScore >= 5) scoreDiv.textContent = "That makes 5 points, Human player wins!";
    else scoreDiv.textContent = "That makes 5 points, Computer wins!";
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice())
    });
});