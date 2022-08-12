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
                return "You Lose! Paper beats Rock";
            } else {
                return "You win! Rock beats scissors"
            }
            break;
        case "paper":
            if (computerSelection === "Paper") {
                return "It's a tie!";
            } else if (computerSelection === "Scissors") {
                return "You Lose! Scissors beats Paper";
            } else {
                return "You win! Paper beats Rock"
            }
            break;
        case "scissors":
            if (computerSelection === "Scissors") {
                return "It's a tie!";
            } else if (computerSelection === "Rock") {
                return "You Lose! Rock beats Scissors";
            } else {
                return "You win! Scissors beats paper"
            }
            break;
        default:
            return "Not a valid choice! Type rock, paper, or scissors.";
            break;
    }
}
