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
                return loseRound(playerSelection, computerSelection);
            } else {
                return winRound(playerSelection, computerSelection);
            }
            break;
        case "paper":
            if (computerSelection === "Paper") {
                return "It's a tie!";
            } else if (computerSelection === "Scissors") {
                return loseRound(playerSelection, computerSelection);
            } else {
                return winRound(playerSelection, computerSelection);
            }
            break;
        case "scissors":
            if (computerSelection === "Scissors") {
                return "It's a tie!";
            } else if (computerSelection === "Rock") {
                return loseRound(playerSelection, computerSelection);
            } else {
                return winRound(playerSelection, computerSelection);
            }
            break;
        default:
            return "Not a valid choice! Type rock, paper, or scissors.";
            break;
    }
}

function loseRound(playerSelection, computerSelection) {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${capitalizeFirstLetter(playerSelection)}`;
}

function winRound(playerSelection, computerSelection) {
    playerScore++;
    return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

game();
