function computerPlay() {
    let ranNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (ranNum == 1) {
        return "rock";
    } else if (ranNum == 2) {
        return "paper";
    } else if (ranNum == 3) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "You Tied!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "You Tied!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "You Tied!";
    }
}

/*const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));*/

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();