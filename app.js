
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
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissors");
const rock=document.querySelector(".rock");
let computerScore=0;
let playerScore=0;
const currentScoreComputer=document.createElement("p");
const currentScorePlayer=document.createElement("p");
const div=document.querySelector(".results");
div.appendChild(currentScoreComputer);
div.appendChild(currentScorePlayer);
function displayScore(){
    currentScoreComputer.textContent="computer score: "+computerScore;
    currentScorePlayer.textContent="player score: "+playerScore;
}
function winner(){
    displayScore();
    if(computerScore===5){
       const result=document.createElement("p");
       result.textContent="Computer wins!";
       const div=document.querySelector(".results");
       div.appendChild(result);
        computerScore=0;
        playerScore=0;
    }
    else if(playerScore===5){
        const result=document.createElement("p");
        result.textContent="You win!";
        const div=document.querySelector(".results");
        div.appendChild(result);
        computerScore=0;
        playerScore=0;
    }
}
function paperClicked() {
    let input = "paper";
    let ans = playRound(input, getComputerChoice());
    if (ans.includes("Win")) {
        playerScore++;
    } else if (ans.includes("Lose")) {
        computerScore++;
    } else {
        computerScore++;
        playerScore++;
    }
    winner();

}
function rockClicked(){
    let input = "rock";
    let ans = playRound(input, getComputerChoice());
    if (ans.includes("Win")) {
        playerScore++;
    } else if (ans.includes("Lose")) {
        computerScore++;
    } else {
        computerScore++;
        playerScore++;
    }
    winner();

}
function scissorsClicked(){
    let input = "scissors";
    let ans = playRound(input, getComputerChoice());
    if (ans.includes("Win")) {
        playerScore++;
    } else if (ans.includes("Lose")) {
        computerScore++;
    } else {
        computerScore++;
        playerScore++;
    }
    winner();
}
paper.addEventListener("click",paperClicked);
rock.addEventListener("click",rockClicked);
scissors.addEventListener("click",scissorsClicked);





