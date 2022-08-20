const possibilities = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(){
    return possibilities[Math.floor(Math.random() *  3 )];
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(!possibilities.includes(player)) return "Wrong item entered";
    if(player == computerSelection) return `Tie : ${player} - ${computerSelection}`
    else if((player == "Rock" && computerSelection == "Scissors") || 
    (player == "Paper" && computerSelection == "Rock") ||
    (player == "Scissors" && computerSelection == "Paper")
    ) return `You Win! ${player} beats ${computerSelection}`
    else return `You Lose! ${computerSelection} beats ${player}`
}


const playerSelection = prompt("Enter Rock, Paper or Scissors : ");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));    