
let humanScore = 0;
let compScore = 0;

function getComputerChoice(){
    let choice = undefined;
    let randNum = Math.floor(Math.random()*3);
    if(randNum === 0){
        choice = "Rock";
    }

    else if(randNum=== 1){
        choice = "Paper";
    }

    else{
        choice = "Scissor"
    }

    return choice.toLowerCase();
}
function getHumanChoice(){
    let choice = prompt("Enter Rock , Paper or Scissor");
    let final = choice.toLowerCase();

    return final;
}

function playRound(humanChoice, computerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
   
    if (!choices.includes(humanChoice)) {
        console.log('Invalid choice. Please choose from: rock, paper, or scissors.');
        return;
    }


// Determine the winner
if (humanChoice === computerChoice) {
console.log("It's a tie!");
} 

else if (
(humanChoice === 'rock' && computerChoice === 'scissors') ||
(humanChoice === 'paper' && computerChoice === 'rock') ||
(humanChoice === 'scissors' && computerChoice === 'paper')
) 
{
humanScore += 1;
console.log('You win!');
}

else if (computerChoice === 'rock' && humanChoice === 'scissors' ||
    computerChoice === 'paper' && humanChoice === 'rock' ||
    computerChoice === 'scissors' && humanChoice === 'paper') {
compScore += 1;
console.log('Computer wins!');
}
    

}

function playGame(){ //Play 5 rounds to determine the winner

   
        
       
       let compSelection = getComputerChoice();
       let humanSelection = getHumanChoice();

       console.log(`The Computer selection is ${compSelection}`);
       console.log(`The Human selection is ${humanSelection}`);

       playRound(humanSelection,compSelection);

       console.log(`\n`); 

    

    if(humanScore > compScore){
        console.log(`Human wins the 5 rounds`);
    }

    else if (compScore > humanScore){ 
        console.log(`Computer wins the 5 rounds`);
    }

    else{
        console.log(`Human and Computer tie after 5 rounds`); 
    }
}

playGame();




