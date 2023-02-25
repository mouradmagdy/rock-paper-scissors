
function getComputerChoice(){
    let result=Math.ceil(Math.random()*3);
    if(result===1)
    return "Rock";
    if(result===2)
    return "scissors";
    return "paper";
}

function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    if(playerSelection==="paper"&&computerSelection==="paper")
        return "It's a Tie ";

    if(playerSelection==="scissors"&&computerSelection==="scissors")
        return "It's a Tie";

    if(playerSelection==="rock"&&computerSelection==="rock")
        return "It's a Tie";

    if(playerSelection==="rock"&&computerSelection==="paper")
        return "You Lose! Paper beats Rock";

    if(playerSelection==="rock"&&computerSelection==="scissors")
        return "You Win! Rock beats Scissors";

    if(playerSelection==="paper"&&computerSelection==="rock")
        return "You Win! Paper beats Rock";

    if(playerSelection==="paper"&&computerSelection==="scissors")
        return "you Lose! scissors beats paper";

    if(playerSelection==="scissors"&&computerSelection==="rock")
        return "you Lose! Rock beats scissors";

    if(playerSelection==="scissors"&&computerSelection==="paper")
        return "You Win! Scissors beats Paper";
}

function game(){
    let computerScore=0;
    let playerScore=0;
    let ans;
    for (let i=0;i<5;i++){
    //how to take input from user  //  let input=prompt("What is your choice?");
        ans=playRound(input,getComputerChoice());
        console.log(ans)
        if(ans.includes("Win")){
            playerScore++;
        }
        else if(ans.includes("Lose")){
            computerScore++;
        }
        else{
            computerScore++;
            playerScore++;
        }
    }
    if(computerScore<playerScore){
        console.log("You Win, congrats");
    }
    else if(playerScore<computerScore){
        console.log("You Lose.")
    }
    else{
        console.log("It's a Tie, No Winner! ");
    }
}
game()



