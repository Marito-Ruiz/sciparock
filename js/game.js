const playRound = function(selection) {    

    const getComputerChoice = function() {                                                                                      //Función de elección de la compu.
        let randomNum = Math.floor(Math.random() * 3 + 1);
        return choice = (randomNum == 1) ? "Scissors" : (randomNum == 2) ? "Paper" : (randomNum == 3) ? "Rock" : "Error";
    }

    let playerSelection = selection.toUpperCase();                                                                              //Mayusculiza las elecciones para compararlas
    let computerSelection = getComputerChoice().toUpperCase();

    if (playerSelection == computerSelection) {                                                                                 //Se fija quién gana
        results("It's a tie! You both chose " + playerSelection + "!");
    } else {
        if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            playerScore++;
            results("Scissors beat Paper! You won!");
        } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            computerScore++;
            results("Rock beats Scissors! You lost!");
        } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            playerScore++;
            results("Paper beats Rock! You won!");
        } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            computerScore++;
            results("Scissors beat Paper! You lost!");
        } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            playerScore++;
            results("Rock beats Scissors! You won!");
        } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            computerScore++;
            results("Paper beats Rock! You lost!");
        }
        
        if (computerScore >= 5) {                                                                          //Chequea si alguno de los dos jugadores llegó a 3 puntos
            computerScore = 0;                                                                             //y, si ese es el caso, dice quién es el ganador.
            playerScore = 0;
            results('COMPUTER WINS!');                                                                     
        }
        if (playerScore >= 5) {
            computerScore = 0;
            playerScore = 0;
            results('YOU WIN!');
        }                                                                            
    }
}

const results = function(msg) {
    const div = document.querySelector('#results');
    const message = document.getElementById('message');
    const score = document.getElementById('score');
    message.textContent = msg;
    score.textContent = `YOU: ${playerScore} - COMPUTER: ${computerScore}`;
    div.appendChild(message);
    div.appendChild(score);
}


let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', () => playRound(button.id)));