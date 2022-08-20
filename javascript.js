const possibilities = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(){
    return possibilities[Math.floor(Math.random() *  3 )];
}

function playRound(playerSelection, computerSelection){
    const player = transformInput(playerSelection);
    if(!possibilities.includes(player)) return undefined;
    if(player == computerSelection) return 0
    else if((player == "Rock" && computerSelection == "Scissors") || 
    (player == "Paper" && computerSelection == "Rock") ||
    (player == "Scissors" && computerSelection == "Paper")
    ) return 1
    else return -1
}

function transformInput(input){
    return input.slice(0,1).toUpperCase() + input.slice(1).toLowerCase();
}


function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i<5; i++){
        console.log("Game "+(i+1));
        const playerSelection = prompt("Game "+(i+1)+" - Enter Rock, Paper or Scissors : ");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if(result == undefined) console.log("You entered a wrong set");
        else if(result == 0) console.log(`Tie ${transformInput(playerSelection)}-${computerSelection}`);
        else if(result == -1) {
            console.log(`You Lose! ${computerSelection} beats ${transformInput(playerSelection)}`);
            computerWins++;
        } else{
            console.log(`You Win! ${transformInput(playerSelection)} beats ${computerSelection}`);
            playerWins++;
        }
    }

    console.log("Final Result : ", playerWins == computerWins ? "Tie" : (playerWins < computerWins ? "You lose" : "You win"));
}

game()