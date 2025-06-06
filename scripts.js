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
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice){
        console.log("You tie, no one wins!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Human wins, Rock smashes scissors!");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Computer wins, Paper covers rock!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Human wins, paper covers rock!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Computer wins, scissors cuts paper!");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Human wins, scissors cuts paper!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Computer wins, rock crushes scissors!");
        computerScore++;
    }
    else console.log("You're trying to cheat, only use Rock, Paper, or Scissors!");
}

function playGame() {
    let humanSelection;
    let computerSelection;
    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log("Computer chooses: " + computerSelection);
        console.log("Human chooses: " + humanSelection);
        playRound(humanSelection, computerSelection);
    }

    console.log("Final score: Human - " + humanScore + " Computer - " + computerScore);
    if (humanScore > computerScore) console.log("Human wins!");
    else if (computerScore > humanScore) console.log("Computer wins!");
    else console.log("It's a tie game!");

}

let humanScore = 0;
let computerScore = 0;

playGame();