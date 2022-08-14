// page elements needed
const scoreboardDiv = document.querySelector('#scoreboard');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results');

/*
the rock paper and scissors buttons send the player's choice
to playRound, and check to see if there is a winner each choice.
*/
rockBtn.addEventListener('click', function (e) {
    playRound("Rock", getComputerChoice());
    if (computerScore === 5 || playerScore === 5) announceWinner();
});

paperBtn.addEventListener('click', function (e) {
    playRound("Paper", getComputerChoice());
    if (computerScore === 5 || playerScore === 5) announceWinner();
});

scissorsBtn.addEventListener('click', function (e) {
    playRound("Scissors", getComputerChoice());
    if (computerScore === 5 || playerScore === 5) announceWinner();
});

// global variables to keep track of scores
let playerScore = 0;
let computerScore = 0;
// initializing scoreboard
scoreboard();

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
or winRound functions to increment the score and update divs.
*/
function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Rock") {
                tie();
            } else if (computerSelection === "Paper") {
                loseRound(playerSelection, computerSelection);
            } else {
                winRound(playerSelection, computerSelection);
            }
            break;
        case "Paper":
            if (computerSelection === "Paper") {
                tie();
            } else if (computerSelection === "Scissors") {
                loseRound(playerSelection, computerSelection);
            } else {
                winRound(playerSelection, computerSelection);
            }
            break;
        case "Scissors":
            if (computerSelection === "Scissors") {
                tie();
            } else if (computerSelection === "Rock") {
                loseRound(playerSelection, computerSelection);
            } else {
                winRound(playerSelection, computerSelection);
            }
            break;
    }
}

/*
loseRound increments the computer's score and updates scoreboard/results div.
*/
function loseRound(playerSelection, computerSelection) {
    computerScore++;
    scoreboard();
    resultsDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
}

/*
winRound increments the player's score and updates scoreboard/results div.
*/
function winRound(playerSelection, computerSelection) {
    playerScore++;
    scoreboard();
    resultsDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
}

/*
tie updates the results div with the appropriate message
*/
function tie() {
    resultsDiv.textContent = "It's a tie!";
}

/*
announceWinner is called whenever a player reaches 5 points, 
and displays an alert window. Once the alert is closed, the game is reset
*/
function announceWinner() {
    scoreboard();
    if (playerScore === 5) {
        // have a timeout so scoreboard is correctly updated, reset the game once ok is hit
        setTimeout(() => {
            window.alert("You win!");
            resetGame();
        }, 100);
    } else if (computerScore === 5) {
        setTimeout(() => {
            window.alert("You lose!");
            resetGame();
        }, 100);
    }
}

/*
resetGame is called after the alert window is exited after each game.
The scoreboard and text divs are reset along with the player scores.
*/
function resetGame() {
    // reset scores to start a new game
    playerScore = 0;
    computerScore = 0;
    scoreboard();
    resultsDiv.textContent = "";
}

/*
scoreboard formats a string that contains a string with both player's scores
*/
function scoreboard() {
    scoreboardDiv.textContent = " Score: " + playerScore + " (player) - " + computerScore + " (computer)";
}

