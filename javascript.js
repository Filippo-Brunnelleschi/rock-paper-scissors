let humanScore = 0;
let computerScore = 0;
let computerChoice="";
let humanChoice="";



function getComputerChoice()
{
    let n =Math.floor((Math.random()*100)+1);
    if (n<=33)
    {
        return "rock";
    }
    else if (n<=66)
    {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

function getHumanChoice ()
{
    return prompt("Choose rock, paper or scissors");
}

function playRound (humanChoice,computerChoice)
{
    if (humanChoice==computerChoice)
    {
        return "It's a tie!";
    }
    else if (humanChoice=="rock" && computerChoice=="scissors" || humanChoice=="paper" && computerChoice=="rock" || humanChoice=="scissors" && computerChoice=="paper")
        {
            humanScore++;
            return "You win!";
        }
    else
        {
            computerScore++;
            return "You lose!";
        }     
}

function playGame ()
{
    for (let i=0; i<4; i++)
    {
        humanChoice=getHumanChoice().toLowerCase();
        computerChoice=getComputerChoice();
        console.log(playRound(humanChoice,computerChoice));
    }
    console.log("Your score is: "+humanScore);
    console.log("Computer score is: "+computerScore);
}


playGame();
