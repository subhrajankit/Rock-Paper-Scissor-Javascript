console.log('Hello, World!');
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function getHumanChoice(){
    // const prompt = require('prompt-sync')();
    let userInput = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    return userInput;
}

    var humanScore = 0;
    var computerScore = 0;
    const div = document.createElement("div");
    div.id = "results";
    document.body.appendChild(div);

const btn1 = document.createElement("button");
btn1.id = "rock";
btn1.textContent = "Rock";
document.body.appendChild(btn1);

const btn2 = document.createElement("button");
btn2.id = "paper";
btn2.textContent = "Paper";
document.body.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.id = "scissors";
btn3.textContent = "Scissors";
document.body.appendChild(btn3);

function playRound(humanChoice, computerChoice){
      let message = '';
    if (humanChoice === computerChoice){
        message = `It is a tie! you chose ${humanChoice} and ${humanChoice} tie ${computerChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        message = `You win! you chose ${humanChoice} and ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        message = `You lose! you chose ${humanChoice} and ${computerChoice} beats ${humanChoice}.`;
    }
    updateResults(message);
}
function updateResults(message){
    div.textContent = `${message}
    Score: You ${humanScore} - Computer ${computerScore}`;
    if (humanScore === 5) {
        div.textContent += "\n🎉 Congratulations! You won the game!";
        disableButtons();
      } else if (computerScore === 5) {
        div.textContent += "\n💻 Sorry! The computer won the game.";
        disableButtons();
      }
}
function disableButtons() {
      document.getElementById("rock").disabled = true;
      document.getElementById("paper").disabled = true;
      document.getElementById("scissors").disabled = true;
    }
document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));



