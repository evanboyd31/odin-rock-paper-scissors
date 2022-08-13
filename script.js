// global variables to keep track of scores
let playerScore = 0;
let computerScore = 0;

/*
The game function has a loop to play 5 rounds of rock paper scissors,
displays winner of each round, give reminder if input was incorrect, and
display the winner of the game.
*/
function game() {
    let i = 1;
    while (i < 6) {
        let selection = window.prompt("Round: " + i + scoreboard());
        let result = playRound(selection, getComputerChoice());
        window.alert(result);
        if (result !== "Not a valid choice! Type rock, paper, or scissors.") i++;
    }
    if (playerScore > computerScore) {
        window.alert("You win the game! " + scoreboard());
    } else if (computerScore > playerScore) {
        window.alert("You lose the game! " + scoreboard());
    } else {
        window.alert("You tied the game! " + scoreboard());
    }
}

/*
getComputerChoice uses the Math.random function to generate the choice
of rock paper or scissors for the computer, and returns the computer's choice
as a string.
*/
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

/*
the play round function examines the player & computer's choices
and checks to see winners of each round, and makes call to loseRound
or winRound functions to increment the score and return the appropriate
string.
*/
function playRound(playerSelection, computerSelection) {
    // ensure playerSelection is all lowercase in order for switch statement to work
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
        case "paper":
            if (computerSelection === "Paper") {
                return "It's a tie!";
            } else if (computerSelection === "Scissors") {
                return loseRound(playerSelection, computerSelection);
            } else {
                return winRound(playerSelection, computerSelection);
            }
        case "scissors":
            if (computerSelection === "Scissors") {
                return "It's a tie!";
            } else if (computerSelection === "Rock") {
                return loseRound(playerSelection, computerSelection);
            } else {
                return winRound(playerSelection, computerSelection);
            }
        default:
            // the player's entry was not rock, paper, or scissors.
            return "Not a valid choice! Type rock, paper, or scissors.";
    }
}

/*
loseRound increments the computer's score and returns the string
to be displayed to the user after the round.
*/
function loseRound(playerSelection, computerSelection) {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${capitalizeFirstLetter(playerSelection)}`;
}

/*
winRound increments the player's score and returns the string
to be displayed to the user after the round.
*/
function winRound(playerSelection, computerSelection) {
    playerScore++;
    return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`;
}

/*
capitalizeFirstLetter is used for formatting display messages after rounds
*/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*
scoreboard formats a string that contains a string with both player's scores
*/
function scoreboard() {
    return " Score: " + playerScore + " (player) - " + computerScore + " (computer)";
}

// init game by calling game method
game();
