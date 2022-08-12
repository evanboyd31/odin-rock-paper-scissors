let playerScore = 0;
let computerScore = 0;

function game() {
    let i = 1;
    while (i < 6) {
        let selection = window.prompt("Round: " + i + " Score: " + playerScore + " (player) - " + computerScore + " (computer)");
        let result = playRound(selection, getComputerChoice());
        window.alert(result);
        if (result !== "Not a valid choice! Type rock, paper, or scissors.") i++;
    }
}

function getComputerChoice() {
    let randomNum = Math.floor(3 * Math.random());
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "Rock") {
                return "It's a tie!";
            } else if (computerSelection === "Paper") {
                computerScore++;
                return "You Lose! Paper beats Rock";
            } else {
                playerScore++;
                return "You win! Rock beats scissors"
            }
            break;
        case "paper":
            if (computerSelection === "Paper") {
                return "It's a tie!";
            } else if (computerSelection === "Scissors") {
                computerScore++;
                return "You Lose! Scissors beats Paper";
            } else {
                playerScore++;
                return "You win! Paper beats Rock"
            }
            break;
        case "scissors":
            if (computerSelection === "Scissors") {
                return "It's a tie!";
            } else if (computerSelection === "Rock") {
                computerScore++;
                return "You Lose! Rock beats Scissors";
            } else {
                playerScore++;
                return "You win! Scissors beats paper"
            }
            break;
        default:
            return "Not a valid choice! Type rock, paper, or scissors.";
            break;
    }
}

game();
