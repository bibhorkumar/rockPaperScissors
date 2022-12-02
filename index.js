function getComputerChoice(){
    let rand= Math.floor(Math.random()*3);
    if(rand==0) return "rock";
    else if (rand==1) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase();

        if(playerSelection==computerSelection)
            return "Tie";

        if(computerSelection=='rock'){
            if(playerSelection=='scissors')
                return "You Lose! Rock beats Scissors";
            else 
                return "You Win! Paper beats Rock";
            
        }

        if(computerSelection=='paper'){
            if(playerSelection=='scissors')
                return "You Win! Scissors beats Paper";
            else 
                return "You Lose! Paper beats Rock";
            
        }

        if(computerSelection=='scissors'){
            if(playerSelection=='rock')
                return "You Win! Rock beats Scissors";
            else 
                return "You Lose! Scissors beats Paper"
            
        }
}

function game(){
    for(let i=0;i<5;i++){
        let playerSelection= prompt("Enter your choice!");
        let computerSelection=getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}