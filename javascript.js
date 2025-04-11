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

function playRound (e)
{
    humanChoice=e.target.textContent;
    computerChoice= getComputerChoice();

    if (humanScore >=5 || computerScore>=5)
    {
        score[0].textContent= "Finish!";
        humanScore=0;
        computerScore=0;
        score[1].textContent=("Your Score is: "+ humanScore);
        score[2].textContent=("Computer Score is: "+ computerScore);
        return ;
    }
    if (humanChoice==computerChoice)
    {
        score[0].textContent= "Tie!";
    }
    else if (humanChoice=="rock" && computerChoice=="scissors" || humanChoice=="paper" && computerChoice=="rock" || humanChoice=="scissors" && computerChoice=="paper")
        {
            humanScore++;
            score[0].textContent= "You win!";
            score[1].textContent=("Your Score is: "+ humanScore);
            console.log("You win!, your score is "+ humanScore + " / " + computerScore);
        }
    else
        {
            computerScore++;
            score[0].textContent= "You Lose!";
            score[2].textContent=("Computer Score is: "+ computerScore);
            console.log("You lose!, your score is "+ humanScore + " / " + computerScore);        
        }     
}

/*function playGame ()
{
    for (let i=0; i<5; i++)
    {
        humanChoice=getHumanChoice().toLowerCase();
        computerChoice=getComputerChoice();
        console.log(playRound(humanChoice,computerChoice));
    }
    console.log("Your score is: "+humanScore);
    console.log("Computer score is: "+computerScore);
}


playGame();*/



const btn = document.querySelectorAll("button");

btn.forEach(btn =>  {
    btn.addEventListener("click", playRound);
})


const score = document.querySelectorAll("h1");

