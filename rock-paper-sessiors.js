const rock_div = document.getElementById("rock");
const sessiors_div = document.getElementById("sessiors");
const paper_div = document.getElementById("paper");

let playerScore = 0;
let nonPlayerComputerScore = 0;
const scoreBoard_div = document.querySelector("#score-board-container");
const results_div = document.querySelector("#results");
const playerScore_span = document.getElementById("player_score"); 
const nonPlayerComputerScore_span = document.getElementById("non-player-computer_score");

function getnonPlayerComputerChoice () {
    const choices = ['rock' , 'sessiors', 'paper'];
    const randomNumber = Math.floor(Math.random() * 3);
    computerChoice = choices[randomNumber]
    console.log("Computer choice: ",computerChoice)
    return computerChoice;
}

function prime () {
    rock_div.addEventListener('click' , function() {
        computerChoice = getnonPlayerComputerChoice();
        match("rock", computerChoice)
    });
    
    sessiors_div.addEventListener('click' , function() {
        computerChoice = getnonPlayerComputerChoice();
        match("sessiors", computerChoice)
    });
    
    paper_div.addEventListener('click' , function() {
        computerChoice = getnonPlayerComputerChoice();
        match("paper", computerChoice)
    });
}
prime();

function wins (playerChoice, nonPlayerComputerChoice) {
    console.log("WIN")
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    nonPlayerComputerScore_span.innerHTML = nonPlayerComputerScore;
    results_div.innerHTML = playerChoice + " beats " + nonPlayerComputerChoice + " player won!";
}

function lose (playerChoice, nonPlayerComputerChoice) {
    console.log("LOSE")
    nonPlayerComputerScore ++;
    playerScore_span.innerHTML = playerScore;
    nonPlayerComputerScore_span.innerHTML = nonPlayerComputerScore;
    results_div.innerHTML = nonPlayerComputerChoice + " beats " + playerChoice + " nonPlayerComputer won!";
}

function draw (playerChoice,  nonPlayerComputerChoice) {
    console.log("DRAW")
    playerScore_span.innerHTML = playerScore;
    nonPlayerComputerScore_span.innerHTML = nonPlayerComputerScore;
    results_div.innerHTML = nonPlayerComputerChoice + " ties " + playerChoice + " there is a tie! pick again!";
}

function match (playerChoice, nonPlayerComputerChoice) {
    console.log("Player choice: ",playerChoice)
    console.log(playerChoice + "," + nonPlayerComputerChoice)
    switch(playerChoice + "," + nonPlayerComputerChoice) {
        case 'rock,sessiors':
        case 'paper,rock':
        case 'sessior,paper':
            wins(playerChoice, nonPlayerComputerChoice);
            break;
        case 'rock,paper':
        case 'paper,sessiors':
        case 'sessiors,rock':
            lose(playerChoice, nonPlayerComputerChoice);
            break;
        case 'rock,rock':
        case 'paper,paper':
        case 'sessior,sessiors':
            draw(playerChoice, nonPlayerComputerChoice);
            break;
    };
}
match()
