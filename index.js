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

function playRound(humanChoice, computerChoice){
      
    if (humanChoice === computerChoice){
        return 'It is a tie! you chose ${humanChoice} and ${humanChoice} tie ${computerChoice}.'
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! you chose ${humanChoice} and ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! you chose ${humanChoice} and ${computerChoice} beats ${humanChoice}.`;
    }
}
function playGame(){
    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    if (humanScore > computerScore){
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore){
        console.log("Sorry! The computer won the game.");
    } else {
        console.log("The game is a tie!");
    }
}
playGame();

