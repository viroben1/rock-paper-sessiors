const playerScore = 0;
const nonPlayerComputerScore = 0;
const playerScore_span = document.getElementById("#playerScore");
const nonPlayerComputerScore_span = document.getElementById("#nonPlayerComputerScore");
const scoreBoard_div = document.querySelector("#score-board-container");
const results_p = document.querySelector("#results > p");
const rock_div = document.getElementById("rock");
const sessiors_div = document.getElementById("sessiors");
const paper_div = document.getElementById("paper");

function getnonPlayerComputerChoice () {
    const choices = ['rock' , 'sessiors', 'paper'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}
getnonPlayerComputerChoice  ();


function wins (playerChoice, nonPlayerComputerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    nonPlayerComputerScore_span.innerHTML = nonPlayerComputerScore;
    results_p.innerHTML = playerChoice + "beats" + nonPlayerComputerChoice + "player won!";
};


function lose (playerChoice, nonPlayerComputerChoice) {
    nonPlayerComputerScore ++;
    playerScore_span.innerHTML = playerScore;
    nonPlayerComputerScore_span.innerHTML = nonPlayerComputerScore;
    results_p.innerHTML = nonPlayerComputerChoice + "beats" + playerChoice + "nonPlayerComputer won!";
};


function draw (playerChoice, nonPlayerComputerChoice) {
    playerScore_span.innerHTML = playerScore;
    nonPlayerComputerScore_span.innerHTML = nonPlayerComputerScore;
    results_p.innerHTML = nonPlayerComputerChoice + "tie game" + playerChoice + "there is a tie! pick again";
};


function match (playerChoice, nonPlayerComputerChoice) {
  switch (playerChoice + nonPlayerComputerChoice) {
  case 'rock,paper':
  case 'paper,rock':
  case 'sessior,spaper':
    wins(playerChoice, nonPlayerComputerChoice);
    break;
  case 'rock,paper':
  case 'paper,sessiors':
  case 'sessiors,rock':
    lose(playerChoice, nonPlayerComputerChoice);
    break;
  case 'rock,rock':
  case 'paper,paper':
  case 'sessior,ssessiors':
    draw(playerChoice, nonPlayerComputerChoice);
    break;
};
}



function prime () {
    rock_div.addEventListener('click' , function() {
        match("rock");
    });
    
    sessiors_div.addEventListener('click' , function() {
        match("sessiors");
    });
    
    paper_div.addEventListener('click' , function() {
        match("paper");
     });
};

prime();


