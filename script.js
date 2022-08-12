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

console.log(getComputerChoice());