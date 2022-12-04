function getComputerChoice(){
    let rand= Math.floor(Math.random()*3);
    if(rand==0) return "rock";
    else if (rand==1) return "paper";
    else return "scissors";
}

let count=0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(count<0) count=0;

    if (playerSelection == computerSelection)
        return "Tie";

    if (computerSelection == 'rock') {
        if (playerSelection == 'scissors'){
            count--;
            return "You Lose! Rock beats Scissors";
        }
        else{
            count++;
            return "You Win! Paper beats Rock";
        }
            

    }

    if (computerSelection == 'paper') {
        if (playerSelection == 'scissors'){
            count++;
            return "You Win! Scissors beats Paper";
        }
        else{
            count--;
            return "You Lose! Paper beats Rock";
        }

    }

    if (computerSelection == 'scissors') {
        if (playerSelection == 'rock'){
            count++;
            return "You Win! Rock beats Scissors";
        }
        else{
            count--;
            return "You Lose! Scissors beats Paper";
        }

    }
}

function game(playerSelection) {

    let computerSelection = getComputerChoice();
    let results= playRound(playerSelection, computerSelection);

    const resultDiv=document.querySelector(".results-div");
    resultDiv.textContent=`${results} || Score=${count}`;
    console.log(count);

}

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.addEventListener('click',(e)=>{
    const playerChoice=e.target.textContent.toLowerCase();
    game(playerChoice);
}))