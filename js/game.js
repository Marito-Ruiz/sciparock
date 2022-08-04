const playRound = function() {    

    const getComputerChoice = function() {
        let randomNum = Math.floor(Math.random() * 3 + 1);
        return choice = (randomNum == 1) ? "Scissors" : (randomNum == 2) ? "Paper" : (randomNum == 3) ? "Rock" : "Error";
    }

    let playerSelection = prompt('Scissors, paper or rock?', '').toUpperCase();
    let computerSelection = getComputerChoice().toUpperCase();

    if (playerSelection == computerSelection) {
        console.log("It's a tie! You both chose " + playerSelection + "!");
    } else {
        if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            playerScore++;
            console.log("Scissors beat Paper! You won!");
        } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            computerScore++;
            console.log("Rock beats Scissors! You lost!");
        } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            playerScore++;
            console.log("Paper beats Rock! You won!");
        } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            computerScore++;
            console.log("Scissors beat Paper! You lost!");
        } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            playerScore++;
            console.log("Rock beats Scissors! You won!");
        } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            computerScore++;
            console.log("Paper beats Rock! You lost!");
        }
    }
}

function playGame(times) {
    for (let i = 0; i < times; i++)
        playRound();
}

let playerScore = 0;
let computerScore = 0;
let victory = (playerScore > computerScore) ? "You beat the computer!" : (playerScore < computerScore) ? "The computer beat yo ass!" : "It's a tie! No one wins!";

playGame(Number(prompt("How many times would you like to play?", "")));
alert(victory)